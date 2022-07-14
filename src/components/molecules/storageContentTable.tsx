import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import Input from "@material-ui/core/Input"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import DeleteIcon from "@material-ui/icons/Delete"
import StorageDataType from "../../mock/mock"
import {format} from "date-fns"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                borderBottom: "unset",
            },
        },
        nameInput: {
            width: "300px",
            fontSize: "14px",
        },
        dateInput: {
            width: "80px",
            fontSize: "14px",
        },
        input: {
            width: "40px",
            fontSize: "14px",
        },
        name: {
            width: "300px",
            flex: "0 0 auto",
        },
        iconPos: {
            width: "10px",
        },
        pos: {
            padding: "0px 0px 0px 30px",
        },
        underLine: {
            display: "inline-block",
            width: "300px",
        },
        deleteButton: {
            padding: "0px 0px 1px 0px",
        },
        addIcon: {
            padding: "0px 0px 0px 0px",
        },
    })
)

type RowProps = {
    isEditMode: boolean
    row: StorageDataType
}

const StorageContentTable: React.FC<RowProps> = (props) => {
    const { isEditMode, row } = props
    const [open, setOpen] = React.useState(false)
    const classes = UseStyle()

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell className={classes.iconPos}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {isEditMode ? (
                    <>
                        <TableCell className={classes.name} align="left" component="th" scope="row">
                            <Input className={classes.nameInput} value={row.productName} />
                        </TableCell>
                        <TableCell align="center">
                            <Input className={classes.input} value={row.limit} />
                        </TableCell>
                        <TableCell align="left">
                            <Input className={classes.input} value={row.stocks.length} />
                        </TableCell>
                        <TableCell align="left">
                            <Input className={classes.input} value={row.unit} />
                        </TableCell>
                    </>
                ) : (
                    <>
                        <TableCell className={classes.name} align="left" component="th" scope="row">
                            {row.productName}
                        </TableCell>
                        <TableCell align="center">{row.limit}</TableCell>
                        <TableCell className={classes.pos} align="left">
                            {row.stocks.length}
                        </TableCell>
                        <TableCell className={classes.pos} align="left">
                            {row.unit}
                        </TableCell>
                        <TableCell align="left">
                            <IconButton className={classes.deleteButton}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </>
                )}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.underLine}>開封日</TableCell>
                                        <TableCell className={classes.underLine}>廃棄日</TableCell>
                                        {!isEditMode && (
                                            <IconButton className={classes.addIcon}>
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                        )}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.stocks.map((stock, index) => (
                                        <TableRow key={index}>
                                            {isEditMode ? (
                                                <>
                                                    <TableCell className={classes.underLine} component="th" scope="row">
                                                        <Input className={classes.dateInput} value={format(new Date(stock.date*1000), "yyyy/MM/dd")} />
                                                    </TableCell>
                                                    <TableCell className={classes.underLine}>
                                                        <Input className={classes.dateInput} value={format(new Date(stock.date*1000), "yyyy/MM/dd")} />
                                                    </TableCell>
                                                </>
                                            ) : (
                                                <>
                                                    <TableCell className={classes.underLine}>{format(new Date(stock.date*1000), "yyyy/MM/dd")}</TableCell>
                                                    <TableCell className={classes.underLine}>{format(new Date(stock.date*1000), "yyyy/MM/dd")}</TableCell>
                                                    <IconButton className={classes.deleteButton}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </>
                                            )}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default StorageContentTable