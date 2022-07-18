import React from "react"
import Button from "@material-ui/core/Button"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useRouter } from "next/router"

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
    })
)

const Sample: React.FC = () => {
    const router = useRouter()
    const classes = UseStyle()

    const handleClick = () => {
        router.push("/Home")
    }

    return (
        <div>
            <Button className={classes.button} onClick={handleClick}>ここをクリック</Button>
        </div>
    )
}

export default Sample
