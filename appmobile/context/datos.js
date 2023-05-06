import {
    create
} from "zustand"

export const useDatos = create(set => ({
    carnet: "0",
    barras: "0",
    setCarnet: (nuevocarnet) => set(state => ({
        ...state,
        carnet: nuevocarnet,
    })),
    setBarras: (nuevobarras) => set(state => ({
        ...state,
        barras: nuevobarras,
    }))

}))