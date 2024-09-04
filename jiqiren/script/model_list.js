let app = [{
    label: 'Apitor Kit', folder: 'ApitorKit',
    androidId: 'com.robot.apitor',
    path: 'Android/data/com.robot.apitor/files/download/com.robot.apitor/apitor/.download/',
    comment: 'Новая линейка Apitor',
    menu: tool.menu.left,
    models: [
        {label: 'Robot X', folder: 'robotX'},
        {label: 'Robot S', folder: 'robotS'},
        {label: 'Robot Q', folder: 'robotQ'},
        {label: 'Robot J', folder: 'robotJ'},
        {label: 'Robot R', folder: 'robotR'},
        {label: 'Robot E', folder: 'robotE'},
        {label: 'Robot G', folder: 'robotG'},
        {label: 'Robot B', folder: 'robotB'}
    ]
}, {
    label: 'Apitor Robot', folder: 'SuperBot_Apitor',
    androidId: 'com.tudao.ApitorRobot',
    path: 'SuperBot/construct/',
    comment: 'SuperBot: версия от Apitor',
    menu: tool.menu.left,
    models: [
        {label: 'Apitor SuperBot', folder: 'construct_sb_ap'}
    ]
}, {
    label: 'Makerzoid Kit', folder: 'SuperBot_Makerzoid',
    androidId: 'com.tudao.MakerzoidKit',
    path: 'Android/data/com.tudao.MakerzoidKit/files/construct/',
    comment: 'SuperBot: версия от Makerzoid',
    menu: tool.menu.left,
    models: [
        {label: 'Makerzoid SuperBot', folder: 'construct_sb_mz'}
    ]
}, {
    label: 'makerzoid', folder: 'Makerzoid',
    androidId: 'com.tudao.makerzoid',
    path: 'Android/data/com.tudao.makerzoid/files/construct/',
    comment: 'Новая линейка Makerzoid',
    menu: tool.menu.right,
    lines: [{
        label: 'Fun', folder: 'Fun',
        sublines: [{
            label: 'Fun Building Blocks', folder: 'Fun',
            models: [
                {label: 'Stretchy Battle', folder: 'stretchy'},
                {label: 'Star War', folder: 'starWar'},
                {label: 'Land', folder: 'land'}
            ]
        }]
    }, {
        label: 'Diverse', folder: 'Diverse',
        sublines: [{
            label: 'Diverse', folder: 'Diverse',
            models: [
                {label: 'Basic', folder: 'basic'},
                {label: 'Mechanical', folder: 'mechanical'},
                {label: 'YL Corps', folder: 'corps'}
            ]
        }]
    }, {
        label: 'Machinist', folder: 'Machinist',
        sublines: [{
            label: 'Machinist Building Blocks', folder: 'Machinist',
            models: [
                {label: 'Group', folder: 'group'},
                {label: 'Basic', folder: 'basic'},
                {label: 'Mechanical', folder: 'mechanical'},
                {label: 'YL Corps', folder: 'corps'},
                {label: 'Electric Engineering', folder: 'electric'},
                {label: 'Electric YL Crops', folder: 'e_crops'},
                {label: 'Electric Animal', folder: 'animal'},
                {label: 'Space Series', folder: 'space'}
            ]
        }]
    }, {
        label: 'ROBOT MASTER', folder: 'RobotMaster',
        sublines: [{
            label: 'Standard', folder: 'Standard',
            models: [
                {label: 'Basic', folder: 'basic'},
                {label: 'Mechanical', folder: 'mechanical'},
                {label: 'YL Corps', folder: 'corps'},
                {label: 'Electric Engineering', folder: 'electric'},
                {label: 'Electric YL Crops', folder: 'e_crops'},
                {label: 'Electric Animal', folder: 'animal'},
                {label: 'Jr Programming', folder: 'jr_program'},
                {label: 'Space Series', folder: 'space'},
                {label: 'Newly-updated', folder: 'newly'}
            ]
        }, {
            label: 'Premium', folder: 'Premium',
            models: [
                {label: 'Basic', folder: 'basic'},
                {label: 'Mechanical', folder: 'mechanical'},
                {label: 'YL Corps', folder: 'corps'},
                {label: 'Electric Engineering', folder: 'electric'},
                {label: 'Electric YL Crops', folder: 'e_crops'},
                {label: 'Electric Animal', folder: 'animal'},
                {label: 'Jr Programming', folder: 'jr_program'},
                {label: 'Advanced Builging', folder: 'advanced_build'},
                {label: 'Advanced Programming', folder: 'advanced_program'},
                {label: 'Space Series', folder: 'space'},
                {label: 'NEWLY-UPDATED', folder: 'newly'}
            ]
        }, {
            label: 'Tournament', folder: 'Tournament',
            models: [
                {label: 'Stretchy Battle', folder: 'stretchy'},
                {label: 'Star War', folder: 'starWar'},
                {label: 'Land', folder: 'land'}
            ]
        }, {
            label: 'Soccer Competition', folder: 'Soccer',
            models: [
                {label: 'Stretchy Battle', folder: 'stretchy'},
                {label: 'Star War', folder: 'starWar'},
                {label: 'Land', folder: 'land'}
            ]
        }]
    }, {
        label: 'Superbot', folder: 'Superbot',
        sublines: [{
            label: 'Superbot', folder: 'Superbot',
            models: [
                {label: 'Stretchy Battle123', folder: 'stretchy123'},
                {label: 'Star War123', folder: 'starWar123'},
                {label: 'Land123', folder: 'land123'}
            ]
        }, {
            label: 'Superbot Master Premium', folder: 'Premium',
            models: [
                {label: 'Stretchy Battle123', folder: 'stretchy123'},
                {label: 'Star War123', folder: 'starWar123'},
                {label: 'Land123', folder: 'land123'}
            ]
        }]
    }, {
        label: 'Smart Robot', folder: 'SmartRobot',
        sublines: [{
            label: 'Smart Robot', folder: 'SmartRobot',
            models: [
                {label: 'Stretchy Battle123', folder: 'stretchy123'},
                {label: 'Star War123', folder: 'starWar123'},
                {label: 'Land123', folder: 'land123'}
            ]
        }, {
            label: 'Smart Robot Premium', folder: 'Premium',
            models: [
                {label: 'Stretchy Battle123', folder: 'stretchy123'},
                {label: 'Star War123', folder: 'starWar123'},
                {label: 'Land123', folder: 'land123'}
            ]
        }]
    }]
}, {
    label: 'SuperBot', folder: 'SuperBot_RobotMake',
    androidId: 'com.tudao.superRobot',
    path: 'RobotMake/construct/',
    comment: 'Старая линейка Makerzoid: китайская версия',
    menu: tool.menu.right,
    models: [
        {label: 'SuperBot Build', folder: 'construct_rm_tw'}
    ]
}, {
    label: 'Futula', folder: 'Futula',
    androidId: 'com.tudao.Futula',
    path: 'Android/data/com.tudao.Futula/files/construct/',
    comment: 'Линейка Futula',
    menu: tool.menu.right,
    models: [
        {label: 'Futula Build', folder: 'construct_ft'}
    ]
}, {
    label: 'RobotMake', folder: 'RobotMake',
    androidId: 'com.tudao.RobotMake.Taiwan',
    path: 'Android/data/com.tudao.RobotMake.Taiwan/files/construct/',
    comment: 'Линейка RobotMake для Тайваня',
    menu: tool.menu.right,
    lines: [{
        label: 'Fun', folder: 'Fun',
        models: [
            {label: 'Stretchy Battle', folder: 'stretchy'},
            {label: 'Star War', folder: 'starWar'},
            {label: 'Land', folder: 'land'}
        ]
    }, {
        label: 'Fun123', folder: 'Fun123',
        models: [
            {label: 'Stretchy Battle123', folder: 'stretchy123'},
            {label: 'Star War123', folder: 'starWar123'},
            {label: 'Land123', folder: 'land123'}
        ]
    }]
}];

