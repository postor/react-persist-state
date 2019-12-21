import Link from 'next/link'
import TestPersist from '../components/TestPersist'

export default () => (<div>
  <p>home page</p>
  <TestPersist testProp={true} />
  <Link href="/about"><a>about</a></Link>
</div>)