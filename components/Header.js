import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import HeaderIcon from './HeaderIcon';

const Header = () => {
    return (
        <>
            <div className="">
                <HeaderIcon Icon={HomeIcon} title="Home" />
                <HeaderIcon Icon={UserIcon} title="Account" />
                <HeaderIcon Icon={PhoneIcon} title="Contact" />
                <HeaderIcon Icon={InformationCircleIcon} title="About" />
            </div>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
                width={100}
                height={100}


            />
        </>
    );
}

export default Header;