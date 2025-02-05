import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
                            METAMODA
                        </Link>
                    </motion.div>

                    {/* Navigation Links with hover animation */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link to="/" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            Home
                        </Link>
                        <Link to="/collection" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            Collection
                        </Link>
                        <Link to="/about" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            Contact
                        </Link>
                        <Link to="/login" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            Login
                        </Link>
                        <Link to="/cart" className="hover:text-gray-200 transition-all duration-300 hover:scale-105">
                            Cart (0)
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
