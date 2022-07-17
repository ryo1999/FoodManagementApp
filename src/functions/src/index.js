// Expressの読み込み
const express = require("express")
const admin = require("firebase-admin")
const functions = require("firebase-functions")
admin.initializeApp(functions.config().firebase)
const db = admin.firestore()
const app = express()


/* usersテーブル作成*/
//all_userからusersにデータを移行
app.get("/create_users", async (req, res) => {

    await db.collection("FoodStock").doc("FoodKind").update({5:"sds"})
    
    res.end()
})

// app.use(express.static(path.join(__dirname,"")))

// 出力
exports.api = functions.https.onRequest(app)