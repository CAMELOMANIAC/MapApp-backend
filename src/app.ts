import express from "express";
import routes from "./routes";
import connection from "./models/db";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", routes);

connection.connect((err) => {
  if (err) {
    console.error("db연결중 에러가 발생했습니다:", err);
    return;
  }
  console.log("db에 성공적으로 연결되었습니다.");

  app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
  });
});
