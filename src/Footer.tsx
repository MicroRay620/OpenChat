import "./styles/Footer.css";
function Footer() {
    return (
        <footer itemID={"footer"}>
            <div itemID={"footer-container"}>
                <div itemID={"disclaimer-container"}>
                    <span itemID={"disclaimer-text"}>
                        CypherLynx is an open-source project under the 
                        &nbsp;<a href="https://apache.org/licenses/LICENSE-2.0" itemID={"apache-license-link"} className={"underline"}>Apache v2 License</a>.
                        The source code is available on <a href={"https://github.com/MicroRay620/OpenChat"} className={"underline"}>GitHub</a>. All images
                        are under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline">CC BY-SA 4.0</a> license.
                        <br />
                        Violations of our licenses will make your account subject to suspension and/or termination on repeated 
                        violations.
                    </span>
                </div>
                <div itemID={"copyright-notice-container"}>
                    <span itemID={"copyright-notice-text"}>
                        Some of the things included in this project are under Copyright. 
                        We do not own and claim ownership of the copyrighted content in CypherLynx".
                    </span>
                </div>
                <div itemID={"link-directions-container"}>
                    <small>
                        <table itemID={"link-directions-table"}>
                            <tbody>
                                <tr itemType="row">
                                    <td itemType="col" itemID={"link-directions-table-privacy-policy"}>
                                        <a href="/privacy-policy" itemID={"privacy-policy-link"} className={"underline"}>Privacy Policy</a>
                                    </td>
                                    &nbsp;
                                    <td itemType="col" itemID={"link-directions-table-terms-of-service"}>
                                        <a href="/tos.tsx" itemID={"terms-of-service-link"} className={"underline"}>Terms of Service</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </small>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
