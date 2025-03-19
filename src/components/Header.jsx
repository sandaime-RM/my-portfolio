// src/components/Header.jsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-blue-600">Matsuura Ryusei</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/works" className="hover:text-blue-600">Works</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
