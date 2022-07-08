import { actionTypes } from "../constants/fruta";


const actions = {
    adicionar: fruta => ({
        type: actionTypes.ADICIONAR_FRUTA,
        payload: fruta
    }),
    remover: id => ({
        type: actionTypes.REMOVER_FRUTA,
        payload: id
    })
}

export {actions};
