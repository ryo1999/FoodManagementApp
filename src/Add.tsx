import {db} from "./firebase";

function Add(){
    fetch("/create_users")
    const Doc = db.collection("FoodStock").doc("FoodKind");
    Doc.get();
}


export default Add;
