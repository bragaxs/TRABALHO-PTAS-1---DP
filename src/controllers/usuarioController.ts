import { Request, Response } from "express";
import { Usuario } from "../models/usuarioModel";

let usuarios: Usuario[] = [];

export const listarUsuarios = (req: Request, res: Response) => {
  res.json(usuarios);
};

export const criarUsuario = (req: Request, res: Response) => {
  const { nome, email, papel } = req.body;
  if (!nome || !email) return res.status(400).json({ erro: "Nome e email são obrigatórios" });

  const novoUsuario: Usuario = { id: usuarios.length + 1, nome, email, papel };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
};

export const atualizarUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);
  if (indice === -1) return res.status(404).json({ mensagem: "Usuário não encontrado" });

  const { nome, email, papel } = req.body;
  usuarios[indice] = { id, nome, email, papel };
  res.json(usuarios[indice]);
};

export const excluirUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.status(204).send();
};
