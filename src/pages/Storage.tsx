import dynamic from "next/dynamic"
import React from "react"

const Template = dynamic(
    () => import('@/components/templates/template'),
    {
       ssr: false,
    }
)

const Storage: React.FC = () => {
    return <Template />
}
export default Storage
