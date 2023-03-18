import * as React from "react"
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-dark-blue text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="m-4">
          <h3 className="font-bold text-xl mb-3">
            Internal
          </h3>
          <a href="#" className="block text-sm mb-2 text-light-blue">Kirim Tulisan</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Pendaftaran SUKWAN</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Pendaftaran DEWAN</a>
        </div>
        <div className="m-4">
          <h3 className="font-bold text-xl mb-3">
            Eksternal
          </h3>
          <a href="#" className="block text-sm mb-2 text-light-blue">Publikasi</a>
          <a href="#" className="block text-sm mb-2">Pendaftaran SUKWAN</a>
          <a href="#" className="block text-sm mb-2">Pendaftaran DEWAN</a>
        </div>
        <div className="m-4">
          <h3 className="font-bold text-xl mb-3">
            Eksternal
          </h3>
          <a href="#" className="block text-sm mb-2">New Normal Life 101</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Bocor.in</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Sadhéngah Abah</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Laporkan Kasus Siber</a>
        </div>
        <div className="m-4">
          <h3 className="font-bold text-xl mb-3">
            Eksternal
          </h3>
          <a href="#" className="block text-sm mb-2 text-light-blue">Media Press Kit</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Kebijakan dan Privasi</a>
          <a href="#" className="block text-sm mb-2 text-light-blue">Syarat dan Ketentuan</a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://www.facebook.com/ArisanSec/" target={'_blank'}><FaFacebook width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://instagram.com/arisansecurity.id" target={'_blank'}><FaInstagram width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://twitter.com/arisansecurity" target={'_blank'}><FaTwitter width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://www.linkedin.com/company/arisansecurity/" target={'_blank'}><FaLinkedin width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://s.id/TelegramASEC" target={'_blank'}><FaTelegram width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://s.id/DiscordASEC" target={'_blank'}><FaDiscord width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://www.youtube.com/channel/UCm2pDFpGl5o4qo3uvXSc2Yw" target={'_blank'}><FaYoutube width={24} /></a>
        </div>
      </div>
    </div>
  )
}


export default Footer;