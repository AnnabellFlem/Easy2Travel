const Place = require('./db/place');

function ins() {
    var pl = [{
            city: 'Vienna',
            language: 'en',
            places: [{
                    label: 'Schönbrunn Palace',
                    description: 'Schönbrunn Palace is a former imperial summer residence located in Vienna, Austria. The 1,441-room Baroque palace is one of the most important architectural, cultural, and historical monuments in the country. Since the mid-1950s it has been a major tourist attraction. The history of the palace and its vast gardens spans over 300 years, reflecting the changing tastes, interests, and aspirations of successive Habsburg monarchs.',
                    imgurl: '/img/trips/cities/schonbrunn_palace.jpg',
                    location: [48.1861987, 16.3128606]
                },

                {
                    label: 'Hofburg',
                    description: 'The Hofburg is the former imperial palace in the centre of Vienna, Austria. Built in the 13th century and expanded in the centuries since, the palace has been the seat of power of the Habsburg dynasty rulers, and today the official residence and workplace of the President of Austria. It was the principal imperial winter residence, as Schönbrunn Palace was the summer residence.',
                    imgurl: '/img/trips/cities/hofburg.jpg',
                    location: [48.2076579, 16.3638598]
                },

                {
                    label: `St. Stephen's Cathedral`,
                    description: `St. Stephen's Cathedral is the mother church of the Roman Catholic Archdiocese of Vienna and the seat of the Archbishop of Vienna, Christoph Cardinal Schönborn, OP. The current Romanesque and Gothic form of the cathedral, seen today in the Stephansplatz, was largely initiated by Duke Rudolf IV (1339–1365) and stands on the ruins of two earlier churches, the first a parish church consecrated in 1147. The most important religious building in Vienna, St. Stephen's Cathedral has borne witness to many important events in Habsburg and Austrian history and has, with its multi-coloured tile roof, become one of the city's most recognizable symbols.`,
                    imgurl: '/img/trips/cities/st_stephen_cathedral.jpeg',
                    location: [48.2084114, 16.3712767]
                }
            ]
        },

        {
            city: 'Vienna',
            language: 'ua',
            places: [{
                    label: 'Шенбрунн',
                    description: `Шенбрунн — палацовий комплекс у столиці Австрії місті Відні, одна з найвизначніших архітектурних споруд австрійського бароко (архітектор — Йоган Бернгард Фішер фон Ерлах).Шенбрунн, здебільшого, був літньою резиденцією імператорської родини Габсбургів, в 1830 році тут народився майбутній імператор Франц Йосиф I, від проголошення Австрійської республіки (1918), як одна з найвизначніших пам'яток Відня та Австрії, відкритий для відвідання загалом.`,
                    imgurl: '/img/trips/cities/schonbrunn_palace.jpg',
                    location: [48.1861987, 16.3128606]
                },

                {
                    label: 'Гофбург',
                    description: 'Гофбург, також Гофбургський Імперський Палац — резиденція імператорів Австрії, яка довгий час слугувала домівкою для найвпливовіших людей Австрійської історії, включаючи родовід Габсбургів, володарів Австро-Угорської імперії. Зараз Гофбург слугує офіційною резиденцією Президента Австрії. Він також знаний як зимова резиденція, тоді як Шенбруннський палац вважається літньою резиденцією.',
                    imgurl: '/img/trips/cities/hofburg.jpg',
                    location: [48.2076579, 16.3638598]
                },

                {
                    label: `Собор святого Стефана`,
                    description: `Собор святого Стефана — архієпископський, кафедральний і приходський собор святого Стефана і Всіх Святих єпископальний собор архієпископства Відня; національний символ Австрії й символ міста Відень.`,
                    imgurl: '/img/trips/cities/st_stephen_cathedral.jpeg',
                    location: [48.2084114, 16.3712767]
                }
            ]
        },

        {
            city: 'Salzburg',
            language: 'en',
            places: [{
                    label: 'Nonnberg Abbey',
                    description: 'Nonnberg Abbey is a Benedictine monastery in Salzburg, Austria. Founded by Saint Rupert of Salzburg, it is the oldest continuously existing nunnery in the German-speaking world. The monastery complex is today a protected monument and part of the Historic Centre of the City of Salzburg, a UNESCO World Heritage Site since 1996.',
                    imgurl: '/img/trips/cities/nonnberg_abbey.jpg',
                    location: [47.7961061, 13.0486353]
                },

                {
                    label: 'Hellbrunn Palace',
                    description: 'Hellbrunn Palace is an early Baroque villa of palatial size, near Morzg, a southern district of the city of Salzburg, Austria. It was built in 1613–19 by Markus Sittikus von Hohenems, Prince-Archbishop of Salzburg, and named for the "clear spring" that supplied it. Hellbrunn was only meant for use as a day residence in summer, as the Archbishop usually returned to Salzburg in the evening; therefore, there is no bedroom in Hellbrunn.',
                    imgurl: '/img/trips/cities/hellbrunn_palace.jpg',
                    location: [47.7619011, 13.0587097]
                },

                {
                    label: 'Hohensalzburg Castle',
                    description: 'Hohensalzburg Castle sits atop the Festungsberg, a small hill in the Austrian city of Salzburg. Erected at the behest of the Prince-Archbishops of Salzburg with a length of 250 m (820 ft) and a width of 150 m (490 ft), it is one of the largest medieval castles in Europe. Hohensalzburg Castle is situated at an altitude of 506 m.',
                    imgurl: '/img/trips/cities/hohensalzburg_castle.jpg',
                    location: [47.7949483, 13.0454643]
                }
            ]
        },
        
        {
            city: 'Зальцбург',
            language: 'ua',
            places: [{
                    label: 'Ноннбергское абатство',
                    description: 'Ноннбергское абатство - жіночий бенедиктинський монастир, що знаходиться в Зальцбурзі, Австрія. Ноннбергское абатство зіграло значну роль в історії Зальцбурга. Після заснування ноннбергского абатства в 714 році біля нього став поступово формуватися майбутній Зальцбург.',
                    imgurl: '/img/trips/cities/nonnberg_abbey.jpg',
                    location: [47.7961061, 13.0486353]
                },

                {
                    label: 'Хелльбрунн',
                    description: 'Хелльбрунн - літня резиденція архієпископа Зальцбурзького. Знаходиться в 6 кілометрах на південь від Зальцбурга в Австрії. Побудований в 1612-1615 роки архітекторами Сантіно Соларі і Донато Масканьї в стилі бароко для Князя-архієпископа Зальцбурга Маркуса Зіттікуса фон Хоенемс.',
                    imgurl: '/img/trips/cities/hellbrunn_palace.jpg',
                    location: [47.7619011, 13.0587097]
                },

                {
                    label: 'Гогензальцбург',
                    description: 'Гогензальцбург — одна з найбільших середньовічних фортець Європи. Розташована на вершині гори Фестунг поруч із Зальцбургом, Австрія, на висоті 120 метрів. Фортеця Зальцбурга — одна із повністю збережених фортець. Площа будівлі — 30 тис. м² (до 250 м у довжину та 150 м в ширину). Добратись до фортеці можна або на фунікулері з Старого міста, або пішки. Після Відня (Замок Шенборн, Зоопарк Шенбрунн, Собор святого Стефана та Пратер) фортеця Гогензальцбург є другим за відвідуваністю туристами місцем у Австрії.',
                    imgurl: '/img/trips/cities/hohensalzburg_castle.jpg',
                    location: [47.7949483, 13.0454643]
                }
            ]
        }
    ];

    pl.map(p => {
        Place.create(p, function (err, item) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('OK: ' + item + ' inserted.');
            }
        });
    });
    //    process.exit(-1);
}

ins();