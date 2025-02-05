import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFire, FaStar, FaShoppingCart, FaGift } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-8">
            {/* Announcement Banner */}
            <div className="bg-red-500 text-white p-2 text-center mb-4 animate-bounce">
                🔥 HOT DEAL! 50% OFF ON ALL ITEMS! LIMITED TIME OFFER! 🔥
            </div>

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
                            <FaFire className="text-red-500 text-2xl animate-pulse" />
                            <motion.h2 
                                className="text-blue-600 font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Welcome to Metamoda!
                            </motion.h2>
                            <FaFire className="text-red-500 text-2xl animate-pulse" />
                        </div>

                        <motion.h1 
                            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            MEGA SALE 2024! 🎉
                        </motion.h1>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaShoppingCart className="text-blue-500 mx-auto mb-2" />
                                <p className="text-sm">Fast Delivery</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaStar className="text-yellow-500 mx-auto mb-2" />
                                <p className="text-sm">Best Quality</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaGift className="text-red-500 mx-auto mb-2" />
                                <p className="text-sm">Special Offers</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-md">
                                <FaStar className="text-green-500 mx-auto mb-2" />
                                <p className="text-sm">24/7 Support</p>
                            </div>
                        </div>

                        <div className="space-x-4">
                            <Link 
                                to="/collection" 
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 animate-pulse"
                            >
                                🛍️ Shop Now!
                            </Link>
                            <Link 
                                to="/about" 
                                className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 border-2 border-purple-500"
                            >
                                Learn More →
                            </Link>
                        </div>

                        {/* Counter */}
                        <div className="mt-6 text-center bg-white p-4 rounded-lg shadow-md">
                            <p className="text-red-500 font-bold">Offer Ends In:</p>
                            <div className="flex justify-center gap-2 mt-2">
                                <div className="bg-blue-500 text-white p-2 rounded">12</div>:
                                <div className="bg-blue-500 text-white p-2 rounded">34</div>:
                                <div className="bg-blue-500 text-white p-2 rounded">56</div>
                            </div>
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
                        {/* Price Tags */}
                        <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full animate-bounce">
                            50% OFF!
                        </div>
                        <div className="absolute bottom-4 left-4 bg-yellow-500 text-white p-2 rounded-full animate-pulse">
                            Best Seller!
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Marquee */}
                <div className="mt-8 overflow-hidden bg-blue-500 text-white p-2 rounded-lg">
                    <div className="animate-marquee whitespace-nowrap">
                        🌟 FREE SHIPPING ON ORDERS OVER ₹999 | USE CODE: STUDENT50 FOR EXTRA 10% OFF | NEW ARRIVALS EVERY WEEK | FOLLOW US ON INSTAGRAM FOR DAILY UPDATES 🌟
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
