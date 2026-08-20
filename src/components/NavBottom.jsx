import { BookmarksSimpleIcon, HouseIcon, ListIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";

export default function NavBottom(){
    //Composant correspondant à la barre de navigation située en bas de l’application. Il permettra de naviguer rapidement entre les principales “pages” de l’appli.

    return(
        <nav className="nav-bottom">
            <NavLink to="/ingredients">
                <HouseIcon/>
            </NavLink>
            <NavLink to="/recettes">
               <ListIcon/>
            </NavLink>
            <NavLink to="/favoris">
                <BookmarksSimpleIcon/>
            </NavLink>
        </nav>
    )
}