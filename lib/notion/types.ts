import { ExtendedRecordMap } from "notion-types";

export interface Post {
  id: string;
  title: string;
  slug: string;
  cover?: string;
  shortDescription: string;
  readTime?: number;
  createdAt: string;
  lastEditedAt?: string;
  category: string[];
  isPublished: boolean;
  topImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  authorName?: string;
  authorPosition?: string;
  authorAvatar?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
}

export interface PostWithContent extends Post {
  content: ExtendedRecordMap;
}
