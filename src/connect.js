import React, { Component } from 'react'

export default (config = {}) => {
  const {
    maxAge = 0,
    defaultState = {}
  } = config

  let states = {}, lastUnmounts = {}

  return (Comp, key = undefined) => {
    const k = key || Comp
    class Prisist extends Component {
      constructor(props) {
        super(props)
        this.state = defaultState
        const lastUnmount = lastUnmounts[k]
        const lastState = states[k]
        if (lastState) {
          if (!lastUnmount) {
            //odd in next, before unmounted
            this.state = lastState
          }else if (maxAge === 0 || (new Date() - lastUnmount) < maxAge) {
            this.state = lastState
          }
        }
      }

      componentWillUnmount() {
        lastUnmounts[k] = new Date()
      }

      render() {
        states[k] = this.state //update state when render calls

        const setPrisist = (obj) => {
          this.setState(obj)
        }
        const props = {
          ...this.props,
          setPrisist,
          prisisted: this.state,
        }
        return (<Comp {...props} />)
      }
    }
    return Prisist
  }
}