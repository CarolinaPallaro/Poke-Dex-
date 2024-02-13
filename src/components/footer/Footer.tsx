import { Link } from "react-router-dom";

// import logo from '../../assets/pikachu.logo.png';
// import logo2 from '../../assets/pointer.logo.png';
// import logo3 from '../../assets/pokeball.logo.png';
import { IconProps } from "../index";

const Footer =() =>{
    return (
    <footer className="page-footer p-4 flex flex-row justify-between bg-grey-darkest text-white">
        
           <Link to="/Pokemons">
            <IconProps
            src="/assets/pikachu.logo.png" alt="logo-pikachu" />
            Home
           </Link>

           <Link to="/Pokemons">
            <IconProps src="/assets/pointer.logo.png" alt="logo-pikachu" />
           </Link>
           <Link to="/Pokemons">
            <IconProps src="/assets/pokeball.logo.png" alt="logo-pikachu" />
           </Link>
     </footer>
    )
    
}




export {Footer};