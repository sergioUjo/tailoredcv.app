import React from "react";
import Logo from "../svg/Logo";

function Header() {
    return (
        <header className={"sticky top-0 z-50 border-b border-gray-200 shadow bg-white p-2"}>
            <div className={"m-auto flex max-w-7xl justify-between px-4"}>
                <a
                    href={"/"}
                    className={"flex items-center gap-2 fill-primary-600"}
                >
                    <Logo className="h-8 w-8"/>
                    <p className={"text-lg font-bold"}>TailoredCV</p>
                </a>
                <a
                    href={"https://app.tailoredcv.app"}
                    className={"btn-primary"}
                >
                    Sign in
                </a>
            </div>
        </header>
    );
}

export default Header;
