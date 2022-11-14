import './Landing.css'

import logo from '../images/ironhack-logo-xs.png';
import menuBar from '../images/menu-top-xs.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Landing(){



    return(
        <div>
            <nav className = 'navStyle nav-flex'>
                <img class ='img-nav1' src={logo} alt='logo'></img>
                <img class ='img-nav2' src={menuBar} alt='menuBar'></img>
            </nav>
            <section className = 'sectionStyle'>
                <h1 className='h1-title'>SayHello to</h1>
                <h1 className='h1-title'>ReactJS</h1>
                <br></br>
                <p className='p-style'>You will learn how to use</p>
                <p className='p-style'>the most popular frontend library</p>
                <p className='p-style'>and become a super Ninja developer</p>
            </section>
            <section className ='section-style-button'>
            <button className='button-awesome'>Awesome!</button>
            </section>
            <div class = 'icon-flex'>
                <section>
                <img className = 'icon-img' src={icon1} alt='icon1'></img>
                <h1 className = 'h1-icon'>Declarative</h1>
                <p className = 'p-icon'>React makes it paintless to create interactive UIs.</p>
                </section>
                <section>
                <img className = 'icon-img' src={icon2} alt='icon2'></img>
                <h1 className = 'h1-icon'>Components</h1>
                <p className = 'p-icon'>Build encapsulated components that manage their state</p>
                </section>
                <section>
                <img  className = 'icon-img' src={icon3} alt='icon3'></img>
                <h1 className = 'h1-icon'>Single-Way</h1>
                <p className = 'p-icon'>A set o inmutable values are passed to the components</p>
                </section>
                <section>
                <img  className = 'icon-img' src={icon4} alt='icon4'></img>
                <h1 className = 'h1-icon'>JSX</h1>
                <p className = 'p-icon'>Statically-typed design to run on modern browsers</p>
                </section>
            </div>
        </div>
    )
}

export default Landing;