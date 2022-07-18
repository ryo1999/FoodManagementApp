import dynamic from "next/dynamic"
import React from "react"
// import AppTopbar from "@/components/molecules/appTopbar"

const AppTopbar = dynamic(() => import("@/components/molecules/appTopbar"), {
    ssr: false,
})
const StorageContent = dynamic(() => import("@/components/organisms/storageContent"), {
    ssr: false,
})

const Storage: React.FC = () => {
    return (
        <>
            <AppTopbar page="食材データ管理">
                <StorageContent />
            </AppTopbar>
        </>
    )
}
export default Storage
