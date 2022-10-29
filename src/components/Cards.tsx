import { CalendarCheck, CalendarX, ChatTeardropDots } from "phosphor-react";

export function Cards(){
    return(
        <div className="w-full grid grid-cols-4 gap-5">
            <div className="w-full h-fill min-w-[200px] p-6 bg-gray-400 rounded-lg">
                <div className="flex justify-between items-center text-gray-300 mb-5">
                    <p className="text-[12px] font-bold">CHAMADOS NA FILA</p>
                    <ChatTeardropDots size={25}/>
                </div>
                <h1 className="text-[32px] font-bold text-gray-200">13</h1>
            </div>
            <div className="w-full h-fill min-w-[250px] p-6 bg-gray-400 rounded-lg">
                <div className="flex justify-between items-center text-gray-300 mb-5">
                    <p className="text-[12px] font-bold">SLA VIOLADOS</p>
                    <CalendarX size={25}/>
                </div>
                <h1 className="text-[32px] font-bold text-gray-200">13</h1>
            </div>
            <div className="w-full h-fill min-w-[250px] p-6 bg-gray-400 rounded-lg">
                <div className="flex justify-between items-center text-gray-300 mb-5">
                    <p className="text-[12px] font-bold">FECHADOS ESTA SEMANA</p>
                    <CalendarCheck size={25}/>
                </div>
                <h1 className="text-[32px] font-bold text-gray-200">13</h1>
            </div>
            <div className="w-full h-fill min-w-[250px] p-6 bg-gray-400 rounded-lg">
                <div className="flex justify-between items-center text-gray-300 mb-5">
                    <p className="text-[12px] font-bold">FECHADOS ESTE MÊS</p>
                    <CalendarCheck size={25}/>
                </div>
                <h1 className="text-[32px] font-bold text-gray-200">13</h1>
            </div>
        </div>
    )
}