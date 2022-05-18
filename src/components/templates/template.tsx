import React from "react"
import AppTopbar from "../molecules/appTopbar"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import HomeContent from "../organisms/homeContent"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        calendarCard: {
            margin: "12px",
            padding: "12px",
        },
        wasteCard: {
            margin: "12px",
            width: "300px",
            flex: "0 0 auto",
            // margin: theme.spacing(5, 0, 0, 0),
        },
        wasteTitle: {
            textAlign: "center",
        },
        content: {
            margin: "60px 0px 0px 80px",
            flexGrow: 1,
            padding: theme.spacing(3, 0, 0, 0),
        },

        home: {
            display: "flex",
        },
    })
)

const Template: React.FC = (props) => {
    const classes = UseStyle()
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({ ...state, [event.target.name]: event.target.checked })
    // }

    return (
        <>
            <AppTopbar>
                <HomeContent />
            </AppTopbar>
        </>
    )
}

export default Template
