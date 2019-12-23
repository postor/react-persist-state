import Link from 'next/link'
import data from './data'


export default ({ find }) => {
  const filtered = data.filter(x => x.includes(find))
  if (!filtered.length) return (<div>None found!</div>)
  return (<ul>
    {filtered.map(x => (<li key={x}>
      <Link href={`/detail?repo=${encodeURIComponent(x)}`}><a>{x}</a></Link>
    </li>))}
  </ul>)
}