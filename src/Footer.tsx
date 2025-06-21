import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer id={"cl-footer"}>
            <hr />
            <small>
                <div id={"cl-footer-container"}>
                    <div id={"cl-disclaimer-container"}>
                        <span id={"cl-disclaimer-text"}>
                            CypherLynx is an open-source{/*sauce, this is an inside joke between Ruby and one of her friends*/} project under the 
                            &nbsp;<a href="https://apache.org/licenses/LICENSE-2.0" id={"cl-apache-license-link"} className={"underline hover:text-blue-400"}>Apache v2 License</a>.
                            The source code is available on <a href={"https://github.com/MicroRay620/OpenChat"} className={"underline hover:text-blue-400"}>GitHub</a>. All images
                            are under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline hover:text-blue-400">CC BY-SA 4.0</a> license.
                            <br />
                            Violations of our licenses will make your account subject to suspension and/or termination on 
                            repeated violations.
                        </span>
                    </div>
                    <div id={"cl-copyright-notice-container"}>
                        <span id={"cl-copyright-notice-text"}>
                            Some of the things included in this project are under Copyright. 
                            We do not own and claim ownership of the copyrighted content in CypherLynx.
                        </span>
                    </div>
                    <hr />
                    <div id={"cl-link-directions-container"} className="justify-center flex gap-4">
                        {/* Change the anchors to Link */}
                        <span id={"cl-link-directions-privacy-policy-container"}>
                            <Link to="/privacy-policy" id={"cl-privacy-policy-link"} className={"underline hover:text-blue-400"}>Privacy Policy</Link>
                        </span>
                        |
                        <span id={"cl-link-directions-tos-container"}>
                            <Link to="/tos.tsx" id={"cl-terms-of-service-link"} className={"underline hover:text-blue-400"}>Terms of Service</Link>
                        </span>
                    </div>
                </div>
            </small>
        </footer>
    );
}
export default Footer;
