import LOGO from '../../assets/Images/LOGO'

export function Header () {
    return (
        <header>
            <h1><img src={LOGO} alt="" /></h1>
            <nav>
                <a href="">Accueil</a>
                <a href="">A propos</a>
            </nav>
        </header>
    );
}