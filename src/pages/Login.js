import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Signup from "../pages/Signup";


class Login extends Component {
    render() {
        return (



                <div className="">

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>



                    <div className="flex bg-blue-400 mx-auto max-w-sm rounded-xl py-10 flex-col">


                        <div className="flex flex-col mx-auto space-y-3">

                            <div className="">
                                <form className="flex flex-col space-y-5">
                                    <label className="block">
                                        <span className="block text-sm font-medium text-slate-700">Nome:</span>
                                        <input id="user" type="text"
                                            className="placeholder-black focus:border-blue-200  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                                    </label>

                                    <label className="block">
                                        <span className="block text-sm font-medium text-slate-700">Email:</span>
                                        <input id="email" type="email"
                                            className="placeholder-black focus:border-blue-200  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                                    </label>

                                    <label className="block">
                                        <span className="block text-sm font-medium text-slate-700">Senha:</span>
                                        <input required id="password" type="password"
                                            className="placeholder-black focus:border-blue-200 placeholder-opacity-  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1 " />

                                    </label>


                                </form>
                            </div>

                            <div className="flex flex-col space-y-5">

                                <button type="submit" className="bg-white shadow-xl mx-auto rounded-xl hover:bg-green-300 h-12 w-24">Entrar</button>
                                <h5 className="mx-auto">Não tem uma conta? <NavLink className="text-blue-700" to="/signup">Registrar</NavLink></h5>



                            </div>
                        </div>




                    </div>


                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                    </Routes>

                </div>


            

        );
    }
}

export default Login;