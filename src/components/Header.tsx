import Image from "next/image";
import Logo from '../../public/img/logo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <div className="flex-shrink-0 w-20 md:w-28 lg:w-36 xl:w-44">
            <Image 
                src={Logo} 
                alt="Logo"
                layout="responsive"
                width={500}
                height={200}
            />
            </div>
            
            <div className="flex-grow mx-4 border-t-2 border-secondaryYellow"></div>
            
            <p className="flex-shrink-0 text-sm md:text-base lg:text-lg xl:text-xl text-secondaryYellow font-harabara">
            Mapa Interativo da Arena
            </p>
        </header>
    )
}