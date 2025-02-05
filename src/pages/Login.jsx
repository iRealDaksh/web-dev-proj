import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here a student would typically add login logic
        alert(isLogin ? 'Login Successful!' : 'Sign Up Successful!')
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block mb-1">Name:</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2 rounded"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block mb-1">Email:</label>
                            <input 
                                type="email" 
                                className="w-full border p-2 rounded"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Password:</label>
                            <input 
                                type="password" 
                                className="w-full border p-2 rounded"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <button 
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 hover:underline"
                        >
                            {isLogin 
                                ? "Don't have an account? Sign Up" 
                                : "Already have an account? Login"}
                        </button>
                    </div>

                    {isLogin && (
                        <div className="mt-2 text-center">
                            <Link 
                                to="/forgot-password"
                                className="text-sm text-gray-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
