import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
