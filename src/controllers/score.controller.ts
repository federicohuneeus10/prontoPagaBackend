import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { getScore } from "../services/score.service";

export const scoreController = (req: AuthRequest, res: Response) => {
  const { rut } = req.params;
  const score = getScore(rut);

  return res.status(200).json({
    rut,
    score,
    fecha: new Date().toISOString(),
  });
};
