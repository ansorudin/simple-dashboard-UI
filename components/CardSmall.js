
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const CardSmall = ({icon, title, subTitle, bgIcon}) => {
    return (
        <div className='bg-white basis-6/12 rounded-md flex px-6 py-8 items-start justify-between drop-shadow-sm'>
            <div className='flex gap-4'>
                <div className={`w-12 h-12 flex justify-center items-center rounded-full ${bgIcon}`}>
                {icon}
                </div>
                <div>
                <div className='text-xl font-semibold'>{title}</div>
                <div className='text-sm text-gray-400'>{subTitle}</div>
                </div>
            </div>
            <FontAwesomeIcon
            icon={faEllipsisH}
            style={{ fontSize: 17, color : '#DEDEDE'}}
            />
        </div>
    )
}

export default CardSmall