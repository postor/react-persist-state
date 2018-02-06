import Link from 'next/link'
import TestPrisist from '../components/TestPrisist'

export default () => (<div>
  <p>home page</p>
  <TestPrisist testProp={true} />
  <Link href="/about"><a>about</a></Link>
</div>)