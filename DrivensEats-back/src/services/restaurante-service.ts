import { Pratos } from "../protocols";
import restauranteRepository from "../repositories/restaurante-repository";
  
  async function getPratos(tipo : string) {
    const pratos = await restauranteRepository.getPratos(tipo);
    return pratos;
  }
  
  async function postPrato(prato: Pratos) {
    const existingPrato = await restauranteRepository.findByTitle(prato.nome);
    if (existingPrato)
      throw { type: "conflict", message: "Tasks must have unique titles" };

    let existingTipo = await restauranteRepository.getTipo(prato.tipo);
    if (!existingTipo)
    {
        await restauranteRepository.postTipo(prato.tipo);
        existingTipo = await restauranteRepository.getTipo(prato.tipo);
    }
    await restauranteRepository.postPrato(prato, existingTipo.id);
  }

  async function deletePrato(id: number) {

    await restauranteRepository.deletePrato(id);
  }
  
  export default {
    getPratos,
    postPrato,
    deletePrato,
  };