import { DotsThree, List, HouseLine, Stack, GearSix } from 'phosphor-react';

export function NavBar() {
    return(
        <div className="w-screen lg:w-20 h-16 flex lg:flex-col lg:justify-between lg:items-center px-2 lg:py-6 lg:h-screen bg-gray-400">
            <div className="p-5 bg-gray-100 rounded hidden lg:flex justify-center items-center">
                
            </div>
            
            <button>
                <List color="#E1E0E5" size="42" className="lg:hidden"/>
            </button>

            <div className="h-full hidden lg:flex lg:flex-col lg:justify-center items-center gap-8">
                <button className="w-10 h-10 flex flex-col justify-center items-center">
                    <HouseLine color="#E1E0E5" size="25" weight="bold" />
                    <p className="text-[10px] text-gray-100 font-bold">HOME</p>
                </button>

                <button className="flex flex-col justify-center items-center">
                    <Stack color="#5A5860" size="25" weight="bold" />
                    <p className="text-[10px] text-gray-300 font-bold">CHAMADOS</p>
                </button>

                <button className="flex flex-col justify-center items-center">
                    <GearSix color="#5A5860" size="25" weight="bold" />
                    <p className="text-[10px] text-gray-300 font-bold">DEFINIÇÕES</p>
                </button>
            </div>

            <div className="w-10 border border-gray-300 p-1 rounded hidden lg:flex lg:flex-col lg:justify-center lg:items-center hover:bg-gray-300">
                <DotsThree color="#E1E0E5" size="32"/>
                <div className="w-7 h-7 bg-gray-100 rounded hidden lg:block"></div>
            </div>
        </div>
    )
}