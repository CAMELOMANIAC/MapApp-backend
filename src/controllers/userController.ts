import { Request, Response } from "express";
import connection from "../models/db";

export const getUsers = (req: Request, res: Response) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("데이터베이스 쿼리 중 에러가 발생했습니다:", err);
      res.status(500).json({ error: "데이터베이스 쿼리 중 에러가 발생했습니다." });
      return;
    }
    res.json(results);
  });
};
