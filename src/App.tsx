import Navbar from "@/scenes/navbar/Navbar";
import Home from "@/scenes/home/Home";
import Portfolios from "@/scenes/portfolios/Portfolios";
import ContactUs from "@/scenes/contacts/Contacts";
import Footer from "@/scenes/footer/Footer";
import React, {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/types";
import Blogs from "./scenes/blogs/Blogs";
import Experiences from "./scenes/experiences/Experiences";
import {preloadImages} from "./shared/helpers";
import Certifications from "./scenes/certifications/Certifications";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const imagesToPreload = [
            '@/assets/Selfie.png',
            "@/assets/NameLogo.png", "@/assets/github-mark-white.png", '@/assets/NameLogo.png'
        ];

        preloadImages(imagesToPreload);
    }, []);

    return (
        <div className="app bg-gray-20">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage}/>
            <Experiences setSelectedPage={setSelectedPage}/>
            <Certifications setSelectedPage={setSelectedPage}/>
            {/*<Portfolios setSelectedPage={setSelectedPage}/>*/}
            {/*<Blogs setSelectedPage={setSelectedPage}/>*/}
            <ContactUs setSelectedPage={setSelectedPage}/>
            <Footer/>
        </div>
    );
}

export default App;
