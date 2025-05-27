import "./styles/Footer.css";
function Footer() {
    return (
        <footer itemID={"footer"}>
            <div itemID={"footer-container"}>
                <span itemID={"disclaimer"}>
                    ::APP NAME:: is an open-source project under the 
                    <a href="https://apache.org/licenses/LICENSE-2.0" itemID={"apache-license-link"} className={"underline"}>Apache v2 License</a>.
                    The source code is available on <a href={"https://github.com/MicroRay620/OpenChat"} className={"underline"}>GitHub</a>. All images
                    are under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline">CC BY-SA 4.0</a> license.
                    <br />
                    Violations of our licenses will make your account subject to suspension and/or termination on repeated 
                    violations.
                </span>
                <span itemID={"copyright-notice"}>Some of the things included in this project are under Copyright. 
                    We do not own and claim ownership of the copyrighted content in ::APP NAME::.
                </span>
                <span itemID={"link-directions"}></span>
            </div>
        </footer>
    );
}
export default Footer;