import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component{
    constructor(){
        super()

        this.state ={
            cantidad : 5
        }
    }

    render(){
        return(
        < div >
            <h3>{this.props.name}</h3>
            <div>Cantidad: {this.state.cantidad}</div>
            <button onClick={ () => {
                this.setState({ cantidad: this.state.cantidad +1})
            }}>Agregar</button>
            
            <hr/>
            <p>$ {this.props.price}</p>
        </div>)
    }
}

const App = () => (
    < div>
        <TarjetaFruta name = {'Sandia'} price={2.00}/>
        <TarjetaFruta name = {'Kiwi'} price={1.00}/>
        <TarjetaFruta name = {`naranja`} price={5.00}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))