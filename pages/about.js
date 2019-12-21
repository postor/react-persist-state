import Link from 'next/link'
import TestPersistList from '../components/TestPersistList'

export default () => (<div>
  <p>about page</p>
  <TestPersistList />
  <Link href="/"><a>home</a></Link>
</div>)