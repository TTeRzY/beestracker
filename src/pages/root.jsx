import {Outlet} from "react-router-dom";
import Header from "../components/header.jsx";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}