tool.prepareAppList();

app.ApitorKit.figures = [{
    index: 0,
    folder: '056540d790ba5977a30486ea2ddf6ef9',
    cover: '85.png',
    count: 85,
    name: {rus: 'Цифровое пианино', eng: 'Digital Piano'},
    number: 8,
    model: app.ApitorKit.robotX
}, {
    index: 1,
    folder: '0d971274c0399ddb7fa2b6f432d1b8f8',
    cover: '62.png',
    count: 62,
    name: {rus: 'Гоночная машина', eng: 'Racing Car'},
    number: 1,
    model: app.ApitorKit.robotX
}, {
    index: 2,
    folder: '4829558b232bacdec578de4c5411c123',
    cover: '105.png',
    count: 105,
    name: {rus: 'Робот', eng: 'Robot X'},
    number: 2,
    model: app.ApitorKit.robotX
}, {
    index: 3,
    folder: '6679e611a8ac65b4038960cdd00f3d63',
    cover: '66.png',
    count: 66,
    name: {rus: 'Катапульта', eng: 'Catapult'},
    number: 7,
    model: app.ApitorKit.robotX
}, {
    index: 4,
    folder: '6a53d1c0a595fb7c7dfff66699d5cd03',
    cover: '60.png',
    count: 60,
    name: {rus: 'Подъёмник', eng: 'Lifter'},
    number: 11,
    model: app.ApitorKit.robotX
}, {
    index: 5,
    folder: '6e43c0e290d134bbcb9be8050262fffa',
    cover: '61.png',
    count: 61,
    name: {rus: 'Цветовой сортировщик', eng: 'Color Sorter'},
    number: 12,
    model: app.ApitorKit.robotX
}, {
    index: 6,
    folder: '860b125ab9efc161b8ce99e956405fb8',
    cover: '102.png',
    count: 102,
    name: {rus: 'Динозавр', eng: 'Dinosaur'},
    number: 5,
    model: app.ApitorKit.robotX
}, {
    index: 7,
    folder: '893e7c267c26c01e15293bad66d92548',
    cover: '77.png',
    count: 77,
    name: {rus: 'Мототакси Тук-тук', eng: 'Tuk-Tuk'},
    number: 3,
    model: app.ApitorKit.robotX
}, {
    index: 8,
    folder: '8d9ca9b0ebaded8463a0fbe1f67cb475',
    cover: '107.png',
    count: 107,
    name: {rus: 'Вертолёт', eng: 'Helicopter'},
    number: 6,
    model: app.ApitorKit.robotX
}, {
    index: 9,
    folder: 'a8cec70c8ea69a3d7519fdbd32fb2809',
    cover: '107.png',
    count: 107,
    name: {rus: 'Монстр', eng: 'Monster'},
    number: 9,
    model: app.ApitorKit.robotX
}, {
    index: 10,
    folder: 'd15f031b6379d04401bab5ca119b16ea',
    cover: '59.png',
    count: 59,
    name: {rus: 'Скрипка', eng: 'Violin'},
    number: 4,
    model: app.ApitorKit.robotX
}, {
    index: 11,
    folder: 'd9c450efff10e5d88db048edad188f32',
    cover: '56.png',
    count: 56,
    name: {rus: 'Чертёжная машина', eng: 'Drawing Machine'},
    number: 10,
    model: app.ApitorKit.robotX
}, {
    index: 12,
    folder: '040e9e9ec3c38a7b3b744c420090acc9',
    cover: '80.jpg',
    count: 80,
    name: {rus: 'Музыкальная шкатулка', eng: 'Music Box'},
    number: 5,
    model: app.ApitorKit.robotS
}, {
    index: 13,
    folder: '31e2fd4650e4d9e77acc11dce1b1b376',
    cover: '66.jpg',
    count: 66,
    name: {rus: 'Гоночный автомобиль', eng: 'RC Car', variant: 'Суперкар'},
    number: 1,
    model: app.ApitorKit.robotS
}, {
    index: 14,
    folder: '44c31c49f26cda9be43019d8c6ef0c76',
    cover: '68.jpg',
    count: 68,
    name: {rus: 'Карусель', eng: 'Merry-Go-Round'},
    number: 3,
    model: app.ApitorKit.robotS
}, {
    index: 15,
    folder: '6f88b00bfb9b159bb0c29c215d27aa51',
    cover: '166.jpg',
    count: 166,
    name: {rus: 'Совместные модели SX', eng: 'SX Joint Model'},
    number: 11,
    model: app.ApitorKit.robotS
}, {
    index: 15,
    folder: '6f88b00bfb9b159bb0c29c215d27aa51',
    cover: '166.jpg',
    count: 166,
    name: {rus: 'Совместные модели SX', eng: 'SX Joint Model'},
    number: 13,
    model: app.ApitorKit.robotX
}, {
    index: 16,
    folder: 'c51381fd5e4c04559c9cf89e0b65665e',
    cover: '85.jpg',
    count: 85,
    name: {rus: 'Подъёмный кран', eng: 'Crane', variant: 'Кран-манипулятор'},
    number: 4,
    model: app.ApitorKit.robotS
}, {
    index: 17,
    folder: 'c53da32011273a123e7d9f3c5d5a784c',
    cover: '83.jpg',
    count: 83,
    name: {rus: 'Слон', eng: 'Elephant'},
    number: 2,
    model: app.ApitorKit.robotS
}, {
    index: 18,
    folder: 'c6ae8595c3cb87bd11f45d58e803a1d8',
    cover: '86.jpg',
    count: 86,
    name: {rus: 'Маятник', eng: 'Pendulum Ride'},
    number: 8,
    model: app.ApitorKit.robotS
}, {
    index: 19,
    folder: 'cacd969b906147914148f3524e1cf2d9',
    cover: '79.jpg',
    count: 79,
    name: {rus: 'Таинственный ящик', eng: 'Mystery Box', variant: 'Коробка-сюрприз'},
    number: 6,
    model: app.ApitorKit.robotS
}, {
    index: 20,
    folder: 'cc46cab8c3755b93aa65db9989598f4e',
    cover: '86.jpg',
    count: 86,
    name: {rus: 'Робот-пылесос', eng: 'Robot Vacuum'},
    number: 7,
    model: app.ApitorKit.robotS
}, {
    index: 21,
    folder: 'db8af41bbdf2bb8c55a52bbabfc0e498',
    cover: '83.jpg',
    count: 83,
    name: {rus: 'Боксёр', eng: 'Boxer'},
    number: 10,
    model: app.ApitorKit.robotS
}, {
    index: 22,
    folder: 'f3a71420326023bb65cd2d29b3f18293',
    cover: '84.jpg',
    count: 84,
    name: {rus: 'Самолёт', eng: 'Airplane'},
    number: 9,
    model: app.ApitorKit.robotS
}, {
    index: 23,
    folder: '0548f0b03a5a68bc6b6902ccbd2e26f6',
    cover: '62.jpg',
    count: 62,
    name: {rus: 'Кукурузник', eng: 'Propeller Plane'},
    number: 20,
    model: app.ApitorKit.robotQ
}, {
    index: 24,
    folder: '10e9bf6fcc10239c38f86804f722c9c1',
    cover: '41.jpg',
    count: 41,
    name: {rus: 'Баскетбольная машина', eng: 'Basketball Machine'},
    number: 11,
    model: app.ApitorKit.robotQ
}, {
    index: 25,
    folder: '25331808001dbb7247eb469212b30e3c',
    cover: '56.png',
    count: 56,
    name: {rus: 'Горилла', eng: 'Gorilla'},
    number: 1,
    model: app.ApitorKit.robotQ
}, {
    index: 26,
    folder: '304688ef132621e2690a64c4cddfd096',
    cover: '45.jpg',
    count: 45,
    name: {rus: 'Клоун', eng: 'Clown'},
    number: 16,
    model: app.ApitorKit.robotQ
}, {
    index: 27,
    folder: '311c66c884fe14c2c142acc844735fe5',
    cover: '160.jpg',
    count: 160,
    name: {rus: 'Совместные модели QX', eng: 'QX Joint Model'},
    number: 21,
    model: app.ApitorKit.robotQ
}, {
    index: 27,
    folder: '311c66c884fe14c2c142acc844735fe5',
    cover: '160.jpg',
    count: 160,
    name: {rus: 'Совместные модели QX', eng: 'QX Joint Model'},
    number: 14,
    model: app.ApitorKit.robotX
}, {
    index: 28,
    folder: '3f33677232f0c4316dd0472504678ac4',
    cover: '62.jpg',
    count: 62,
    name: {rus: 'Собака', eng: 'Dog'},
    number: 6,
    model: app.ApitorKit.robotQ
}, {
    index: 29,
    folder: '4a0d2d9b5995c35e2b3bdfa71c892647',
    cover: '38.jpg',
    count: 38,
    name: {rus: 'Качели-балансир', eng: 'Seesaw'},
    number: 13,
    model: app.ApitorKit.robotQ
}, {
    index: 30,
    folder: '50f5f526c7636184058db361e71ee10b',
    cover: '51.jpg',
    count: 51,
    name: {rus: 'Шоу «Танцы»', eng: 'Dancing'},
    number: 17,
    model: app.ApitorKit.robotQ
}, {
    index: 31,
    folder: '52a4abad96da37c2bd9f170397a8b3aa',
    cover: '45.jpg',
    count: 45,
    name: {rus: 'Трактор', eng: 'Detection Vehicle'},
    number: 18,
    model: app.ApitorKit.robotQ
}, {
    index: 32,
    folder: '6140e7ebe04b960b2383832ce16826ae',
    cover: '50.jpg',
    count: 50,
    name: {rus: 'Качели', eng: 'Swing'},
    number: 12,
    model: app.ApitorKit.robotQ
}, {
    index: 33,
    folder: '7dc9aaa432cc827ed4df3555f37bf9dc',
    cover: '39.jpg',
    count: 39,
    name: {rus: 'Паровоз', eng: 'Locomotive'},
    number: 2,
    model: app.ApitorKit.robotQ
}, {
    index: 34,
    folder: '9a77841ebb93fb037591df28db7785cd',
    cover: '39.jpg',
    count: 39,
    name: {rus: 'Турник', eng: 'Horizontal Bar'},
    number: 14,
    model: app.ApitorKit.robotQ
}, {
    index: 35,
    folder: '9da66cd1e104847f6fb1fadc86ee68d9',
    cover: '57.jpg',
    count: 57,
    name: {rus: 'Байдарка', eng: 'Rowing'},
    number: 4,
    model: app.ApitorKit.robotQ
}, {
    index: 36,
    folder: '9f0f00d0d39659af7f79754edded7806',
    cover: '36.jpg',
    count: 36,
    name: {rus: 'Гольф-клуб', eng: 'Golf'},
    number: 10,
    model: app.ApitorKit.robotQ
}, {
    index: 37,
    folder: 'a6bc17309126de2c3692e9c637640574',
    cover: '44.png',
    count: 44,
    name: {rus: 'Волчок', eng: 'Spinning Top'},
    number: 5,
    model: app.ApitorKit.robotQ
}, {
    index: 38,
    folder: 'bb00e60f349c579ee61b16ca1b1b734c',
    cover: '50.jpg',
    count: 50,
    name: {rus: 'Подъёмный кран', eng: 'Tower Crane'},
    number: 7,
    model: app.ApitorKit.robotQ
}, {
    index: 39,
    folder: 'c9dc93b87536b361cd00ea95d120beb9',
    cover: '52.jpg',
    count: 52,
    name: {rus: 'Мотоцикл', eng: 'Motorcycle'},
    number: 8,
    model: app.ApitorKit.robotQ
}, {
    index: 40,
    folder: 'd60a88eeec4fe1452cdf11e6660d0a23',
    cover: '50.jpg',
    count: 50,
    name: {rus: 'Качающаяся лодка', eng: 'Rocking Boat'},
    number: 9,
    model: app.ApitorKit.robotQ
}, {
    index: 41,
    folder: 'e215d69448f7399fc07284d52da0b7ce',
    cover: '38.jpg',
    count: 38,
    name: {rus: 'Автоматические двери', eng: 'Automatic Door'},
    number: 15,
    model: app.ApitorKit.robotQ
}, {
    index: 42,
    folder: 'e3721dda400e07588214ace56bbdd714',
    cover: '34.jpg',
    count: 34,
    name: {rus: 'Лифт', eng: 'Elevator'},
    number: 19,
    model: app.ApitorKit.robotQ
}, {
    index: 43,
    folder: 'fbc8c68e9bf0564e580ca9708a87beb5',
    cover: '56.jpg',
    count: 56,
    name: {rus: 'Гоночная машина', eng: 'Racing Car'},
    number: 3,
    model: app.ApitorKit.robotQ
}, {
    index: 44,
    folder: '0920fdd83c6139d18df056b89e33ef8f',
    cover: '66.png',
    count: 64,
    name: {rus: 'Бурильная машина', eng: 'Drill Car'},
    number: 1,
    model: app.ApitorKit.robotJ
}, {
    index: 45,
    folder: '145d87b97b0805bf4222dfe813311e03',
    cover: '81.png',
    count: 81,
    name: {rus: 'Пусковая установка', eng: 'Launcher'},
    number: 6,
    model: app.ApitorKit.robotJ
}, {
    index: 46,
    folder: '3f09cf77d0e11df7650a0f5dfa61d30d',
    cover: '85.png',
    count: 85,
    name: {rus: 'Марсоход', eng: 'Mars Rover'},
    number: 5,
    model: app.ApitorKit.robotJ
}, {
    index: 47,
    folder: 'a3f18dd13e5297aebfbc6213f825b504',
    cover: '75.png',
    count: 75,
    name: {rus: 'Танк', eng: 'Tank'},
    number: 3,
    model: app.ApitorKit.robotJ
}, {
    index: 48,
    folder: 'b1a4db45e1988c62d9f270a5efd40472',
    cover: '88.png',
    count: 88,
    name: {rus: 'Робот', eng: 'Robot J'},
    number: 2,
    model: app.ApitorKit.robotJ
}, {
    index: 49,
    folder: 'bbab4cb2f44575a3e5240a7dd58d2605',
    cover: '84.png',
    count: 84,
    name: {rus: 'Робокар', eng: 'Robo Car'},
    number: 4,
    model: app.ApitorKit.robotJ
}, {
    index: 50,
    folder: '476e0af57e8b26868d8f3f93da4ed6f0',
    cover: '66.png',
    count: 64,
    name: {rus: 'Внедорожник', eng: 'Off-Roader'},
    number: 1,
    model: app.ApitorKit.robotR
}, {
    index: 51,
    folder: '8c8dc3c747c2097da2ae97365b7b1cc7',
    cover: '70.png',
    count: 70,
    name: {rus: 'Ракетомобиль', eng: 'Rocket Car'},
    number: 2,
    model: app.ApitorKit.robotR
}, {
    index: 52,
    folder: 'df23f42e6e3e8a2497ec6ed475764be0',
    cover: '68.png',
    count: 68,
    name: {rus: 'Грузовик', eng: 'Pickup'},
    number: 3,
    model: app.ApitorKit.robotR
}, {
    index: 53,
    folder: 'ea3c14e443d3e83766850ada7deef485',
    cover: '65.png',
    count: 65,
    name: {rus: 'Робот-жук', eng: 'Robo Bug'},
    number: 4,
    model: app.ApitorKit.robotR
}, {
    index: 54,
    folder: '080beb181c219e55bfaf4f0de605e1ad',
    cover: '47.png',
    count: 47,
    name: {rus: 'Колесо обозрения', eng: 'Ferris Wheel'},
    number: 2,
    model: app.ApitorKit.robotG
}, {
    index: 55,
    folder: '228f2b7a03efb41e6e849d1895b0b9a5',
    cover: '46.png',
    count: 46,
    name: {rus: 'Балет кроликов', eng: 'Bunny Ballet'},
    number: 7,
    model: app.ApitorKit.robotG
}, {
    index: 56,
    folder: '3bff4adbb5e3e69d7501a5d5c98488f7',
    cover: '54.png',
    count: 54,
    name: {rus: 'Рыба', eng: 'Fish'},
    number: 6,
    model: app.ApitorKit.robotG
}, {
    index: 57,
    folder: '5f6fa69b982388de5c0d203772d50dd2',
    cover: '47.png',
    count: 47,
    name: {rus: 'Карета', eng: 'Carriage'},
    number: 5,
    model: app.ApitorKit.robotG
}, {
    index: 58,
    folder: '67895cc57ae604b1e06a23bda8c36066',
    cover: '60.png',
    count: 60,
    name: {rus: 'Пингвин', eng: 'Penguin'},
    number: 4,
    model: app.ApitorKit.robotG
}, {
    index: 59,
    folder: '6f79b5f62b3664037d28e2043f8ab77a',
    cover: '48.png',
    count: 48,
    name: {rus: 'Бабочка', eng: 'Butterfly'},
    number: 3,
    model: app.ApitorKit.robotG
}, {
    index: 60,
    folder: '7516e7614af94def5436d489aaf1b9ca',
    cover: '47.png',
    count: 47,
    name: {rus: 'Цветок', eng: 'Flower'},
    number: 8,
    model: app.ApitorKit.robotG
}, {
    index: 61,
    folder: 'a12f14dca26bc4e642dae35016a907a9',
    cover: '51.png',
    count: 51,
    name: {rus: 'Единорог', eng: 'Unicorn'},
    number: 1,
    model: app.ApitorKit.robotG
}, {
    index: 62,
    folder: '031dce38808fc0855b39ceca7bef72fc',
    cover: '60.png',
    count: 58,
    name: {rus: 'Монстр-трак', eng: 'Monster Truck'},
    number: 1,
    model: app.ApitorKit.robotB
}, {
    index: 63,
    folder: '21f934b9b225896c71cd501259eed1f4',
    cover: '148.png',
    count: 48,
    name: {rus: 'Камнемёт', eng: 'Stone Thrower'},
    number: 7,
    model: app.ApitorKit.robotB
}, {
    index: 64,
    folder: '479e36d93748988adb64831d53083b65',
    cover: '59.png',
    count: 61,
    name: {rus: 'Самолётная пусковая установка', eng: 'Airplane Launcher'},
    number: 8,
    model: app.ApitorKit.robotB
}, {
    index: 65,
    folder: '585f3849407ab0014da6d5cde2a307f8',
    cover: '61.png',
    count: 63,
    name: {rus: 'Птеродактиль', eng: 'Pterodactyl'},
    number: 2,
    model: app.ApitorKit.robotB
}, {
    index: 66,
    folder: '849b9ac1c818c252fe4c31e71caaafac',
    cover: '54.png',
    count: 55,
    name: {rus: 'Монстр-кар', eng: 'Monster Car'},
    number: 5,
    model: app.ApitorKit.robotB
}, {
    index: 67,
    folder: '871949bcb50c9f72d40bdc4ca3c2aa40',
    cover: '62.png',
    count: 62,
    name: {rus: 'Боевой робот', eng: 'Battle Mech'},
    number: 6,
    model: app.ApitorKit.robotB
}, {
    index: 68,
    folder: '8775603575c7b835286fbbc491f49ae1',
    cover: '51.png',
    count: 53,
    name: {rus: 'Бульдозер', eng: 'Bulldozer'},
    number: 3,
    model: app.ApitorKit.robotB
}, {
    index: 69,
    folder: 'a804a85a94efe9dd26ac5403b1ddfc1a',
    cover: '50.png',
    count: 52,
    name: {rus: 'Трицератопс', eng: 'Triceratops'},
    number: 4,
    model: app.ApitorKit.robotB
}, {
    index: 70,
    folder: '1c24c8b958e0c95a17a643c8e8699c12',
    cover: '42.png',
    count: 44,
    name: {rus: 'Гусеница', eng: 'Inchworm'},
    number: 3,
    model: app.ApitorKit.robotE
}, {
    index: 71,
    folder: '30b689919df3a9292aa11e7426f75010',
    cover: '45.png',
    count: 47,
    name: {rus: 'Двигатель', eng: 'Engine'},
    number: 12,
    model: app.ApitorKit.robotE
}, {
    index: 72,
    folder: '3c06fca87c76fc287d74359d2d90f17e',
    cover: '41.png',
    count: 43,
    name: {rus: 'Радиолокационная башня', eng: 'Radar Tower'},
    number: 14,
    model: app.ApitorKit.robotE
}, {
    index: 73,
    folder: '4c311dc93abd47808a9f09c77abd6c44',
    cover: '50.png',
    count: 52,
    name: {rus: 'Подъёмный кран', eng: 'Crane'},
    number: 7,
    model: app.ApitorKit.robotE
}, {
    index: 74,
    folder: '62a6e65f8ea53c2b1e0349cef34628cc',
    cover: '37.png',
    count: 39,
    name: {rus: 'Гравитационная машина', eng: 'Gravity Car'},
    number: 11,
    model: app.ApitorKit.robotE
}, {
    index: 75,
    folder: '7510d0ab7da1cac23b35102aed3cfb4b',
    cover: '51.png',
    count: 53,
    name: {rus: 'Робот-собака', eng: 'Robot Dog'},
    number: 8,
    model: app.ApitorKit.robotE
}, {
    index: 76,
    folder: '79a7bb5aff422aff68fd08610e6680bd',
    cover: '39.png',
    count: 41,
    name: {rus: 'Чертёжная машина', eng: 'Drawing Car'},
    number: 5,
    model: app.ApitorKit.robotE
}, {
    index: 77,
    folder: '818ee4aca576441e0600ecba04de7da1',
    cover: '50.png',
    count: 50,
    name: {rus: 'Барабанщик', eng: 'Drummer'},
    number: 1,
    model: app.ApitorKit.robotE
}, {
    index: 78,
    folder: '88623c8aa75be5f442924be3a6f0e373',
    cover: '33.png',
    count: 35,
    name: {rus: 'Весы', eng: 'Balance Scale'},
    number: 6,
    model: app.ApitorKit.robotE
}, {
    index: 79,
    folder: '8ae65e7e7b78821b0dec1093a69b18f3',
    cover: '40.png',
    count: 42,
    name: {rus: 'Механический клоун', eng: 'Mechanical Clown'},
    number: 4,
    model: app.ApitorKit.robotE
}, {
    index: 80,
    folder: '965b4fc4129048bd2dee93dab4102d5e',
    cover: '41.png',
    count: 42,
    name: {rus: 'Ножничный подъёмник', eng: 'Scissor Lift'},
    number: 9,
    model: app.ApitorKit.robotE
}, {
    index: 81,
    folder: 'b70a09f8e0d3059b6e87763414c0b00c',
    cover: '47.png',
    count: 49,
    name: {rus: 'Уборочная машина', eng: 'Sweeper Car'},
    number: 10,
    model: app.ApitorKit.robotE
}, {
    index: 82,
    folder: 'b9a0d93f96682c04f72b99c21389c112',
    cover: '37.png',
    count: 39,
    name: {rus: 'Роботизированная рука', eng: 'Robotic Arm'},
    number: 13,
    model: app.ApitorKit.robotE
}, {
    index: 83,
    folder: 'd15a7d6ff203a6ac533ae879dafba47d',
    cover: '39.png',
    count: 41,
    name: {rus: 'Пружинящая машинка', eng: 'Bounce Car'},
    number: 2,
    model: app.ApitorKit.robotE
}];

