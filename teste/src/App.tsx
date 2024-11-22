import { useState } from 'react'

function App() {

  return (
   
   <div className= "  h-screen w-full bg-slate-900 flex flex-col justify-center items-center">
    <h1 className= "text-4xl text-white mb- m-10"> Cadastro de usuários</h1>
    <input type="email" placeholder='digite seu email' className="border border-blue-100 shadow-nd mb-3 bg-blue-600/50 text-center w-[400px]  rounded-md"></input>
    <input type="password" placeholder='digite sua senha' className="border border-blue-100 shadow-nd bg-blue-600/50 text-center w-[400px]  rounded-md"></input>
    <button className = "border border-white bg-gray-300 w-[250px] rounded-full mt-5"> Entrar</button>
   
   
   </div>

  )
}

export default App
