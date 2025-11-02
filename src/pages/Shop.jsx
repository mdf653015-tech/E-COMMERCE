import Hero from "../components/hero/Hero"
import NewCollection from "../components/newcollection/NewCollection"
import NewsLatter from "../components/NewLatter/NewsLatter"
import Offer from "../components/offer/Offer"
import Popular from "../components/popular/Popular"
import LoginSignup from "./LoginSignup"

const Shop=()=>
{
    return(
        <div>
     <Hero/>
     <Popular/>
     <br /><br />
     <br /><br />
     <Offer/>
    < NewCollection/>
    <NewsLatter/>
   <LoginSignup/>
        </div>
    )
}
export default Shop
