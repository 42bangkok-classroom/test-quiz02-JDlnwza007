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
  phone: string;
  address: Address;
}
interface UserResult {
  id: number;
  name: string;
  phone: string;
  address: Address;
}
export async function filterUserById(id: number): Promise<UserResult | string> {
  try {
    if (id < 0) return "Invalid id";

    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get<ApiUser[]>(url);
    const users = response.data;
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
      return "Invalid id";
    }
    return {
      id: foundUser.id,
      name: foundUser.name,
      phone: foundUser.phone,
      address: foundUser.address,
    };
  } catch (error) 
  {
    return "Invalid id";
  }
}