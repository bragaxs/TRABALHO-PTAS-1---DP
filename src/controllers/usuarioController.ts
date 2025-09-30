import { Request, Response } from "express";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  papel?: "admin" | "usuario";
}

let usuarios: Usuario[] = [];

// Listar usuários
export const listarUsuarios = (req: Request, res: Response) => {
  if (usuarios.length === 0) {
    return res.json({ mensagem: "Nenhum usuário registrado." });
  }

  res.json({
    mensagem: "Lista de usuários carregada com sucesso!",
    usuarios
  });
};

// Criar usuário
export const criarUsuario = (req: Request, res: Response) => {
  const { nome, email, papel } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: "Nome e email são obrigatórios." });
  }

  const novoUsuario: Usuario = {
    id: usuarios.length + 1,
    nome,
    email,
    papel: papel || "usuario"
  };

  usuarios.push(novoUsuario);
  res.status(201).json({
    mensagem: "Usuário criado com sucesso!",
    usuario: novoUsuario
  });
};

// Atualizar usuário
export const atualizarUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  const { nome, email, papel } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: "Nome e email são obrigatórios." });
  }

  usuarios[indice] = { id, nome, email, papel: papel || "usuario" };

  res.json({
    mensagem: "Usuário atualizado com sucesso!",
    usuario: usuarios[indice]
  });
};

// Excluir usuário
export const excluirUsuario = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existe = usuarios.some(u => u.id === id);

  if (!existe) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ mensagem: `Usuário ${id} excluído com sucesso!` });
};
