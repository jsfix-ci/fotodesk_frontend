export interface ILinks {
  first?: string;
  previous?: string;
  current: string;
  next?: string;
  last?: string;
}

export interface IMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: any;
}
