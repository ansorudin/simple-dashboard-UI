import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPoll, faUserFriends, faThLarge, faEnvelope, faWallet, faArchive, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className='w-40 bg-white flex items-center py-6 flex-col justify-between'>
          <div className='border rounded-full w-16 h-16 flex items-center justify-center'>
            <div className='relative h-11 w-11 '>
              <Image src='/images/logo.jpeg' layout='fill' objectFit='cover' className='rounded-full' />
            </div>
          </div>
          <div className='flex flex-col items-center gap-10'>
            <FontAwesomeIcon
              icon={faHome}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
            <FontAwesomeIcon
              icon={faPoll}
              style={{ fontSize: 25, color : '#4C35F8'}}
            />
            <FontAwesomeIcon
              icon={faUserFriends}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
            <FontAwesomeIcon
              icon={faThLarge}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
             <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
            <FontAwesomeIcon
              icon={faWallet}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
            <FontAwesomeIcon
              icon={faArchive}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
          </div>
          <div className='border rounded-full w-16 h-16 flex items-center justify-center'>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              style={{ fontSize: 25, color : '#BDC0CC'}}
            />
          </div>
        </div>
    )
}

export default Sidebar