import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
/* export default props => { */
 /*  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min */

const Sorteio = props => {
  const {min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteio de um Numeros" yellow>
      <div>
        <span>
          <span>Resultado:</span>
          {/* <strong>{aleatorio}</strong> */}
          <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio)