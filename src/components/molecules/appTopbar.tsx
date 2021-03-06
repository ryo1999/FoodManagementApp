import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import HomeIcon from "@material-ui/icons/Home"
import StorageIcon from "@material-ui/icons/Storage"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { useRouter } from "next/router"

const drawerWidth = 200

const UseStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: "25px",
            marginLeft: "-22px",
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: "hidden",
            width: theme.spacing(7) + 3,
            // [theme.breakpoints.up("sm")]: {
            //     width: theme.spacing(9) + 1,
            // },
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        icon: {
            margin: theme.spacing(2, 0),
            fontSize: "30px",
        },
    })
)

type AppTopbarProps = {
    children: React.ReactNode
    page: string
}

const AppTopbar: React.FC<AppTopbarProps> = (props) => {
    const router = useRouter()
    const classes = UseStyle()
    const { page } = props
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleMenuButton = (url: string) => {
        router.push(url)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <section>
                        <h2>{page}</h2>
                    </section>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => handleMenuButton("/home")}>
                        <ListItemIcon>
                            <HomeIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary={"?????????"} />
                    </ListItem>
                    <ListItem button onClick={() => handleMenuButton("/storage")}>
                        <ListItemIcon>
                            <StorageIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary={"?????????????????????"} />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            {props.children}
        </div>
    )
}
export default AppTopbar
