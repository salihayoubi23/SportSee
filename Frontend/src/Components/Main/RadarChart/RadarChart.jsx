// Importation des composants nécessaires de la bibliothèque recharts
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

// Définition du composant radarChart
export default function radarChart(props) {
    // Récupération des données passées en tant que propriété (props)
    const data = props.performance;

    return (
        // Conteneur principal du graphique radar
        <div className='radarChart'>
            {/* Utilisation de ResponsiveContainer pour rendre le graphique adaptatif */}
            <ResponsiveContainer width="100%" height="100%">
                {/* Création du graphique radar avec les données et propriétés spécifiques */}
                <RadarChart outerRadius={80} width={300} height={300} data={data}>
                    {/* Grille polaire sans lignes radiales et couleur spécifiée */}
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    
                    {/* Axe des angles polaires avec les catégories spécifiées, sans lignes de repère et couleur spécifiée */}
                    <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} />
                    
                    {/* Radar représentant les données avec la propriété de remplissage et d'opacité spécifiée */}
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
