
import React from "react";

import PrivacyModal from "./PrivacyModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faGithub,
    faFacebook,
    faYoutube,
    faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between p-16 ">
            <div className="">
                <div className="p-4">
                    <PrivacyModal />
                </div>

                <div className="flex flex-row justify-center gap-8">
                   
                   <div> <span >Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    </div>
                    <span >
                    
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
                <div className="flex flex-row justify-center m-5 gap-4">
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} className="h-8 hover:scale-125 fill-current text-black"/>
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    
                >
                    <FontAwesomeIcon icon={faFacebook} className="h-8 hover:scale-125" />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} className="h-8 hover:scale-125 fill-current text-red-700" />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
            </div>
        </footer>
    );
};

export default Footer;
