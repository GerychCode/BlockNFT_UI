import {useState} from 'react';
import './style/App.css';
import Header from "./components/header";
import GreetingsBlock from "./components/greetings-block";
import CompanyBlock from "./components/company-block";
import TopCryptBlock from "./components/top-crypt/top-crypt-block";
import ContactFormBlock from "./components/contact-form-block";
import RoadMapBlock from "./components/road-map/road-map-block";
import Footer from "./components/footer";
import CircleGenerator from "./components/circle-generator";

import LanguageContext from "./language-context.jsx";
import LanguageData from "./language.json";

function App() {
  const userLanguage = localStorage.getItem("User-Language");
  const [language, setLanguage] = useState(userLanguage ? userLanguage : "en");


  return (
      <LanguageContext.Provider value={{LanguageData, language, setLanguage}} >
        <div className="wrapper">
          <div>
            <Header/>
            <main>
              <GreetingsBlock/>
              <CompanyBlock/>
              <TopCryptBlock/>
              <ContactFormBlock/>
              <RoadMapBlock/>
              <CircleGenerator/>
            </main>
            <Footer/>
          </div>
        </div>
      </LanguageContext.Provider>
  );
}

export default App;
