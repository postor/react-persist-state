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
        if (lastUnmount && lastState) {
          if (maxAge === 0 || (new Date() - lastUnmount) < maxAge) {
            this.state = lastState
          }
        }
      }

      componentWillUnmount() {
        lastUnmounts[k] = new Date()
        states[k] = this.state
      }

      render() {
        const setPrisist = (obj) => {
          this.setState(obj)
          states[k] = this.state
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