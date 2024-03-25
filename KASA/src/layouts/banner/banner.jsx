import Img1 from '../assets/Images/Bannière.png' //je met la source de l'image dans une variable pour la changer plus facilement


export function Banner () {

    return (
        <div className="banner">
            <img src={Img1} alt="" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
}