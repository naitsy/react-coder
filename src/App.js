import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

const App = () => {

  const styles = {
    color: 'red'
  }

  return (
    <>
		<div className="container-fluid rule80">		
      <NavBar />	
			<ItemListContainer greetings = { "Prop enviada por parametro" } styling={ styles }/>
		</div>
    </>
  );
}

export default App;
