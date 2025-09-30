import { Request, Response } from "express";
import { Sala } from "../models/salaModel";

let salas: Sala[] = [];

export const listarSalas = (req: Request, res: Response) => {
  res.json(salas);
};

export const criarSala = (req: Request, res: Response) => {
  const { nome, capacidade, localizacao } = req.body;
  if (!nome || !capacidade) return res.status(400).json({ erro: "Nome e capacidade são obrigatórios" });

  const novaSala: Sala = { id: salas.length + 1, nome, capacidade, localizacao };
  salas.push(novaSala);
  res.status(201).json(novaSala);
};

export const atualizarSala = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = salas.findIndex(s => s.id === id);
  if (indice === -1) return res.status(404).json({ mensagem: "Sala não encontrada" });

  const { nome, capacidade, localizacao } = req.body;
  salas[indice] = { id, nome, capacidade, localizacao };
  res.json(salas[indice]);
};

export const excluirSala = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  salas = salas.filter(s => s.id !== id);
  res.status(204).send();
};
