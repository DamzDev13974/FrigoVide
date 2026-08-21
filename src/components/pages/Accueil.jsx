import { Link } from "react-router";

export default function Accueil(){
//Composant retournant la page d'accueil avec le frigo et le bouton permettant de démarrer l'ajout des ingrédients pour la recherche



    return (
        <div className="home-page">
            <h1 className="primary-title">Frigo Vide</h1>
            <img src="/img/frigo.png" alt="logo de l'application Frigo Vide" />
            <p>Cette application vous aide à mieux manger en utilisant les <span>restes</span> et evitant le <span>gaspillage</span> le plus possible !</p>
            <Link to="/ingredients">Qu'il y a t'il dans le frigo ?</Link>
        </div>
    )
}