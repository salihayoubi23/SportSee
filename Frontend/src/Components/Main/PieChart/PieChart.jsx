// Importation des composants nécessaires de la bibliothèque recharts
import { PieChart, Pie, Cell } from 'recharts'

// Définition du composant pieChart
export default function pieChart(props) {
    // Définition des couleurs pour chaque section du graphique en camembert
    const color = [
        "#E60000", // Couleur pour la première section (rouge)
        "#ffffff"  // Couleur pour la deuxième section (blanc)
    ]

    // Récupération des données passées en tant que propriété (props)
    const data = props.todayScore;

    return (
        // Conteneur principal du graphique en camembert
        <div className='pieChart'>
            {/* Titre du graphique */}
            <h3 className='pieChart__title'>Score</h3>
            
            {/* Création du graphique en camembert */}
            <PieChart width={300} height={300}>
                {/* Définition du graphique en camembert avec les données et propriétés spécifiques */}
                <Pie
                    data={data}          // Données à afficher dans le camembert
                    dataKey="value"      // Propriété des données à utiliser pour déterminer la taille des sections
                    cx="50%" cy="50%"    // Position du centre du camembert
                    innerRadius={80}     // Rayon intérieur (donne une forme de donut)
                    outerRadius={90}     // Rayon extérieur
                    fill="#E60000"       // Couleur de fond du camembert
                    startAngle={180}      // Angle de début du camembert
                    endAngle={-180}       // Angle de fin du camembert
                    cornerRadius={50}     // Rayon de coin pour les sections du camembert
                >
                    {/* Boucle à travers les données pour créer chaque section du camembert */}
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={color[index]} /> // Cellule du camembert avec une couleur spécifique
                        ))
                    }
                </Pie>
            </PieChart>
            
            {/* Texte affichant le pourcentage de l'objectif atteint */}
            <p className='pieChart__text'>
                <span className='pieChart__text__big'>{data[0].value}%</span> <br />
                de votre objectif
            </p>
        </div>
    );
}
