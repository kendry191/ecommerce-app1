import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import '../Home-Page/Home-Page.css';

export default function Home() {
    return <>
        <Header rootClassName="header-root-class-name19"></Header>
        <Outlet />
    </>;
}