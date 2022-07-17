import React from "react"
import AppTopbar from "@/components/molecules/appTopbar"
import StorageContent from "@/components/organisms/storageContent"

// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import HomeContent from "@/components/organisms/homeContent"

const Template: React.FC = () => {
    const [page, setPage] = React.useState("home")
    return (
        <>
            <AppTopbar page={page} setPage={setPage}>
                {page === "home" && <HomeContent />}
                {page === "storage" && <StorageContent />}
            </AppTopbar>
        </>
    )
}

export default Template
