"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <motion.section
        className="max-w-4xl mx-auto text-center pt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-blue-600">Blog</h1>
        <p className="text-lg text-gray-600 mt-4">技術記事やイベント運営に関する投稿をしていきます。</p>
      </motion.section>

      {/* 記事一覧（仮） */}
      <section className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-600">ブログ記事タイトル1</h3>
          <p className="text-gray-700 mt-2">記事の概要がここに入ります。詳細は「続きを読む」から。</p>
          <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">続きを読む →</a>
        </motion.div>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
}