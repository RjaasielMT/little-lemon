import Logo from './assets/Logo.svg';

function Header () {
    return (
        <header className='header'>
            <div className='contenedorlogo'>
                <img className='logo' src={Logo} alt='logo'></img>
            </div>
            <nav>
            <ul className='menu'>
                <li><a href='' target='_blank'><strong>Home</strong></a></li>
                <li><a href='' target='_blank'><strong>About</strong></a></li>
                <li><a href='' target='_blank'><strong>Menu</strong></a></li>
                <li><a href='' target='_blank'><strong>Reservation</strong></a></li>
                <li><a href='' target='_blank'><strong>Order Online</strong></a></li>
                <li><a href='' target='_blank'><strong>Login</strong></a></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;