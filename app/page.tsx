import Link from "next/link";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Home Page</h1>
        <p className="text-xl mb-4">This is a simple home page styled with Tailwind CSS.</p>
        
        <Link href="/about">
          <p className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-all">
            Learn more about us
          </p>
        </Link>
      </div>
    </>
  );
}
