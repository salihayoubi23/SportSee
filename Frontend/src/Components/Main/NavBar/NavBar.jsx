// Importation des images pour chaque catégorie de sport
import Yoga from '../../../Assets/yoga.png';
import Swim from '../../../Assets/swim.png';
import Bike from '../../../Assets/bike.png';
import Bodybuilding from '../../../Assets/body.png';

// Définition du composant NavBar
export default function NavBar() {
    return (
        // Conteneur principal de la barre de navigation
        <div className="navBar">
            {/* Section pour afficher les catégories de sport avec leurs icônes */}
            <div className='navBar__sport'>
                {/* Catégorie de sport - Yoga */}
                <div className="navBar__sport__cat">
                    <img
                        src={Yoga}
                        alt="Yoga"
                    />
                </div>
                {/* Catégorie de sport - Natation */}
                <div className="navBar__sport__cat">
                    <img
                        src={Swim}
                        alt="Swim"
                    />
                </div>
                {/* Catégorie de sport - Vélo */}
                <div className="navBar__sport__cat">
                    <img
                        src={Bike}
                        alt="Bike"
                    />
                </div>
                {/* Catégorie de sport - Musculation */}
                <div className="navBar__sport__cat">
                    <img
                        src={Bodybuilding}
                        alt="Bodybuilding"
                    />
                </div>
            </div>
            {/* Section pour afficher le texte de copyright */}
            <p className="navBar__copy">Copiryght, SportSee 2020</p>
        </div>
    );
}
