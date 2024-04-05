import './Navbar.css';
export default function Navbar() {
    return (
        <div className="container-fluid">
            <ul className="navbar">
                <li className="mx-5 img"><img className="logo" src="icons_assets\Logo.svg" alt="Logo of Little Lemon"/></li>
                <li className="mx-4 items"><a href="www.google.com">HOME</a></li>
                <li className="mx-4 items"><a href="www.google.com">ABOUT</a></li>
                <li className="mx-4 items"><a href="www.google.com">MENU</a></li>
                <li className="mx-4 items"><a href="www.google.com">RESERVATIONS</a></li>
                <li className="mx-4 items"><a href="www.google.com">ORDER ONLINE</a></li>
                <li className="mx-4 items"><a href="www.google.com">LOGIN</a></li>
            </ul>
        </div>
    );
}