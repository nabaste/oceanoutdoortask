'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import Products  from '/app/products.JSON';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const shoeSizes = ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12', 'US 12.5'];

export default function ProductDetailPage({ params }) {
    const {id} = params;
    let prod = Products[id];
    const [selectedSize, setSelectedSize] = useState(null);


    return (
        <div className="min-h-screen bg-white pb-20">
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: grey;
                    opacity: 0.6;
                }

                .swiper-pagination-bullet-active {
                    background: black;
                    opacity: 1;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900">{prod.name}</h1>
                <p className="mt-2 text-gray-600">{prod.description}</p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">{prod.price}</p>

                <div className="mt-6 relative">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active'
                        }}
                        className="w-full min-h-64 aspect-w-4 aspect-h-3"
                    >
                        {prod.images.map((image) => (
                            <SwiperSlide className="w-full min-h-64" key={image.src}>
                                <Image src={image.src} alt={`${prod.name} - Image ${image.src + 1}`} layout="fill"
                                       objectFit="cover"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Link href={`/ar-experience.html?modelId=` + prod.model}
                          className="absolute top-4 right-4 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition-colors duration-200 z-10"
                          // target="_blank"
                          rel="noopener noreferrer">
                            <CubeTransparentIcon className="h-6 w-6 text-gray-800" />
                    </Link>
                </div>

                <div className="mt-8">
                    <h2 className="text-md font-semibold text-gray-900 mb-4">Select Size</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {shoeSizes.map((size) => (
                            <button
                                key={size}
                                className={`py-2 px-4 border text-sm ${
                                    selectedSize === size
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                } rounded-md transition-colors duration-200`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {/*<h3 className={`text-sm`}>{size}</h3>*/}
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-black py-2">
                <button
                    className="w-full py-3 px-4 font-semibold text-white hover:bg-gray-100 duration-200"
                    onClick={() => alert('Added to bag')}
                >
                    Add to Bag
                </button>
            </div>
        </div>
    );
}