export interface Pratos {
    id?: number;
    nome: string;
    desc: string;
    preco: number;
    tipo: string | number;
  }

export interface Tipo_prato{
    id: number;
    nome: string;
}