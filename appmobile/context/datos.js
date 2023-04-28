import {
    create
} from "zustand"

export const useDatos = create(set => ({
    carnet: "98457854",
    barras: "1010123456",
    setCarnet: (nuevocarnet) => set(state => ({
        ...state,
        carnet: nuevocarnet,
    })),
    setBarras: (nuevobarras) => set(state => ({
        ...state,
        barras: nuevobarras,
    }))

}))