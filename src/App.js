/*No es necesario poner .JSX para archivo, porque react sabe */
import Contador from './components/Contador'

const App = () =>{
  return <Contador inicial = {5} factor = {3} />
};

export default App;
