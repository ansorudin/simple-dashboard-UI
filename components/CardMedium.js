import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSortDown, } from "@fortawesome/free-solid-svg-icons";

const CardMedium = ({title, children}) => {
    return (
        <div className='bg-white basis-2/6 rounded-md py-6 px-7 drop-shadow-sm'>
            <div className='flex justify-between'>
            <div className='text-sm text-gray-800'>{title}</div>
            <div className='flex items-start gap-2'>
                <div className='text-sm text-gray-400'>This Week</div>
                <FontAwesomeIcon
                icon={faSortDown}
                style={{ fontSize: 18, color : '#BDC0CC'}}
                />
            </div>
            </div>
            {children}
        </div>
    )
}

export default CardMedium