import { Request, Response } from "express";
import { login } from "../services/auth.service";

export const loginController = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const token = login(username, password);

  if (!token) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({ token });
};
