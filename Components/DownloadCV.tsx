import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";

const DownloadCV = () => (
    <a href='RW-resume-public.pdf' download='robert-whalen_resume.pdf'>
        <button
            className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase flex items-center space-x-2 bg-[#55e6a5] rounded-md'
            onClick={() => toast('Successfully downloaded latest CV')}
        >
            <p>Download CV</p>
            <ArrowDownTrayIcon className='w-6 h-6 text-black' />
        </button>
    </a>
);

export default DownloadCV;