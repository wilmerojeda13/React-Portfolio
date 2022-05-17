import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';





function App() {
    const [currentNav, setNav] = useState("about")

    //function checks what user select
    const renderNav = ()  => {
        switch (currentNav) {
                case "about":
                        return <About />;
    
                case "portfolio":
                        return <Portfolio />;

                case "contact":
                        return <Contact />;

                case "resume":
                        return <Resume />;

                default:
                        return null;
        }
    };
    return (
        <div>
            <div className="mobile-header">
                <Header currentNav={currentNav} setNav={setNav}></Header>
                </div>
                <div>
                    <main>{renderNav()}</main>
                </div>
                <div>
                    <Footer></Footer>
                </div>
        </div>
);
}

export default App;


