import { actionTypes } from "../constants/fruta";

const INITIAL_STATE = {
    frutas:[
        { id: 1, nome: "Banana", quantidade: 5 },
    ]
}

const reducers = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADICIONAR_FRUTA:
            return {frutas:[...state.frutas, {...action.payload}]}
        case actionTypes.REMOVER_FRUTA:
            return {frutas: state.frutas.filter(fruta => fruta.id !== action.payload)}
        default:
            return state;
    }
}

export {reducers};
