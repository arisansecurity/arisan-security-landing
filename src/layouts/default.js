import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer";
import Header from "../components/header";
import SEO from "../components/seo";
import AOS from "aos";
import 'aos/dist/aos.css';
const DefaultLayout = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <SEO {...props}/>
            <main className="">
                <Header path={props.path} />
                    <span className="">
                        {props.children}
                    </span>
                <Footer />
            </main>
        </>
    )
}

DefaultLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

export default DefaultLayout;