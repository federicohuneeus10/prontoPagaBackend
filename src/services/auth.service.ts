import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface User {
  id: number;
  username: string;
  password: string;
  role: "admin" | "user";
  rut?: string;
}

const users: User[] = [
  {
    id: 1,
    username: "pguzman",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    username: "mrobles",
    password: "1234",
    role: "user",
    rut: "21034134-2",
  },
];

const login = (username: string, password: string): string | null => {
  const userChecked = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!userChecked) return null;

  const payload: Record<string, unknown> = {
    sub: userChecked.id,
    role: userChecked.role,
  };

  if (userChecked.role === "user") {
    payload.rut = userChecked.rut;
  }

  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

export { login };
