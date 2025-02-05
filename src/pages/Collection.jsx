import React from 'react'
import { assets } from '../assets/assets'

const Collection = () => {
    // Sample product data (like a student would do)
    const products = [
        {
            id: 1,
            name: "Blue T-Shirt",
            price: 19.99,
            image: assets.product_1,
            category: "Men"
        },
        {
            id: 2,
            name: "Black Jeans",
            price: 29.99,
            image: assets.product_2,
            category: "Women"
        },
        // Add more sample products
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Collection</h1>

            {/* Simple filter */}
            <div className="mb-6 flex justify-center">
                <select className="border p-2 rounded">
                    <option value="">All Categories</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 text-center">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-blue-500">${product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collection
