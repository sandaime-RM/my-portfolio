"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        {/* ヘッダー */}
        <Header />
  
        {/* メインコンテンツ */}
        <motion.section
          className="max-w-3xl mx-auto text-center pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold text-blue-600">Contact</h1>
          <p className="text-lg text-gray-600 mt-4">お問い合わせは以下のフォームまたはSNSからお願いします。</p>
        </motion.section>
  
        {/* お問い合わせフォーム */}
        <section className="mt-12 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg mb-12">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="お名前"
              className="w-full p-3 border border-gray-300 bg-white rounded-md"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full p-3 border border-gray-300 bg-white rounded-md"
            />
            <textarea
              placeholder="メッセージ"
              className="w-full p-3 border border-gray-300 bg-white rounded-md h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              送信
            </button>
          </form>
        </section>
  
        {/* フッター */}
        <Footer />
      </div>
    );
  }