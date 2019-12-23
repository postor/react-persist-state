import { useState } from 'react'
import initPersist from '../../../dist/connect'
import Filter from '../Filter'

const connect = initPersist({
  maxAge: 86400000, // clear after one day
  defaultState: { find2: '' }, // inital value
  onUpdate: (key, Comp, state) => console.log({ key, Comp, state }), // log on every change
})

const Index = ({ persisted: { find2 }, setPersist }) => {
  let [find1, setFind1] = useState('')
  return (<table>
    <thead>
      <tr>
        <th>none persist</th>
        <th>persisted</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>filter:<input value={find1} onChange={e => setFind1(e.target.value)} /></td>
        <td>filter:<input value={find2} onChange={e => setPersist({ find2: e.target.value })} /></td>
      </tr>
      <tr>
        <td><Filter find={find1} /></td>
        <td><Filter find={find2} /></td>
      </tr>
    </tbody>
  </table>)
}

export default connect(Index)