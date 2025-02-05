import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { productId } = useParams()
    const [selectedSize, setSelectedSize] = useState('')
    
    // Sample product data (like a student would make)
    const product = {
        id: productId,
        name: "Classic Blue T-Shirt",
        price: 19.99,
        description: "A comfortable and stylish t-shirt perfect for casual wear. Made with 100% cotton.",
        sizes: ["S", "M", "L", "XL"],
        images: [
            "/images/product1.jpg",
            "/images/product1-2.jpg",
            "/images/product1-3.jpg"
        ],
        category: "Men",
        inStock: true
    }

    const [mainImage, setMainImage] = useState(product.images[0])

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size!')
            return
        }
        alert('Added to cart successfully!')
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                        <img 
                            src={mainImage} 
                            alt={product.name}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {product.images.map((img, index) => (
                            <img 
                                key={index}
                                src={img}
                                alt={`${product.name} view ${index + 1}`}
                                className="border rounded cursor-pointer hover:border-blue-500"
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl text-blue-500">${product.price}</p>
                    
                    <div className="space-y-2">
                        <p className="font-bold">Select Size:</p>
                        <div className="flex gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 border rounded ${
                                        selectedSize === size 
                                            ? 'bg-blue-500 text-white' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-600">{product.description}</p>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
                    >
                        Add to Cart
                    </button>

                    {/* Product Features */}
                    <div className="border-t pt-4 mt-6">
                        <h2 className="font-bold mb-2">Product Features:</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>100% Premium Cotton</li>
                            <li>Machine washable</li>
                            <li>Comfortable fit</li>
                            <li>Available in multiple sizes</li>
                        </ul>
                    </div>

                    {/* Shipping Info */}
                    <div className="border-t pt-4">
                        <h2 className="font-bold mb-2">Shipping Information:</h2>
                        <ul className="text-gray-600">
                            <li>✓ Free shipping on orders over $50</li>
                            <li>✓ Easy returns within 30 days</li>
                            <li>✓ Cash on delivery available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product