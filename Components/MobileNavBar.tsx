import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
    open: boolean;
    closeMenu: () => void;
}

const MobileNavBar = ({ open, closeMenu }: Props) => {

    const navAnimation = open ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div className={`${navAnimation} fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000] bg-[#09101a]`}>
            <div className='w-[80vh] h-[100vh] flex flex-col items-center justify-center'>
                <div className='nav-link-mobile'>About</div>
                <div className='nav-link-mobile'>Services</div>
                <div className='nav-link-mobile'>Skills</div>
                <div className='nav-link-mobile'>Projects</div>
                <div className='nav-link-mobile'>Testimonials</div>
            </div>
            <div
                className='absolute cursor-pointer top-4 right-4 w-4 h-4 text-yellow-400'
                onClick={closeMenu}
            >
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNavBar;