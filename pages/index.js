/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle, faSortDown, faReceipt, faTimes, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CardMedium from '../components/CardMedium';
import CardSmall from '../components/CardSmall';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard Test Ahamd</title>
        <meta name="description" content='ini test dashboard' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-100 h-screen flex'>
        <Sidebar />
        <div className='flex-1 px-6 py-3 border-l-2 flex flex-col '>
          <Navbar />
          <div className='flex-1 pl-28 pr-20 pt-16'>
            <div className='flex items-end justify-between'>
              <div>
                <div className='text-4xl'>Sales</div>
                <div className='text-sm text-gray-500 mt-1'>Welcome to CRM dashboard</div>
              </div>
              <button className='border-2 py-3 px-5 rounded-lg text-sm font-medium hover:border-blue-700 transition duration-150 ease-out'>
                <div className='flex gap-3'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 17, color : '#BDC0CC'}}
                  />
                  <span>Add Widget</span>
                </div>
              </button>
            </div>
            <div className='mt-10'>
              <div className='flex flex-row h-64 gap-5'>
                <CardMedium title='Email Sent'>
                  <div className='mt-10 flex justify-between'>
                    <div className='relative w-32 h-32'>
                      <Image src='/images/pie.png' layout='fill' objectFit='cover' />
                    </div>
                    <div>
                      <div className='flex items-start gap-4'>
                        <FontAwesomeIcon
                          icon={faCircle}
                          style={{ fontSize: 14, color : '#432FDB'}}
                          className='mt-1'
                        />
                        <div>
                          <div className='text-sm text-gray-400'>Sent</div>
                          <div className='text-sm text-gray-900 mt-1'>345</div>
                        </div>
                      </div>
                      <div className='flex items-start gap-4 mt-4'>
                        <FontAwesomeIcon
                          icon={faCircle}
                          style={{ fontSize: 14, color : '#12BBF4'}}
                          className='mt-1'
                        />
                        <div>
                          <div className='text-sm text-gray-400'>Received</div>
                          <div className='text-sm text-gray-900 mt-1'>345</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardMedium>

                <CardMedium title='User Activity'>
                  <div className='mt-10 flex justify-between'>
                    <div className='relative w-full h-32'>
                      <Image src='/images/chart.png' layout='fill' objectFit='cover' />
                    </div>
                  </div>
                </CardMedium>

                <div className='flex flex-col basis-2/6 gap-5'>
                  <CardSmall 
                    icon={<FontAwesomeIcon
                      icon={faReceipt}
                      style={{ fontSize: 17, color : '#4C35F8'}}
                    />}
                    title='$4,250'
                    subTitle='Earned this month'
                    bgIcon='bg-indigo-100'
                  />
                  <CardSmall 
                    icon={<FontAwesomeIcon
                      icon={faHandshake}
                      style={{ fontSize: 17, color : '#0F9BCA'}}
                    />}
                    title='198'
                    subTitle='New Clients'
                    bgIcon='bg-cyan-100'
                  />

                </div>
              </div>


              <div className='flex flex-row h-64 gap-5 mt-5'>
                <div className='bg-white basis-8/12 rounded-md py-6 px-7 drop-shadow-sm flex flex-col'>
                  <div className='flex gap-20'>
                    <div>
                      <div className='text-2xl font-bold'>$38,4K</div>
                      <div className='text-sm text-gray-400'>Overal Revenue</div>
                    </div>
                    <div className='flex gap-5'>
                      <div className='flex gap-2'>
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ fontSize: 14, color : '#12BBF4'}}
                            className='mt-1'
                          />
                        <div className='text-sm text-gray-400'>Total</div>
                      </div>
                      <div className='flex gap-2'>
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ fontSize: 14, color : '#4832EF'}}
                            className='mt-1'
                          />
                        <div className='text-sm text-gray-400'>Pipeline</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-1 h-20 mt-2'>
                    <img src='/images/chart-2.png' className='object-contain' />
                  </div>
                  
                </div>
                <div className='bg-white flex-1 rounded-md py-6 px-7 drop-shadow-sm flex flex-col'>
                  <div className='flex justify-end'>
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{ fontSize: 18, color : '#DEDEDE'}}
                    />
                  </div>
                  <div className='relative w-full h-32'>
                    <Image src='/images/image-1.png' layout='fill' objectFit='cover' />
                  </div>
                  <div className='flex justify-center mt-2'>
                    <button className='bg-blue-600 text-white rounded-md w-44 py-2 hover:bg-blue-500 transition duration-150 ease-out'>
                      Try PRO For Free
                    </button>
                  </div>
                </div>
              </div>

            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}
