'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CubeTransparentIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
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
    const [showStickyButton, setShowStickyButton] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const bottomButtonSection = document.getElementById('bottom-buttons');

        const handleScroll = () => {
            if (!bottomButtonSection) return;

            const rect = bottomButtonSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;

            setShowStickyButton(!isVisible);
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Product Details',
            content: 'Premium materials and expert craftsmanship ensure durability and comfort for everyday wear.'
        },
        {
            title: 'Size & Fit',
            content: 'Runs true to size. For the best fit, we recommend ordering your normal size.'
        },
        {
            title: 'Shipping & Returns',
            content: 'Free shipping on orders over $100. Easy returns within 30 days of purchase.'
        }
    ];

    const handleAddToBag = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to bag');
            return;
        }
        alert('Added to bag'); // Original success message
    };

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-agdasima font-bold text-gray-900">{prod.name}</h1>
                    <p className="text-3xl border border-black rounded-sm  px-2 font-light font-agdasima text-gray-900">{prod.price}</p>
                </div>
                <p className="mt-2 font-lora text-gray-900">{prod.description}</p>

                <div className="mt-4 relative -mx-4 sm:-mx-6 lg:-mx-8">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active'
                        }}
                        className="w-full aspect-[4/5]" // Changed to taller aspect ratio
                    >
                        {prod.images.map((image) => (
                            <SwiperSlide className="w-full bg-gray-100" key={image.id}>
                                <Image
                                    src={image.src}
                                    alt={`${prod.name} - Image ${image.src + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Link href={`/ar-experience.html?modelId=` + prod.model}
                          className="absolute top-4 right-4 bg-white border border-black p-2 rounded-sm hover:bg-opacity-100 transition-colors duration-200 z-10"
                          rel="noopener noreferrer">
                        <CubeTransparentIcon className="h-6 w-6 text-gray-800"/>
                    </Link>
                </div>

                {/* Size Selection */}
                <div className="mt-8">
                    <h2 className="text-md font-medium font-workSans text-gray-900 mb-2">Select Size</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {shoeSizes.map((size) => (
                            <button
                                key={size}
                                className={`py-2 px-4 border text-sm ${
                                    selectedSize === size
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-700 text-gray-700 hover:border-gray-400'
                                } rounded-sm transition-colors duration-200`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accordion Sections */}
            <div className="border-y divide-y border-pink-600 divide-pink-600 font-workSans text-black">
                {accordionData.map((item, index) => (
                    <div key={index} className="">
                        <button
                            className="w-full px-4 py-3 text-left flex justify-between items-center"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-medium">{item.title}</span>
                            <span className={`transform transition-transform duration-200 ${
                                openAccordion === index ? 'rotate-180' : ''
                            }`}>
                                    ▼
                                </span>
                        </button>
                        {openAccordion === index && (
                            <div className="px-4 font-lora py-3 border-t border-gray-200">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Buttons Section */}
            <div id="bottom-buttons" className="flex gap-4 mx-4 mt-8">
                <button
                    className="flex-1 bg-black font-agdasima text-4xl font-light text-white py-3 px-4 rounded-sm hover:bg-black-700 transition-colors duration-200"
                    onClick={handleAddToBag}
                >
                    ADD TO BAG
                </button>
                <button
                    className="px-4 py-3 border border-black rounded-sm hover:border-gray-400 transition-colors duration-200"
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    {isFavorite ? (
                        <HeartIconSolid className="h-6 w-6 text-red-600" />
                    ) : (
                        <HeartIcon className="h-6 w-6 text-gray-900" />
                    )}
                </button>
            </div>


            {/* Sticky Add to Bag Button */}
            {showStickyButton && (
                <div className="fixed bottom-0 left-0 right-0 bg-black py-2 font-agdasima text-3xl transition-all duration-300">
                    <button
                        className="w-full py-3 px-4 font-light text-white hover:bg-gray-900 transition-colors duration-200"
                        onClick={handleAddToBag}
                    >
                        ADD TO BAG
                    </button>
                </div>
            )}
        </div>
    );
}