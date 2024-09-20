import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-4">We would love to hear from you!</p>
        
        <Link href="/" className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-all">
          Go back to Home
        </Link>
      </div>
    </>
  );
}
