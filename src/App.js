import './App.css';
import Layout from './components/Layout';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Vacancies from './pages/Vacancies';
import Cooperation from './pages/Cooperation';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='about-us' element={<AboutUs/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='cooperation' element={<Cooperation/>}/>
                    <Route path='vacancies' element={<Vacancies/>}/>
                </Route>
            </Routes>
        </Router>

    )
}

export default App;
