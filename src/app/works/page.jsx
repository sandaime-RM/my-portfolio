"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Works() {
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
        <h1 className="text-3xl font-bold text-blue-600">My Works</h1>
        <p className="text-lg text-gray-600 mt-4">開発したプロジェクトや活動の実績を紹介します。</p>
      </motion.section>

      {/* プロジェクト一覧 */}
      <section className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 電鬼2 プロジェクト */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg transition max-w-md mx-auto flex flex-col items-center text-left"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/denki2-thumbnail.jpg"
            alt="Denki 2 App"
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-600">電鬼2 - 鬼ごっこ用アプリ</h3>
            <p className="text-gray-700 mt-2">
              「電鬼2」は、電車を活用した鬼ごっこイベントのために開発した専用アプリです。
              プレイヤーの位置情報をリアルタイムで管理し、鬼の追跡をサポートします。
            </p>
            <a href="/works/denki2" className="text-blue-600 mt-4 inline-block hover:underline">
              詳細を見る →
            </a>
          </div>
        </motion.div>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
}
