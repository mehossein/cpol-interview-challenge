import { ArticleAuthor } from './article-author.interface';

export interface Article {
  body: string;
  slug: string;
  title: string;
  createdAt: Date;
  tagList: string[];
  author: ArticleAuthor;
}
