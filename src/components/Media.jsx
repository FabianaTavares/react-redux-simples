import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
/* export default props => { */
 /*  const { min, max } = props */

const Media = props => {
  const {min, max} = props
  return (
    <Card title="Média dos Numeros" green>
      <div>
        <span>
          <span>Resultado:</span>
          {/* <strong>{ (max + min) / 2 }</strong> */}
          <strong>{ (max + min) / 2 }</strong>
        </span>
      </div>
    </Card>
  )
}

//const mapStateToProps = state =>
function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Media)