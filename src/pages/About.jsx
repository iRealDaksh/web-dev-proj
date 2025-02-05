import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      <motion.div 
        className='text-2xl text-center pt-8 border-t'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title text1={'ABOUT'} text2={'US'} />
      </motion.div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <motion.img 
          className='w-full md:max-w-[450px]' 
          src={assets.about_img} 
          alt="About Metamoda"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div 
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>Metamoda was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <motion.b 
            className='text-gray-800'
            whileHover={{ scale: 1.05 }}
          >
            Our Mission
          </motion.b>
          <p>Our mission at Metamoda is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
