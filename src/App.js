import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import DetailsPage from './components/DetailsPage';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Programmers from './components/Programmers';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<DetailsPage />} />
                    <Route path='/products/us' element={<AboutUs />} />
                    <Route path='/contactus/*' element={<ContactUs />} >
                        <Route path="programmers" element={<Programmers />} />
                        <Route path="drivers" element={<h1>Drivers</h1>} />
                    </Route>
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<Navigate to="/notfound" />} />
                </Routes>
                <Footer />
            </>
        )
    }
}

export default App;
