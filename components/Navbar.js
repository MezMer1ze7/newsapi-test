import {requests} from '../utils/requests'
import {useRouter} from 'next/router'
import SearchForm from './SearchForm'


const Navbar = () => {
    const router = useRouter()

    return (
        <nav className="text-center font-bold text-4xl">
            <div className="flex justify-center items-center py-10 md:py-14 ">
                <h1 className="">Testing News API with <span className="text-blue-500">NextJS</span>
                </h1>
            </div>
            <div className="py-10 sm:flex justify-around items-center sm:py-36 border-b-4 border-gray-300 bg-gray-700">
                <div className="text-center py-10">
                    <h1 className="headTitle">News Made with NextJS</h1>
                    <p className="headPara">and <a className="underline" href="https://newsapi.org/" target="_blank" rel="noreferrer">https://newsapi.org/</a></p>
                </div>
                <div className="text-center py-10">
                    <h1 className="headTitle"><span className="text-red-500">100</span> request per day</h1>
                    <p className="headPara">use it wisely</p>
                </div>
            </div>
            <SearchForm/>
            <div className="flex items-start justify-between pt-20 text-xl overflow-x-scroll scrollbar-hide whitespace-nowrap">
                {Object.entries(requests).map(([key,{title, url}]) => (
                    <button className="px-5 duration-200 hover:scale-125" key={key} onClick={() => router.push(`/?category=${title}`)}>{title}</button>
                    
                ))}
            </div>
        </nav>
    )
}
export default Navbar
