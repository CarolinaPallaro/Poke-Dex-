
type HeaderProps ={
    query: string,
    setQuery:(query: string) => void;
}


const Header = ({query, setQuery}: HeaderProps) =>{
    return(
       
            <nav
            className="bg-gray-800 p-4 flex justify-center"
            >
                <input
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            
                className="mr-4 flex  items-center px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none "
                type="text"
                placeholder="Search..." />
            </nav>
        

    )
}

export {Header};