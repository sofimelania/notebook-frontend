import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

export const MyNotes = ({ text, updatingInInput, deleteNote}) => {
    return (
        <div>
            <p>{ text }</p>
            <FiEdit onClick={updatingInInput}/>
            <RiDeleteBin5Line onClick={deleteNote}/>
        </div>
    )
}