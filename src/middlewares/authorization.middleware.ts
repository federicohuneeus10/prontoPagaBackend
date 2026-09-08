import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizationMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const { role, rut } = req.user;
  const rutParam = req.params.rut;

  if (role === "admin") return next();

  if (role === "user") {
    const normalizedToken = rut?.replace(/[\.\-]/g, "").toLowerCase();
    const normalizedParam = rutParam?.replace(/[\.\-]/g, "").toLowerCase();

    if (normalizedToken !== normalizedParam) {
      return res.status(403).json({ message: "Access denied" });
    }
    return next();
  }

  return res.status(403).json({ message: "Access denied" });
};
