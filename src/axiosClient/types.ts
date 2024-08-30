
export interface Tour {
  id?: number;
  urlImage: string;
  name: string;
  description: string;
  maxPeople: number;
  countryId: number;
  cityId: number;
  initialDate: Date;
  finalDate: Date;
  avarageRating?: number;
  duration: number;
  overview: string;
  typeId: number;
  minAge: number;
}


export interface Review {
  id?: number;
  tourId: number;
  userId: string;
  rating: number;
  comment: string;
}


export interface Type {
  id?: number;
  name: string;
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
