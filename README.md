# next-prisist-state
Persisting React state between route navigation for next.js

## usage

```
import prisist from 'next-prisist-state'

const connect = prisist({
  defaultState: { test: '' }
})

const TestPrisist = ({ testProp, setPrisist, prisisted }) => {
  return (<div>
    <p>testProp:{JSON.stringify(testProp)}</p>
    <p>prisisted.test:<input value={prisisted.test} onChange={(e) => {
      setPrisist({ test: e.target.value })
    }} /></p>
    <p>prisisted.test:{JSON.stringify(prisisted.test)}</p>
  </div>)
}

export default connect(TestPrisist)
```

when you route, `prisisted` will keep

## test

```
git clone https://github.com/postor/next-prisist-state.git
cd next-prisist-state
yarn && yarn test
```

open http://localhost:3000

## params

prisist

```
import prisist from 'next-prisist-state'
const connect = prisist({
  maxAge: 0,          //timeout(miliseconds) for unmounted prisist, 0 means no timeout
  defaultState: {},   //default prisisted state
})

//Comp the component will need to prisist state
//key default is Comp, when you use the same connect and the same Comp multiple times(e.g. list), you need to specify a key for each ofthe
connect(Comp,key)
```