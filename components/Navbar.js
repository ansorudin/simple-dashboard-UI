import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt, faSortDown, faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className='flex justify-between h-20'>
          <div className='flex items-center gap-3'>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 18, color : '#BDC0CC'}}
            />
            <input placeholder='Search for anything' type='text' className='bg-transparent focus:outline-0 placeholder:text-sm text-sm'  />
          </div>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ fontSize: 18, color : '#BDC0CC'}}
            />
            <div className='text-gray-400 text-sm'>Today</div>
            <div className='text-sm'>August 29</div>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ fontSize: 18, color : '#BDC0CC'}}
              className='mb-2'
            />
          </div>
          <div className='flex items-center gap-6'>
            <div className='bg-white px-5 py-2 rounded drop-shadow-md'>
              <div className='text-sm'>You have <span className='font-bold'>27</span> new leads 👉</div>
            </div>
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: 18, color : '#BDC0CC'}}
            />
            <div className='flex gap-3'>
              <div className='relative h-7 w-7'>
                <Image src='/images/ava.jpeg' layout='fill' objectFit='cover' className='rounded-full' />
              </div>
              <FontAwesomeIcon
                icon={faSortDown}
                style={{ fontSize: 18, color : '#BDC0CC'}}
                className='mb-2'
              />
            </div>
          </div>
        </div>
    )
}

export default Navbar