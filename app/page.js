import Link from "next/link";
import ShoeItem from "@/app/components/ShoeItem";
import Products from "./products.JSON"


// Main homepage component
export default function Home() {
  return (
      <div >
          <main className="max-w-7xl mx-auto pt-4 md:px-4">
              {/* Breadcrumb navigation */}
              <div className="text-sm breadcrumbs px-4 md:px-0">
                  <span className="text-gray-600 font-lora">Running</span>
                  <span className="mx-2 text-gray-600 font-lora">-</span>
                  <span className="text-gray-900 font-medium font-lora">Shoes</span>
              </div>

              <h1 className="text-4xl font-agdasima font-bold text-gray-900 px-4 md:px-0 mt-2 mb-4">Men&apos;s Running Shoes</h1>

              {/* Product grid container with responsive columns */}
              <div className="border-t border-l border-pink-600 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">
                  {Object.entries(Products)
                  .map(([key, value]) => (
                      <Link key={key} href={`shoes/${key}`}>
                          <ShoeItem shoe={value}/>
                      </Link>
                  ))}
              </div>
          </main>
      </div>
  );
}
