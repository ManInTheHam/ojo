import { getArticleData, getCategorisedArticles } from "@/lib/articles";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getCategorisedArticles();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const articleData = await getArticleData(params.slug);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-poppins text-neutral-600 hover:text-neutral-900 transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back
      </Link>

      <article className="article">
        <h1>{articleData.title}</h1>
        <div className="text-sm text-neutral-500 font-poppins mb-8 text-center">
          {articleData.date} • {articleData.category}
        </div>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </article>
    </main>
  );
}
