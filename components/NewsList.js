import moment from 'moment'
import { useState } from 'react'

import Button from './Button'

const NewsList = ({ articles }) => {
    const [loadMore, setLoadMore] = useState(6)

    
    return (
        <>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 sm:px-40 py-24">
            {articles?.articles?.slice(0, loadMore).map((article, idx) => (
                <a  key={idx} href={article.url} target="_blank" rel="noreferrer" className="hover:shadow-md border-b-2 border-gray-300 group ">
                <div  className="">
                    <div className="w-full h-64 rounded-sm overflow-hidden ">
                        <img src={article.urlToImage} alt="image" className="object-cover w-full h-full group-hover:scale-125 duration-200 group-hover:blur-sm" />
                    </div>
                    <div className="relative h-[40vh] flex flex-col justify-between">
                        <p className="text-sm md:text-md font-bold text-gray-500 pt-5">{article.source.name}</p>
                        <p className="text-sm font-md text-gray-500 md:text-md">{article.title}</p>
                        <p className="text-md font-bold md:text-lg text-gray-600 line-clamp-2">{article.description}</p>
                            <p className="text-sm font-bold text-gray-400 ">{moment(article.publishedAt).format('Do MMM YYYY')}</p>
                            
                    </div>
                    </div>
                </a>
            ))}

        </div>
        <div className="text-center py-5">
        {loadMore <= articles?.articles.length &&
                    <Button title={'Show More'} classes={"btn m-5"} onClick={() => setLoadMore(loadMore + 3)}/>}
                
                {loadMore <= articles?.articles.length ? <Button title={'Show Less'} onClick={() => setLoadMore(loadMore - 3)} disabled={loadMore === 9} classes={loadMore <= 9 ? 'bg-gray-400 p-5 rounded font-semibold uppercase text-gray-300' : 'btn'}/>: <Button title={'Hide'} classes={'btn'} onClick={ ()=>setLoadMore(6)}/>}
        </div>
        </>
    )
}

export default NewsList
