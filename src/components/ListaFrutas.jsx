import AdicionarFruta from "./AdicionarFruta";

import Fruta from "./Fruta";

const ListaFrutas = () => {
    const frutas = [
        {id:1, nome: "Banana", quantidade: 10},
    
    ]

    return (
        <>
            <h1>Lista de frutas</h1>
            <AdicionarFruta/>
            {frutas.map(fruta => (
                <Fruta key={fruta.id} fruta={fruta} />    
            ))}
        </>
    )
}

export default ListaFrutas;