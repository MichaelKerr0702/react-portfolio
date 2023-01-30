import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/header';
import Footer from './pages/footer'
import Home from './pages/home';
import '../style/style.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'projects') {
      return <Projects />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='height'>

      <Header />        

      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer />

    </div>
  );
}
