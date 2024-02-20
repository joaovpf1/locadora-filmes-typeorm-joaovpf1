import { IMovieRead } from "./movies.interface";

export type IPagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: IMovieRead;
};

export type IPaginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};
