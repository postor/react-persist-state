import Link from 'next/link'
import TestPrisistList from '../components/TestPrisistList'

export default () => (<div>
  <p>about page</p>
  <TestPrisistList />
  <Link href="/"><a>home</a></Link>
</div>)