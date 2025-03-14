import { Header } from "../components/SiteHeader/header";
import { ContactInfo } from "../components/ContactsPageComponents/ContactInfo";
import { Footer } from "../components/SiteFooter/footer";

export const ContactsPage : React.FC = () => {
    return (
        <>
            <Header/>

            <ContactInfo/>

            <Footer/>
        </>
    )
}