import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Markdownを読み込む関数
async function getWorkData(id) {
  const filePath = path.join(process.cwd(), "src/data/works", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { data, contentHtml };
}

export default async function WorkDetail({ params }) {
  const { id } = params;
  const work = await getWorkData(id);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-3xl mx-auto text-center pt-24 mb-12">

        <h1 className="text-3xl font-bold text-blue-600">{work.data.title}</h1>
        <img src={work.data.image} alt={work.data.title} className="w-full h-60 object-cover rounded-md mt-6 border border-gray-200" />
        <div className="prose prose-lg text-gray-700 mt-6 text-start" dangerouslySetInnerHTML={{ __html: work.contentHtml }} />
      </div>
      <Footer />
    </div>
  );
}
