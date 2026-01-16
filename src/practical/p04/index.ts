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
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface UserWithTodos {
  id: number;
  name: string;
  address: Address;
  phone: string;
  todos: Todo[];
}
export async function getTodosByUserId(id: number): Promise<UserWithTodos | string> {
  try {
    if (id < 0) return "Invalid id";
    const usersReq = axios.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users');
    const todosReq = axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    const [usersRes, todosRes] = await Promise.all([usersReq, todosReq]);
    const users = usersRes.data;
    const todos = todosRes.data;
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser) {
      return "Invalid id";
    }
    const userTodos = todos.filter((t) => t.userId === id);
    return {
      id: foundUser.id,
      name: foundUser.name,
      address: foundUser.address,
      phone: foundUser.phone,
      todos: userTodos,
    };
  } catch (error) 
  {
    return "Invalid id";
  }
}