
import Popup from "reactjs-popup";

const AddSubjectPopUp = () => {

    return (
        <Popup trigger={<button className="bg-gray-600 m-10  rounded-3xl font-bold text-white p-2 inline-flex items-center"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/> </svg><span>Add Subject</span></button>} position="center">
            <div>Popup content here !!</div>
        </Popup>
    )
}

export default AddSubjectPopUp;