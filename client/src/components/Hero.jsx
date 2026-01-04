import  AboutMeCard  from "./AboutMeCard";
import BookCallCard from "./BookCallCard";
import ToolBoxCard from "./ToolBoxCard"
import HeroIcons from "./HeroIcons";
import heroImage from "../assets/S2";



export default function Hero() {
  return (
    // <section className="text-center space-y-6">
    //   <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
    //     Hi, I’m Abhijeet Singh Rajput
    //   </h1>

    //   <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //     Full-stack developer focused on building scalable web applications and
    //     integrating AI into real-world products.
    //   </p>

    //   {/* REQUIRED CTA */}
    //   <a
    //     href="#projects"
    //     className="inline-block rounded-md border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100"
    //   >
    //     See My Work
    //   </a>
    // </section>
    <>
    <div className="mr-30 ml-30 bg-gray-50">
    <div  className="frame">
      <div className="b10 "></div>


      <div className="bmid">
      <div className="cell b1 flex items-center justify-center p-8 border-b border-gray-300">
        
        <img className = "w-30 h-30  rounded-full border-4 border-gray-200" src={heroImage} alt="Abhijeet" />
        
         </div>
      <div className="cell b2 text-6xl
      font-semibold border-b border-gray-300 p-4"><h1 className="text-center">Hey, I'm Abhijeet!</h1>
      <h2 className="text-center">Welcome to my corner of </h2><h2 className="text-center">the internet!</h2>
</div>

      <div className="cell b3 border-b border-gray-300 text-white text-xs p-2">Blank</div>

      <div className="cell b4 text-gray-500 text-center border-b border-gray-300 p-5">Full-stack developer focused on building scalable web applications and
       integrating AI into real-world products.</div>

      {/* <div className="cell b5 flex justify-center border-b border-gray-300 p-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-motherboard" viewBox="0 0 16 16">
  <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc" viewBox="0 0 16 16">
  <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>
      </div> */}
      <div className="cell b5 flex justify-center border-b border-gray-300 p-5">
  <HeroIcons />
</div>


      <div className="cell b6 text-blue-500 text-center border-b border-gray-300">About</div>
      <div className="cell b7 text-white">Blank</div>
      <div className="cell b8 border-b border-gray-300"><h1>Here's what sets me apart</h1><h1 >and makes me unique</h1> </div>
      <div className="cell b9">

        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-3">
          
          <div className="col-span-1"><AboutMeCard>j</AboutMeCard></div>
          <div className="col-span-1 row-span-2 "><BookCallCard></BookCallCard></div>
          <div className="col-span-1"><ToolBoxCard></ToolBoxCard></div>
        </div>
      </div>
      </div>


      <div  className="b11"></div>
    </div>
    </div>
    </>
  );
}
