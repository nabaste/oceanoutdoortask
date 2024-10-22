import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-pink-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="text-sm text-gray-500">
                        © 2024 Nahuel Basterretche. All rights reserved.
                    </div>
                    <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                        Terms of Use
                    </div>
                </div>
            </div>
        </footer>
    );
}