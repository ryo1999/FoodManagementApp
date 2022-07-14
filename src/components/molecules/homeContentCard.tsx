import React from "react"
import Card from "@material-ui/core/Card"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox"
import { fogetData, wastedData, todayWasteData } from "../../mock/mock"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        wasteCard: {
            margin: "0px 10px 0px 0px",
            // width: "50%",
            height: "300px",
            flex: "0 0 50%",
            overflow: "scroll",
            scrollbarWidth: "none" /* Firefox */,
            // maxHeight: 440,
            "&::-webkit-scrollbar": {
                display: "none",
            } /* Chrome */,
            // margin: theme.spacing(5, 0, 0, 0),
        },
        waste: {
            margin: "10px 10px 10px 0px",
            height: "380px",
        },
        wasteCards: {
            display: "flex",
            flex: "0 0 auto",
            margin: "0px 20px 0px 0px",
        },
        wasteTitle: {
            textAlign: "center",
        },
        // wasteInformation: {
        //     flex: "0 0 40%",
        // },
        check: {
            padding: "0px 0px 0px 15px",
        },
        list: {
            padding: "0px 0px 0px 5px",
        },
    })
)

const HomeContentCard = () => {
    const classes = UseStyle()

    return (
        <div>
            <div className={classes.wasteCards}>
                <Card className={classes.wasteCard}>
                    <section className={classes.wasteTitle}>
                        <h3>廃棄忘れ</h3>
                    </section>
                    {fogetData.map((value, index) => {
                        return (
                            <div className={classes.check} key={"forgetData" + index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <>
                                            <div>{value.productName} </div>
                                            <div>{"(" + value.date + "開封)"}</div>
                                        </>
                                    }
                                />
                            </div>
                        )
                    })}
                </Card>

                <Card className={classes.wasteCard}>
                    <section className={classes.wasteTitle}>
                        <h3>今月の廃棄済み</h3>
                    </section>
                    <ul>
                        {wastedData.map((value, index) => {
                            return (
                                <li className={classes.list} key={index}>
                                    {value.productName + "(2022/6/" + (index+5) + "廃棄)"}
                                </li>
                            )
                        })}
                    </ul>
                </Card>
            </div>

            <Card className={classes.waste}>
                <section className={classes.wasteTitle}>
                    <h3>今日の廃棄</h3>
                </section>
                {todayWasteData.map((value, index) => {
                    return (
                        <div className={classes.check} key={"wasteData" + index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label={value.productName + "(" + value.date + "開封)"}
                            />
                        </div>
                    )
                })}
            </Card>
        </div>
    )
}

export default HomeContentCard
