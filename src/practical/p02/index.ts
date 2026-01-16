import axios from 'axios';
interface NewUserInput {
  name?: string;
  username?: string; 
  email?: string; 
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string; 
  company?: {   
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
interface UserResult {
  id: number;
  name: string | null;
  address: {
    street: string | null;
    suite: string | null;
    city: string | null;
    zipcode: string | null;
    geo: {
      lat: string | null;
      lng: string | null;
    } | null;
  } | null;
  phone: string | null;
}
interface ApiUser {
  id: number;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
}
export async function addUser(newUserData: NewUserInput | null): Promise<UserResult[]> {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get<ApiUser[]>(url);
    const users = response.data;
    const formattedUsers: UserResult[] = users.map((u) => ({
      id: u.id,
      name: u.name,
      address: u.address,
      phone: u.phone,
    }));
    if (!newUserData) {
      return formattedUsers; 
    }
    const lastId = users.length > 0 ? users[users.length - 1].id : 0;
    const newId = lastId + 1;
    const newUser: UserResult = {
      id: newId,
      name: newUserData.name || null,
      address: newUserData.address
        ? {
            street: newUserData.address.street || null,
            suite: newUserData.address.suite || null,
            city: newUserData.address.city || null,
            zipcode: newUserData.address.zipcode || null,
            geo: newUserData.address.geo
              ? {
                  lat: newUserData.address.geo.lat || null,
                  lng: newUserData.address.geo.lng || null,
                }
              : null,
          }
        : null,
      phone: newUserData.phone || null, 
    };
    return [...formattedUsers, newUser];
  } catch (error) 
  {
    return [];
  }
}