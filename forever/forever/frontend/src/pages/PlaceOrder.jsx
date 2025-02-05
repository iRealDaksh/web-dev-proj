import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('cod')

    // Sample cart total (in a student project)
    const cartTotal = 69.97
    const shippingCost = 5.99
    const total = cartTotal + shippingCost

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Order placed successfully!')
        navigate('/orders')
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Delivery Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="border p-2 rounded"
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Address" 
                            className="w-full border p-2 rounded"
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="City" 
                                className="border p-2 rounded"
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="State" 
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="ZIP Code" 
                                className="border p-2 rounded"
                                required
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone" 
                                className="border p-2 rounded"
                                required
                            />
                        </div>
                    </form>
                </div>

                {/* Order Summary and Payment */}
                <div className="space-y-6">
                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Cart Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Cash on Delivery</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Credit/Debit Card</span>
                            </label>
                        </div>
                    </div>

                    <button 
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
