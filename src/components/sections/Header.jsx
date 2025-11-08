import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b-2 border-gray-300 sticky top-0">
      <div>
        <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        <li className="hover:text-red-600 cursor-pointer transition-colors duration-300">
          Home
        </li>
        <li className="hover:text-red-600 cursor-pointer transition-colors duration-300">
          About
        </li>
        <li className="hover:text-red-600 cursor-pointer transition-colors duration-300">
          Services
        </li>
        <li className="hover:text-red-600 cursor-pointer transition-colors duration-300">
          Courses
        </li>
        <li className="hover:text-red-600 cursor-pointer transition-colors duration-300">
          Blog
        </li>
      </ul>

      <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all">
        Contact
      </button>
    </nav>
  );
}
