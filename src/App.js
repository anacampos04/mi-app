import React, {Component} from 'react'; //HEMOS CONVERTIDO APP.JS EN UN COMPONENTE MAS
import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
//Este componente principal es padre del componente HelloComponent

class App extends Component {
  //estado del componente con un atributo name al que vamos a darle un valor inicial
  constructor(){
    super()
    this.state={
      name: 'Anita'

    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* uso del nuevo componente creado */
          /* NO OLVIDAR HACER EL IMPORT DEL COMPONENTE */}
          {/*Comunicación  entre un comp. padre con su hijo (props o propiedades) 
          En este ejemplo concreto lo que vamos a hacer es que el atributo name
          se le pase al componente hijo como parámetro para que lo muestre junto al hola*/
          /* con esto solo le indicamos que la props nombre del HelloComponent 
          tome el valor del atributo del atributo name del estado del componente principal */
          }
          <HelloComponent nombre={this.state.name}></HelloComponent>
        </header>
      </div>
    );
  }
}
//Lo único que hemos hecho para convertir app en un componente es añadir {Component} en el import de React
//y cambiarla a una clase en vez de una función, por lo que debemos añadir el método render() y ahí recoger todo el código
export default App;
