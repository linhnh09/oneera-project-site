export type NewsItem = {
  title: string;
  href: string;
  date: string;
  kicker: string;
};

/** Không đăng lại tiêu đề hoặc nội dung bài trên website tham chiếu. */
export const news: NewsItem[] = [];
