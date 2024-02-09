import React, {Component} from "react";

export default class HelloComponent extends Component{
    //el método render es el que genera de forma dinámica el código HTML
    render(){
        //aqui no tenemos que definir la varible, simplemente indicamos que la vamos a usar:
        return (
            <div>
                <h1>Hello {this.props.nombre}</h1>
            </div>
        )
    }
    //ahora en apps lo modificamos para que use este componente en vez de la etiqueta h1 que habia puesta directamente
}