import './NewsLatter.css'
const NewsLatter=()=>
{
    return(
        <div className="neslatter">
            <h1>Get Exclusive Offers on your Email</h1>
            <p>subscribe to our newletter and stay update</p>

            <div >
                <input type="email" placeholder='your Email id' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default NewsLatter;