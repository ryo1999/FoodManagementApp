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
import SettingsIcon from "@material-ui/icons/Settings"
import HomeIcon from "@material-ui/icons/Home"
import StorageIcon from "@material-ui/icons/Storage"
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { PropaneSharp } from "@mui/icons-material"

const drawerWidth = 220

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
            marginRight: 36,
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
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3, 0, 0, 0),
        },
        icon: {
            margin: theme.spacing(2, 0),
        },
    })
)

type AppTopbarProps = {
    children: React.ReactNode
}

const AppTopbar: React.FC<AppTopbarProps> = (props) => {
    const classes = UseStyle()
    // const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const keyword = ["ホーム", "在庫管理", "食材データ設定"]

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
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
                        <MenuIcon />
                    </IconButton>
                    <section>
                        <h2>ホーム</h2>
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
                        {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[
                        <HomeIcon className={classes.icon} fontSize="large" />,
                        <StorageIcon className={classes.icon} fontSize="large" />,
                        <SettingsIcon className={classes.icon} fontSize="large" />,
                    ].map((item, index) => (
                        <ListItem button key={keyword[index]}>
                            <ListItemIcon>{item}</ListItemIcon>
                            <ListItemText primary={keyword[index]} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            {props.children}
        </div>
    )
}
export default AppTopbar
