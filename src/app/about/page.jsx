"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header"; // 追加
import Footer from "@/components/Footer";
import skills from "@/data/skills/skills.json"; // 追加

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヘッダーを共通コンポーネントに変更 */}
      <Header />

      {/* メインコンテンツ */}
      <motion.section
        className="max-w-3xl mx-auto text-center pt-24" // ヘッダー分の余白を追加
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-blue-600 mb-2">About Me</h1>
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
        />
        <p className="text-lg text-gray-600">
          Hi! I'm <span className="font-bold text-blue-600">Matsuura Ryusei</span>, a developer and event organizer.
          I love creating innovative projects and organizing fun events!
        </p>
      </motion.section>

      {/* 経歴 */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800">Career</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-600">Tokyo University of Science (2024 - Present)</h3>
            <p className="text-gray-700">Master's program in Electrical and Electronic Engineering, specializing in Optical Communication.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-600">Company Founder</h3>
            <p className="text-gray-700">Established a startup focused on web development, projection mapping, and event planning.</p>
          </div>
        </div>
      </section>

      {/* 資格・スキル */}
      <section className="mt-12 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800">Skills & Certifications</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            skills.map((skill, index) => (
              <div key={skill.index} className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-blue-600">{skill.name}</h3>
                <p className="text-gray-700 text-sm">{skill.detail}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* フッター */}
      <Footer />
    </div>
  );
}
