import Navbar from "./Navbar"
import Social from "./Social"
export default function Header(){
    return (
        <>
        
        <div className="grid grid-cols-3 border-b p-2 border-gray-200 bg-gray-50">
            <div className="flex justify-start items-center">
                <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              <img src="https://images.scalebranding.com/letter-a-logo-7c65ceec-ca7f-46d9-a375-c56629d04a0e.jpg" alt="" />
            </div>
            </div>

            <div className="flex justify-center items-center"><Navbar></Navbar>
            </div>

            <div className="flex justify-end items-center"><Social></Social></div>
            
        </div>
        </>
    )
}