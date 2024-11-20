import {Routes, Route, Navigate} from 'react-router-dom';

import { MainPage } from './pages/MainPage';

export const siteRouter = () =>  {
    return (
        <Routes>
            <Route path='/головна' element={<MainPage/>}/>
            <Route path='*' element={<Navigate to='/головна'/>}/>
        </Routes>
    )
}