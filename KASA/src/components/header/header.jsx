import LOGO from '../../assets/Images/LOGO.png' //je met la source de l'image dans une variable pour la changer plus facilement

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