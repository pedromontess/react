import PropTypes from 'prop-types'

function Item ({marca,Anolançamento}) {
  return (
    <>
      <li>{marca}- {Anolançamento}</li>
      <p>Teste</p>
    </>
  )
}
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  Anolançamento:PropTypes.number
  
}
Item.defaultProps = {
  marca: 'Faltou a marca',
  Anolançamento: 0,
}
export default Item