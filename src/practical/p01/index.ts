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
interface User {
  id: number;
  name: string;
  phone: string;
  address?: Address; 
}
interface UserResult {
  id: number;
  name: string;
  phone: string;
  address: Address | null;
}
export async function getPostalAddress(): Promise<UserResult[]> {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get<User[]>(url);
    const users = response.data;
      if (!users || users.length === 0) {
      return [];
    }
        const result = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        phone: user.phone,
        address: user.address || null, 
      };
    });
    return result;
  } catch (error) 
  {
    return [];
  }
}