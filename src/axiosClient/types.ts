
export interface Tour {
  city: string;
  id: number;
  urlImage: string;
  name: string;
  description: string;
  maxPeople: number;
  countryId: number;
  cityId: number;
  initialDate: string;
  finalDate: Date;
  avarageRating?: number;
  duration: number;
  overview: string;
  typeId: number;
  minAge: number;
  price: number;
}

export interface Review {
  services: number;
  location: number;
  amenities?: number;
  prices: number;
  comfort: number;
  description: string;
  tourId: number;
  userId: string;
  userName: string;
  createdAt: Date;
  user?: {
    name: string;
  };
}


export interface Type {
  id: number;
  name: string;
  count: string;
  tours: number;
}


export interface City {
  id?: number;
  name: string;
  countryId: number;
}


export interface Country {
  id?: number;
  name: string;
  continentId: number;
}


export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}
