import axios from 'axios';
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
interface ApiUser {
  id: number;
  name: string;
  address: Address;
  phone: string;
}
interface UserResult {
  id: number;
  name: string;
  address: Address | null;
  phone: string;
}
export async function safeFetchUser(userId: number): Promise<UserResult | null> {
  try {
    if (userId <= 0) return null;
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get<ApiUser[]>(url);
    const users = response.data;
    if (!users) return null;
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) {
      return null;
    }
    return {
      id: foundUser.id,
      name: foundUser.name,
      address: foundUser.address || null,
      phone: foundUser.phone,
    };
  } catch (error) 
  {
    return null;
  }
}