import React from 'react';

const AuthPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
               
                <div className="bg-white border rounded p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-light text-black mb-2">New Customer</h2>
                        <h3 className="text-xl font-semibold text-gray-500 mb-2">Register Account</h3>
                        <p className="text-gray-500 mb-8">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    </div>
                    <button className="mt-4 bg-neutral-800 text-white py-3 px-10 rounded-none text-base font-normal tracking-wide hover:bg-black transition">CONTINUE</button>
                </div>
                
                <div className="bg-white border rounded p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-light text-black mb-2">Returning Customer</h2>
                        <h3 className="text-xl font-semibold text-gray-500 mb-6">I am a returning customer</h3>
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Email" className="w-full border border-gray-300 rounded-none px-4 py-3 mb-4 focus:outline-none focus:border-black text-gray-700" />
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Password" className="w-full border border-gray-300 rounded-none px-4 py-3 mb-2 focus:outline-none focus:border-black text-gray-700" />
                        <div className="mb-6">
                            <a href="#" className="text-gray-500 text-sm hover:underline">Forgot your password?</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-neutral-800 text-white py-3 px-10 rounded-none text-base font-normal tracking-wide hover:bg-black transition">SIGN IN</button>
                        <span className="text-gray-500 ml-2">or <a href="#" className="hover:underline">Return to Store</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage; 