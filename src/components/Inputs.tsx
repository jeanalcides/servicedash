interface TextInputProps{
    placeholder: string;
}

export function TextInput({ placeholder }: TextInputProps){
    return(
        <input type="text" placeholder={placeholder} className="bg-gray-400 mx-2 text-gray-200 placeholder:text-gray-300 outline-none delay-200" />
    )
}