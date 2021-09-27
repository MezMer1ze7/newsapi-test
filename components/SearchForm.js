import { useRouter } from "next/router"
import { useState } from "react"

const SearchForm = () => {
    const router = useRouter()
    const [search, setSearch] = useState()
  
    const onSubmit = (e) => {
      e.preventDefault()
      router.push(`/search_results/?s=${search.toLowerCase()}`)
    }
  
    return (
        <div className="border-b-2 border-gray-300">
            <form onSubmit={onSubmit} className="flex justify-center items-center">
                <input className="outline-none border border-blue-400 rounded text-sm flex-1 max-w-sm" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button className="uppercase text-blue-500 font-bold  text-[.99rem]">search</button>
            </form>
        </div>
    )
}

export default SearchForm
