import React from "react"
import AppTopbar from "@/components/molecules/appTopbar"
import StorageContent from "@/components/organisms/storageContent"
import {useRouter} from "next/router"

import HomeContent from "@/components/organisms/homeContent"

const Template: React.FC = () => {
    const router = useRouter()
    const [page, setPage] = React.useState(router.pathname)
    return (
        <>
            <AppTopbar page={page.slice(1)} setPage={setPage}>
                {page === "/Home" && <HomeContent />}
                {page === "/Storage" && <StorageContent />}
            </AppTopbar>
        </>
    )
}

export default Template
