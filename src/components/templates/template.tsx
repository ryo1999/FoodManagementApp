import React from "react"
import AppTopbar from "../molecules/appTopbar"
// import ManageContent from "../organisms/manageContent"
import StorageContent from "../organisms/storageContent"

// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import HomeContent from "../organisms/homeContent"

const Template: React.FC = () => {
    const [page, setPage] = React.useState("home")
    return (
        <>
            <AppTopbar page={page} setPage={setPage}>
                {page === "home" && <HomeContent />}
                {page === "storage" && <StorageContent />}
                {/* {page === "setting" && <SettingContent />} */}
            </AppTopbar>
        </>
    )
}

export default Template
