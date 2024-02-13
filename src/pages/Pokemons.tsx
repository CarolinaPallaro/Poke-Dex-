import { useState } from "react"
import { Footer, Header, Main } from "../components/index.jsx"

const Pokemons =() =>{

    const [query, setQuery] = useState(" ");
    return(
       <>
       <Header 
       query={query} 
       setQuery={setQuery}
       />

       <Main />

       <Footer />
       </>
    )
}

export {Pokemons}