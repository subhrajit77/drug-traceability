"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Create Your Account',
        subheading: 'Get started by creating your OmniLedger account. Securely manage your traceability operations with a user-friendly interface and personalized dashboard.',
        hiddenpara: 'Sign up quickly and set up your profile to access OmniLedger’s features. ',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Upload and Verify Data',
        subheading: 'Easily upload and verify product data at each stage of your supply chain.',
        hiddenpara: 'Use OmniLedger’s intuitive tools to input and verify data such as product origins, processing stages, and distribution details.'
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Track and Monitor',
        subheading: 'Monitor the entire lifecycle of your products with real-time tracking. Access detailed reports and insights to make informed decisions and ensure compliance.',
        hiddenpara: 'Track products from origin to destination, view historical data, and generate compliance reports with ease.',
    },
]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How It Works</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>OmniLedger uses blockchain technology to securely capture, verify, and track product data across all stages of the supply chain. Each transaction is recorded in an immutable ledger, providing real-time transparency and trust for businesses across various industries.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
