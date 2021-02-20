import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
/**
 * @description import de função entre chaves,
 * para usar no redux não dá pra chamar a função diretamente passando um valor,
 * você precisa mapear os actions creators dentro das propriedades
 */
import { alterarNumeroMinimo } from '../store/actions/numerosAction'
import { alterarNumeroMaximo } from '../store/actions/numerosAction'

// eslint-disable-next-line import/no-anonymous-default-export
/* export default props => {
  const { min, max } = props */
const Intervalo = props => {
  const {min, max} = props

  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
        {/*   <input type="number" value={min}
          onChange={e => props.onMinChanged(+e.target.value)}/> */}
          <input type="number" value={min}
            onChange={e => props.alterarMinimo(+e.target.value)}/>
        </span>
        <span>
          <strong>Máximo</strong>
         {/*  <input type="number" value={max}
          onChange={e => props.onMaxChanged(+e.target.value)}/> */}
          <input type="number" value={max}
            onChange={e => props.alterarMaximo(+e.target.value)}/>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

/**
 * @description nome da função geralmente é o mesmo da documentação do redux.js.org
 * https://redux.js.org/faq/react-redux#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running
 */

function mapDispatchToProp(dispatch){
  return {
    alterarMinimo(novoNumero){
      // action creator vai retornar uma action
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    },
    alterarMaximo(novoNumero){
      // action creator vai retornar uma action
      const action = alterarNumeroMaximo(novoNumero)
      dispatch(action)
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Intervalo)