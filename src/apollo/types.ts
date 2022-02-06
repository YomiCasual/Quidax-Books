export interface IBook {
  id: string;
  authors: {
    id: string;
    name: string;
  }[];
  available_copies?: number;
  currency?: string;
  featured?: boolean;
  genres?: {
    id: string;
    name: string;
  }[];
  image_url?: string;
  likes?: number;
  price?: number;
  published_at?: Date | string;
  rating?: number;
  release_date?: Date | string;
  tags?: {
    id: string;
    name: string;
  }[];
  title?: string;
  publisher?: string;
  full_description?: string;
}

export interface IMappedBook extends IBook {
  mappedGenres: string;
  mappedRatings: { likes: number; rating: number };
  mappedAuthors: string;
  mappedPublishedDate: number;
  mappedReleaseDate: number;
  mappedTags: string;
  cartQuantity: number;
}

export interface IGetAllBooks {
  books: IBook[];
}
