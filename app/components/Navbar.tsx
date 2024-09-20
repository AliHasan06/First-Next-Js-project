import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ol className="flex space-x-8 justify-center">
        <li className="text-lg">
          <Link href="/" className="text-white font-bold hover:text-teal-400">
            Home
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/about" className="text-white font-bold hover:text-teal-400">
            About
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/contact" className="text-white font-bold hover:text-teal-400">
            Contact me
          </Link>
        </li>
      </ol> <br />
    </nav>
  );
};

export default Navbar;
