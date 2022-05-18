import React from "react"
import AppTopbar from "../molecules/appTopbar"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import allLocales from "@fullcalendar/core/locales-all"
import Card from "@material-ui/core/Card"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox"
import { fogetData } from "../../mock/mock"

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
            flexGrow: 1,
            padding: theme.spacing(3, 0, 0, 0),
        },
        toolbar: theme.mixins.toolbar,

        home: {
            display: "flex",
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
                    <Card className={classes.wasteCard}>
                        <section className={classes.wasteTitle}>
                            <h3>廃棄忘れ</h3>
                            {fogetData.map((value, index) => {
                                return (
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // checked={state.checkedB}
                                                    // onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label={value.productName}
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Card>
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
                    <Card className={classes.wasteCard}>
                        <section className={classes.wasteTitle}>
                            <h3>今月の廃棄済み</h3>
                        </section>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HomeContent
