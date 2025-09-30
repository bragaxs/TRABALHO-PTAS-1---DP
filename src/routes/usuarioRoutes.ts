import { Router } from "express";
import { listarUsuarios, criarUsuario, atualizarUsuario, excluirUsuario } from "../controllers/usuarioController";

const router = Router();

router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", excluirUsuario);

export default router;
