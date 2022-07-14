import React from "react"
import Button from "@material-ui/core/Button"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            backgroundColor: "#3f51b5",
            color: "white",
            minWidth: "100px",
            fontSize: "20px",
            "&:hover": {
                backgroundColor: "#4682B4",
                color: "white",
            },
        },
        buttonlocate: {
            margin: "0px 10px",
            display:"flex",
            justifyContent:"space-between",
        },
    })
)

const HomeContentButton = () => {
    const classes = UseStyle()

    return (
        <div className={classes.buttonlocate}>
            <Button className={classes.button} variant="contained">
                開封登録
            </Button>
            <Button className={classes.button} variant="contained">
                廃棄
            </Button>
        </div>
    )
}

export default HomeContentButton