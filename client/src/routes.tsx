import {Routes, Route, Navigate} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactsPage } from './pages/ContactsPage';

export const siteRouter = () =>  {

    return (
        <Routes>
            <Route path='/головна' element={<MainPage/>}/>
            <Route path='/про_нас' element={<AboutUsPage/>}/>
            <Route path='/контакти' element={<ContactsPage/>}/>
            <Route path='*' element={<Navigate to='/головна'/>}/>
        </Routes>
    )
}