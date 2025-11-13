"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const navItems = ["home", "about", "services", "courses", "portfolio"];
export default function Navbar() {
  const navigate = useRouter();
  const onNavigate = (to) => {
    if (to == "home") {
      navigate.push(`/`);
    } else {
      navigate.push(`/${to}`);
    }
  };
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b-2 border-gray-300 sticky top-0 z-99">
      <div>
        <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:text-red-600 cursor-pointer transition-colors duration-300 capitalize"
            onClick={() => onNavigate(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all">
        Contact
      </button>
    </nav>
  );
}
