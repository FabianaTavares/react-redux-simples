import {
  NUM_MIN_ALTERADO,
  NUM_MAX_ALTERADO
} from './actionTypes'

/**
 * Action Creator
 * recebe novo numero seu papel é retornar uma action
 * função síncrona
 */
export function alterarNumeroMinimo(novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero
  }
}

export function alterarNumeroMaximo(novoNumero) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero
  }
}