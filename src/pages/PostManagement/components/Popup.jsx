import { memo } from "react"
import { MdClose } from "react-icons/md";

export default memo(function Popup(props) {
    const { statusOpenCf, setStatusOpenCf, dataPopup } = props
    const handleCloseConfirmationBox = () => {
        setStatusOpenCf(false)
    }
    return (
        <>
            <div className={`overlay inset-0 opacity-60 z-40 transition ${statusOpenCf ? 'bg-gray-300 fixed' : ''}`}></div>
            <div className={`container z-50 fixed ${statusOpenCf ? 'top-[20%]' : '-top-2/4'} left-[30%] right-[30%] w-fit bg-white px-8 py-9 rounded transition-all  ease-in-out delay-800`}>
                <div className="relative">
                    <button className="absolute -right-6 -top-6 text-[18px]" onClick={handleCloseConfirmationBox}>
                        <MdClose />
                    </button>
                    <div className="confirmation-text mb-7 text-base pt-3">
                        <table>
                            <tbody>
                                <tr className="font-medium align-baseline">
                                    <td className="pr-2">Title: </td>
                                    <td>{dataPopup.title}</td>
                                </tr>
                                <tr>
                                    <td className="pr-2 font-medium py-1">Id: </td>
                                    <td>{dataPopup.id}</td>
                                </tr>
                                <tr>
                                    <td className="pr-2 font-medium py-1">UserId: </td>
                                    <td>{dataPopup.userId}</td>
                                </tr>
                                <tr className="align-baseline">
                                    <td className="pr-2 font-medium">Body: </td>
                                    <td>{dataPopup.body}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
})
