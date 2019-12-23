import Link from 'next/link'
const Detail = ({ query }) => {
  return (<div>
    <h1><Link href="/"><a>back to home</a></Link></h1>
    <p>{query.repo}</p>
  </div>)
}

Detail.getInitialProps = ({ query }) => {
  // console.log(query)
  return { query }
}

export default Detail