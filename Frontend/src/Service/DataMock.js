export const USER_MAIN_DATA__MOCK = [
    {
        id: 'Test',
        userInfos: {
            firstName: 'Saliha',
            lastName: 'Youbi',
            age: 30,
        },
        score: 0.8,
        keyData: {
            calorieCount: 2000,
            proteinCount: 120,
            carbohydrateCount: 80,
            lipidCount: 60
        }
    }
]

export const USER_ACTIVITY__MOCK = [
    {
        userId: 'Test',
        sessions: [
            {
                day: '2023-10-01',
                kilogram: 65,
                calories: 200
            },
            {
                day: '2023-10-02',
                kilogram: 63,
                calories: 180
            },
            {
                day: '2023-10-03',
                kilogram: 68,
                calories: 250
            },
            {
                day: '2023-10-04',
                kilogram: 70,
                calories: 300
            },
            {
                day: '2023-10-05',
                kilogram: 66,
                calories: 220
            },
            {
                day: '2023-10-06',
                kilogram: 67,
                calories: 210
            },
            {
                day: '2023-10-07',
                kilogram: 64,
                calories: 190
            }
        ]
    }
]


export const USER_AVERAGE_SESSIONS__MOCK = [
    {
        userId: 'Test',
        sessions: [
            {
                day: 1,
                sessionLength: 40
            },
            {
                day: 2,
                sessionLength: 25
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 35
            },
            {
                day: 6,
                sessionLength: 45
            },
            {
                day: 7,
                sessionLength: 55
            }
        ]
    }
]


export const USER_PERFORMANCE__MOCK = [
    {
        userId: 'Test',
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 180,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 60,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 150,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
]