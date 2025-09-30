import { Request, Response } from "express";

interface Reserva {
  id: number;
  sala: string;
  data: string;
  horaInicio: string;
  horaFim: string;
  participantes: number;
  usuario: string;
}

let reservas: Reserva[] = [];

// Listar reservas
export const listarReservas = (req: Request, res: Response) => {
  res.json({
    mensagem: "Lista de reservas carregada com sucesso!",
    reservas
  });
};

// Criar reserva
export const criarReserva = (req: Request, res: Response) => {
  const novaReserva: Reserva = {
    id: reservas.length + 1,
    ...req.body
  };
  reservas.push(novaReserva);
  res.status(201).json({
    mensagem: "Reserva criada com sucesso!",
    reserva: novaReserva
  });
};

// Atualizar reserva
export const atualizarReserva = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const indice = reservas.findIndex(r => r.id === id);

  if (indice === -1) return res.status(404).json({ mensagem: "Reserva não encontrada" });

  reservas[indice] = { id, ...req.body };
  res.json({
    mensagem: "Reserva atualizada com sucesso!",
    reserva: reservas[indice]
  });
};

// Excluir reserva
export const excluirReserva = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  reservas = reservas.filter(r => r.id !== id);
  res.json({ mensagem: `Reserva ${id} excluída com sucesso!` });
};
