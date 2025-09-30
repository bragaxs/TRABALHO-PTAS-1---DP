import { Router } from "express";
import { listarSalas, criarSala, atualizarSala, excluirSala } from "../controllers/salaController";

const router = Router();

router.get("/", listarSalas);
router.post("/", criarSala);
router.put("/:id", atualizarSala);
router.delete("/:id", excluirSala);

export default router;
