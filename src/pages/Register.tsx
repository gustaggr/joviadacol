import { useState } from "react";
import NavBar from "../components/NavBar"
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => setChecked(!checked);
    return (
        <div className="w-screen min-h-screen bg-background flex flex-col">
            <NavBar />
            <div className="w-full h-full justify-center flex-col items-center flex p-4 mt-10">
                <div className="flex flex-col max-w-[600px] w-full items-start gap-8">
                    <div className="flex  flex-col">
                        <h1 className="text-black font-bold text-lg">Crie sua conta</h1>
                        <Link className="flex gap-1 max-mb:flex-col" to={'/login'}>
                            Já possui uma conta?
                            <h1 className="underline text-primary">Entre agora mesmo!</h1>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-black text-sm flex gap-1 font-normal">Nome Completo<h3 className="text-red-500">*</h3></h2>
                        <input required type="text" className="w-full text-lg p-2 bg-backgroundClear rounded-xl outline-none text-black" placeholder="John Doe"></input>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-black text-sm flex gap-1 font-normal">E-mail<h3 className="text-red-500">*</h3></h2>
                        <input required type="email" className="w-full text-lg p-2 bg-backgroundClear rounded-xl outline-none text-black" placeholder="seunome@hotmail.com"></input>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-black text-sm flex gap-1 font-normal">Senha<h3 className="text-red-500">*</h3></h2>
                        <input required className="w-full text-lg p-2 bg-backgroundClear  rounded-xl outline-none text-black"></input>
                        <label className="flex items-center gap-2 max-md:items-start">
                            <div
                                className={`w-5 h-5 flex items-center justify-center border-2 rounded-md cursor-pointer transition-colors 
                            ${checked ? 'bg-primary border-transparent' : 'border-gray-300'}
                            ${checked ? 'text-white' : 'text-transparent'}`}
                                onClick={toggleCheckbox}
                            >
                                {checked && <FaCheck size={12} />} {/* Ícone de check aparece apenas quando marcado */}
                            </div>
                            <span onClick={toggleCheckbox} className="text-gray-800 gap-1 flex max-md:flex-col">
                                <h1 >
                                    Eu li e aceito os
                                    <Link className="underline  ml-[5px] underline-offset-2 text-primary outline-primary" to={'/terms'}>Termos de Serviço</Link>
                                </h1>
                                <h1 className="">
                                    e a
                                    <Link className="underline underline-offset-2 ml-[5px] text-primary outline-primary" to={'/policy'}>Política de Privacidade</Link>
                                    <span className="">.</span><span className="text-red-500">*</span>
                                </h1>
                            </span>

                        </label>
                    </div>
                    <button className="w-full bg-primary text-lg font-semibold text-white p-2 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105 ease-in-out duration-300">Criar Conta</button>
                </div>
            </div>
        </div>
    )
}