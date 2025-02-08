

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
 
        {/* <h2 className="text-2xl font-semibold text-gray-700 mb-3">How It Works</h2>
        <ul className="text-gray-600 text-left mb-6">
          <li>✅ Select the type of letter (Business, Personal, Cover Letter, etc.).</li>
          <li>✅ Enter key details or choose from our templates.</li>
          <li>✅ Let AI generate a perfect letter instantly.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h2>
        <ul className="text-gray-600 text-left mb-6">
          <li>🚀 <strong>Time-Saving</strong> – Get a high-quality letter in seconds.</li>
          <li>🎨 <strong>Customizable</strong> – Edit and personalize as needed.</li>
          <li>✅ <strong>Professional Quality</strong> – Well-structured and grammatically perfect letters.</li>
        </ul> */}
        
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
          Start Writing Now
        </button> 
      </div>
    </div>
        </>
    )
}
export default Home