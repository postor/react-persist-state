import React, { Component } from 'react'
import isFunction from 'lodash.isfunction'

export default (config = {}) => {
  const {
    maxAge = 0,
    defaultState = {}
  } = config

  let states = new Map(), lastUnmounts = new Map()
  console.log({ states, lastUnmounts })

  const connect = (Comp, key = undefined) => {
    const k = key || Comp
    class Persist extends Component {
      constructor(props) {
        super(props)
        this.state = defaultState
        const lastUnmount = lastUnmounts.get(k)
        const lastState = states.get(k)
        if (lastState) {
          if (!lastUnmount) {
            //odd in next, before unmounted
            this.state = lastState
          } else if (maxAge === 0 || (new Date() - lastUnmount) < maxAge) {
            this.state = lastState
          }
        }
      }

      componentWillUnmount() {
        lastUnmounts.set(k, new Date())
      }

      render() {
        states.set(k, this.state)  //update state when render calls

        /**
         * 
         * @param {function|Object} obj function as reducer, new value to merge or set
         */
        const setPersist = (obj, ) => {
          if (isFunction(obj)) {
            this.setState(obj(this.state))
            return
          }
          this.setState(obj)
        }
        const props = {
          ...this.props,
          setPersist,
          persisted: this.state,
        }
        return (<Comp {...props} />)
      }
    }
    return Persist
  }

  connect.clearCache = () => {
    states = new Map()
    lastUnmounts = new Map()
  }

  return connect
}