import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import StorageDataType, { storageData } from "../../mock/mock"
import CloseIcon from '@material-ui/icons/Close'
import Input from "@material-ui/core/Input"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                borderBottom: "unset",
            },
        },
        // hoverColor: {
        //     "&:hover": {
        //         background: "aqua",
        //     },
        // },
        toolbar: theme.mixins.toolbar,
        storageListContainer: {
            width: "100%",
            height: "100%",
        },
        nameInput: {
            width: "200px",
            fontSize:"14px",
        },
        dateInput:{
            width:"80px",
            fontSize:"14px",
        },
        input: {
            width: "40px",
            fontSize:"14px",
        },
    })
)

type ProductData = {
    date: string[]
    productName: string
    productState: string
    limit: number
    stock: number
    unit: string
}


const RowEdit = (props: { row: ProductData }) => {
    const { date, productName, productState, limit, stock, unit } = props.row
    const [open, setOpen] = React.useState(false)
    const classes = UseStyle()

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Input className={classes.nameInput} value={productName} />
                </TableCell>
                <TableCell align="left">
                    <Input className={classes.input} value={unit} />
                </TableCell>
                <TableCell align="left">
                    <Input className={classes.input} value={stock} />
                </TableCell>
                <TableCell align="left">
                    <Input className={classes.input} value={limit} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>開封日</TableCell>
                                        <TableCell>廃棄日</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {date.map((day, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                <Input className={classes.dateInput} value={day} />
                                            </TableCell>
                                            <TableCell>
                                                <Input className={classes.dateInput} value={day} />
                                            </TableCell>
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


const SettingContent = () => {
    const classes = UseStyle()
    return (
        <div className={classes.storageListContainer}>
            <div className={classes.toolbar} />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>
                                <IconButton>
                                    <CloseIcon onClick={()=>setEditMode(false)} />
                                </IconButton>
                            </TableCell> */}
                            <TableCell>
                                <h2>食材リスト</h2>
                            </TableCell>
                            <TableCell align="left">
                                <h2>単位</h2>
                            </TableCell>
                            <TableCell align="left">
                                <h2>在庫</h2>
                            </TableCell>
                            <TableCell align="left">
                                <h2>保存可能日数</h2>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {storageData.map((data:StorageDataType, index) => (
                            <RowEdit key={index} row={data} />
                        ))}
                    </TableBody> */}
                </Table>
            </TableContainer>
        </div>
    )
}

export default SettingContent
