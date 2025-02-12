import { Link } from "@remix-run/react"
import { Button } from "./ui/button"


function Home() {
    return (
        <>
           <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center mt-0">
        <h1 className="text-2xl font-bold text-gray-800">Templatz</h1>
       
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li><a href="#" className="hover:text-orange-300 bg-black text-white p-2 rounded-lg ">Home</a></li>
          <li><a href="#" className="hover:text-orange-300 bg-black text-white p-2 rounded-lg">About</a></li>
          <li><a href="#" className="hover:text-orange-300 bg-black text-white p-2 rounded-lg">Contact</a></li>
        </ul>
      </nav>

         <div className=" flex flex-col text-center justify-center  max-h-screen w-full bg-fixed mt-36 ">
      <div className="max-w-3xl w-full text-center bg-white p-10 rounded-2xl  ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          AI Generate Letter – Write Smarter, Faster
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Need a professional, personal, or business letter in seconds? Our AI-powered tool crafts well-structured, polished letters tailored to your needs.
        </p>
        
       <Link to={"/letter"}>
        <Button>Start</Button>
       </Link>
      </div>
    </div>
        </>
    )
}
export default Home