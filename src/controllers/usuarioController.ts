import { Request, Response } from "express";
import { Usuario } from "../models/usuarioModel";

let usuarios: Usuario[] = [];

export const listarUsuarios = (_req: Request, res: Response) => {
  res.json({ mensagem: "Lista de usuários carregada com sucesso!", usuarios });
};

export const criarUsuario = (req: Request, res: Response) => {
  const { nome, email, papel } = req.body;
  if (!nome || !email) return res.status(400).json({ erro: "Nome e email são obrigatórios!" });

  const novoUsuario: Usuario = { id: usuarios.length + 1, nome, email, papel };
  usuarios.push(novoUsuario);

  res.status(201).json({ mensagem: "Usuário criado com sucesso!", usuario: novoUsuario });
};

export const atualizarUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);
  if (indice === -1) return res.status(404).json({ erro: "Usuário não encontrado!" });

  const { nome, email, papel } = req.body;
  usuarios[indice] = { id, nome, email, papel };
  res.json({ mensagem: "Usuário atualizado com sucesso!", usuario: usuarios[indice] });
};

export const excluirUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);
  if (indice === -1) return res.status(404).json({ erro: "Usuário não encontrado!" });

  usuarios.splice(indice, 1);
  res.json({ mensagem: `Usuário ${id} excluído com sucesso!` });
};
