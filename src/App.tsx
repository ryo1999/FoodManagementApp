import React from "react"
import "./style/App.css"
import "./style/Modal.css"
// import { useModal } from "react-hooks-use-modal"
import Button from "@material-ui/core/Button"
import { IconButton } from "@material-ui/core"
// import Grid from "@material-ui/core/Grid"
import SettingsIcon from "@mui/icons-material/Settings"
import UseStyle from "./components/UseStyle"
// import { dates } from "./utils/Date_management"
import Modal from "./components/atoms/Modal"
// import HomeIcon from '@mui/icons-material/Home';

type ModalSubjectProps = {
    title?: string
    explanation: string
    action?: () => void
}

// type actionTypeProps = {
//     types:"waste"|"open"|"add"|"edit"|"delete"
// }

const App: React.FC = () => {
    const classes = UseStyle()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [modalSubject, setModalSentence] = React.useState<ModalSubjectProps>({
        title: "",
        explanation: "",
    })

    const handleModalOpen = (actionType: "waste" | "open" | "add" | "edit" | "delete") => {
        setIsModalOpen(true)
        switch (actionType) {
            case "waste":
                let subject = {
                    title: "",
                    explanation: "廃棄します。よろしいですか？",
                    action: () => {
                        console.log("廃棄処理")
                    },
                }
                setModalSentence(subject)
                break
            case "open":
                setModalSentence({ title: "開封登録", explanation: "日付を入力" })
                break
            case "add":
                setModalSentence({ title: "", explanation: "追加" })
                break
            case "edit":
                setModalSentence({
                    title: "",
                    explanation: `編集${(<br />)}しますか?`,
                })
                break
            case "delete":
                setModalSentence({ title: "", explanation: "を削除します。よろしいですか？" })
                break
        }
    }

    return (
        <div>
            {/* <ModalWaste>
                <div className="modalStyle">
                    <p>〜を廃棄します。</p>
                    <p>よろしいですか？</p>
                    <div className="judge">
                        <button className="judge" onClick={close}>
                            いいえ
                        </button>
                        <button className="judge" onClick={close}>
                            はい
                        </button>
                    </div>
                </div>
            </ModalWaste> */}
            {/* 開封モーダル */}
            {/* <ModalOpened>
                <div className="modalStyle">
                    <h2>開封登録</h2>
                    <p>日付を入力</p>
                    <input type="date" id="date" defaultValue={dates.date} />
                    <button
                        className="button"
                        onClick={() => {
                            close_opened()
                            Add()
                        }}
                    >
                        登録
                    </button>
                </div>
            </ModalOpened> */}
            {/* 削除モーダル */}
            {/* <ModalDelete>
                <div className="modalStyle">
                    <p>〜を削除します。</p>
                    <p>よろしいですか？</p>
                    <div className="judge">
                        <button className="judge" onClick={close_delete}>
                            いいえ
                        </button>
                        <button className="judge" onClick={close_delete}>
                            はい
                        </button>
                    </div>
                </div>
            </ModalDelete> */}
            {/* 削除モーダル2 */}
            {/* <ModalDelete2>
                <div className="modalStyle">
                    <p>〜の食材データを削除します。</p>
                    <p>よろしいですか？</p>
                    <div className="judge">
                        <button className="judge" onClick={close_delete2}>
                            いいえ
                        </button>
                        <button className="judge" onClick={close_delete2}>
                            はい
                        </button>
                    </div>
                </div>
            </ModalDelete2> */}

            {/* 開封モーダル */}
            {isModalOpen && <Modal modalSubject={modalSubject} setIsModalOpen={setIsModalOpen} />}

            {/* 歯車アイコン */}
            <div className="settingbutton">
                <IconButton>
                    <SettingsIcon className={classes.setting} fontSize="large" />
                </IconButton>
            </div>

            {/* ホーム画面 */}
            {/* 廃棄ボタン */}
            <div className="wastebutton">
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                        handleModalOpen("waste")
                    }}
                >
                    廃棄
                </Button>
            </div>

            {/* 在庫管理画面 */}
            <div className="Stockbutton">
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                        handleModalOpen("open")
                    }}
                >
                    開封
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                        handleModalOpen("add")
                    }}
                >
                    追加
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                        handleModalOpen("edit")
                    }}
                >
                    編集
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                        handleModalOpen("delete")
                    }}
                >
                    削除
                </Button>
            </div>

            {/* 食材データベース管理画面 */}
            {/* <div className="Databutton">
                <Button className={classes.button} variant="contained">
                    追加
                </Button>
                <Button className={classes.button} variant="contained">
                    編集
                </Button>
                <Button className={classes.button} variant="contained" onClick={open}>
                    削除
                </Button>
            </div> */}
        </div>
    )
}
export default App
