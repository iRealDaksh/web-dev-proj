import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFire, FaStar, FaShoppingCart, FaGift } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left side text with animations */}
                    <motion.div 
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <FaFire className="text-amber-700 text-2xl animate-pulse" />
                            <motion.h2 
                                className="text-amber-800 font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Welcome to SNAZZIFY!
                            </motion.h2>
                            <FaFire className="text-amber-700 text-2xl animate-pulse" />
                        </div>

                        <motion.h1 
                            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Discover Your Style 🎉
                        </motion.h1>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaShoppingCart className="text-amber-700 mx-auto mb-2" />
                                <p className="text-sm">Fast Delivery</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaStar className="text-amber-500 mx-auto mb-2" />
                                <p className="text-sm">Best Quality</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaGift className="text-amber-700 mx-auto mb-2" />
                                <p className="text-sm">Special Offers</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaStar className="text-amber-500 mx-auto mb-2" />
                                <p className="text-sm">24/7 Support</p>
                            </div>
                        </div>

                        <div className="space-x-4">
                            <Link 
                                to="/collection" 
                                className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-amber-900 transition-all duration-300 hover:scale-105"
                            >
                                🛍️ Shop Now!
                            </Link>
                            <Link 
                                to="/about" 
                                className="bg-white text-amber-800 px-6 py-2 rounded-full hover:bg-amber-50 transition-all duration-300 hover:scale-105 border-2 border-amber-700"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </motion.div>
                    
                    {/* Right side image with animation */}
                    <motion.div 
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src={assets.hero_img} 
                            alt="Shopping" 
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>

                {/* Bottom Marquee */}
                <div className="mt-8 overflow-hidden bg-amber-700 text-white p-2 rounded-lg">
                    <div className="animate-marquee whitespace-nowrap">
                        🌟 FREE SHIPPING ON ORDERS OVER ₹999 | NEW ARRIVALS EVERY WEEK | FOLLOW US ON INSTAGRAM FOR DAILY UPDATES 🌟
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
