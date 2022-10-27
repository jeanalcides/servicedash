import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export function Tickets(){
    return(
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center px-10">
                <Header headerText="CHAMADOS" />
                <div className="w-full h-full pt-8">
                    <h1 className="text-gray-100">CHAMADOS</h1>
                </div>
            </div>
            
        </>
    )
}