import { Router } from "express";
import { listarReservas, criarReserva, atualizarReserva, excluirReserva } from "../controllers/reservaController";

const router = Router();

router.get("/", listarReservas);
router.post("/", criarReserva);
router.put("/:id", atualizarReserva);
router.delete("/:id", excluirReserva);

export default router;
