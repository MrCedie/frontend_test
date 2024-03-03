import axios from "axios";
import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get("https://static-user.vercel.app/users");
  return res.data;
}
