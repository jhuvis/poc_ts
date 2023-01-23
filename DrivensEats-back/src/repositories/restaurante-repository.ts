import { connection } from "../database";
import { Pratos, Tipo_prato } from "../protocols.js";


async function getPratos(tipo: string) : Promise<Pratos[]> {
  const { rows } = await connection.query<Pratos>(`SELECT * FROM pratos p 
                                                   JOIN tipo_prato tp
                                                   ON tp.id = p.id_tipo_prato
                                                   WHERE tp.nome = $1`, [tipo]);
  return rows;
}

async function findByTitle(nome: string): Promise<Pratos> {
  const { rows } = await connection.query<Pratos>(
    "SELECT * FROM pratos WHERE nome=$1",
    [nome]
  );
  return rows[0];
}

async function getTipo(nome: string | number): Promise<Tipo_prato> {
    const { rows } = await connection.query<Tipo_prato>(
      "SELECT * FROM tipo_prato WHERE nome=$1",
      [nome]
    );
    return rows[0];
  }

async function postTipo(nome: string | number) {
    await connection.query<Tipo_prato>(
    ` INSERT INTO tipo_prato (nome) VALUES ($1)`,
      [nome]
    );
  }

async function postPrato(prato: Pratos, id_tipo_prato: number) {
  await connection.query(
    `
    INSERT INTO pratos (nome, "desc", preco, id_tipo_prato) VALUES ($1, $2, $3, $4)
  `,
    [prato.nome, prato.desc, prato.preco, id_tipo_prato]
  );
}

async function deletePrato(id: number) {
    await connection.query(
      `
      DELETE FROM pratos WHERE id = $1;
    `,
      [id]
    );
  }
export default {
    getPratos,
    findByTitle,
    getTipo,
    postTipo,
    postPrato,
    deletePrato
};