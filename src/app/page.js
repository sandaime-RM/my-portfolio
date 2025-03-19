"use client"; // App Routerのクライアントコンポーネント

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <motion.section 
        className="flex flex-col items-center justify-center h-96 text-center px-6 bg-gradient-to-b from-white to-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-600">Matsuura Ryusei</h2>
        <p className="text-lg text-gray-600 mt-4">I create cool projects & organize fun events.</p>
        <Link href="/works" className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          View My Works
        </Link>
      </motion.section>

      {/* 最近の制作物 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center">Recent Works</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 作品のプレースホルダー */}
          <div className="bg-gray-200 h-40 flex items-center justify-center">Work 1</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Work 2</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Work 3</div>
        </div>
        <div className="text-center mt-6">
          <Link href="/works" className="text-blue-600 hover:underline">See More</Link>
        </div>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
}
