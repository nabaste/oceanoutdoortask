// Header Component
// This component serves as the main navigation header of the e-commerce website
// It provides a consistent layout with:
// - Company logo on the left that links to the homepage
// - Navigation icons on the right for core e-commerce functionalities:
//   * Search functionality
//   * User account access
//   * Shopping cart
//   * Mobile menu toggle
// The header is responsive and maintains a fixed height with proper spacing
// Using HeroIcons for consistent iconography across the application

import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
        <div className="bg-white border-b border-pink-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href={`/`}>
                            <Image src="/images/Marker.jpg"
                                   alt="Company Logo"
                                   width={40}
                                   height={40}
                                   className="object-contain" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
                        <UserIcon className="h-6 w-6 text-gray-700" />
                        <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
                        <Bars3Icon className="h-6 w-6 text-gray-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}