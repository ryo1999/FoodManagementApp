import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { storageData } from "@/mock/mock"
import SaveIcon from "@material-ui/icons/Save"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import StorageContentTable from "@/components/molecules/storageContentTable"
import StorageDataType from "@/mock/mock"

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
        storageListContainer: {
            width: "100%",
            height: "100%",
        },
        addIcon: {
            padding: "0px 0px 0px 0px",
        },
    })
)

const StorageContent = () => {
    const classes = UseStyle()
    const [isEditMode, setEditMode] = React.useState(false)

    return (
        <div className={classes.storageListContainer}>
            <div className={classes.toolbar} />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {isEditMode ? (
                                    <IconButton>
                                        <SaveIcon onClick={() => setEditMode(false)} />
                                    </IconButton>
                                ) : (
                                    <IconButton>
                                        <EditIcon onClick={() => setEditMode(true)} />
                                    </IconButton>
                                )}
                            </TableCell>
                            <TableCell align="left">
                                <h2>食材リスト</h2>
                            </TableCell>
                            <TableCell align="center">
                                <h2>保存可能日数</h2>
                            </TableCell>
                            <TableCell align="left">
                                <h2>在庫</h2>
                            </TableCell>
                            <TableCell align="left">
                                <h2>単位</h2>
                            </TableCell>
                            <TableCell align="left">
                                {isEditMode ? (
                                    <IconButton>
                                        <CloseIcon onClick={() => setEditMode(false)} />
                                    </IconButton>
                                ) : (
                                    <IconButton className={classes.addIcon}>
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storageData.map((data:StorageDataType, index) => (
                            <StorageContentTable key={index} row={data} isEditMode={isEditMode} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StorageContent
