import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 't-writer.js';

import Aos from  "aos";
import "aos/dist/aos.css";
import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import PortfolioListItem from './components/PortfolioListItem';
import EducationListItem from './components/EducationListItem';
import ExperienceListItem from './components/ExperienceListItem';
import TechStackListItem from './components/TechStackListItem';
import CurriculumPDF from './documents/curriculum-FrontEnd-developer.pdf'; 

import { data } from './data.js';

export default function App() {
  const appContainerRef = useRef();
  const typeWriterAnimation = useRef();
  const copyright = useRef();
  const formButton = useRef();

  const year = new Date();
  const currentYear = year.getFullYear();

  useEffect(() => {
    copyright.current.innerHTML = `
      Designed and Built by Harpreet Kaur ©${currentYear}<br/>
      Tech Stack Images from <a target="_blank" href="https://devicon.dev/" rel="noreferrer">@devicon</a>
    `;

    const writer = new Typewriter(typeWriterAnimation.current, {
      loop: false, // No looping
      typeColor: '#FFF',
      cursorColor: '#FFF'
    });
    writer
    .type('WHO I AM?') // Single message
    .start(); // Start the animation   
    Aos.init({ duration: 2500 });
  }, [currentYear]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateForm(e) {    
    e.preventDefault();
    formButton.current.disabled = true;
    setTimeout(() => {
      formButton.current.disabled = false;
    }, 3000)
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    let textMessage = "";
    if(name === '') {
      textMessage = "Fill in the Name field.";
    } else if(email === '') {
      textMessage = "Fill in the e-mail field";
    } else if(!regEx.test(email)) {
      textMessage = "Invalid e-mail"
    } else if(message === '') {
      textMessage = "Fill in the message field";
    } else if (message.length > 300) {
      textMessage = "Maximum characters allowed: 1000";
    }
    if(textMessage !== "") {
      showMessage(textMessage);
      return false;
    } else {
      textMessage = "Email sent successfully!";
    }


    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    appContainerRef.current.appendChild(spinner);

    sendEmail(textMessage, spinner);
  }

  function sendEmail(textMessage, spinner) {
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_ewrut2x", "template_8rgc3j9", templateParams, "rvb3tIoimxX8se9n-")
    .then(() => {
      spinner.remove();
      showMessage(textMessage);
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      spinner.remove();
      textMessage = "Failed to send e-mail..."
      showMessage(textMessage);
      console.log("Erro: ", err);
    })
  }

  function showMessage(textMessage) {
    const showMessage = document.createElement('div');
    if(textMessage !== "Email sent successfully!") {
      showMessage.classList.add("alert");
    } else {
      showMessage.classList.add("alert", "sucess");
    }
    showMessage.innerText = textMessage;
    appContainerRef.current.appendChild(showMessage);
    setTimeout(() => {
      showMessage.remove();
    }, 3000); 
  }
  return (
    <div ref={appContainerRef} className="App">
      <Header />
      <main className="main">
        <div className="container">
          <section className="main__apresentation section">
            <h2 data-aos="fade" id="inicio" ref={typeWriterAnimation} className="apresentation main__apresentation__title section-title">
            </h2>
            <p data-aos="fade" className="main__apresentation paragraph">
              {/* Minha missão como Desenvolvedor Web é combinar design, funcionalidades e performance para juntos criarmos algo incrível!
              Utilizando tecnologias como <span className="accent-text">HTML</span>, <span className="accent-text">CSS</span>, <span className="accent-text">JavaScript</span>, <span className="accent-text">Sass/SCSS</span>, <span className="accent-text">React</span> e outras, me comprometo a
              entender as necessidades dos meus clientes e transformá-las em soluções únicas. */}
              Dynamic Frontend Developer with a robust background in Computer Engineering, holding a Master's degree and a specialized 
              diploma in Web Programming from ISI College, Canada. Excellent experience in designing and developing interactive 
              user interfaces, usability, web, and client/server applications using <span className="accent-text"> HTML5 </span>, <span className="accent-text">CSS3</span>,<span className="accent-text"> JavaScript</span>, <span className="accent-text">Bootstrap </span>, and <span className="accent-text">jQuery</span>.
              Proficient in both coding and design, as well as software testing and debugging. Fluent in <span className="accent-text"> Angular </span>, <span className="accent-text">TypeScript</span>,<span className="accent-text">React</span>, <span className="accent-text">Node.js </span>,and <span className="accent-text">PHP</span>.
              Eager to learn new skills and techniques to enhance efficiency and contribute effectively in the workplace.
            <br />
            <br />
            {/* Explore my portfolio and find out how I can take your online presence to the next level! */}
            </p>
          </section>
           {/* experience section  */}
           <section className="section experience">
            <SectionTitle
              id="experience"
              title="Experience"
              className="section-title"
            />            
            {
              data.experienceList.map((item, index) => {
                return (
                  <ExperienceListItem
                    key={index}
                    title={item.title}
                    companyName={item.companyName}
                    description={item.description}
                    year={item.year}
                  />
                )
              })
            }
        
          </section>
            {/* end experience section */}

          {/* education section  */}
          <section className="section education">
            <SectionTitle
              id="education"
              title="Education"
              className="section-title"
            />            
            {
              data.educationList.map((item, index) => {
                return (
                  <EducationListItem
                    key={index}
                    title={item.title}
                    universityName={item.universityName}
                    courseName={item.courseName}
                    year={item.year}
                  />
                )
              })
            }
        
          </section>
            {/* end education section */}

              {/* start project section */}
          <section className="section portfolio">
            <SectionTitle
              id="portfolio"
              title="Portfolio"
              className="section-title"
            />            
            {
              data.portfoliList.map((item, index) => {
                return (
                  <PortfolioListItem 
                    key={index}
                    title={item.title}
                    description={item.description}
                    github={item.github}
                    website={item.website}
                    preview={item.preview}
                    alt={item.alt}
                  />
                )
              })
            }
          </section>
            {/* end project section */}
          <section className="section tech-stack">
            <SectionTitle
              id="tech-stack"
              title="Tech Stack"
              className="section-title"
            />
            <p className="paragraph">
            {/* Main technologies and tools I use for website development */}
            </p>
            <ul data-aos="fade" className="tech-stack__images">
              {
                data.techStackList.map((item, index) => {
                  return(
                    <TechStackListItem 
                      key={index}
                      image={item.image}
                      alt={item.altText}
                    />
                  );
                })
              }
            </ul>
          </section>
          <section className="section">
            <SectionTitle
              id="contato"
              title="Contact"
              className="section-title"
            />
            <form  data-aos="fade-bottom" className="form" onSubmit={validateForm}>
              <div className="form__box-input">
                <label className="form__label" htmlFor="name">Name:</label>
                <input 
                  id="name"
                  className="form__input form__input__name" 
                  type="text"
                  placeholder="Tell me your name......"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form__box-input">
                <label className="form__label" htmlFor="email">E-mail:</label>
                <input 
                  id="email"
                  className="form__input form__input__email" 
                  type="text"
                  placeholder="Enter your e-mail address..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form__box-input">
                <label className="form__label" htmlFor="message">Message:</label>
                <textarea 
                  id="message"
                  className="form__input form__input__message" 
                  type="text"
                  placeholder="How can I help you?"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button ref={formButton} className="button button-form" type="submit">Send</button>
            </form>
          </section>
          <section className="section">
            <SectionTitle
              id="curriculo"
              title="Resume"
              className="section-title" 
            />
            <p data-aos="fade" className="paragraph">
            Check out my professional summary, skills and certifications!
            </p>
            <a href={CurriculumPDF} className="button button-curriculum">Download PDF</a>
          </section>
          <p ref={copyright} className="paragraph copyright">
          </p>
        </div> 
      </main>
      <Footer />
    </div>
  );
}
