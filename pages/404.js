import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="p-32 text-center">
            <h1 className="font-bold text-[7rem] text-gray-500">4<span className="text-red-400">0</span>4</h1>
            <h2 className="font-semibold uppercase mt-5 text-2xl text-gray-400">Page unavailable</h2>
            <Link href="/" ><a><h1 className="border-4 p-10 mt-10 font-bold uppercase text-gray-500 text-2xl rounded hover:bg-gray-500 hover:text-gray-200 hover:border-[#eee] overflow-hidden">Go Home</h1></a></Link>
        </div>
    )
}

export default NotFound
