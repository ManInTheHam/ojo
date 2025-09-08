import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "@/types"

const articlesDirectory = path.join(process.cwd(), "articles")

export const getCategorisedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory)

  const allArticlesData: ArticleItem[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    }
  })

  // Sort by date (newest first)
  const format = "DD-MM-YYYY"
  return allArticlesData.sort((a, b) => {
    const dateOne = moment(a.date, format)
    const dateTwo = moment(b.date, format)
    if (dateOne.isBefore(dateTwo)) return 1
    if (dateOne.isAfter(dateTwo)) return -1
    return 0
  })
}

export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf-8")

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
  }
}