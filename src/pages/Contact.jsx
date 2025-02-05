import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1 
                className="text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Us
            </motion.h1>
            
            <motion.div 
                className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <form className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label className="block mb-1">Your Name:</label>
                        <input 
                            type="text" 
                            className="w-full border p-2 rounded"
                            placeholder="John Doe"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label className="block mb-1">Your Email:</label>
                        <input 
                            type="email" 
                            className="w-full border p-2 rounded"
                            placeholder="john@example.com"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <label className="block mb-1">Message:</label>
                        <textarea 
                            className="w-full border p-2 rounded"
                            rows="4"
                            placeholder="Write your message here..."
                        ></textarea>
                    </motion.div>

                    <motion.button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </form>

                <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="font-bold mb-2">Our Store Location:</h3>
                    <p>SNAZZIFY Store</p>
                    <p>VIT Chennai Campus</p>
                    <p>Kelambakkam - Vandalur Rd</p>
                    <p>Chennai, Tamil Nadu 600127</p>
                    <p className="mt-2">Email: contact@metamoda.com</p>
                    <p>Phone: (123) 456-7890</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact
