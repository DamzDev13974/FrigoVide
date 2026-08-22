import { useRecettes } from "../contexts/RecettesContext";
import NavBottom from "../NavBottom";
import { useParams, Link } from "react-router";
import { ArrowLeftIcon, ClockIcon, UserIcon, SpinnerIcon, BookmarkSimpleIcon  } from "@phosphor-icons/react";
import Message from "../Message";


export default function PageDetailRecette(){
    //Composant retournant les détails de la recette sélectionnée et le bouton pour l'ajouter aux favoris
    
    const {recettes} = useRecettes();
    //l'id du useParam nécessaire pour le find() et trouvé l'article ciblé
    const {id} = useParams();
    //Je recup la recette via le find() et le number() pour la conversion en INT
    const recette = recettes.find((recette)=>recette.id === Number(id))


    //Si pas de recette trouvé
    if(!recette){
        return(
            <div className="detail-page">
                <div className="top-page">
                    <Link to="/ingredients">
                        <ArrowLeftIcon size={32} />
                    </Link>
                    <h2>Page détails recette</h2>
                    <Message type="echec" msg="Recette non trouvée"/>
                </div>
            </div>
        )
    }

    return(
        <div className="detail-page">
            <div className="top-page">
                <Link to="/ingredients">
                    <ArrowLeftIcon size={32} />
                </Link>
                <h2>{recette.nom}</h2>
            </div>
            <div className="presentation">
                <img src={recette.image} alt={"image de la recette :" + recette.nom} />
                <div className="content-presentation">
                    <p><ClockIcon size={32}/> {recette.temps_preparation}</p>
                    <p><UserIcon size={32} /> {recette.nombre_personnes}</p>
                    <p><SpinnerIcon size={32} /> {recette.temps_cuisson}</p>
                </div>
                <button className="favoris"><BookmarkSimpleIcon size={32} />Ajouter aux Favoris</button>
            </div>
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {recette.ingredients.map((ingredient) => {
                        return (
                            <li key={ingredient.nom}>
                                <span>{ingredient.illustration}</span>
                                <span>{ingredient.quantite} {ingredient.unite} {ingredient.nom}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="etapes">
                    <h3>Etapes </h3>
                    <ul>
                        {recette.etapes.map((etape)=>{
                            return (
                                <li key={etape}>{etape}</li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    )
}