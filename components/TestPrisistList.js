import c from '../src/connect'
const connect = c({
  defaultState: { test: '' }
})

const InputItem = ({ testProp, setPersist, persisted }) => {
  return (<div>
    <p>persisted.test:<input value={persisted.test} onChange={(e) => {
      setPersist({ test: e.target.value })
    }} /></p>
  </div>)
}

const TestPersistList = ({ testProp, setPersist, persisted }) => {
  return (<div>
    {[1, 2, 3, 4].map((i) => {
      const InputItemK = connect(InputItem, `InputItem-${i}`)
      return (<InputItemK key={i} />)
    })}
  </div>)
}

export default TestPersistList