import React from 'react'

const Orders = () => {
    // Sample orders data (like a student would make)
    const orders = [
        {
            id: 1,
            productName: "Blue T-Shirt",
            price: 19.99,
            quantity: 2,
            size: "M",
            orderDate: "2024-02-05",
            status: "Delivered",
            image: "/images/product1.jpg"
        },
        {
            id: 2,
            productName: "Black Jeans",
            price: 29.99,
            quantity: 1,
            size: "L",
            orderDate: "2024-02-01",
            status: "Shipping",
            image: "/images/product2.jpg"
        },
        {
            id: 3,
            productName: "White Sneakers",
            price: 49.99,
            quantity: 1,
            size: "42",
            orderDate: "2024-01-28",
            status: "Processing",
            image: "/images/product3.jpg"
        }
    ]

    // Function to get status color
    const getStatusColor = (status) => {
        switch(status) {
            case 'Delivered': return 'bg-green-500'
            case 'Shipping': return 'bg-blue-500'
            case 'Processing': return 'bg-yellow-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            {/* Order Info */}
                            <div className="flex gap-4">
                                <img 
                                    src={order.image} 
                                    alt={order.productName} 
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-bold">{order.productName}</h3>
                                    <p className="text-gray-600">
                                        Size: {order.size} | Quantity: {order.quantity}
                                    </p>
                                    <p className="text-blue-500">${order.price}</p>
                                    <p className="text-sm text-gray-500">
                                        Ordered on: {order.orderDate}
                                    </p>
                                </div>
                            </div>

                            {/* Status and Actions */}
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></div>
                                    <span>{order.status}</span>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Track Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="text-center text-gray-500">
                    <p>You haven't placed any orders yet.</p>
                </div>
            )}
        </div>
    )
}

export default Orders
