import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export function Home(){
    
    return(
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center px-10">
                <Header headerText="HOME" />
                <div className="w-full h-full pt-8">
                    <h1 className="text-gray-100">HOME</h1>
                    
                </div>
            </div>
            <div className="bg-gray-400 w-96 h-screen hidden" >

            </div>
        </>
    )
}