import * as React from "react"
import Slider from "react-slick"
import Wave from "react-wavify"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "tailwindcss/tailwind.css"
import Button from "../components/button"
import Post from "../components/post"
import Ticker from "../components/ticker"
import DefaultLayout from "../layouts/default"

import CollaboratorFrameCoffee from "../images/framecoffehouse.png"
import CollaboratorKopilot from "../images/kopilot.png"
import CollaboratorLkf from "../images/lkf-fti-uksw.png"
import CollaboratorVolgeist from "../images/volkgeist.png"


import Hero from "../components/pages/home-page/hero"
import Collaborator from "../components/pages/home-page/collaborator"
import Shortcut from "../components/pages/home-page/shortcut"
import Projects from "../components/pages/home-page/projects"
import Blog from "../components/pages/home-page/blog"
import Activity from "../components/pages/home-page/activity"
import Cta from "../components/pages/home-page/cta"
import Progress from "../components/pages/home-page/progress"

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
  {
    path: CollaboratorLkf,
    alt: 'LKF FTI UKSW',
  },
  {
    path: CollaboratorVolgeist,
    alt: 'Volkgeist',
  },
  {
    path: CollaboratorFrameCoffee,
    alt: 'Frame Coffe House',
  },
  {
    path: CollaboratorKopilot,
    alt: 'Kopilot',
  },
];



// markup
const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <Collaborator settings={collabSlideSettings} collaborators={collaborators}/>
        <Shortcut />
        <Progress />
        <Projects />
        <Blog posts={posts}/>
        <Activity />
        <Cta />
      </DefaultLayout>
    </>
  )
}

export default IndexPage
