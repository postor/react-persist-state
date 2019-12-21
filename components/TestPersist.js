import c from '../src/connect'
const connect = c({
  defaultState: { test: 'abc' }
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

const TestPersist1 = connect(TestPersist)
export default TestPersist1