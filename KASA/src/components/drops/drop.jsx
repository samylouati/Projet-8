import React, {useState} from "react"; //Pour gerer l'etat du composant

export function Drops(props) {
    const [isExpanded, setIsExpanded] = useState(false); //Etat pour controler l'affichage des <p>

    const changeExpanded = () => {
        setIsExpanded(!isExpanded); //Inversion de l'etat
    }
  
    return (
        <div className="drops">
            <div className="drops_content" onClick={changeExpanded}>
                <h2>{props.title}</h2>
                <i className={"fa-solid fa-angle-up" + (isExpanded ? " rotate-180" : "")}></i>
            </div>
            <p className={isExpanded ? "visible" : "hidden"}>{props.text}</p> 
        </div>
    );
}