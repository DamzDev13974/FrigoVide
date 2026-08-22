import { Link } from "react-router";


export default function CardRecette({recette}){
    //Composant permettant d'afficher un résumé d'une recette, d'acceder à la page détail de la recette et  de voir si il est ajouté aux favoris

   
    return(
        <div className="card-recette">
            <Link to={"/recette/"+recette.id} >
                <img src={recette.image} alt={"image de la recette :" + recette.nom} />
                <h2 className="card-title">{recette.nom}</h2>
            </Link>
        </div>
    )
}