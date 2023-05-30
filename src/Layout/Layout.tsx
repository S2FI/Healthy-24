import React, { ReactNode } from "react";
import Nav from "./navigation/Nav";

import classes from "./Layout.module.scss";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode })=> {
    return (
        <>
            <Nav />
            <div className={classes.container}>{children}</div>
            <Footer/>
        </>
    );
};

export default Layout;