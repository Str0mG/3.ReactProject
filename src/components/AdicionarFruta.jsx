import React, {useState} from "react";


const AdicionarFruta = () => {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);


    const adicionarFruta = event => {
        event.preventDefault();

        const fruta = {
            id: new Date(),
            nome,
            quantidade
        }

        console.log("Fruta adicionada com sucesso!", fruta);
    }

    return(
        <form onSubmit={adicionarFruta}>
            <input 
                type="text"
                name={nome} 
                placeholder="Nome da fruta"
                required
                onChange={event => setNome(event.target.value)} 
            />
            <input 
                type="number"
                name={quantidade} 
                placeholder="Quantidade de frutas"
                required
                onChange={event => setQuantidade(event.target.value)} 
            />
            <button type="submit">Adicionar</button>

        </form>

    );

}

export default AdicionarFruta;
