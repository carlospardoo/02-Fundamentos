import { useState } from 'react'

/*rafce */
const Contador = ({inicial, factor}) => {
    const [contador, setContador] = useState(inicial);
    
    const aumentar = () =>{
        setContador((actual)=>actual + factor)
    }

    const disminuye = () =>{
        setContador(contador - factor)
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr/>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuye}>Disminuir</button>
        </div>
    );
};

export default Contador;
