import '../styles/Header.css'
import emailLogo from '../assets/icons8-email-50.png'
import githubLogo from '../assets/icons8-github.svg'
import linkedInLogo from '../assets/icons8-linkedin.svg'

export default function Header() {
    return (
        <div id="header">
            <div id='navbar'>
                <h3 id="name">Aayush Shah</h3>
                <div id='contactLogos'>
                    <a className='logo-link' href='https://github.com/aayushxshah' target="_blank">
                        <img className='logo-img github' src={githubLogo}/>
                    </a>

                    <a className='logo-link' id='mail' href='mailto:aayush30shah@gmail.com' target="_blank">
                        <img className='logo-img email' src={emailLogo}/>
                    </a>

                    <a className='logo-link' href='http://www.linkedin.com/in/aayushshah300' target="_blank">
                        <img className='logo-img linkedin' src={linkedInLogo}/>
                    </a>
                </div>
            </div>
            <h1 id="description">Aspiring Software Engineer, Driven Student</h1>
        </div>
    )
}