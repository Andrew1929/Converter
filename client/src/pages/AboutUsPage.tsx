import { Header } from "../components/SiteHeader/header";
import { AboutUsInfo } from "../components/AboutUsPageComponents/AboutUsInfo";
import { Footer } from "../components/SiteFooter/footer";

export const AboutUsPage : React.FC = () => {
    return (
        <>
            <Header/>

            <AboutUsInfo/>

            <Footer/>
        </>
    )
}