app.SuperBot_Apitor.figures = [{
    index: 0,
    folder: 'chanche/chanche',
    cover: '47.png',
    count: 47,
    name: {rus: 'Таран', eng: 'Plough Car'},
    number: 2,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 1,
    folder: 'dianbaoji/dianbaoji',
    cover: '66.png',
    count: 66,
    name: {rus: 'Телеграф', eng: 'Telegraph Machine'},
    number: 12,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 2,
    folder: 'huatujiqiren/huatujiqiren',
    cover: '59.png',
    count: 59,
    name: {rus: 'Робот-художник', eng: 'Drawing Robot'},
    number: 13,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 3,
    folder: 'huiliche/huiliche',
    cover: '31.png',
    count: 32,
    name: {rus: 'Гоночный трицикл', eng: 'Rubber Band Racing Tricycle'},
    number: 6,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 4,
    folder: 'hushizhanche/hushizhanche',
    cover: '40.png',
    count: 40,
    name: {rus: 'Колесница тигра - дракона', eng: 'Dragon Tiger Chariot'},
    number: 8,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 5,
    folder: 'jipuche/jipuche',
    cover: '72.png',
    count: 72,
    name: {rus: 'Джип', eng: 'SUV'},
    number: 3,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 6,
    folder: 'jiqiren/jiqiren',
    cover: '63.png',
    count: 63,
    name: {rus: 'Курьер', eng: 'Delivery Man'},
    number: 7,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 7,
    folder: 'laohu/laohu',
    cover: '89.png',
    count: 89,
    name: {rus: 'Тигр', eng: 'Tiger'},
    number: 16,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 8,
    folder: 'motuoche/motuoche',
    cover: '38.png',
    count: 38,
    name: {rus: 'Мотоцикл', eng: 'Motorcycle'},
    number: 5,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 9,
    folder: 'niao/niao',
    cover: '51.png',
    count: 51,
    name: {rus: 'Птица', eng: 'Bird'},
    number: 19,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 10,
    folder: 'pingpangqiuche/pingpangqiuche',
    cover: '68.png',
    count: 68,
    name: {rus: 'Футбольный робот', eng: 'Football Robot'},
    number: 17,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 11,
    folder: 'sanlunche/sanlunche',
    cover: '52.png',
    count: 52,
    name: {rus: 'Трицикл', eng: 'Tricycle'},
    number: 9,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 12,
    folder: 'tanliche/tanliche',
    cover: '23.png',
    count: 23,
    name: {rus: 'Трицикл с резиновой лентой', eng: 'Rubber Band Tricycle'},
    number: 1,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 13,
    folder: 'tianping/tianping',
    cover: '39.png',
    count: 39,
    name: {rus: 'Баланс', eng: 'Balance'},
    number: 4,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 14,
    folder: 'tingchechangxitong/tingchechangxitong',
    cover: '31.png',
    count: 31,
    name: {rus: 'Парковщик', eng: 'Parking System'},
    number: 14,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 15,
    folder: 'xiangpujiqiren/xiangpujiqiren',
    cover: '57.png',
    count: 57,
    name: {rus: 'Сумо робот', eng: 'Sumo Robot'},
    number: 18,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 16,
    folder: 'yinyuehe/yinyuehe',
    cover: '44.png',
    count: 44,
    name: {rus: 'Музыкальная шкатулка', eng: 'Music Box'},
    number: 11,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 17,
    folder: 'zhanche/zhanche',
    cover: '34.png',
    count: 34,
    name: {rus: 'Колесница', eng: 'Chariot'},
    number: 10,
    model: app.SuperBot_Apitor.construct_sb_ap
}, {
    index: 18,
    folder: 'zhihejiqiren/zhihejiqiren',
    cover: '36.png',
    count: 36,
    name: {rus: 'Робот бумажный журавль', eng: 'Paper Crane Robot'},
    number: 15,
    model: app.SuperBot_Apitor.construct_sb_ap
}];

