import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import allLocales from "@fullcalendar/core/locales-all"
// import interactionPlugin from "@fullcalendar/interaction"
import Card from "@material-ui/core/Card"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
// import dynamic from "next/dynamic"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: "92%",
        },
        calendarCard: {
            height:"90%",
            margin: "0px 10px",
            padding: "12px",
            minWidth: "400px",
            flex:"0 0 100%",
        },
    })
)

const Calendar = () => {
    const classes = UseStyle()

    return (
        <div className={classes.container}>
            <Card className={classes.calendarCard}>
                <FullCalendar
                    headerToolbar={{
                        left: "",
                        center: "title",
                        right: "prev,next",
                    }}
                    contentHeight="auto"
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locales={allLocales}
                    locale="ja"
                />
            </Card>
        </div>
    )
}

export default Calendar
