import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "@/components/ArticleListItem";
import type { ArticleItem } from "@/types";
import EyesLogo from "@/components/Logo";

export default function Home() {
  const articles = getCategorisedArticles();

  // Group articles by category
  const categorisedArticles: Record<string, ArticleItem[]> = {};
  articles.forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = [];
    }
    categorisedArticles[article.category].push(article);
  });

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 relative">
      {/* Logo positioned in highlighted box area */}
      <div className="absolute top-10 left-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <EyesLogo className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Title wrapper */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="font-cormorantGaramond text-6xl">ojo</h1>
        <p className="mt-4 font-poppins text-xl text-neutral-600 text-center">
          Coding careers and coffee-fueled life lessons 
        </p>
      </div>

      {/* Articles grouped by category */}
      <div className="flex flex-col gap-12">
        {Object.entries(categorisedArticles).map(([category, articles]) => (
          <ArticleItemList
            key={category}
            category={category}
            articles={articles}
          />
        ))}
      </div>
    </main>
  );
}
