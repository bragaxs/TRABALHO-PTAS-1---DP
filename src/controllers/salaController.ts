import { Request, Response } from "express";
import { Sala } from "../models/salaModel";

let salas: Sala[] = [];

export const listarSalas = (_req: Request, res: Response) => {
  res.json({
    mensagem: "Lista de salas carregada com sucesso!",
    salas
  });
};

export const criarSala = (req: Request, res: Response) => {
  const { nome, capacidade, localizacao } = req.body;
  if (!nome || !capacidade) {
    return res.status(400).json({ erro: "Nome e capacidade são obrigatórios!" });
  }

  const novaSala: Sala = { id: salas.length + 1, nome, capacidade, localizacao };
  salas.push(novaSala);

  res.status(201).json({
    mensagem: "Sala criada com sucesso!",
    sala: novaSala
  });
};

export const atualizarSala = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = salas.findIndex(s => s.id === id);

  if (indice === -1) return res.status(404).json({ erro: "Sala não encontrada!" });

  const { nome, capacidade, localizacao } = req.body;
  salas[indice] = { id, nome, capacidade, localizacao };

  res.json({
    mensagem: "Sala atualizada com sucesso!",
    sala: salas[indice]
  });
};

export const excluirSala = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = salas.findIndex(s => s.id === id);

  if (indice === -1) return res.status(404).json({ erro: "Sala não encontrada!" });

  salas.splice(indice, 1);
  res.json({ mensagem: `Sala ${id} excluída com sucesso!` });
};
