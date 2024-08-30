import axios from 'axios';
import { Tour, Review, Type, City, Country, User } from './types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTours = () => apiClient.get<Tour[]>('/tours');
export const getTourById = (id: number) => apiClient.get<Tour>(`/tours/${id}`);
export const createTour = (data: Tour) => apiClient.post<Tour>('/tours', data);
export const updateTour = (id: number, data: Tour) => apiClient.put<Tour>(`/tours/${id}`, data);
export const deleteTour = (id: number) => apiClient.delete<Tour>(`/tours/${id}`);

export const getReviews = () => apiClient.get<Review[]>('/reviews');
export const getReviewById = (id: number) => apiClient.get<Review>(`/reviews/${id}`);
export const createReview = (data: Review) => apiClient.post<Review>('/reviews', data);
export const updateReview = (id: number, data: Review) => apiClient.put<Review>(`/reviews/${id}`, data);
export const deleteReview = (id: number) => apiClient.delete<Review>(`/reviews/${id}`);

export const getTypes = () => apiClient.get<Type[]>('/types');
export const getTypeById = (id: number) => apiClient.get<Type>(`/types/${id}`);
export const createType = (data: Type) => apiClient.post<Type>('/types', data);
export const updateType = (id: number, data: Type) => apiClient.put<Type>(`/types/${id}`, data);
export const deleteType = (id: number) => apiClient.delete<Type>(`/types/${id}`);

export const getCities = () => apiClient.get<City[]>('/cities');
export const getCityById = (id: number) => apiClient.get<City>(`/cities/${id}`);
export const createCity = (data: City) => apiClient.post<City>('/cities', data);
export const updateCity = (id: number, data: City) => apiClient.put<City>(`/cities/${id}`, data);
export const deleteCity = (id: number) => apiClient.delete<City>(`/cities/${id}`);

export const getCountries = () => apiClient.get<Country[]>('/countries');
export const getCountryById = (id: number) => apiClient.get<Country>(`/countries/${id}`);
export const createCountry = (data: Country) => apiClient.post<Country>('/countries', data);
export const updateCountry = (id: number, data: Country) => apiClient.put<Country>(`/countries/${id}`, data);
export const deleteCountry = (id: number) => apiClient.delete<Country>(`/countries/${id}`);

export const getUsers = () => apiClient.get<User[]>('/users');
export const getUserById = (id: string) => apiClient.get<User>(`/users/${id}`);
export const createUser = (data: User) => apiClient.post<User>('/users', data);
export const updateUser = (id: string, data: User) => apiClient.put<User>(`/users/${id}`, data);
export const deleteUser = (id: string) => apiClient.delete<User>(`/users/${id}`);

export default apiClient;
