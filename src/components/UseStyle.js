import {makeStyles} from "@material-ui/core/styles";

const UseStyle = makeStyles({
    button:{
        backgroundColor:"aqua",
        color:"black",
        minWidth:"90px",
        fontSize:"20px",
        "&:hover":{
            backgroundColor:"blue",
            color:"white"
        }
    },
    setting:{
        color:"limegreen",
    },
});

export default UseStyle;