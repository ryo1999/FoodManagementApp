import React from "react"
import HomeContentCard from "../molecules/homeContentCard"
import Calendar from "../molecules/Calendar"
import HomeContentButton from "../molecules/homeContentButton"
// import AppTopbar from "../molecules/appTopbar"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            // padding: theme.spacing(0, 0, 0, 0),
        },
        toolbar: theme.mixins.toolbar,
        home: {
            display: "flex",
            // alignItems: "flex-start",
        },
        calendar: {
            flex: "0 0 60%",
        },
        homecontentcard:{
            flex:"0 0 40%",
        },
    })
)

const HomeContent: React.FC = (props) => {
    const classes = UseStyle()
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({ ...state, [event.target.name]: event.target.checked })
    // }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.home}>
                    <div className={classes.calendar}>
                        <Calendar />
                        <HomeContentButton />
                    </div>
                    <div className={classes.homecontentcard}>
                        <HomeContentCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent
