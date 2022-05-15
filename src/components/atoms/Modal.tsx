// import { dates } from "../../utils/Date_management"
import React from "react"
import "../../style/Modal.css"
import { useModal } from "react-hooks-use-modal"

type ModalProps = {
    modalSubject: {
        title?: string
        explanation: string | JSX.Element
        action?: () => void
    }
    ModalContent: React.FC<{
        children: React.ReactNode
    }>
    modalClose: () => void
    isModalOpen: boolean
}
const Modal: React.FC<ModalProps> = (props) => {
    const { modalSubject, ModalContent, modalClose } = props

    return (
        <>
            {modalSubject && (
                <ModalContent>
                    <div className="modalStyle">
                        <h2>{modalSubject.title}</h2>
                        <p>{modalSubject.explanation}</p>
                        {/* <input type="date" id="date" defaultValue={dates.date} /> */}
                        <div className="judge">
                            <button
                                className="button"
                                onClick={() => {
                                    modalClose()
                                }}
                            >
                                キャンセル
                            </button>
                            <button
                                className="button"
                                onClick={() => {
                                    modalClose()
                                    //   modalSubject.action()
                                }}
                            >
                                登録
                            </button>
                        </div>
                    </div>
                </ModalContent>
            )}
        </>
    )
}

export default Modal
