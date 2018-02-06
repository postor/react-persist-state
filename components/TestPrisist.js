import c from '../src/connect'
const connect = c({
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