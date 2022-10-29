import { Bell, MagnifyingGlass, Sun } from "phosphor-react";
import { useState } from "react";
import { TextInput } from "./Inputs";

interface HeaderProps{
    headerText: string;
}

export function Header({ headerText }: HeaderProps) {
    const [isShowInputSearch, setIsShowInputSearch] = useState(false);
    const [isShowBoxNotify, setIsShowBoxNotify] = useState(false);

    function showBoxNotify () {
        !isShowBoxNotify ? setIsShowBoxNotify(true) : setIsShowBoxNotify(false)
    }

    function showTextSearch(){
        !isShowInputSearch ? setIsShowInputSearch(true) : setIsShowInputSearch(false)
    }

    return(
        <div className="w-full h-24 border-b border-gray-300 flex items-center justify-between">
            <h2 className="text-gray-200 font-semibold">
                {headerText}
            </h2>
            <div className="flex items-center gap-4">
                <div className="bg-gray-400 flex flex-row rounded-full p-1 transition delay-100"  onClick={showTextSearch}>
                    { isShowInputSearch ? <TextInput placeholder="Pesquisar" /> : null }
                    <button>
                        <MagnifyingGlass size={25} color="#5A5860" />
                    </button>
                </div>
                <button>
                    <Sun size={25} color="#5A5860" />
                </button>
                <button onClick={showBoxNotify}>
                    <Bell size={25} color="#5A5860" />
                </button>
            </div>
        </div>
    )
}