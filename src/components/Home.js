import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from './logo.jpeg';
import AD from '../static/AD.jpg';
import SD from '../static/SD.jpg';
import WB from '../static/WB.jpg';
import domain from '../static/domain.jpg';
import hosting from '../static/host.jpg';
import one from '../static/one.jpg';
import two from '../static/two.jpg';
import three from '../static/three.jpg';
import four from '../static/four.jpg';
import five from '../static/five.jpg';
import six from '../static/six.jpg';
import seven from '../static/seven.jpg';
import eight from '../static/eight.jpg';
import nine from '../static/nine.jpg';
import ten from '../static/one.jpg';
import mang1 from '../static/mang1.jpg';
import mang2 from '../static/mang2.jpg';
import mang3 from '../static/mang3.jpg';
import mang4 from '../static/mang4.jpg';
import fl from '../static/fl.png';

function Home() {
    // useEffect(() => {
    //     const scrollContainer = document.querySelector('.scroll-container');
    
    //     scrollContainer.addEventListener('scroll', () => {
    //       const scrollTop = scrollContainer.scrollTop;
    //       const containerHeight = scrollContainer.clientHeight;
    //       const middle = scrollTop + containerHeight /4;
    
    //       const elements = document.querySelectorAll('.sub2 a');
    //       elements.forEach((element) => {
    //         const rect = element.getBoundingClientRect();
    //         const distanceFromMiddle = Math.abs(rect.top + rect.height / 2 - middle);
    //         const fontSize = Math.max(10, 50 - distanceFromMiddle / 10); // adjust these values as needed
    //         element.style.fontSize = `${fontSize}px`;
    //       });
    //     });
    //   }, []);

    
    const [image, setImage] = useState(one);

    const handleHover = (event) => {
    const text = event.target.innerText;

    switch (text) {
        case 'Gupta Overseas':
        setImage(one);
        break;
        case 'Achal & Amit Co.':
        setImage(two);
        break;
        case 'Ashok Auto Sales':
        setImage(three);
        break;
        case 'Hotel Amar':
        setImage(four);
        break;
        case 'Tej Shoe Tech.':
        setImage(five);
        break;
        case 'Tej Shoe Factory':
        setImage(six);
        break;
        case 'Cream Bell':
        setImage(seven);
        break;
        case 'Diamond Carpet':
        setImage(eight);
        break;
        case 'Vacmet packing India pvt. ltd.':
        setImage(nine);
        break;
        case 'Bhole Baba Foundation':
        setImage(ten);
        break;
        case 'Agra Police':
        setImage(nine);
        break;
        case 'Agra Computer Association':
        setImage(eight);
        default:
        setImage(one);
        break;
    } 
    };
    const [activeTab, setActiveTab] = useState('home-v');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

    return (
        <div>
            <div className='top-grid' id="section1" >
                <div className='left name'>
                <img className='imgrgt' src={fl} height={20} width={100} alt='log'/>
                <a href='/'>PERFECT SOFTWARE</a>
                </div>
                <div className='right heading'>
                    <div className='sub'>
                    <a className='links' onClick={() => {document.getElementById('section2').scrollIntoView({behavior: 'smooth'});}}>clients</a>
                    </div>
                    <div className='sub'>
                    <a className='links' onClick={() => {document.getElementById('section3').scrollIntoView({behavior: 'smooth'});}}>services</a>
                    </div>
                    <div className='sub'>
                    <a className='links' onClick={() => {document.getElementById('sectionl').scrollIntoView({behavior: 'smooth'});}}>contact</a> 
                    </div>
                    <div className='sub'>
                        <a className='links' target="_blank" rel="noopener noreferrer" href='https://domains.perfectsoftware.in/'>Domain Booking</a>
                    </div>
                    <div className='sub'>
                        <a className='links' target="_blank" rel="noopener noreferrer" href='https://domains.perfectsoftware.in/web-hosting/windows-hosting.php'>Hosting</a>
                    </div>
                    <div className='sub'>
                        Jobs
                    </div>
                </div>
            </div>
            {/* <div className='content'>
                We expertise in <span id="spin"></span><br></br>solutions that accelerate <br></br>
                business growth by <b>10x</b><br></br> 
                Our solutions have been<br></br> backed by our <span class="circle-sketch-highlight">
                <a className='deco' onClick={() => {document.getElementById('section2').scrollIntoView({behavior: 'smooth'});}}>clients</a></span><br></br>
                <bold><a className='deco' onClick={() => {document.getElementById('section3').scrollIntoView({behavior: 'smooth'});}}>lets talk ⮟</a></bold> 
            </div> */}
            <div className='content'>
            this is where your<br></br>
            dreams are <span id="spin"></span><br></br>
            into reality<br></br><br></br>
            </div>
            <div className='con2'>
            We have expertise in building solutions that will accelerate<br></br> your business growth by 10X. Our solutions have also been<br></br> backed by YCombinator<br></br><br></br><br></br>
            <bold><a onClick={() => {document.getElementById('sectionl').scrollIntoView({behavior: 'smooth'});}}>lets talk ⮟</a></bold> 
            </div>
            <div className='service-header'>
            <div id='section3'>
                SERVICES
            </div>
            </div>
            <div className='grid3'>
            <section className="service-area2" id="explore">
            <div className="container">
                <div className="row mt-5 tab-view-nan wow slideInUp" data-wow-duration="3.4s">

                    <div className="col-sm-12 col-md-4 col-lg-5">
                        <ul className="nav tabs-left sideways">
                        <li className={activeTab === 'home-v' ? 'active' : ''}><a
                                href="#home-v"
                                data-toggle="tab"
                                className="active"
                                onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('home-v');
                                }}
                            >
                                    <div className="d-flex">
                                        <span className="num">01</span>
                                        <div>
                                            <h4>Software Development</h4>
                                            <p>We build profound technology solutions
                                            </p>
                                        </div>
                                    </div>

                                </a></li>
                            <li className={activeTab === 'profile-v' ? 'active' : ''}><a href="#profile-v" data-toggle="tab" onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('profile-v');
                                }}>
                                    <div className="d-flex">
                                        <span className="num">02</span>
                                        <div>
                                            <h4>Website Development</h4>
                                            <p>Use our deep expertise to advance your business
                                            </p>
                                        </div>
                                    </div>
                                </a></li>
                            <li className={activeTab === 'messages-v' ? 'active' : ''}><a href="#messages-v" data-toggle="tab" onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('messages-v');
                                }}>
                                    <div className="d-flex">
                                        <span className="num">03</span>
                                        <div>
                                            <h4>Mobile Application Development</h4>
                                            <p>We build software that brings value
                                            </p>
                                        </div>
                                    </div>
                                </a></li>
                            


                            <li className={activeTab === 'settings-v' ? 'active' : ''}><a href="#interface" data-toggle="tab" onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('settings-v');
                                }}>
                                    <div className="d-flex">
                                        <span className="num">04</span>
                                        <div>
                                            <h4>Warehouse Management</h4>
                                            <p>We build innovative solutions for your business
                                            </p>
                                        </div>
                                    </div>
                                </a></li>

                            <li className={activeTab === 'branding' ? 'active' : ''}><a href="#aem" data-toggle="tab" onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('branding');
                                }}>
                                    <div className="d-flex">
                                        <span className="num">05</span>
                                        <div>
                                            <h4>Domain Booking</h4>
                                            <p>Build interactive experiences with this CMS on any platform.
                                            </p>
                                        </div>
                                    </div>
                                </a></li>

                                <li className={activeTab === 'interface' ? 'active' : ''}><a href="#devops" data-toggle="tab" onClick={(e) => {
                                e.preventDefault();
                                handleTabClick('interface');
                                }}>
                                    <div className="d-flex">
                                        <span className="num">06</span>
                                        <div>
                                            <h4>Hosting</h4>
                                            <p>Monitor the entire development for faster & reliable software delivery.</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-7">
                     
                        <div className="tab-content">
                            <div  className={`tab-pane ${activeTab === 'home-v' ? 'active' : ''}`}
          id="home-v">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">01</span>
                                        <h3>Software Development</h3>
                                        <p className="mb-5">Creating a symphony of look and function that
                                            connects with the user experience</p>


                                        {/* <a href="https://codebuddy.co/services#web" className="btn-explore1"><span>learn
                                                more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a> */}
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/Mockups.png" alt="Mockup" className="tab-mock1"/>
                                </div>
                            </div>
                                <div className={`tab-pane ${activeTab === 'profile-v' ? 'active' : ''}`}
          id="profile-v">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                            <span className="bold-number">02</span>
                                            <h3>Website development</h3>
                                            <p className="mb-5">Accelerate your audience engagement with our highly
                                                customizable app development solutions
                                            </p>
                                            {/* <a href="https://codebuddy.co/services#mobile" className="btn-explore1"><span>learn more <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span></a> */}
                                        </div>

                                        <img src="https://codebuddy.co/assets/img/mob.png" alt="App Development" className="tab-mock2"/>
                                    </div>
                                </div>
                            <div className={`tab-pane ${activeTab === 'messages-v' ? 'active' : ''}`}
          id="messages-v">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">03</span>
                                        <h3>Mobile Application development</h3>
                                        <p className="mb-5">Make your product showcase on a compelling,
                                            feature-rich, easy-to-operate intuitive interface.
                                        </p>
                                        {/* <a href="https://codebuddy.co/services#ecommerce" className="btn-explore1"><span>learn more <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a> */}
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/ecomerce1.png" alt="ecomerce" className="tab-mock2"/>
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'settings-v' ? 'active' : ''}`}
          id="settings-v">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">04</span>
                                        <h3>Warehouse Managment</h3>
                                        <p className="mb-5">We provide customised game development solutions,
                                            both front-end, and back-end
                                        </p>
                                        {/* <a href="https://codebuddy.co/services#game" className="btn-explore1"><span>learn
                                                more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a> */}
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/game.png" alt="gmae" className="tab-mock2"/>
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'branding' ? 'active' : ''}`}
          id="branding">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">05</span>
                                        <h3>Domain Booking</h3>
                                        <p className="mb-5">Take your business to another dimension of creativity
                                            and success.</p>
                                        {/* <a href="https://codebuddy.co/services#branding" className="btn-explore1"><span>learn more <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a> */}
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/branding.png" alt="branding" className="tab-mock2" async/>
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'interface' ? 'active' : ''}`}
          id="interface">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">04</span>
                                        <h3>Hosting</h3>
                                        <p className="mb-5">Our design philosophy revolves around user behaviour,
                                            latest trends, and aesthetics.</p>
                                        {/* <a href="https://codebuddy.co/services#uiex" className="btn-explore1"><span>learn
                                                more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a> */}
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/interface.png" alt="interface" className="tab-mock3"/>
                                </div>
                            </div>

                            {/* <div className={`tab-pane ${activeTab === 'aem' ? 'active' : ''}`}
          id="aem">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">05</span>
                                        <h3>Hosting</h3>
                                        <p className="mb-5">Build interactive experiences with this CMS on any platform.</p>
                                        <a href="https://codebuddy.co/adobe-experience-manager" className="btn-explore1"><span>learn
                                                more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a>
                                    </div>

                                    <img src="https://codebuddy.co/assets/img/AEM_1.png" alt="interface" className="tab-mock3"/>
                                </div>
                            </div> */}

                            {/* <div className={`tab-pane ${activeTab === 'devops' ? 'active' : ''}`}
          id="devops">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                                        <span className="bold-number">06</span>
                                        <h3>DevOps</h3>
                                        <p className="mb-5">Monitor the entire development lifecycle & operations for faster & reliable software delivery.</p>
                                        <a href="https://codebuddy.co/devops" className="btn-explore1"><span>learn
                                                more <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="#FFBA19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span></a>
                                    </div>
                                    <img src="https://codebuddy.co/assets/img/DevOps_1.png" alt="interface" className="tab-mock3"/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
            <div className='section2'>
                <div id="section2" className='clients-header'>
                    CLIENTS
                </div>
                <div className='grid2'>
                    <div className='d'>
                        <a className='d2' onMouseEnter={handleHover}>Gupta Overseas</a>
                        <a className='d3' onMouseEnter={handleHover}>Achal & Amit Co.</a>
                        <a className='d4' onMouseEnter={handleHover}>Ashok Auto Sales</a>
                        <a className='d5' onMouseEnter={handleHover}>Hotel Amar</a>
                        <a className='d6' onMouseEnter={handleHover}>Tej Shoe Tech.</a>
                        <a className='d7' onMouseEnter={handleHover}>Tej Shoe Factory</a>
                        <a className='d8' onMouseEnter={handleHover}>Cream Bell</a>
                        <a className='d9' onMouseEnter={handleHover}>Diamond Carpet</a>
                        <a className='d1' onMouseEnter={handleHover}>Vacmet packing India pvt. ltd.</a>
                        <a className='d11' onMouseEnter={handleHover}>Bhole Baba Foundation</a>
                        <a className='d22' onMouseEnter={handleHover}>Agra Police</a>
                        <a className='d33' onMouseEnter={handleHover}>Agra Computer Association</a>
                    </div>
                    <div className='e'>
                        <img src={image} height={550} width={500} alt="hovered image"/>
                    </div>
                </div>
            </div>
            {/* <div className='content2'>
                Our industrial tenants include leaders and innovators from across diverse sectors. And their trust is something we work hard for.
            </div> */}
            <div className='m-header'>
                MANAGEMENT
            </div>
            <div className='grid4'>
                <div>
                    <img src={mang1} height={350} width={300} alt="manga"/>
                    <a>Mr. Mukesh Singh</a>
                </div>
                <div>
                    <img src={mang2} height={350} width={300} alt="manga"/>
                    <a>Mr. DP Singh</a>
                </div>
                {/* <div>
                    <img src={mang3} height={350} width={300} alt="manga"/>
                    <a>Mr. Sharma</a>
                </div>
                <div>
                    <img src={mang4} height={350} width={300} alt="manga"/>
                    <a>Mr. Rajput</a>
                </div> */}
            </div>
            <div className='c-header'>
                It’s all about dedication to the people we work with – whether that means collaborating to optimize a space or showing our commitment with a 10- to 25-year lease.
            </div>
            <div id='sectionl' className='f-header grid-f'>
                <div className='p'>
                © 2023 PERFECT SOFTWARE<br></br>
                All Right Reserved
                </div>
               <div className='q'>
                B-6 Raman Tower,<br></br>
                Sanjay Place,<br></br>
                Agra, UP.<br></br>
                India
               </div>
               <div className='r'>
                 Jobs
               </div>
               <div className='w'>
                <a className='linksa' href='http://www.perfectsoftware.in/TermAndCondition.html'>Terms & Conditions🡭</a><br></br><br></br>
                <a  className='linksa' href='http://www.perfectsoftware.in/RefundPolicy.html'>Cancellation & refund Policy🡭</a><br></br><br></br>
                <a  className='linksa' href='http://www.perfectsoftware.in/PrivacyPolicy.html'>Privacy Policy🡭</a><br></br><br></br>
                <a  className='linksa' href='http://www.perfectsoftware.in/Disclaimer.html'>Disclaimer🡭</a>
               </div>

               {/* <div className='t'>
                <a href='http://www.perfectsoftware.in/OnlineSupport.html'>Online Support🡭</a>
               </div> */}
               {/* <div className='u'>
                hell yea
               </div> */}


            </div>
        </div>
    )
}

export default Home;