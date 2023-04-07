import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

import { Pika } from './components/Pika/Pika';
import { ItemCounter } from './components/ItemCounter/ItemCounter';

const App = () => {

  const styles = {
    color: 'red'
  }

  return (
    <>
      <div className="container-fluid container-base">		
        <NavBar />	
        <ItemListContainer greetings = { "Prop enviada por parametro" } styling={ styles }/>

        {/* <ItemCounter /> */}
      </div>
    </>
  );
}

export default App;
