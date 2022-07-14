import { getUnixTime } from "date-fns"
type productStates = "forget" | "unOpened" | "wasted" | "needWaste" | "storage"

type ProductData = {
    date: string
    productName: string
    productState: productStates
}[]

type ProductData2 = {
    date: Date[]
    productName: string
    productState: productStates
    limit: number
    stock: number
    unit: string
}

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
        productName: "牛乳",
        productState: "wasted",
    },
    {
        date: "2022/5/10",
        productName: "ポップコーン",
        productState: "wasted",
    },
]

export const todayWasteData: ProductData = [
    {
        date: "2022/5/20",
        productName: "ポップコーン",
        productState: "needWaste",
    },
]

export const fogetData: ProductData = [
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

export const storageData = [
    {
        stocks: [
            { stock_id: "1", date: getUnixTime(new Date()) },
            { stock_id: "2", date: getUnixTime(new Date()) },
        ],
        product_id: "0",
        productName: "ポテトチップス",
        productState: "storage",
        limit: 30,
        unit: "袋",
    },
    {
        stocks: [{ stock_id: "1", date: getUnixTime(new Date()) }],
        product_id: "1",
        productName: "ポップコーン",
        productState: "storage",
        limit: 30,
        unit: "袋",
    },
    {
        stocks: [
            { stock_id: "1", date: getUnixTime(new Date()) },
            { stock_id: "2", date: getUnixTime(new Date()) },
            { stock_id: "3", date: getUnixTime(new Date()) },
            { stock_id: "4", date: getUnixTime(new Date()) },
            { stock_id: "5", date: getUnixTime(new Date()) },
        ],
        product_id: "2",
        productName: "ポッキー",
        productState: "storage",
        limit: 60,
        unit: "袋",
    },
]
type StorageDataType = typeof storageData[0]
export default StorageDataType
