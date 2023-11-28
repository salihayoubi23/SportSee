// Import des données simulées depuis le module DataMock
import { USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK, USER_MAIN_DATA__MOCK } from "./DataMock";

// Fonction pour récupérer les données utilisateur
export function fetchUserData(userId) {
    // Tableau pour stocker les données
    const users = [];
    // Chemins vers les différentes données à récupérer
    const path = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`
    ];

    // Création d'un tableau de promesses pour effectuer les requêtes en parallèle
    const promiseRequest = path.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(error);
                return null;
            });
    });

    // Utilisation de Promise.all pour attendre que toutes les requêtes soient terminées
    return Promise.all(promiseRequest)
        .then(data => {
            // Vérification des données reçues
            let hasData = false;
            let index = '';
            for (const resultat of data) {
                if (resultat !== null) {
                    users.push(resultat);
                    hasData = true;
                }
            }

            // Si aucune donnée n'est disponible, utiliser les données simulées
            if (!hasData) {
                users.push(USER_MAIN_DATA__MOCK);
                users.push(USER_ACTIVITY__MOCK);
                users.push(USER_AVERAGE_SESSIONS__MOCK);
                users.push(USER_PERFORMANCE__MOCK);
                index = 0;
            }

            // Appel de la fonction pour trier et formater les données
            return sortData(users, index);
        })
        .catch(error => {
            console.error(error);
            throw error; // Rejeter l'erreur pour que le code appelant puisse également la gérer
        });
}

// Fonction pour trier et formater les données
function sortData(users, index) {
    // Jours de la semaine
    const day = ["L", "M", "M", "J", "V", "S", "D"];
    // Tableaux pour stocker les données utilisateur et le type de performance
    let user = [];
    let kind = [];
    let dataMock = false;

    // Vérification de l'index pour déterminer le format des données
    if (index === 0) {
        // Format des données lorsque les données réelles ne sont pas disponibles
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

        // Assignation des jours de la semaine à la durée moyenne des sessions
        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        // Assignation des types de performance
        kind = users[3][index].kind;
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });
        dataMock = true;
    } else {
        // Format des données lorsque les données réelles sont disponibles
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

        // Assignation des jours de la semaine à la durée moyenne des sessions
        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        // Assignation des types de performance
        kind = users[3].data.kind;
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });
        dataMock = false;
    }

    // Retour des données formatées
    return { user, kind, dataMock };
}
