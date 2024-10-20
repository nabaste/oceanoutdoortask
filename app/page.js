import QRCodeScanner from "@/app/components/QRCodeScanner";
import Header from "@/app/components/Header";
import ShoeItem from "@/app/components/ShoeItem";
import Link from "next/link";
import Products from "./products.JSON"

export default function Home() {
  return (
      <div >
          {/*<Header/>*/}
          <main className="max-w-7xl mx-auto py-8 md:px-4">
              <div className="text-sm breadcrumbs">
                  <span className="text-gray-500">Running</span>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-900 font-medium">Shoes</span>
              </div>

              <h1 className="text-lg font-bold text-gray-900 mt-4 mb-8">Men&apos;s Running Shoes</h1>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {Object.entries(Products)
                  .map(([key, value]) => (
                      <Link key={key} href={`shoes/${key}`}>
                          <ShoeItem shoe={value}/>
                      </Link>
                  ))}


                  {/*{shoes.map((shoe) => (*/}
                  {/*    <Link key={shoe.id} href={`shoes/${shoe.id}`}>*/}
                  {/*      <ShoeItem shoe={shoe}/>*/}
                  {/*    </Link>*/}
                  {/*))}*/}
              </div>
          </main>
      </div>
  );
}
