import Blog from "../../components/Midd";
import Cta from "../../components/Cta";
import Low from "../../components/End";
import Hero from "../../components/Message";
// import Navbar from "../../components/Top";
import Pricing from "../../components/Rate";
import Title from "../../components/second";
import  "../../scenes/Home/index.css";
// import Login from "../../components/Login";
// import Signup from "../../components/signup";



export default function Home() {
  let url="123";
  return (
    <>
  
    <div className="Home">
    {/* <Navbar url={url}/>  */}
  
     <Hero/>
    <Title url={url}/>
    <Blog/>
    <Pricing/>
    <Cta/>
    <Low/>
    
    {/* <Signup/> */}
    </div>
    </>
  )
}