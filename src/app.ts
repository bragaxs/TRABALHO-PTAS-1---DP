import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import reservaRoutes from "../src/routes/reservaRoutes";
import salaRoutes from "../src/routes/salaRoutes";
import usuarioRoutes from "../src/routes/usuarioRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/reservas", reservaRoutes);
app.use("/salas", salaRoutes);
app.use("/usuarios", usuarioRoutes);

export default app;
