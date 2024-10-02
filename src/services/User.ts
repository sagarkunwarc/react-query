import axios from "axios";

type User = {
  name: string;
  email: string;
  role: string;
  status: string;
  id: string;
  lastLogin: string;
};
// get all users
async function getUsers() {
  const res = await axios.get<User[]>(
    "https://66d093f5181d059277df15bd.mockapi.io/api/react_class/users"
  );
  return res.data;
}

// get user by id

async function getUser(id: string) {
  const res = await axios.get<User[]>(
    `https://66d093f5181d059277df15bd.mockapi.io/api/react_class/users"/${id}`
  );
  return res.data;
}

// Omit - removes the req filed from the User object
async function createUser(user: Omit<User, "id" | "lastLogin">) {
  const res = await axios.post<User>(
    "https://66d093f5181d059277df15bd.mockapi.io/api/react_class/users",
    user
  );
  return res.data;
}

export const userService = {
  getUsers,
  createUser,
  getUser,
};
