# next-persist-state
Persisting React state between route navigation for next.js

## usage

```
import persist from 'next-persist-state'

const connect = persist({
  defaultState: { test: '' }
})

const TestPersist = ({ testProp, setPersist, persisted }) => {
  return (<div>
    <p>testProp:{JSON.stringify(testProp)}</p>
    <p>persisted.test:<input value={persisted.test} onChange={(e) => {
      setPersist({ test: e.target.value })
    }} /></p>
    <p>persisted.test:{JSON.stringify(persisted.test)}</p>
  </div>)
}

export default connect(TestPersist)
```

when you route, `persisted` will keep

## test

```
git clone https://github.com/postor/next-persist-state.git
cd next-persist-state
yarn && yarn test
```

open http://localhost:3000

## params

persist

```
import persist from 'next-persist-state'
const connect = persist({
  maxAge: 0,          //timeout(miliseconds) for unmounted persist, 0 means no timeout
  defaultState: {},   //default persisted state
})

//Comp the component will need to persist state
//key default is Comp, when you use the same connect and the same Comp multiple times(e.g. list), you need to specify a key for each ofthe
connect(Comp,key)
```