import React, { Component } from "react";

class Login extends Component {
    render() {
        return (


         
            <div className="flex bg-blue-400 mx-auto max-w-xl rounded-xl py-3 px-8 flex-col">
                

                <div className="flex flex-row space-x-3">

                    <div className="">
                        <form className="flex flex-col space-y-5">
                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Username:</span>
                                <input id="user" type="text"
                                    className="placeholder-black focus:border-blue-200  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                            </label>

                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Email:</span>
                                <input id="email" type="email"
                                    className="placeholder-black focus:border-blue-200  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                            </label>

                            <label className="block">
                                <span className="block text-sm font-medium text-slate-700">Password:</span>
                                <input id="password" type="password"
                                    className="placeholder-black focus:border-blue-200 placeholder-opacity-  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1 " />

                            </label>


                        </form>
                    </div>

                    <div className="self-center flex flex-row space-x-10">

                        <button className="bg-white rounded-xl hover:bg-green-300 h-12 w-24">Submit</button>
                        <button type="reset" className="bg-white rounded-xl hover:bg-green-300 h-12 w-24">Limpar</button>


                    </div>
                </div>




            </div>


        );
    }
}

export default Login;