import express, { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "백엔드 서버가 실행 중입니다." });
});

export default router;
