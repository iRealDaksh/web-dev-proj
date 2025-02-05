import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    // Sample cart data (like a student would make)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Blue T-Shirt",
            price: 19.99,
            size: "M",
            quantity: 2,
            image: "/images/product1.jpg"
        },
        {
            id: 2,
            name: "Black Jeans",
            price: 29.99,
            size: "L",
            quantity: 1,
            image: "/images/product2.jpg"
        }
    ])

    // Simple function to remove item
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="mb-4">Your cart is empty</p>
                    <Link to="/collection" className="text-blue-500 hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div>
                    {/* Cart Items */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="border p-4 rounded flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-gray-600">Size: {item.size}</p>
                                        <p className="text-blue-500">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value)
                                            if (newQuantity > 0) {
                                                const newCart = cartItems.map(cartItem => 
                                                    cartItem.id === item.id 
                                                        ? {...cartItem, quantity: newQuantity}
                                                        : cartItem
                                                )
                                                setCartItems(newCart)
                                            }
                                        }}
                                        className="border p-1 w-16 rounded"
                                    />
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Total */}
                    <div className="mt-8 border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">Total:</span>
                            <span className="text-xl text-blue-500">${total.toFixed(2)}</span>
                        </div>
                        <Link 
                            to="/place-order"
                            className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
