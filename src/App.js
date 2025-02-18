import './App.css';
import StyledText from './components/StyledText';
import Alertbutton from './components/AlertButton';
function App() {
  return (
    <>
       <StyledText text = "Um parágrafo azul" colorText = 'blue' />
       <StyledText text = "Um parágrafo vermelho" colorText = 'red' />

       <Alertbutton label="Baixar CV"/>
    </>
  )
 
}

export default App;
