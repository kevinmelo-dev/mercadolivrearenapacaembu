import { FaInstagram, FaLinkedinIn, FaRegStar, FaTiktok, FaYoutube } from "react-icons/fa";
import Button from "./Button";
import Divider from "./Divider";
import { MdOutlinePlayCircle } from "react-icons/md";

import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {

    const iconStyle = {
        color: '#f9e74e',
        marginRight: '3px' 
    }

    const titleStyle = {
        fontSize: 'clamp(14px, 1vw + 1.5rem, 18px)'
    }

    const textStyle = {
        fontSize: 'clamp(11px, 0.75vw + 0.75rem, 11px)'
    }

    return (
        <footer >
            <div className="px-5">
                <div>
                    <div className="flex items-center justify-center">
                        <FaRegStar style={iconStyle} />
                        <p className="font-pacaembuBold text-mainYellow" style={titleStyle}>UM NOVO CAPÍTULO</p>
                    </div>

                    <p className="mt-3 mb-4 text-secondaryYellow font-pacaembuThin text-center" style={textStyle}>
                        Após as obras de modernização, reforma e restauro, a mercado livre arena pacaembu será a maior e melhor centro de convivência, esporte e lazer da cidade
                    </p>

                    <Button text={"CONHEÇA O PROJETO"} />
                </div>

                <div className="mt-10">
                    <div className="flex items-center justify-center">
                        <MdOutlinePlayCircle style={iconStyle} />
                        <p className="font-pacaembuBold text-mainYellow" style={titleStyle}>COMO SERÁ?</p>
                    </div>

                    <p className="mt-3 mb-4 text-secondaryYellow font-pacaembuThin text-center" style={textStyle}>
                        A Mercado Livre Arena Pacaembu, além dos equipamentos esportivos, terá novos espaços de usos múltiplos, hotel, mais de 10 ofertas gastronômicas entre bares e restaurantes e lojas.
                    </p>

                    <Button text={"ASSISTA AO VÍDEO"} />
                </div>
            </div>

            <Divider />

            <div className="px-5">
                <div>
                    <p className="font-pacaembuMedium text-mainYellow text-center" style={textStyle}>INSTITUCIONAL</p>
                    <p className="mt-1 font-pacaembuThin text-secondaryYellow text-center" style={textStyle}>
                        A Allegra Pacaembu é a concessionária que, em 25 de janeiro de 2020, assumiu a gestão do Complexo Esportivo do Pacaembu por 35 anos. A concessionária prevê a entrega de um equipamento totalmente restaurado e modernizado; respeitando sua história e amplificando seu significado.
                    </p>
                </div>

                <div className="mt-10">
                    <p className="font-pacaembuMedium text-mainYellow text-center" style={textStyle}>CONTATO:</p>
                    <p className="mt-1 font-pacaembuThin text-secondaryYellow text-center" style={textStyle}>
                        atendimento@mercadolivrearenapacaembu.com
                    </p>
                </div>

                <div className="mt-10 px-10">
                    <p className="font-pacaembuMedium text-mainYellow text-center" style={textStyle}>CONHEÇA NOSSAS REDES:</p>
                    <div className="mt-5 flex items-center justify-center">
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaWhatsapp className="text-black" /></a>
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaYoutube className="text-black" /></a>
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaInstagram className="text-black" /></a>
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaTiktok className="text-black" /></a>
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaLinkedinIn className="text-black" /></a>
                        <a className="flex items-center justify-center w-6 h-6 bg-mainYellow rounded-full mx-1"><FaXTwitter className="text-black" /></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}