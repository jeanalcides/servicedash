import { BoxNotify } from "../components/BoxNotify";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export function Home(){
    
    return(
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center px-10">
                <Header headerText="HOME" />
                <div className="w-full h-full pt-8">
                    <Cards />
                </div>
            </div>
            { false ? <BoxNotify /> : null }
        </>
    )
}