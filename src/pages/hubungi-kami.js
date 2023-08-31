import * as React from "react"
import Header from "../components/header"
import "tailwindcss/tailwind.css"
import Img from "gatsby-image"
import Footer from "../components/footer"
import Post from "../components/post"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posts = [
  {
    author: 'Arisan Security',
    title: 'AWS S3 Bucket Exposure',
    cover: 'https://arisansecurity.id/wp-content/uploads/2020/12/aws-logo-amazon-web-services-ico-11562880403an9a3aaryc-300x127.png',
  },
  {
    author: 'Arisan Networking',
    title: 'Channel Wifi Terbaik Pada Frekuensi 2.4 Ghz',
    cover: 'https://arisansecurity.id/wp-content/uploads/2020/12/png-clipart-computer-application-icons-illustration-internet-icon-computer-network-angle-768x768.png',
  },
  {
    author: 'Arisan Security',
    title: 'Pengalaman Sebagai Penetration Tester di PT. Datacomm Diangraha',
    cover: 'https://arisansecurity.id/wp-content/uploads/2020/12/logo-datacomm-300x57.png',
  },
];

const collabSlideSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const collaborators = [
  'https://arisansecurity.id/wp-content/uploads/2020/12/LKF-FTI-UKSW-1-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/volkgeist-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/framecoffehouse-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/kopilot-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/LKF-FTI-UKSW-1-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/volkgeist-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/framecoffehouse-150x150.png',
  'https://arisansecurity.id/wp-content/uploads/2020/12/kopilot-150x150.png',
];

// markup
const IndexPage = () => {
  return (
    <main className="">
      <Header path="hubungi-kami" />
      <section className="min-h-screen pt-24 px-16 bg-gray-100">
        <p className="text-3xl sm:text-4xl lg:text-5xl leading-none font-bold text-gray-900 tracking-tight mb-8">Hubungi Kami</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mt-4">
                <label className="">Nama</label> <br/>
                <input className="px-2 py-2 mt-2 w-full shadow-sm rounded-md outline-none" name="name" placeholder="Nama lengkap"/>
              </div>
              <div className="mt-4">
                <label className="">Surat Elektronik</label> <br/>
                <input className="px-2 py-2 mt-2 w-full shadow-sm rounded-md outline-none" name="email" placeholder="Alamat Surel"/>
              </div>
              <div className="mt-4">
                <label className="">Nomor Telepon</label> <br/>
                <input className="px-2 py-2 mt-2 w-full shadow-sm rounded-md outline-none" name="phone" placeholder="Nomor Telepon"/>
              </div>
              <div className="mt-4">
                <label className="">Pesan</label> <br/>
                <textarea className="px-2 py-2 mt-2 w-full shadow-sm rounded-md outline-none" name="message" placeholder="Pesan"/>
              </div>
              <div className="mt-4 text-right">
                <button href="#" type="submit" className="rounded-md bg-purple-700 shadow-lg text-white px-6 py-2">Kirim</button>
              </div>
            </form>
          </div>
          <div className="px-6">
            <p className="text-lg text-gray-800">Kami terbuka serta mendukung segala pihak yang ingin bekerjasama dengan kami demi membangun peradaban manusia yang lebih baik, terkhusus dalam dunia Teknologi Informasi &amp; Keamanan Siber.</p>
            <div className="mt-12 text-center">
                <a href="https://s.id/arisansecurity" target="_blank" className="rounded-full border bg-blue-800 shadow-lg text-white px-6 py-2">Lihat Portal Kami</a>
              </div>
          </div>
        </div>
      </section><Footer />
    </main>
  )
}

export default IndexPage
