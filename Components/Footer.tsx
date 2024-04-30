import { ClipboardDocumentIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
    const IconWrapper = ({ children }: { children: ReactNode }) => (
        <div className='md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <div className='md:w-16 md:h-16 w-14 h-14'>
                {children}
            </div>
        </div>
    );

    const Location = () => (
        <div className='flex items-center space-x-6'>
            <IconWrapper>
                <MapIcon className='text-black' />
            </IconWrapper>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Location</h1>
                <p className='opacity-80 text-white'>Liverpool, UK</p>
            </div>
        </div>
    )

    const Email = () => {
        const email = 'RobertWhalenBusiness@hotmail.com';

        const copy = () => {
            navigator.clipboard.writeText(email);
            toast("Copied email to clipboard");
        }

        return <div className='flex items-center space-x-6'>
            <IconWrapper>
                <EnvelopeIcon className='text-black' />
            </IconWrapper>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Send me an email</h1>
                <p className='opacity-80 text-white flex items-center'>{email}&nbsp;
                    <button className='w-4 h-4'
                        onClick={copy}
                    >
                        <ClipboardDocumentIcon className='text-white hover:text-gray-700' />
                    </button>
                </p>
            </div>
        </div>
    }

    return <footer className='pt-32 pb-16 bg-[#02050a]'>
        <section className='grid border-b-[1px] pb-24 border-gray-400 grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-12'>
            <Location />
            <Email />
        </section>
        <section className='w-[80%] mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-8 md:mb-0 text-white opacity-20'>
                Robert Whalen {new Date().getFullYear()} | All Rights Reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-base text-white opacity-20'>Terms & Conditions</p>
                <p className='text-base text-white opacity-20'>Privacy Policy</p>
                <p className='text-base text-white opacity-20'>Sitemap</p>
            </div>
        </section>
    </footer>
}

export default Footer;