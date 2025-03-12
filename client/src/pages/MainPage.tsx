import { Header } from "../components/SiteHeader/header";
import { BusinessCard } from "../components/MainPageComponents/BusinessCard";
import { Process } from "../components/MainPageComponents/Process";
import { Advantages } from "../components/MainPageComponents/Advantages";
import { Footer } from "../components/SiteFooter/footer";

export const MainPage : React.FC = () => {
    return (
        <>
            <Header/>

            <BusinessCard/>

            <Process/>

            <Advantages/>

            <Footer/>
        </>
    )
}