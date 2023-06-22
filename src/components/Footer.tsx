import React from 'react';
import Logo from "../svg/Logo";

function Footer() {
    return (
        <footer className={"bg-primary-900"}>
            <div
                className={
                    "m-auto flex max-w-7xl justify-between gap-4 px-4 py-16 text-white"
                }
            >
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex items-center gap-2 fill-primary-600"}>
                        <Logo className="h-12 w-12 fill-white" />
                        <p className={"text-lg font-bold"}>TailoredCV</p>
                    </div>
                    <p>
                        TailoredCV helps increase your chances of getting the dream job
                    </p>
                    <p>© 2023 TailoredCV</p>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <h6 className={"text-lg font-bold"}>Company</h6>
                    <a className={"hover:underline"} href={"/terms-of-service"}>Terms of Service</a>
                    <a className={"hover:underline"} href={"/privacy-policy"}>Privacy Policy</a>
                    <a className={"hover:underline"} href={"mailto:geral@tailoredcv.app"}>geral@tailoredcv.app</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
