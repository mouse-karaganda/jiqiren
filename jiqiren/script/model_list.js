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
                {label: 'Newly-updated Programming', folder: 'newly'}
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
                {label: 'Advanced Builging', folder: 'adv_build'},
                {label: 'Advanced Programming', folder: 'adv_program'},
                {label: 'Space Series', folder: 'space'},
                {label: 'NEWLY-UPDATED Programming', folder: 'newly'}
            ]
        }, {
            label: 'Tournament', folder: 'Tournament',
            models: [
                {label: 'Basic', folder: 'basic'}
            ]
        }, {
            label: 'Soccer Competition', folder: 'Soccer',
            models: [
                {label: 'Soccer Robot', folder: 'soccer'},
                {label: 'Basic', folder: 'basic'},
                {label: 'Mechanical', folder: 'mechanical'},
                {label: 'YL Corps', folder: 'corps'},
                {label: 'Electric Engineering', folder: 'electric'},
                {label: 'Electric YL Crops', folder: 'e_crops'},
                {label: 'Electric Animal', folder: 'animal'},
                {label: 'Jr Programming', folder: 'jr_program'},
                {label: 'Space Series', folder: 'space'},
                {label: 'Newly-updated Programming', folder: 'newly'}
            ]
        }]
    }, {
        label: 'Superbot', folder: 'Superbot',
        sublines: [{
            label: 'Superbot', folder: 'Superbot',
            models: [
                {label: 'Power', folder: 'power'},
                {label: 'Elastic', folder: 'elastic'},
                {label: 'Basic', folder: 'basic'}
            ]
        }, {
            label: 'Superbot Master Premium', folder: 'Premium',
            models: [
                {label: 'Intelligent Series', folder: 'intelligent'},
                {label: 'Transportation Series', folder: 'transportation'},
                {label: 'Mechanical Series', folder: 'mechanical'},
                {label: 'Animal Series', folder: 'animal'},
                {label: 'Basic Series', folder: 'basic'},
                {label: 'Gear Series', folder: 'gear'},
                {label: 'Elastic Series', folder: 'elastic'}
            ]
        }]
    }, {
        label: 'Smart Robot', folder: 'SmartRobot',
        sublines: [{
            label: 'Smart Robot', folder: 'SmartRobot',
            models: [
                {label: 'Family', folder: 'family'},
                {label: 'Basic Structure', folder: 'basic'},
                {label: 'Gearwheel', folder: 'gearwheel'},
                {label: 'Music', folder: 'music'},
                {label: 'Agriculture', folder: 'agriculture'},
                {label: 'Training', folder: 'training'},
                {label: 'Intelligent Robot', folder: 'intelligent'},
                {label: 'Newly-updated Robot', folder: 'newly'}
            ]
        }, {
            label: 'Smart Robot Premium', folder: 'Premium',
            models: [
                {label: 'Basic Structure', folder: 'basic'},
                {label: 'Gearwheel', folder: 'gearwheel'},
                {label: 'Music', folder: 'music'},
                {label: 'Agriculture', folder: 'agriculture'},
                {label: 'Training', folder: 'training'},
                {label: 'Programming Robot', folder: 'programming'},
                {label: 'Intelligent Robot', folder: 'intelligent'},
                {label: 'Electric Machinery', folder: 'machinery'},
                {label: 'Electric Animals', folder: 'animals'},
                {label: 'Space Series', folder: 'space'}
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
}, {
    index: 39,
    folder: '0aaf4b5e-acc0-461a-8f5f-0003e81d8ba7/niao',
    cover: '51.png',
    count: 51,
    name: {eng: 'bird'},
    number: 19,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 40,
    folder: '1e02b832-3af6-4e8d-913f-8bf0012db4f2/huatujiqiren',
    cover: '59.png',
    count: 59,
    name: {eng: 'Drawing Machine'},
    number: 10,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 41,
    folder: '2347237f-fdf9-47b5-8125-8833661f31f4/HUOJIANCHE',
    cover: '58.png',
    count: 58,
    name: {eng: 'Jet car'},
    number: 16,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 42,
    folder: '2972d24a-321e-4fc7-9a31-ad0d8da5fbde/laohu',
    cover: '89.png',
    count: 89,
    name: {eng: 'Tiger'},
    number: 1,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 43,
    folder: '351aebf2-3cdc-473a-aa27-ade9cb0253d4/qiusaijiqiren',
    cover: '68.png',
    count: 68,
    name: {eng: 'Football Robot'},
    number: 4,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 44,
    folder: '35b3bf99-4fbb-47ce-87d5-3ff148b06ab5/dajiaoche',
    cover: '96.png',
    count: 96,
    name: {eng: 'Bighorn Car'},
    number: 15,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 45,
    folder: '378211c3-bd9c-488d-970a-be79f518ead0/chanche',
    cover: '47.png',
    count: 47,
    name: {eng: 'Plough Car'},
    number: 2,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 46,
    folder: '3e9adb75-ac7e-4919-bc54-0edd84bc6e9e/zhinengzamen',
    cover: '31.png',
    count: 31,
    name: {eng: 'Planetary System'},
    number: 9,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 47,
    folder: '495e3f1b-4129-48ad-8520-ac0b3db143ed/longhuzhanche',
    cover: '40.png',
    count: 40,
    name: {eng: 'Dragon Tiger Chariot'},
    number: 8,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 48,
    folder: '668700c1-f0e0-4757-99e6-25b708d97960/zhihejiqiren',
    cover: '36.png',
    count: 36,
    name: {eng: 'Paper Crane Robot'},
    number: 14,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 49,
    folder: '723fa72a-12ec-4634-bdb0-538e68eda79a/jipuche',
    cover: '72.png',
    count: 72,
    name: {eng: 'SUV'},
    number: 3,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 50,
    folder: '7400f312-fd39-42d4-b7b2-6b930628d947/cb f1',
    cover: '74.png',
    count: 74,
    name: {eng: 'F1'},
    number: 18,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 51,
    folder: 'b1630135-b0f3-44c1-b2e0-1a9b7db766f1/songcanjiqiren',
    cover: '63.png',
    count: 63,
    name: {eng: 'Delivery Man'},
    number: 12,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 52,
    folder: 'baa2bc92-f71a-47cc-b302-3e9bd0dba1ed/yinyuehe',
    cover: '44.png',
    count: 44,
    name: {eng: 'Music Box'},
    number: 13,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 53,
    folder: 'd1099777-fb98-43a3-9771-742fc09f3433/zhancheshengjiban',
    cover: '137.png',
    count: 137,
    name: {eng: 'Batmobile'},
    number: 17,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 54,
    folder: 'dae6e333-e1cc-4be7-a4c7-bd7f70b0bcea/sanlunche',
    cover: '52.png',
    count: 52,
    name: {eng: 'Tricycle'},
    number: 5,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 55,
    folder: 'e0f1e031-ddf4-4d15-b2f7-e8cc2da91b1b/zhanche',
    cover: '34.png',
    count: 34,
    name: {eng: 'Chariot'},
    number: 7,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 56,
    folder: 'e84622e5-d8b0-419c-b721-53a1a0855271/dianbaoji',
    cover: '66.png',
    count: 66,
    name: {eng: 'Telegraph Machine'},
    number: 11,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 57,
    folder: 'f9232a33-91e1-44b3-95b6-65c6ea7b0dcf/xiangpujiqiren',
    cover: '57.png',
    count: 57,
    name: {eng: 'Sumo Robot'},
    number: 6,
    model: app.Makerzoid.Superbot.Superbot.power
}, {
    index: 58,
    folder: '0b210b02-2dcf-4823-8523-d7ffdc4eb17d/huiliche',
    cover: '31.png',
    count: 32,
    name: {eng: 'Inertia Pull-Back Car'},
    number: 2,
    model: app.Makerzoid.Superbot.Superbot.elastic
}, {
    index: 59,
    folder: '131e4514-0e55-4ecb-9a70-697272b39702/gangqin',
    cover: '46.png',
    count: 46,
    name: {eng: 'Piano'},
    number: 4,
    model: app.Makerzoid.Superbot.Superbot.elastic
}, {
    index: 60,
    folder: '32d6bef4-4d40-402e-904d-836f70bc3292/minihuiliche',
    cover: '17.png',
    count: 17,
    name: {eng: 'mini Inertia Pull-Back Car'},
    number: 3,
    model: app.Makerzoid.Superbot.Superbot.elastic
}, {
    index: 61,
    folder: 'c38815eb-1ffe-44ee-b6f1-c0e994ca2cd6/tanliche',
    cover: '23.png',
    count: 23,
    name: {eng: 'Elasti-Car'},
    number: 1,
    model: app.Makerzoid.Superbot.Superbot.elastic
}, {
    index: 62,
    folder: '019c0f91-8064-4658-8885-4791757687ff/motuoche',
    cover: '38.png',
    count: 38,
    name: {eng: 'Motorcycles'},
    number: 1,
    model: app.Makerzoid.Superbot.Superbot.basic
}, {
    index: 63,
    folder: '1980dfee-ed34-47b4-893c-69d43f39b73b/cb gancaocha',
    cover: '11.png',
    count: 11,
    name: {eng: 'Hayfork'},
    number: 3,
    model: app.Makerzoid.Superbot.Superbot.basic
}, {
    index: 64,
    folder: '29abcc3b-3f5e-49f2-abf3-46d908a87e75/cb shensuojia',
    cover: '17.png',
    count: 17,
    name: {eng: 'Expansion Clamp'},
    number: 4,
    model: app.Makerzoid.Superbot.Superbot.basic
}, {
    index: 65,
    folder: '7af4b8df-2dc3-47bf-a4ad-a1f219776a61/tianping',
    cover: '39.png',
    count: 39,
    name: {eng: 'Balance'},
    number: 2,
    model: app.Makerzoid.Superbot.Superbot.basic
}, {
    index: 66,
    folder: '03943fe2-fc64-4aae-a7cf-64be5afb3902_glb',
    cover: 'kunaodexiaohai.png',
    count: 1,
    name: {eng: 'Sobbing Child'},
    number: 8,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 67,
    folder: '0564fb04-6c05-4ac7-a03d-35c30bfebfd3_glb',
    cover: 'banyunjiqiren.png',
    count: 1,
    name: {eng: 'Handling Robot'},
    number: 10,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 68,
    folder: '0b6c30f5-ac20-4d2b-a85a-f47607e3b25c_glb',
    cover: 'fanyingyouxi2.png',
    count: 1,
    name: {eng: 'Reaction Game 2'},
    number: 13,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 69,
    folder: '0dd192d4-ad20-4238-b07c-712e4d8256bf_glb',
    cover: 'XUNfuguaishou.png',
    count: 1,
    name: {eng: 'Taming the Monster'},
    number: 9,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 70,
    folder: '261a964e-5e3e-4b3a-8738-7013f37eef98_glb',
    cover: 'xiaochejiawu.png',
    count: 1,
    name: {eng: 'Carrying Device'},
    number: 17,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 71,
    folder: '2b50e265-6d91-4cf3-9c63-220610f8c85e_glb',
    cover: 'XuanZhuanHongWai.png',
    count: 1,
    name: {eng: 'Intelligent Car Obstacle Avoidance'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 72,
    folder: '3e16a736-09c5-490c-8ba3-e20004b0f6a0_glb',
    cover: 'dddanxiaodepachong.png',
    count: 1,
    name: {eng: 'Timid Spider'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 73,
    folder: '45231dca-3ae7-425a-9500-0bdd806e4529_glb',
    cover: 'jugongxiaoren.png',
    count: 1,
    name: {eng: 'Bowing Man'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 74,
    folder: '46318181-9157-4201-9d78-579881b68cf8_glb',
    cover: 'ticaoyundong.png',
    count: 1,
    name: {eng: 'Gymnastics'},
    number: 16,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 75,
    folder: '501b4f9e-dd05-413e-aea5-9d20965eed0c_glb',
    cover: 'jianshenxiaoren.png',
    count: 1,
    name: {eng: 'Fitness Man'},
    number: 15,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 76,
    folder: '5e0d6819-c0bd-4d8f-98b1-f808bf23313c_glb',
    cover: 'HaiDaoChuan-2.png',
    count: 1,
    name: {eng: 'Corsair'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 77,
    folder: '70fae0c8-8b04-4307-a533-5f89f89e76a2_glb',
    cover: '56buxingjiqiren.png',
    count: 1,
    name: {eng: 'Walking Robot'},
    number: 11,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 78,
    folder: '731502cc-b302-4e6d-8cc3-beecf149648e_glb',
    cover: 'qizhongji.png',
    count: 1,
    name: {eng: 'Crane'},
    number: 14,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 79,
    folder: '9c39888b-badf-4ee2-8508-429e437fc51b_glb',
    cover: 'jixiejiazi.png',
    count: 1,
    name: {eng: 'Mechanical Clamp'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 80,
    folder: 'ad8a8783-b752-47f9-b733-875c404450eb_glb',
    cover: 'zuqiuyundong.png',
    count: 1,
    name: {eng: 'Soccer'},
    number: 18,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 81,
    folder: 'ade7740e-8615-4119-9dde-575d952e38ac_glb',
    cover: 'fanyingyouxi1.png',
    count: 1,
    name: {eng: 'Reaction Game 1'},
    number: 12,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 82,
    folder: 'c9c95d7c-cd97-41b6-a48a-ac4be4a1076c_glb',
    cover: 'JiChuXingTai.png',
    count: 1,
    name: {eng: 'Intelligent Car Line Following'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 83,
    folder: 'e33d6b55-31a6-4b44-ae87-9b1efb6c60c4_glb',
    cover: 'juzhong.png',
    count: 1,
    name: {eng: 'Weightlifting'},
    number: 7,
    model: app.Makerzoid.Superbot.Premium.intelligent
}, {
    index: 84,
    folder: '0b8c6062-0755-4821-89aa-01902a3e01de_glb',
    cover: '76zhishengji.png',
    count: 1,
    name: {eng: 'Airplane'},
    number: 8,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 85,
    folder: '26dd1629-25f2-4aa4-ad6d-9fb0198b99cc_glb',
    cover: 'Saiche2.png',
    count: 1,
    name: {eng: 'Racing Car 2'},
    number: 9,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 86,
    folder: '2e273cf3-cf1d-4359-8bb3-3ca61aa4925a_glb',
    cover: 'TuoHuangChe.png',
    count: 1,
    name: {eng: 'Pioneer Cart'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 87,
    folder: '3fe7ed9c-684b-4e2e-b466-9d70eabf519a_glb',
    cover: '1zhishengfeiji.png',
    count: 1,
    name: {eng: 'Helicopter'},
    number: 7,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 88,
    folder: '3fef469b-b93e-4665-8fa3-25d83fd3cc6e_glb',
    cover: '72nuowuche.png',
    count: 1,
    name: {eng: 'Moving Cart'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 89,
    folder: 'aaf356bf-cf7b-438d-ad37-5645b3c66239_glb',
    cover: '10tanceche.png',
    count: 1,
    name: {eng: 'Detection Vehicle'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 90,
    folder: 'b0f70857-ab9e-4ace-a9c9-b99a0edc55d8_glb',
    cover: 'ChaChe-3.png',
    count: 1,
    name: {eng: 'Forklift'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 91,
    folder: 'c6ec218f-0650-4f97-909b-f6c7248d2492_glb',
    cover: 'laoyeche.png',
    count: 1,
    name: {eng: 'Vintage Car'},
    number: 10,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 92,
    folder: 'cfb5a35d-6bf5-46b3-8588-6f8fdcac037c_glb',
    cover: 'MaChe-2.png',
    count: 1,
    name: {eng: 'Carriage'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 93,
    folder: 'd88c8c0e-bc39-476f-9c4d-656e427d561b_glb',
    cover: '70huaxianche.png',
    count: 1,
    name: {eng: 'Line Drawing Vehicle'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.transportation
}, {
    index: 94,
    folder: '1980b6c4-1deb-4d33-a82c-c0139f0b7eb9_glb',
    cover: 'zhongbai.png',
    count: 1,
    name: {eng: 'Pendulum'},
    number: 14,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 95,
    folder: '1b67d3ab-a8f8-414b-a83b-86da2e0e1245_glb',
    cover: 'YaoShouJiQiRen.png',
    count: 1,
    name: {eng: 'Waving Figure'},
    number: 11,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 96,
    folder: '3d33d9e4-a0f8-44f2-a816-ef102023fbc8_glb',
    cover: 'Sshengjiangpingtai.png',
    count: 1,
    name: {eng: 'Lift Platform'},
    number: 13,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 97,
    folder: '436ca045-3651-42a7-9d6c-cd5e185f2ae0_glb',
    cover: '86tiaolouji.png',
    count: 1,
    name: {eng: 'Bungee Jumping Machine'},
    number: 8,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 98,
    folder: '4540e457-cef6-4fcf-a3cb-b2fb57e0c549_glb',
    cover: 'HuaXueYunDongYuan-2.png',
    count: 1,
    name: {eng: 'Skiing Robot'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 99,
    folder: '4948f26e-39e8-4014-b1d7-5f0082f9fe37_glb',
    cover: 'tuibiji.png',
    count: 1,
    name: {eng: 'Coin Pusher'},
    number: 9,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 100,
    folder: '5896051b-ef19-4fb0-a956-61c5240938a1_glb',
    cover: 'XuanZhuanFeiYi.png',
    count: 1,
    name: {eng: 'Rotating Chair Swing'},
    number: 10,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 101,
    folder: '5ccf9413-0f64-4b7d-b5c0-f9417ef61808_glb',
    cover: 'ManBuJi.png',
    count: 1,
    name: {eng: 'Treadmill'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 102,
    folder: '66aa9b69-d944-4aa4-88a1-c3ee97408016_glb',
    cover: 'ZhiNengLiangYiJia-2.png',
    count: 1,
    name: {eng: 'Clothes Rack'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 103,
    folder: '925e4e36-a51b-4cbe-9968-6bc9d440499b_glb',
    cover: 'ShengJiangFeiTianYi.png',
    count: 1,
    name: {eng: 'Lift-off Flying Chair'},
    number: 7,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 104,
    folder: 'de2bdf44-9d04-45b3-9b36-44cadc01a7ee_glb',
    cover: '84paxingjiqiren.png',
    count: 1,
    name: {eng: 'Crawling Robot'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 105,
    folder: 'e5005dd2-7cf0-4263-8241-4bf4512e6092_glb',
    cover: 'duanlianxiaoren.png',
    count: 1,
    name: {eng: 'Exercise Man'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 106,
    folder: 'e8bcb5af-ab06-4543-a68e-3b9eb0d2cc07_glb',
    cover: 'jianshenzixingche.png',
    count: 1,
    name: {eng: 'Exercise Bike'},
    number: 12,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 107,
    folder: 'f3383a65-807a-4d3c-a2c1-3412eaa1f582_glb',
    cover: 'DangQiuQian.png',
    count: 1,
    name: {eng: 'Swing'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.mechanical
}, {
    index: 108,
    folder: '0fdb3161-8951-4689-b27c-ed1556d94936_glb',
    cover: 'shanchitiane-1.png',
    count: 1,
    name: {eng: 'Flapping Swan'},
    number: 14,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 109,
    folder: '128a8a9f-ff60-40da-93c0-3d0eb9c1beac_glb',
    cover: '99hudie.png',
    count: 1,
    name: {eng: 'Butterfly'},
    number: 7,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 110,
    folder: '2438c6da-c44f-4fe3-a364-658cc2bd6de6_glb',
    cover: '1qingwa.png',
    count: 1,
    name: {eng: 'Frog'},
    number: 11,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 111,
    folder: '32396f9f-b710-4e65-9b96-668a8fff0e47_glb',
    cover: 'maerzhuanquanquan.png',
    count: 1,
    name: {eng: 'Circling Horse'},
    number: 9,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 112,
    folder: '32821623-9044-4a00-a634-9494fab51a0e_glb',
    cover: '11pangxie.png',
    count: 1,
    name: {eng: 'Crab'},
    number: 10,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 113,
    folder: '45e2dfbe-af32-40ae-8c09-0397b9d4de1f_glb',
    cover: 'JvQianPangXie.png',
    count: 1,
    name: {eng: 'Giant Claw Crab'},
    number: 8,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 114,
    folder: '50067b1f-1d4c-4cfd-97bd-eb4758db63ea_glb',
    cover: 'liuzujiqiren-1.png',
    count: 1,
    name: {eng: 'Hexapod Robot'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 115,
    folder: '51b3b0fd-747e-40b4-8917-69065d5dc4ab_glb',
    cover: 'GengNiu-2.png',
    count: 1,
    name: {eng: 'Oxen'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 116,
    folder: '7b84dbdb-2831-4966-b3b3-dc52d6c80a98_glb',
    cover: '104sanjiaolong.png',
    count: 1,
    name: {eng: 'Triceratops'},
    number: 12,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 117,
    folder: '93f48e3f-ba95-4a2d-87b1-b8a365946100_glb',
    cover: '109wanlong.png',
    count: 1,
    name: {eng: 'Wrist Dragon'},
    number: 17,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 118,
    folder: '9d88efb2-6d9c-43c7-ad0d-25fb45fcec10_glb',
    cover: '107tuoniao.png',
    count: 1,
    name: {eng: 'Ostrich'},
    number: 15,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 119,
    folder: 'a5e0553a-6c7d-4ba7-b6fb-2ac60040995d_glb',
    cover: '1yaoyaoxiaoma.png',
    count: 1,
    name: {eng: 'Rocking Horse'},
    number: 20,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 120,
    folder: 'a9747ccc-eae0-408b-a340-e31618ae47e9_glb',
    cover: 'YiLong-2.png',
    count: 1,
    name: {eng: 'Pterosaur'},
    number: 21,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 121,
    folder: 'abc5c0c5-c0bb-4164-9ce7-613eb9b60964_glb',
    cover: '11hudie.png',
    count: 1,
    name: {eng: 'Flapping Butterfly'},
    number: 13,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 122,
    folder: 'c161cd30-f028-446f-a2e5-9581f61e3a0d_glb',
    cover: '11tuzi.png',
    count: 1,
    name: {eng: 'Rabbit'},
    number: 16,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 123,
    folder: 'c77a3a6f-2f44-4c20-8d01-522d7ef7a428_glb',
    cover: '11xiezi.png',
    count: 1,
    name: {eng: 'Scorpion'},
    number: 19,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 124,
    folder: 'd2be04bb-6b81-4819-a936-0f27c33966ac_glb',
    cover: 'BBazujiqiren.png',
    count: 1,
    name: {eng: 'Octopod Robot'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 125,
    folder: 'e2e5adff-711b-4de3-965e-5a01e07c4a61_glb',
    cover: '110xiaoxiezi.png',
    count: 1,
    name: {eng: 'Little Scorpion'},
    number: 18,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 126,
    folder: 'e92dea43-125c-4d23-94ba-a5c00052a326_glb',
    cover: 'HaiGui-2.png',
    count: 1,
    name: {eng: 'Turtle'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 127,
    folder: 'f53255c9-910b-407e-b2ad-59617e225a05_glb',
    cover: 'daxiang-1.png',
    count: 1,
    name: {eng: 'Elephant'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 128,
    folder: 'f912ec2a-59dd-43c6-8801-3014e1febe62_glb',
    cover: '11haishi.png',
    count: 1,
    name: {eng: 'Sea Lion'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.animal
}, {
    index: 129,
    folder: '0254be83-cfad-4822-9aeb-6cb46c3fcca3_glb',
    cover: '118huaban.png',
    count: 1,
    name: {eng: 'Skateboard'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 130,
    folder: '18833d99-96f1-4aaf-b571-a60617dc6ac0_glb',
    cover: '11saiche.png',
    count: 1,
    name: {eng: 'Racing Car'},
    number: 9,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 131,
    folder: '224c548d-64b8-454e-9217-53b6eafd43fa_glb',
    cover: '11lunyi.png',
    count: 1,
    name: {eng: 'Wheelchair'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 132,
    folder: '22fa5b70-c04b-428d-8078-4ae2576c4055_glb',
    cover: '11siquche.png',
    count: 1,
    name: {eng: 'Four-wheel Drive Vehicle'},
    number: 10,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 133,
    folder: '293b82d3-9220-46b1-bbff-fadbf2f55e66_glb',
    cover: '11xiaotuiche.png',
    count: 1,
    name: {eng: 'Pushcart'},
    number: 11,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 134,
    folder: '335df706-e79a-4707-ae95-6ecf6dac22b4_glb',
    cover: '133shaqiuche.png',
    count: 1,
    name: {eng: 'Sand Dune Buggy'},
    number: 19,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 135,
    folder: '6ee9bd37-8a1e-4ea9-b68a-bff4d30e205a_glb',
    cover: '11tuoyuanji.png',
    count: 1,
    name: {eng: 'Elliptical Machine'},
    number: 17,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 136,
    folder: '82e17253-0461-40d2-89d9-c16f850e9fa8_glb',
    cover: '130feiji.png',
    count: 1,
    name: {eng: 'Airplane'},
    number: 16,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 137,
    folder: '8352a287-0711-4e4a-85d0-529d4a9392ee_glb',
    cover: 'YuanGui.png',
    count: 1,
    name: {eng: 'Compass'},
    number: 13,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 138,
    folder: '8a6a2930-57f6-4fdd-8bd0-644d9dc0c0c5_glb',
    cover: 'ddalishiyouxiji.png',
    count: 1,
    name: {eng: 'Pinball Machine'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 139,
    folder: '9149fd85-0b51-49bb-9195-fd101013bbff_glb',
    cover: '116haidaochuan.png',
    count: 1,
    name: {eng: 'Pirate Ship'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 140,
    folder: '93d6e4c3-9164-4986-8534-141fe871e7ec_glb',
    cover: '128zhuanwanche.png',
    count: 1,
    name: {eng: 'Turning Car'},
    number: 14,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 141,
    folder: '960d5235-fa25-431e-b657-b6f34ab82b90_glb',
    cover: '126yaluji.png',
    count: 1,
    name: {eng: 'Steamroller'},
    number: 12,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 142,
    folder: '9afdd89d-d656-4142-bbc4-18f59314675d_glb',
    cover: 'ZiXingChe.png',
    count: 1,
    name: {eng: 'Bicycle'},
    number: 15,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 143,
    folder: 'adbc66e2-b25c-45d6-85e3-2f99a6ba1a8a_glb',
    cover: '122pinghengniao.png',
    count: 1,
    name: {eng: 'Balancing Bird'},
    number: 8,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 144,
    folder: 'e2484879-f7ca-4a87-bd5f-94aaf036f6f2_glb',
    cover: '1huochetou.png',
    count: 1,
    name: {eng: 'Locomotive'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 145,
    folder: 'e31dc32a-f710-418d-849c-ddff8a71ab9d_glb',
    cover: 'sanlunzixingche.png',
    count: 1,
    name: {eng: 'Tricycle'},
    number: 18,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 146,
    folder: 'e6244bf0-b778-40d0-b5e3-83b5c6ed8ba3_glb',
    cover: '11motuoche.png',
    count: 1,
    name: {eng: 'Motorcycle'},
    number: 7,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 147,
    folder: 'fecf74d5-c604-440f-b538-1686490e1d98_glb',
    cover: '117haleimotuoche.png',
    count: 1,
    name: {eng: 'Harley Motorcycle'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.basic
}, {
    index: 148,
    folder: '0b67d156-cd27-4be2-9b45-d3638383783b_glb',
    cover: 'daxingqizhongji.png',
    count: 1,
    name: {eng: 'Large Crane'},
    number: 5,
    model: app.Makerzoid.Superbot.Premium.gear
}, {
    index: 149,
    folder: '1d5dd8f3-1869-4ec7-baca-bf3b36acc803_glb',
    cover: '134chache.png',
    count: 1,
    name: {eng: 'Forklift'},
    number: 1,
    model: app.Makerzoid.Superbot.Premium.gear
}, {
    index: 150,
    folder: '3b4301cd-4256-4ffa-814a-44944c352176_glb',
    cover: '11shanchixiaoche.png',
    count: 1,
    name: {eng: 'Winged Cart'},
    number: 2,
    model: app.Makerzoid.Superbot.Premium.gear
}, {
    index: 151,
    folder: '5335d9f0-bab5-40fd-9675-a4f7d6b905b3_glb',
    cover: '136jiazi.png',
    count: 1,
    name: {eng: 'Clamp'},
    number: 3,
    model: app.Makerzoid.Superbot.Premium.gear
}, {
    index: 152,
    folder: '64b4c153-cf70-4c3a-bc55-cb881bb5d0d4_glb',
    cover: '139shengjiangchache.png',
    count: 1,
    name: {eng: 'Elevating Forklift'},
    number: 6,
    model: app.Makerzoid.Superbot.Premium.gear
}, {
    index: 153,
    folder: 'd8cac350-70ab-4f82-a9a6-3b29ea8769f6_glb',
    cover: 'menzha.png',
    count: 1,
    name: {eng: 'Gate'},
    number: 4,
    model: app.Makerzoid.Superbot.Premium.gear
}];

app.SuperBot_RobotMake.figures = [];

console.log('appList = ', app);
