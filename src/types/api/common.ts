export type BoardInput = {
  title: string;
  content: string;
};

export type Board = BoardInput & {
  id: number;
};

export type RouteContext = {
  params: {
    id: string;
  };
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
