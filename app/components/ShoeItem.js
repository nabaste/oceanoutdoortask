// ShoeItem Component
// This component is responsible for rendering individual shoe product cards
// It receives a shoe object as a prop containing product details (image, name, description, price)
// The component creates a consistent product card layout with:
// - A responsive image container with proper aspect ratio
// - Product information section with name, truncated description, and price
// - Consistent border styling to create a grid effect when multiple cards are displayed


import Image from 'next/image';

export default function ShoeItem({shoe}){
    return (
        <div className="bg-white overflow-hidden border-r border-b border-pink-600">
            <div className="relative w-full min-h-56 bg-gray-100">
                <Image
                    src={shoe.image}
                    alt={shoe.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0"
                />
            </div>
            <div className="px-4 pb-4 pt-2">
                <h2 className="font-workSans text-base font-medium text-black">{shoe.name}</h2>
                <p className="font-lora mt-1 text-sm text-gray-700 line-clamp-2">{shoe.description}</p>
                <p className="mt-2 text-2xl font-medium font-agdasima text-gray-900">{shoe.price}</p>
            </div>
        </div>
    )
}