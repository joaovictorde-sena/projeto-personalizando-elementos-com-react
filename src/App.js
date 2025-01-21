// import logo from './logo.svg';
import './App.css';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';
function App() {
  return (
    <>
       <Paragraph text = "Um parágrafo azul" colorText = 'blue' />
       <Paragraph text = "Um parágrafo vermelho" colorText = 'red' />

       <Button label="Baixar CV"/>
    </>
  )
 
}

export default App;