app.SuperBot_Makerzoid.figures = [{
    index: 0,
    folder: 'cb_f1/cb_f1',
    cover: '74.png',
    count: 74,
    name: {rus: 'Формула-1', eng: 'F1'},
    number: 26,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 1,
    folder: 'chanche/chanche',
    cover: '47.png',
    count: 47,
    name: {rus: 'Таран', eng: 'Plough Car'},
    number: 2,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 2,
    folder: 'dajiaoche/dajiaoche',
    cover: '96.png',
    count: 96,
    name: {rus: 'Внедорожник Bighorn', eng: 'Bighorn Car'},
    number: 23,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 3,
    folder: 'dianbaoji/dianbaoji',
    cover: '66.png',
    count: 66,
    name: {rus: 'Телеграф', eng: 'Telegraph Machine'},
    number: 15,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 4,
    folder: 'gancaocha/gancaocha',
    cover: '11.png',
    count: 11,
    name: {rus: 'Вилы', eng: 'Hayfork'},
    number: 5,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 5,
    folder: 'huatujiqiren/huatujiqiren',
    cover: '59.png',
    count: 59,
    name: {rus: 'Робот-художник', eng: 'Drawing Robot'},
    number: 16,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 6,
    folder: 'huiliche/huiliche',
    cover: '31.png',
    count: 32,
    name: {rus: 'Гоночный трицикл', eng: 'Rubber Band Racing Tricycle'},
    number: 8,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 7,
    folder: 'huojianche_1/huojianche_1',
    cover: '58.png',
    count: 58,
    name: {rus: 'Реактивная машина', eng: 'Jet car'},
    number: 24,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 8,
    folder: 'hushizhanche/longhuzhanche',
    cover: '40.png',
    count: 40,
    name: {rus: 'Колесница тигра - дракона', eng: 'Dragon Tiger Chariot'},
    number: 11,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 9,
    folder: 'jipuche/jipuche',
    cover: '72.png',
    count: 72,
    name: {rus: 'Джип', eng: 'SUV'},
    number: 3,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 10,
    folder: 'jiqiren/songcanjiqiren',
    cover: '63.png',
    count: 63,
    name: {rus: 'Курьер', eng: 'Delivery Man'},
    number: 10,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 11,
    folder: 'laohu/laohu',
    cover: '89.png',
    count: 89,
    name: {rus: 'Тигр', eng: 'Tiger'},
    number: 19,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 12,
    folder: 'minihuiliche/minihuiliche',
    cover: '17.png',
    count: 17,
    name: {rus: 'Гоночный мини-трицикл', eng: 'Mini Rubber Band Racing Tricycle'},
    number: 9,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 13,
    folder: 'motuoche/motuoche',
    cover: '38.png',
    count: 38,
    name: {rus: 'Мотоцикл', eng: 'Motorcycle'},
    number: 7,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 14,
    folder: 'niao/niao',
    cover: '51.png',
    count: 51,
    name: {rus: 'Птица', eng: 'Bird'},
    number: 22,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 15,
    folder: 'pingpangqiuche/qiusaijiqiren',
    cover: '68.png',
    count: 68,
    name: {rus: 'Футбольный робот', eng: 'Football Robot'},
    number: 20,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 16,
    folder: 'sanlunche/sanlunche',
    cover: '52.png',
    count: 52,
    name: {rus: 'Трицикл', eng: 'Tricycle'},
    number: 12,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 17,
    folder: 'shensuojia/shensuojia',
    cover: '17.png',
    count: 17,
    name: {rus: 'Щипцы', eng: 'Expansion Clamp'},
    number: 6,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 18,
    folder: 'tanliche/tanliche',
    cover: '23.png',
    count: 23,
    name: {rus: 'Трицикл с резиновой лентой', eng: 'Rubber Band Tricycle'},
    number: 1,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 19,
    folder: 'tianping/tianping',
    cover: '39.png',
    count: 39,
    name: {rus: 'Баланс', eng: 'Balance'},
    number: 4,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 20,
    folder: 'tingchechangxitong/zhinengzamen',
    cover: '31.png',
    count: 31,
    name: {rus: 'Парковщик', eng: 'Parking System'},
    number: 17,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 21,
    folder: 'xiangpujiqiren/xiangpujiqiren',
    cover: '57.png',
    count: 57,
    name: {rus: 'Сумо робот', eng: 'Sumo Robot'},
    number: 21,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 22,
    folder: 'yinyuehe/yinyuehe',
    cover: '44.png',
    count: 44,
    name: {rus: 'Музыкальная шкатулка', eng: 'Music Box'},
    number: 14,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 23,
    folder: 'zhanche/zhanche',
    cover: '34.png',
    count: 34,
    name: {rus: 'Колесница', eng: 'Chariot'},
    number: 13,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 24,
    folder: 'zhancheshengjiban_1/zhancheshengjiban_1',
    cover: '137.png',
    count: 137,
    name: {rus: 'Бэтмобиль', eng: 'Batmobile'},
    number: 25,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}, {
    index: 25,
    folder: 'zhihejiqiren/zhihejiqiren',
    cover: '36.png',
    count: 36,
    name: {rus: 'Робот бумажный журавль', eng: 'Paper Crane Robot'},
    number: 18,
    model: app.SuperBot_Makerzoid.construct_sb_mz
}];

