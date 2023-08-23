export interface IProduct {
  id: string;
  status: string;
  description: string;
  createdAt: string;
  categoryName: string;
  thumbnailUrl: string;
  wordsForFilter: string;
  title: string;
  totalLikes: number;
  totalDownloads: number;
  totalBookmarks: number;
  plan: string;
  brand: string;
  size: string;
  surface: string;
  application: string;
  reproduction: string;
}
export type IProducts = IProduct[];
