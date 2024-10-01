import styles from './Frase.module.css'

function Frase() {
  return (
    <div className = {styles.fraseContainer}>
      <h2>Meu segundo Componente</h2>
      <p className = {styles.fraseContent}>Este é o componente com uma frase</p>
    </div>
  )
}

export default Frase