// Importation des données fictives (mocks)
import { USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK, USER_MAIN_DATA__MOCK } from "./DataMock";

// Fonction pour récupérer les données de l'utilisateur depuis différentes sources
export function fetchUserData(userId) {
    // Tableau pour stocker les données récupérées
    const users = [];

    // Chemins d'accès pour récupérer les données depuis différentes sources
    const path = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`
    ];

    // Création d'une liste de promesses pour les requêtes HTTP
    const promiseRequest = path.map(url => {
        return fetch(url)
            .then(response => {
                // Vérification de la réponse HTTP
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                // Renvoi des données JSON
                return response.json();
            })
            .catch(error => {
                // Gestion des erreurs, log et renvoi de null
                console.error(error);
                return null;
            });
    });

    // Exécute toutes les promesses en parallèle
    return Promise.all(promiseRequest)
        .then(data => {
            // Booléen pour vérifier si au moins une requête a réussi
            let hasData = false;
            // Indice pour savoir si les données proviennent des mocks
            let index = '';
            // Boucle pour traiter les données récupérées
            for (const resultat of data) {
                if (resultat !== null) {
                    // Si les données ne sont pas nulles, les ajouter au tableau
                    users.push(resultat);
                    hasData = true;
                }
            }

            // Si aucune donnée n'est récupérée, utiliser des données fictives (mock)
            if (!hasData) {
                users.push(USER_MAIN_DATA__MOCK);
                users.push(USER_ACTIVITY__MOCK);
                users.push(USER_AVERAGE_SESSIONS__MOCK);
                users.push(USER_PERFORMANCE__MOCK);
                index = 0;
            }

            // Appeler la fonction pour trier les données avant de les renvoyer
            return sortData(users, index);
        })
        .catch(error => {
            // Gestion des erreurs, log et rejet de l'erreur
            console.error(error);
            throw error;
        });
}

// Fonction pour trier les données avant de les renvoyer
function sortData(users, index) {
    // Jours de la semaine
    const day = ["L", "M", "M", "J", "V", "S", "D"];
    // Tableaux pour stocker les données triées
    let user = [];
    let kind = [];
    let dataMock = false;

    // Si les données proviennent de mocks
    if (index === 0) {
        // Extraire les différentes parties des données et les structurer dans un format commun
        user = [
            {
                userId: users[0][index].id,
                firstName: users[0][index].userInfos.firstName,
                lastName: users[0][index].userInfos.lastName,
                age: users[0][index].userInfos.age,
                todayScore: [
                    { value: users[0][index].score * 100 || users[0][index].todayScore * 100 },
                    { value: (1 - users[0][index].score) * 100 || (1 - users[0][index].todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0][index].keyData.calorieCount,
                    protein: users[0][index].keyData.proteinCount,
                    carbohydrate: users[0][index].keyData.carbohydrateCount,
                    lipid: users[0][index].keyData.lipidCount
                },
                activity: users[1][index].sessions,
                timesSessions: users[2][index].sessions,
                performance: users[3][index].data
            }
        ];

        // Remplir les jours de la semaine dans les données
        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        // Récupérer les types d'activité
        kind = users[3][index].kind;

        // Attribuer le type d'activité correspondant à chaque performance
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });

        // Indiquer que les données proviennent des mocks
        dataMock = true;
    } else {
        // Si les données proviennent d'une source réelle
        user = [
            {
                userId: users[0].data.id,
                firstName: users[0].data.userInfos.firstName,
                lastName: users[0].data.userInfos.lastName,
                age: users[0].data.userInfos.age,
                todayScore: [
                    { value: users[0].data.score * 100 || users[0].data.todayScore * 100 },
                    { value: (1 - users[0].data.score) * 100 || (1 - users[0].data.todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0].data.keyData.calorieCount,
                    protein: users[0].data.keyData.proteinCount,
                    carbohydrate: users[0].data.keyData.carbohydrateCount,
                    lipid: users[0].data.keyData.lipidCount
                },
                activity: users[1].data.sessions,
                timesSessions: users[2].data.sessions,
                performance: users[3].data.data
            }
        ];

        // Remplir les jours de la semaine dans les données
        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        // Récupérer les types d'activité
        kind = users[3].data.kind;

        // Attribuer le type d'activité correspondant à chaque performance
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });

        // Indiquer que les données proviennent d'une source réelle
        dataMock = false;
    }

    // Renvoyer les données triées
    return { user, kind, dataMock };
}
