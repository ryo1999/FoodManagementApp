// interface ProductState {
//     date: string
// }
// interface ProductState {
//     productName: string
//     productState: any
// }
type productState = "forget" | "unOpened" | "wasted"

type ProductData = {
    date: string
    productName: string
    productState: productState
}[]

export const productData: ProductData = [
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "forget",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "unOpened",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "wasted",
    },
]


export const wastedData: ProductData = [
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "wasted",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "wasted",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "wasted",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "wasted",
    },
]

export const fogetData: ProductData = [
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "forget",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "forget",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "forget",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "forget",
    },
]

export const unOpendData: ProductData = [
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "unOpened",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "unOpened",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "unOpened",
    },
    {
        date: "2022/5/10",
        productName: "ポテトチップス",
        productState: "unOpened",
    },
]

