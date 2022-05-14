// import { dates } from "../../utils/Date_management"
import React from "react"
import "../../style/Modal.css"
import { useModal } from "react-hooks-use-modal"

type ModalProps = {
    modalSubject: {
        title?: string
        explanation: string
        action?: () => void
    }
    setIsModalOpen: (v: boolean) => void
}
const Modal: React.FC<ModalProps> = (props) => {
    const { modalSubject, setIsModalOpen } = props
    const [ModalContent, modalOpen, modalClose] = useModal("root", {
        preventScroll: false,
    })

    React.useEffect(() => {
        modalOpen()
    }, [modalOpen])

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
                                    setIsModalOpen(false)
                                }}
                            >
                                キャンセル
                            </button>
                            <button
                                className="button"
                                onClick={() => {
                                    modalClose()
                                    setIsModalOpen(false)
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
