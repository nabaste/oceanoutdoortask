import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Link from "next/link";


export default function Header() {
    return (
        <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href={`/`}>
                        <span className="text-2xl font-bold text-gray-900">Logo</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <UserIcon className="h-6 w-6 text-gray-500" />
                        <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                        <Bars3Icon className="h-6 w-6 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}