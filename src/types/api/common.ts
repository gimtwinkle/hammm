export type BoardInput = {
  title: string;
  content: string;
};

export type Board = BoardInput & {
  id: number;
};

export type RouteParams = {
  params: {
    id: string; // Next.js는 URL 파라미터를 항상 string으로 전달
  };
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
