export interface Reserva {
  id: number;
  salaId: number;         // referência à Sala
  data: string;           // YYYY-MM-DD
  horaInicio: string;     // HH:MM
  horaFim: string;        // HH:MM
  participantes: number;
  usuarioId: number;      // referência ao Usuário
}
