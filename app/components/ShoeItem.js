import Image from 'next/image';

export default function ShoeItem({shoe}){
    return (
        <div className="bg-white overflow-hidden">
            <div className="relative w-full min-h-56 bg-gray-100">
                <Image
                    src={shoe.image}
                    alt={shoe.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0"
                />
            </div>
            <div className="p-4">
                <h2 className="text-base font-semibold text-gray-900">{shoe.name}</h2>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{shoe.description}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">{shoe.price}</p>
            </div>
        </div>
    )
}