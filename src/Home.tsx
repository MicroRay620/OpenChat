import { SectionBreak, ContainerBreak } from "./SectionBreaks";

export default function Home() {
    return (
        <>
            <div id={"cl-main-home-container"}>
                <div id={"cl-main-home-text-container"}>
                    <br/>
                    <h1 id={"cl-main-home-title"} className={"text-4xl"} data-font={"option-five"}>CypherLynx</h1>
                    <br/>
                    <div id={"cl-main-home-major-description-container"}>
                        <span id={"cl-home-major-description-inline-text"}>
                            CypherLynx is an open-source alternative to 
                            &nbsp;<a href="https://discord.com" id="cl-main-main-home-discord-link" className={"hover:text-blue-400"}>Discord</a>&trade; 
                            that primarily focuses on making sure you as the user are in control of your client. 
                        </span>
                        <br />
                        <SectionBreak />
                        <br />
                        <span>
                            To provide a safe and user controlled client, the software focuses heavily on 
                            <br /><strong className={"text-2xl"}><em>Privacy</em></strong> and <strong className={"text-2xl"}><em>Security</em></strong>.
                        </span>
                        <br />
                        <SectionBreak />
                        <br />
                        <span>
                            CypherLynx also aims to appeal to gamers and the communities of gamers. 
                            We have a goal of having  integrated support for Steam, Epic Games, GOG, and many other game store 
                            platforms.
                        </span>
                    </div>
                </div>
                <ContainerBreak />
                <div id={"cl-main-oos-container"}>
                    {/* oos means Overview of Site */}
                    <section id={"cl-main-oos-section-heading"}>
                        <h2 id={"cl-main-oos-section-title"} className={"text-3xl"}>What we do</h2>
                    </section>
                    <section id={"cl-main-oos-section-text"}>
                        <article id={"cl-main-oos-container-text-article-general"}>
                            <span id={"cl-main-oos-container-general-text"}>At CypherLynx we make sure that all data you have on the site and app is secured via (starting out as) peer-to-peer, will later change to end-to-end and peer-to-peer encryption to prevent unwanted visitors from stealing your data.</span>
                            <br /><span id={"cl-main-oos-container-text-expanded"}>
                                By having Direct Messages, or DMs, be Peer-to-Peer encrypted it will make it more client side with some server side help for the encryption and data storage. With "Communities" being End-to-End encrypted to all it to be posted and secured to everyone.
                             </span>
                        </article>
                        <SectionBreak />
                        <article id={"cl-main-oos-text-article-users-privacy"}>
                            <span id={"cl-main-oos-text-user-privacy-goal-text"}>
                                With the encryption it also enables us to protect and value your privacy as a user more than if 
                                it was unencrypted and unsecure.<br />The decryption keys are stored in secure, private, and heavily guarded on the servers and one that's encrypted on your system.
                            </span>
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
}