app.Makerzoid.figures = [{
    index: 0,
    folder: '1c80e0db-53b0-46fc-a8be-c6633b293cb6/tanliche6',
    cover: '30.png',
    count: 32,
    name: {eng: 'Stretchy Car 6'},
    number: 9,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 1,
    folder: '35769087-c7b9-4fb6-994d-47cbba70f95a/tanliche7',
    cover: '36.png',
    count: 38,
    name: {eng: 'Stretchy Car 7'},
    number: 10,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 2,
    folder: '3e3c4a20-9ec4-46f8-b438-90b63887f2a1/tanliche4',
    cover: '41.png',
    count: 43,
    name: {eng: 'Stretchy Car 4'},
    number: 7,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 3,
    folder: '8d807e8d-daea-4f81-b160-20db7b0ca833/tanlipensheche',
    cover: '59.png',
    count: 60,
    name: {eng: 'Stretchy Jet Car'},
    number: 1,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 4,
    folder: '940bc77f-6a99-4b21-8b0f-b942d4ab888f/tanliche2',
    cover: '16.png',
    count: 16,
    name: {eng: 'Stretchy Car 2'},
    number: 5,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 5,
    folder: 'a31aecbc-6058-4d5a-a6ab-500bf0c05985/tanliche3',
    cover: '33.png',
    count: 35,
    name: {eng: 'Stretchy Car 3'},
    number: 6,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 6,
    folder: 'bb4f4076-cbff-429d-9265-12cb6d11931f/tanliche1',
    cover: '12.png',
    count: 12,
    name: {eng: 'Stretchy Car 1'},
    number: 4,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 7,
    folder: 'cfdfeb29-d171-41e2-bdb4-2a89589d6693/tanlipaoche',
    cover: '71.png',
    count: 71,
    name: {eng: 'Stretchy Racing Car'},
    number: 2,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 8,
    folder: 'ef912921-18e4-415f-ace1-1f02833f7225/tanliche5',
    cover: '28.png',
    count: 30,
    name: {eng: 'Stretchy Car 5'},
    number: 8,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 9,
    folder: 'f6e33c94-7ca4-4722-a61b-1a9cdabe7e1c/tanlizhanche',
    cover: '36.png',
    count: 38,
    name: {eng: 'Stretchy Chariot'},
    number: 3,
    model: app.Makerzoid.Fun.Fun.stretchy
}, {
    index: 10,
    folder: '2e236084-5fe9-4168-afb3-e04f1f1a9eb8/penshekuaiting',
    cover: '54.png',
    count: 54,
    name: {eng: 'Jet Boat'},
    number: 12,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 11,
    folder: '5270969b-603c-494d-9836-3aaffe79bb24/fun_wurenzhanche',
    cover: '38.png',
    count: 38,
    name: {eng: 'Unmanned Combat Vehicle'},
    number: 10,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 12,
    folder: '5e5313a2-d8f1-46dd-80a0-27c64ffa8b00/fun_daodanfasheche',
    cover: '50.png',
    count: 50,
    name: {eng: 'Missile Launching Vehicle'},
    number: 9,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 13,
    folder: '64720011-fdb8-4505-b37f-072018ca16f5/fun_xingzhanshi',
    cover: '21.png',
    count: 21,
    name: {eng: 'Star Warrior'},
    number: 1,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 14,
    folder: '65b31d67-43a4-4e12-879c-d8824228357d/fun_zhishengji',
    cover: '47.png',
    count: 47,
    name: {eng: 'Helicopter'},
    number: 8,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 15,
    folder: '65cb2395-c87e-4c02-bd27-094328d177e6/fun_xzhanji',
    cover: '47.png',
    count: 47,
    name: {eng: 'X-Wing'},
    number: 3,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 16,
    folder: '753d79dd-cc54-411e-a23b-f75a098628d2/jisutanke',
    cover: '42.png',
    count: 42,
    name: {eng: 'Express Tank'},
    number: 11,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 17,
    folder: '8e7f87f9-7c3c-44d2-aa7f-b98733c89384/xingjizhanji',
    cover: '49.png',
    count: 49,
    name: {eng: 'Star Fighter'},
    number: 13,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 18,
    folder: '9d91fac1-82cb-4888-b5e4-64c557463f25/fun_yuzhouzhanjian',
    cover: '27.png',
    count: 27,
    name: {eng: 'Space Warship'},
    number: 7,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 19,
    folder: 'aa67f18a-3b62-4a27-8aab-0670123ae398/fun_juedizhanji',
    cover: '23.png',
    count: 23,
    name: {eng: 'Jedi Fighter'},
    number: 6,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 20,
    folder: 'ac34dfac-df5a-4421-916b-dcda45759827/fun_wuzhuangzhishengji',
    cover: '63.png',
    count: 63,
    name: {eng: 'Attack Helicopter'},
    number: 4,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 21,
    folder: 'b45dd876-be89-4623-9f73-b5374657fd7e/fun_xingzhanduizhang',
    cover: '35.png',
    count: 35,
    name: {eng: 'Star Captain'},
    number: 2,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 22,
    folder: 'f4e8353c-007f-41bc-adfb-15d3f5241897/fun_wurenzhanji',
    cover: '32.png',
    count: 32,
    name: {eng: 'Drone'},
    number: 5,
    model: app.Makerzoid.Fun.Fun.starWar
}, {
    index: 23,
    folder: '0b354060-9012-4321-a2dc-486b0923b5e6/fun_dabashi',
    cover: '60.png',
    count: 60,
    name: {eng: 'Bus'},
    number: 10,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 24,
    folder: '195a5a19-6285-44b7-baea-18eed0a8475f/fun_guanxingche1',
    cover: '23.png',
    count: 23,
    name: {eng: 'Inertia Car'},
    number: 11,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 25,
    folder: '3a30596a-0367-4a11-a84d-52c7a666bc4e/fun_wobashituoluo',
    cover: '39.png',
    count: 41,
    name: {eng: 'Grip Gyro'},
    number: 14,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 26,
    folder: '40c126e0-10b7-42a9-9137-059dbfce40ad/fun_xiaochache',
    cover: '55.png',
    count: 55,
    name: {eng: 'Forklift'},
    number: 7,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 27,
    folder: '422ffc59-f946-4b56-834c-dce023fea3ae/ertongdazhuangji',
    cover: '42.png',
    count: 42,
    name: {eng: 'Pile Driver'},
    number: 15,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 28,
    folder: '46363a45-c08a-4d18-8803-077befaee6b3/fun_diaolanche',
    cover: '67.png',
    count: 67,
    name: {eng: 'Teleferic'},
    number: 3,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 29,
    folder: '5429b22e-8512-44ba-8368-a7c996cec787/konglong',
    cover: '36.png',
    count: 36,
    name: {eng: 'Dinosaur'},
    number: 16,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 30,
    folder: '6fb9fc04-7ccf-4687-8bb8-63fdd38f3c2f/fun_guanxingche2',
    cover: '33.png',
    count: 34,
    name: {eng: 'Inertia Car 2'},
    number: 12,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 31,
    folder: '76aa89c9-6cc5-42bd-a30d-be622e2072e3/fun_kuangshankache',
    cover: '51.png',
    count: 51,
    name: {eng: 'Mining Truck'},
    number: 9,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 32,
    folder: '81af998a-802c-41b9-ad3e-ebbf3688cb83/fun_weixiudiaoche',
    cover: '68.png',
    count: 68,
    name: {eng: 'Maintenance Car'},
    number: 6,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 33,
    folder: '8d8d34c4-1ca9-47d0-b9d0-e9a1aa30764d/shatanche',
    cover: '51.png',
    count: 51,
    name: {eng: 'Dune Buggy'},
    number: 5,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 34,
    folder: '9806d630-91b3-4a62-84ea-8e4d4a96663c/fun_f1',
    cover: '88.png',
    count: 88,
    name: {eng: 'F1'},
    number: 2,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 35,
    folder: '9b568753-e3ca-4c6f-acf8-bb954e0112a4/kadingche',
    cover: '69.png',
    count: 69,
    name: {eng: 'Go-kart'},
    number: 4,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 36,
    folder: '9e8a5cc5-63b6-42b2-97bb-601c2f88c4ea/fun_xiaoche',
    cover: '23.png',
    count: 23,
    name: {eng: 'Car'},
    number: 8,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 37,
    folder: 'cadf7c06-f8f2-4fc9-8303-cb4dbc9b592a/fun_dadanqi',
    cover: '35.png',
    count: 36,
    name: {eng: 'Eggbeater'},
    number: 13,
    model: app.Makerzoid.Fun.Fun.land
}, {
    index: 38,
    folder: 'e7986657-109e-4f04-a4cd-d9a38708ac8e/fun_fugupaoche',
    cover: '54.png',
    count: 54,
    name: {eng: 'Retro Car'},
    number: 1,
    model: app.Makerzoid.Fun.Fun.land
}];

app.SuperBot_RobotMake.figures = [];

console.log('appList = ', app);
