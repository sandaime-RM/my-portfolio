import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Markdownファイルを取得する関数
function getWorks() {
  const worksDir = path.join(process.cwd(), "src/data/works");
  const files = fs.readdirSync(worksDir);

  return files.map((filename) => {
    const filePath = path.join(worksDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return { ...data };
  });
}

export default function Works() {
  const works = getWorks();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="max-w-4xl mx-auto text-center pt-24">
        <h1 className="text-3xl font-bold text-blue-600">My Works</h1>
        <p className="text-lg text-gray-600 mt-4">開発したプロジェクトやイベント運営の実績を紹介します。</p>
      </div>

      {/* 制作物一覧を動的に表示 */}
      <section className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {works.map((work) => (
          <div key={work.id} className="bg-slate-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
            <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">{work.title}</h3>
            <p className="text-gray-700 mt-2">{work.description}</p>
            <Link href={`/works/${work.id}`} className="text-blue-600 mt-4 inline-block hover:underline">
              詳細を見る →
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
