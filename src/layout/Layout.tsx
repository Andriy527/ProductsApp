import React, {FC} from 'react';
import NavBar from "../components/NavBar";

interface props  {
    children: React.ReactNode
}
const Layout: FC<props> = ({children} : props) => {
    return (
        <>
           <NavBar />
           {children}
        </>
    );
};

export default Layout;