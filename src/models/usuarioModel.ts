export interface Usuario {
  id: number;
  nome: string;
  email: string;
  papel?: "admin" | "usuario";
}
