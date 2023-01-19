import Logo from './assets/Logo.svg'

function Footer() {
    return (
        <footer>
            <menu className='footer'>
                <li className='contact'>
                    <h1 className="footer-header">Contact</h1>
                    <p>2395 Maldove Way, Chicago</p>
                    <p>(629)-243-6827</p>
                    <p><a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a></p>
                </li>
                <li className='connect'>
                    <h1 className="footer-header">Connect</h1>
                    <p><a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">Facebook</a></p>
                    <p><a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</a></p>
                    <lp><a href="https://www.youtube.com/watch?v=3Li-FfypZYE" target="_blank" rel="noreferrer">Join us!</a></lp>
                </li>
                <div>
                    <img className='img-footer' src={Logo} alt="Little Lemon logo"></img>
                </div>
            </menu>
        </footer>
    );
}

export default Footer;