import React from "react"
import HomeContentCard from "@/components/molecules/homeContentCard"
import Calendar from "@/components/molecules/calendar"
import HomeContentButton from "@/components/molecules/homeContentButton"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 0,
        },
        toolbar: theme.mixins.toolbar,
        home: {
            display: "flex",
        },
        calendar: {
            flex: "0 0 60%",
        },
        homeContentCard: {
            flex: "0 0 40%",
        },
    })
)

const HomeContent: React.FC = () => {
    const classes = UseStyle()

    return (
        <>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.home}>
                    <div className={classes.calendar}>
                        <Calendar />
                        <HomeContentButton />
                    </div>
                    <div className={classes.homeContentCard}>
                        <HomeContentCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent