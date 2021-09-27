import NewsList from '../components/NewsList'
import { requests } from '../utils/requests'
import {articleData} from '../articleData'
import { useRouter } from 'next/router'



const Home = ({ data,category }) => {

  const router = useRouter()

  const countries = {
    India: {
      country: 'in',
      name: 'India'
    },
    USA: {
      country: 'us'     ,
      name: 'USA'
    },
    Russia: {
      country: 'ru',
      name: 'Russia'
    },
    Korea: {
      country: 'kr',
      name: "Korea"
    }
  }

  // const [country, setCountries] = useState(countries)
  console.log(articleData.articles.length)
  
  const setCountry = (country) => {

    router.push(`/?category=${category}&country=${country}`)
  }


  return (
    <div >

      <div className="flex bg-gray-300 justify-around p-12 mt-10">
        {Object.entries(countries).map(([key, { country, name }]) => (
          <h1 className="cursor-pointer font-semibold duration-100 hover:scale-125 text-gray-500" key={key} onClick={()=>setCountry(country)}>{name}</h1>
        ))}
      </div>
      
      <NewsList articles={data} />
      </div>

  )
}

export default Home

export const getServerSideProps = async ({query:{category='', country="us", size='100'}}) => {
  const API_KEY =  process.env.API_KEY

  const url = 'https://newsapi.org/v2'
  const defaultUrl =`/top-headlines?default&pageSize=${size}` +`&apiKey=${API_KEY}`
  const res = await fetch(`${url}${requests[category]?.url  || `${defaultUrl}`} `+`&country=${country}`)


  const data = await res.json()

  return {
    props: {
      data,
      country,
      category
    }
  }
}
