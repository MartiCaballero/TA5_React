import React, { useState } from 'react';
import './TA5.css';

function MostrarTexto() {
    const [isVisible, setIsVisible] = useState(true);

    const alternar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
        <button onClick={alternar}>
            {isVisible ? 'Ocultar' : 'Mostrar'} Texto
        </button>
        {isVisible && <p>Este es el texto que se puede ocultar o mostrar.</p>}
        </div>
    );
}

export default MostrarTexto;
