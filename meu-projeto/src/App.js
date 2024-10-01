import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Lista from './components/Lista'

function App() {
  

  return (
    <div className="App">
      
      <HelloWorld/>
      <Frase/>
      <SayMyName nome = "Pedro "/>
      <Pessoa nome = "Pedro"
              idade = '18'
              profissao = 'Dev'
      
      />
      <Lista/>
    </div>
  );
}

export default App;
