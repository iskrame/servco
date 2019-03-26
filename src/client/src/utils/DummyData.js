import {clientLenguaje} from "../translate/clientTranslate";
const leng = clientLenguaje();
const Nc = leng.accontN;
const Nt = leng.cardN;
const bank = leng.bank;
const other = leng.other;

export const payWays = [
    {
        id: 1,
        description: Nc
    },
    {
        id: 2,
        description: Nt
    },
    {
        id: 3,
        description: bank
    }
]

export const schemas = [
    {
        id: 1,
        description: "IMSS"
    },
    {
        id: 2,
        description: other
    }
]
