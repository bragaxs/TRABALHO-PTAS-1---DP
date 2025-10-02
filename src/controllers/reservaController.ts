import { Request, Response } from "express";
import { Reserva } from "../models/reservaModel";

let reservas: Reserva[] = [];

export const listarReservas = (_req: Request, res: Response) => {
  res.json({ mensagem: "Lista de reservas carregada com sucesso!", reservas });
};

export const criarReserva = (req: Request, res: Response) => {
  const novaReserva = { id: reservas.length + 1, ...req.body } as Reserva;
  reservas.push(novaReserva);
  res.status(201).json({ mensagem: "Reserva criada com sucesso!", reserva: novaReserva });
};

export const atualizarReserva = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = reservas.findIndex(r => r.id === id);
  if (indice === -1) return res.status(404).json({ erro: "Reserva não encontrada!" });

  reservas[indice] = { id, ...req.body } as Reserva;
  res.json({ mensagem: "Reserva atualizada com sucesso!", reserva: reservas[indice] });
};

export const excluirReserva = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = reservas.findIndex(r => r.id === id);
  if (indice === -1) return res.status(404).json({ erro: "Reserva não encontrada!" });

  reservas.splice(indice, 1);
  res.json({ mensagem: `Reserva ${id} excluída com sucesso!` });
};
