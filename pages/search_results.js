import NewsList from "../components/NewsList"
import Head from 'next/head'

const Search_results = ({ sData }) => {
  
    return (
      <div>
        <Head>
          <title>Search Results</title>
        </Head>
            {sData.totalResults != 0 ?
                <NewsList articles={sData} /> :
                <h1 className="text-center p-32 text-4xl font-bold uppercase md:text-6xl">News <span className="text-red-500">not</span> found</h1>
                }
        </div>
    )
}

export default Search_results


export const getServerSideProps = async ({query:{s=''}}) => {
    const API_KEY = process.env.API_KEY
  

    const search = await fetch(`https://newsapi.org/v2/everything?q=${s}&apiKey=${API_KEY}`)
    const sData = await search.json()
  

  
    return {
      props: {
        sData,
        s
      }
    }
  }
  