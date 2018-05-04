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
            city: 'Відень',
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
        },
        {
            city: 'Andorra la Vella',
            language: 'en',
            places: [{
                    label: 'Church of St. Armengol',
                    description: 'Looking at the sights of Andorra, you will be surprised to this building: it is so majestic with its history and monumentality. These walls have seen many interesting things in their time. On the tour you will be told about the main, most remarkable pages of the history of this temple. Built in the IX century, the Church of St. Armengol stood until our days and was perfectly preserved.',
                    imgurl: '/img/trips/cities/st_armenols_church.jpg',
                    location: [42.5072106, 1.5195145]
                },

                {
                    label: 'Church of St. John',
                    description: 'The ancient church of St. John in the city of Canillo belongs to the greatest monuments of architecture, which is in great demand among tourists. Date of construction of the church is unknown. It is known only that the church of St. John was built in the interval from the 11th to the 14th century. First, the main building of the church was built, and after a while the belfry was built.',
                    imgurl: '/img/trips/cities/at_ioahn_church.jpg',
                    location: [42.5708316, 1.6055866]
                },

                {
                    label: 'Vallnord',
                    description: 'Vallnord is a ski resort in the Andorran Pyrenees, located just 10 km from the city of Andorra la Vella. It represents two combined skiing areas - Pal-Arinsal and Ordino-Arkalis, connected by a single ski pass.',
                    imgurl: '/img/trips/cities/vallnord.jpg',
                    location: [42.5587947, 1.4819399]
                }
            ],
        },

        {
            city: 'Андорра ла Велья',
            language: 'ua',
            places: [{
                    label: 'Церква Святого Арменголя',
                    description: `Оглядаючи пам'ятки Андорри, ви здивуєтеся саме цієї будівлі: настільки воно велично своєю історією і монументальністю. Ці стіни побачили багато цікавого на своєму віку. На екскурсії вам розкажуть про основні, найбільш примітних сторінках історії цього храму. Побудована в IX столітті, Церква Святого Арменголя простояла до наших днів і прекрасно збереглася.`,
                    imgurl: '/img/trips/cities/st_armenols_church.jpg',
                    location: [42.5072106, 1.5195145]
                },

                {
                    label: 'Церква Святого Іоанна',
                    description: `Старовинна церква Святого Іоанна в місті Канільо відноситься до найбільших пам'ятників архітектури, який користується великим попитом у туристів. Дата побудови церкви невідома. Відомо тільки, що церква Святого Іоанна будувалася в проміжку з 11-го по 14-те століття. Спочатку було побудовано головний будинок церкви, а через деякий час побудували дзвіницю.`,
                    imgurl: '/img/trips/cities/at_ioahn_church.jpg',
                    location: [42.5708316, 1.6055866]
                },

                {
                    label: 'Валлнорд',
                    description: `Валлнорд - гірськолижний курорт в андоррських Піренеях, розташований всього в 10 км від міста Андорра-ла-Велья. Він являє собою дві об'єднані зони катання - Пал - Арінсаль і Ордіно - Аркаліс, з'єднані між собою єдиним скі-пасом.`,
                    imgurl: '/img/trips/cities/vallnord.jpg',
                    location: [42.5587947, 1.4819399]
                }
            ],
        },

        {
            city: 'Sofia',
            language: 'en',
            places: [{
                    label: 'National Art Gallery',
                    description: `The National Art Gallery is Bulgaria's national gallery and houses over 50,000 pieces of Bulgarian art. It is located on Battenberg Square in the capital city of Sofia, occupying most of the historic and imposing edifice of the former royal palace of Bulgaria, having been established in 1934 and moved to the palace in 1946, after the abolition of the monarchy. National Art Gallery is situated at an altitude of 556 m.`,
                    imgurl: '/img/trips/cities/national_art_gallery_sofia_bulgaria.jpg',
                    location: [42.6963229, 23.3248921]
                },

                {
                    label: 'The Ivan Vazov National Theatre',
                    description: `The Ivan Vazov National Theatre is Bulgaria's national theatre, as well as the oldest and most authoritative theatre in the country and one of the important landmarks of Sofia, the capital of Bulgaria. It is located in the centre of the city, with the facade facing the City Garden.Founded in 1904 by the artists from the Salza i Smyah company, it was initially called simply the National Theatre, but before being named after the prominent writer Ivan Vazov it also bore the name of Krastyu Sarafov between 1952 and 1962. Incidentally Vazov's play, "The Outcasts" was the first to be performed at the theatre when it opened.`,
                    imgurl: '/img/trips/cities/ivan-vazov-national.jpg',
                    location: [42.6944476, 23.32387]
                },

                {
                    label: 'The National Historical Museum',
                    description: `The National Historical Museum in Sofia is Bulgaria's largest museum. It was founded on 5 May 1973. A new representative exhibition was opened in the building of the Court of Justice on 2 March 1984, to commemorate the 13th centenary of the Bulgarian state.The museum was moved in 2000 to the former primary residence of the dictator and last communist leader Todor Zhivkov at Boyana, and currently contains over 650,000 objects connected to archaeology, fine arts, history and ethnography, although only 10% of them are permanently exhibited.`,
                    imgurl: '/img/trips/cities/the_national_historical_museum.jpg',
                    location: [42.6718322, 23.293257]
                }
            ],
        },

        {
            city: 'Софія',
            language: 'ua',
            places: [{
                    label: 'Національна художня галерея',
                    description: 'Національна художня галерея Болгарії (болг. Национална художествена галерия) — національний музей образотворчого мистецтва в Софії, Болгарія. Галерея заснована в 1948 році на базі колекцій Софійської міської художньої галереї та з 1952 року розташована в колишньому царському палаці на площі князя Олександра Баттенберга. В тій же будівлі знаходиться Національний етнографічний музей. В розташованій на другому поверсі експозиції відвідувачі можуть побачити близько 150 творів болгарських художників від епохи Відродження до 1960-х років.',
                    imgurl: '/img/trips/cities/national_art_gallery_sofia_bulgaria.jpg',
                    location: [42.6963229, 23.3248921]
                },

                {
                    label: 'Національний театр Івана Вазова',
                    description: `Національний театр Івана Вазова — національний драматичний театр у столиці Болгарії місті Софії, що носить ім'я класика болгарської драматургії Івана Вазова; головна театральна сцена країни.`,
                    imgurl: '/img/trips/cities/ivan-vazov-national.jpg',
                    location: [42.6944476, 23.32387]
                },

                {
                    label: 'Національний історичний музей',
                    description: 'На сьогоднішній день в музеї близько 650 тисяч одиниць зберігання.Найбільш цінними є колекції археологічних знахідок від палеоліту до середньовіччя. Окрім цього тут експонуються старовинні монети, зброя, предмети побуту, меблі, карти, геральдичні символи, рідкісні історичні фотографії, церковні приналежності, марки.Історичний музей складається з декількох відділів: археології, історії та етнографії.',
                    imgurl: '/img/trips/cities/the_national_historical_museum.jpg',
                    location: [42.6718322, 23.293257]
                }
            ],
        },

        {
            city: 'Saxon Switzerland',
            language: 'en',
            places: [{
                    label: 'Bohemian Switzerland',
                    description: 'Bohemian Switzerland, also known as Czech Switzerland, is a picturesque region in the north-western Czech Republic. It lies on the Czech side of the Elbe Sandstone Mountains north of Děčín on both sides of the Elbe River. It extends eastward into the Lusatian Mountains and westward into the Ore Mountains. Its highest elevation is the mountain Děčínský Sněžník at 726m above sea level. It has been a protected area since 1972.',
                    imgurl: '/img/trips/cities/bohemian_switzerland.jpg',
                    location: [50.9180723, 14.3128751]
                },

                {
                    label: 'Lilienstein',
                    description: 'Lilienstein is the most notable canteen of the mountain of Saxon Switzerland. It is located as the only dining table on the right side of Elba and is included in the National Park of Saxon Switzerland. He is eagerly visited because of the magnificent view that opens from him.',
                    imgurl: '/img/trips/cities/lilienstein.jpg',
                    location: [50.9304062, 14.0763259]
                }
            ],
        },

        {
            city: 'Cаксонська Швейцарія',
            language: 'ua',
            places: [{
                    label: 'Чеська Швейцарія',
                    description: 'Чеська Швейцарія - чеська частина Ельбські песчаниково гір, які називаються в німецькій частині Саксонської Швейцарією.Цей район Північної Чехії перебуває на верхній течії річки Ельба недалеко від Дечін.',
                    imgurl: '/img/trips/cities/bohemian_switzerland.jpg',
                    location: [50.9180723, 14.3128751]
                },

                {
                    label: 'Ліліенштайн',
                    description: 'Ліліенштайн є найпомітнішою їдальнею горою Саксонської Швейцарії. Він розташовується як єдина їдальня гора по праву сторону Ельба і включений в Національний парк Саксонської Швейцарії. Він охоче відвідуємо через чудового виду, що відкривається з нього.',
                    imgurl: '/img/trips/cities/lilienstein.jpg',
                    location: [50.9304062, 14.0763259]
                }
            ],
        },

        {
            city: 'Prague',
            language: 'en',
            places: [{
                    label: 'Charles Bridge',
                    description: 'Charles Bridge is a historic bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the beginning of the 15th century. The bridge replaced the old Judith Bridge built 1158–1172 that had been badly damaged by a flood in 1342.',
                    imgurl: '/img/trips/cities/karlov-bridge.jpg',
                    location: [50.0864771, 14.4092479]
                },

                {
                    label: 'Prague Castle',
                    description: 'According to the Guinness Book of Records, Prague Castle is the largest ancient castle in the world, occupying an area of almost 70,000 square metres (750,000 square feet), at about 570 metres (1,870 feet) in length and an average of about 130 metres (430 feet) wide. The castle is among the most visited tourist attractions in Prague attracting over 1.8 million visitors annually.',
                    imgurl: '/img/trips/cities/prague_castle.jpg',
                    location: [50.0902163, 14.3973905]
                },

                {
                    label: 'St. Vitus Cathedral',
                    description: 'The Metropolitan Cathedral of Saints Vitus, Wenceslaus and Adalbert is a Roman Catholic metropolitan cathedral in Prague, the seat of the Archbishop of Prague. Until 1997, the cathedral was dedicated only to Saint Vitus, and is still commonly named only as St. Vitus Cathedral.',
                    imgurl: '/img/trips/cities/prague_vitu_cathedral.jpg',
                    location: [50.0908918, 14.3983227]
                },

                {
                    label: 'Old Town Square',
                    description: 'Old Town Square or colloquially Staromák is a historic square in the Old Town quarter of Prague, the capital of the Czech Republic. It is located between Wenceslas Square and the Charles Bridge.',
                    imgurl: '/img/trips/cities/old_town_square.jpg',
                    location: [50.0876958, 14.4218866]
                }
            ],
        },

        {
            city: 'Прага',
            language: 'ua',
            places: [{
                    label: 'Карлів міст',
                    description: `Карлів міст є найстарішим мостом через річку Влтаву в столиці Чехії місті Празі і другим за давниною мостом у Чехії. У Чехії, він був історично четвертим зведеним кам'яним мостом.Карлів міст побудований з плит пісковика, його довжина — 520 м, а  ширина — 10 м. За понад 6 століть свого існування міст був декілька разів серйозно пошкоджений повенями (у 1432, 1496, 1784 та 1890 роках).`,
                    imgurl: '/img/trips/cities/karlov-bridge.jpg',
                    location: [50.0864771, 14.4092479]
                },

                {
                    label: 'Празький град',
                    description: `Перша відома історії фортеця виникла на місці Празького граду в IX ст. Надалі град розширявся й добудовувався, доки не став одним із найбільших замкових комплексів у світі. Згідно з Книгою рекордів Гіннеса, маючи довжину 570 м і ширину 130 м він є найбільшим замком у світі. Частиною комплексу є собор святого Віта — головний кафедральний собор Праги, у якому поховано багато видатних правителів Чехії, а також знаходиться гробниця св. Яна Непомуцького.`,
                    imgurl: '/img/trips/cities/prague_castle.jpg',
                    location: [50.0902163, 14.3973905]
                },

                {
                    label: 'Собор святого Віта',
                    description: `Собор святого Віта — католицький храм, кафедральний собор, присвячений святому Віту, у столиці Чехії місті Празі; шедевр готичної та неоготичної архітектури, з яким щільно пов'язана історія міста та країни, усипальниця королів Богемії, сховище коронаційних регалій.`,
                    imgurl: '/img/trips/cities/prague_vitu_cathedral.jpg',
                    location: [50.0908918, 14.3983227]
                },

                {
                    label: 'Староміськa плoща',
                    description: `Староміськa плoща або Стaромєстська плoща — старовинна площа у середмісті столиці Чехії Празі — Старому Мєсті, багата на історико-архітектурні пам'ятки XIV—XIX століть.`,
                    imgurl: '/img/trips/cities/old_town_square.jpg',
                    location: [50.0876958, 14.4218866]
                }
            ],
        },

        {
            city: 'Cesky Krumlov',
            language: 'en',
            places: [{
                    label: 'Český Krumlov Castle',
                    description: 'Český Krumlov Castle is a castle located in the city of Český Krumlov in the Czech Republic. It dates back to 1240 when the first castle was built by the Witigonen family, the main branch of the powerful Rosenberg family.Currently the castle is listed as a national heritage site and thus serves as a major tourist attraction.',
                    imgurl: '/img/trips/cities/cesky_krumlov.jpg',
                    location: [48.8129556, 14.3129806]
                },

                {
                    label: 'Castle Divi-Kamen',
                    description: 'Castle Divi-Kamen or Maidstein is the almost ruined Gothic medieval castle of Rožmberkov in the Cesky Krumlov district of the South Bohemian Region, built in the 14th century. The castle is located on the same rocky cape above the confluence of the Krshemzhsky stream and Vltava. In the castle area, archaeological excavations of a prehistoric settlement are carried out, and the area around the castle is part of the Divchi-Kamen nature reserve.',
                    imgurl: '/img/trips/cities/divci-kamen-castle.jpg',
                    location: [48.8890743, 14.3548075]
                },

                {
                    label: 'The Klet',
                    description: 'The Klet is a mountain located in the South Bohemian Region of the Czech Republic, near the town of Český Krumlov. It rises 1,084 metres (3,556 ft) above sea level, and on a clear day affords a view of the Alps to the South.',
                    imgurl: '/img/trips/cities/klet_mountain.jpg',
                    location: [48.8699991, 14.2662452]
                }
            ],
        },

        {
            city: 'Ческі-Крумлов',
            language: 'ua',
            places: [{
                    label: 'Крумловський замок',
                    description: 'Крумловський замок або Замок Ческі-Крумлов - замок в Південній Чехії в місті Ческі-Крумлов, розташованому в 170 км від Праги. Вважається другим за величиною замком Чехії після Празького граду.',
                    imgurl: '/img/trips/cities/cesky_krumlov.jpg',
                    location: [48.8129556, 14.3129806]
                },

                {
                    label: 'Замок дівча-Камен',
                    description: 'Замок дівча-Камен або Мейдштейн - практично зруйнований готичний середньовічний замок Рожмберков в районі Ческі-Крумлов Південночеський краю, побудований в XIV столітті. Замок розташований на однойменному скелястому мисі над злиттям Кршемжского струмка і Влтави. В ареалі замку проводяться археологічні розкопки доісторичного поселення, а територія навколо замку входить до складу природного заповідника дівча-Камен.',
                    imgurl: '/img/trips/cities/divci-kamen-castle.jpg',
                    location: [48.8890743, 14.3548075]
                },

                {
                    label: 'Кліть',
                    description: 'Кліть - гора, розташована в Південночеський краї в Чехії поблизу міста Ческі-Крумлов. Висота піка - 1084 м. У ясний день в південному напрямку відкривається вид на Альпи.Однойменна з вершиною обсерваторія Кліть розташована на південному схилі гори.',
                    imgurl: '/img/trips/cities/klet_mountain.jpg',
                    location: [48.8699991, 14.2662452]
                }
            ],
        },

        {
            city: 'Milan',
            language: 'en',
            places: [{
                    label: 'Milan Cathedral',
                    description: 'Milan Cathedral is the cathedral church of Milan, Lombardy, Italy. Dedicated to St Mary of the Nativity, it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini. The cathedral took nearly six centuries to complete. It is the largest church in Italy and the third largest in the world.',
                    imgurl: '/img/trips/cities/milan_cathedral.jpg',
                    location: [45.4640976, 9.1897378]
                },

                {
                    label: 'Sforza Castle',
                    description: `Sforza Castle is in Milan, northern Italy. It was built in the 15th century by Francesco Sforza, Duke of Milan, on the remnants of a 14th-century fortification. Later renovated and enlarged, in the 16th and 17th centuries it was one of the largest citadels in Europe. Extensively rebuilt by Luca Beltrami in 1891–1905, it now houses several of the city's museums and art collections.`,
                    imgurl: '/img/trips/cities/sforza_castle.jpg',
                    location: [45.4704762, 9.1771438]
                },

                {
                    label: 'The Galleria Vittorio Emanuele II',
                    description: `The Galleria Vittorio Emanuele II is the world's oldest active shopping mall and a major landmark of Milan, Italy. Housed within a four-story double arcade in the center of town, the Galleria is named after Victor Emmanuel II, the first king of the Kingdom of Italy. It was designed in 1861 and built by architect Giuseppe Mengoni between 1865 and 1877.`,
                    imgurl: '/img/trips/cities/galleria_vittorio_emanuele.jpg',
                    location: [45.4657398, 9.1886432]
                }
            ],
        },

        {
            city: 'Мілан',
            language: 'ua',
            places: [{
                    label: 'Міланський собор',
                    description: 'Міланський собор — кафедральний собор в Мілані, що присвячений різдву святої Діви Марії. Побудований в готичному стилі з білого мармуру.',
                    imgurl: '/img/trips/cities/milan_cathedral.jpg',
                    location: [45.4640976, 9.1897378]
                },

                {
                    label: 'Замок Сфорца',
                    description: 'Замок Сфорца — один з головних символів Мілана. Замок був побудований в XV столітті герцогом Мілана Франческо Сфорца на місці попередньої фортифікаційної споруди XIV ст, відомої як Castrum Portae Jovis. З плином століть Замок зазнав значних перетворень. В XVI ст. Кастелло Сфорцеско є однією з основних військових цитаделей Європи. Замок є туристичною атракцією Мілана, тут розташовані важливі музеї.',
                    imgurl: '/img/trips/cities/sforza_castle.jpg',
                    location: [45.4704762, 9.1771438]
                },

                {
                    label: 'Галерея Віктора Еммануїла II',
                    description: 'Галерея Віктора Еммануїла II - один з перших в Європі пасажів.Будівля пасажу має форму латинського хреста з восьмикутним центром, прикрашеним мозаїками, що зображують чотири континенти, а також алегоричні зображення мистецтва, землеробства, науки і промисловості. Зверху галерея покрита куполом зі скла і заліза.',
                    imgurl: '/img/trips/cities/galleria_vittorio_emanuele.jpg',
                    location: [45.4657398, 9.1886432]
                }
            ],
        },

        {
            city: 'Rome',
            language: 'en',
            places: [{
                    label: 'The Papal Basilica of St. Peter',
                    description: `The Papal Basilica of St. Peter in the Vatican is an Italian Renaissance church in Vatican City, the papal enclave within the city of Rome. Designed principally by Donato Bramante, Michelangelo, Carlo Maderno and Gian Lorenzo Bernini, St. Peter's is the most renowned work of Renaissance architecture and the largest church in the world. While it is neither the mother church of the Catholic Church nor the cathedral of the Diocese of Rome, St. Peter's is regarded as one of the holiest Catholic shrines. It has been described as "holding a unique position in the Christian world" and as "the greatest of all churches of Christendom".`,
                    imgurl: '/img/trips/cities/papal_basilica.jpg',
                    location: [41.9021667, 12.451748]
                },

                {
                    label: 'Trevi Fountain',
                    description: `The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Pietro Bracci. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world. The fountain has appeared in several notable films, including Federico Fellini's La Dolce Vita, the eponymous Three Coins in the Fountain, and The Lizzie McGuire Movie.`,
                    imgurl: '/img/trips/cities/trevi_fountain.jpg',
                    location: [41.9010333, 12.4810843]
                },

                {
                    label: 'Pantheon',
                    description: `The Pantheon is a former Roman temple, now a church, in Rome, Italy, on the site of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus (27 BC – 14 AD). The present building was completed by the emperor Hadrian and probably dedicated about 126 AD. He retained Agrippa's original inscription, which has caused confusion over its date of construction as the original Pantheon burned down, so it is not certain when the present one was built.`,
                    imgurl: '/img/trips/cities/pantheon.jpg',
                    location: [41.8986108, 12.4746842]
                },

                {
                    label: 'Colosseum',
                    description: 'The Colosseum or Coliseum is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine, tuff, and brick-faced concrete, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus.',
                    Кimgurl: '/img/trips/cities/colosseum.jpg',
                    location: [41.8902102, 12.4900422]
                }
            ],
        },

        {
            city: 'Рим',
            language: 'ua',
            places: [{
                    label: 'Собор Святого Петра',
                    description: 'Собор Святого Петра — католицький храм, найбільша споруда Ватикану та найбільша християнська церква у світі. Собор також входить у десятку найвищих церков світу, є однією із чотирьох патріарших базилік Рима та церемоніальним центром Римської католицької Церкви. Баня собору є одним із символів Рима.',
                    imgurl: '/img/trips/cities/papal_basilica.jpg',
                    location: [41.9021667, 12.451748]
                },

                {
                    label: 'Фонтан Треві',
                    description: 'Фонтан Треві — найбільший фонтан у Римі, заввишки 25.9 метрів та 19.8 метрів завширшки. Є найбільш «амбіційним» фонтаном в Римі в стилі бароко.',
                    imgurl: '/img/trips/cities/trevi_fountain.jpg',
                    location: [41.9010333, 12.4810843]
                },

                {
                    label: 'Пантеон',
                    description: 'Пантеон — «храм всіх богів», будівля в Римі. Розташовується на площі Пьяцца-делла-Ротонда (Piazza della Rotonda). Відбудована після пожежі за правління імператора Адріана близько 126 року н. е. на місці храму того ж найменування, збудованого Марком Віпсанієм Агріппою в I ст. н. е. за правління Авґуста.',
                    imgurl: '/img/trips/cities/pantheon.jpg',
                    location: [41.8986108, 12.4746842]
                },

                {
                    label: 'Колізей',
                    description: 'Колізей — найбільший амфітеатр Стародавнього Риму, символ імператорської могутності. Розташований у Римі, в улоговині між Есквілінським, Палатинським і Целійським пагорбами, на тому місці, де колись був ставок, що належав до «Золотого Будинку» Нерона. Вміщав близько 50000 глядачів.',
                    imgurl: '/img/trips/cities/colosseum.jpg',
                    location: [41.8902102, 12.4900422]
                }
            ],
        },

        {
            city: 'Venice',
            language: 'en',
            places: [{
                    label: 'Piazza San Marco',
                    description: `Piazza San Marco, often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza ("the Square"). All other urban spaces in the city (except the Piazzetta and the Piazzale Roma) are called campi ("fields"). The Piazzetta ("little Piazza/Square") is an extension of the Piazza towards the lagoon in its south east corner (see plan). The two spaces together form the social, religious and political centre of Venice and are commonly considered together. This article relates to both of them.`,
                    imgurl: '/img/trips/cities/piazza_san_marco.jpg',
                    location: [45.434164, 12.3356436]
                },

                {
                    label: `St Mark's Basilica`,
                    description: `The Patriarchal Cathedral Basilica of Saint Mark, commonly known as Saint Mark's Basilica (Italian: Basilica di San Marco; Venetian: Baxéłega de San Marco), is the cathedral church of the Roman Catholic Archdiocese of Venice, northern Italy. It is the most famous of the city's churches and one of the best known examples of Italo-Byzantine architecture. It lies at the eastern end of the Piazza San Marco, adjacent and connected to the Doge's Palace.`,
                    imgurl: '/img/trips/cities/san-marco-cathedral.jpg',
                    location: [45.4345606, 12.3375237]
                },

                {
                    label: `Doge's Palace`,
                    description: `The Doge's Palace is a palace built in Venetian Gothic style, and one of the main landmarks of the city of Venice in northern Italy. The palace was the residence of the Doge of Venice, the supreme authority of the former Republic of Venice, opening as a museum in 1923. Today, it is one of the 11 museums run by the Fondazione Musei Civici di Venezia.`,
                    imgurl: '/img/trips/cities/doges-palace-facade.jpg',
                    location: [45.4337035, 12.3382007]
                }
            ],
        },

        {
            city: 'Венеція',
            language: 'ua',
            places: [{
                    label: 'Площа Святого Марка',
                    description: `Площа Святого Марка — головна міська площа Венеції, Італія. Логічно складається з двох частин: П'яцетти — майданчика від Гранд-каналу до кампаніли Собору Святого Марка, і власне самої Площі.`,
                    imgurl: '/img/trips/cities/piazza_san_marco.jpg',
                    location: [45.434164, 12.3356436]
                },

                {
                    label: 'Собор Святого Марка',
                    description: 'Собор Святого Марка — головний собор Венеції, що є рідкісним прикладом візантійської архітектури в Західній Європі. Розташовується на площі Святого Марка, поряд з Палацом дожів.',
                    imgurl: '/img/trips/cities/san-marco-cathedral.jpg',
                    location: [45.4345606, 12.3375237]
                },

                {
                    label: 'Палац дожів',
                    description: `Палац дожів — пам'ятка італійської готичної архітектури (XIV-XV століть) у Венеції. Ця головна будівля Венеції була насамперед резиденцією дожів республіки. У палаці засідали Велика рада і сенат, працював Верховний суд і вершила свої справи таємна поліція. На першому поверсі розміщувалися також контори юристів, канцелярія, служби цензорів і морське відомство. Надбудований зверху балкон служив свого роду святковою трибуною, з якої дож являв себе народу. Гості міста, які причалювали до самого палацу з боку Пьяцетти, виявлялися, таким чином, біля ніг правителя Республіки.`,
                    imgurl: '/img/trips/cities/doges-palace-facade.jpg',
                    location: [45.4337035, 12.3382007]
                }
            ],
        },

        {
            city: 'Paris',
            language: 'en',
            places: [{
                    label: 'Eiffel Tower',
                    description: `The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887–89 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world`,
                    imgurl: '/img/trips/cities/eiffil_tower.jpg',
                    location: [48.8583701, 2.2922926]
                },

                {
                    label: 'Louvre Palace',
                    description: `The Louvre Palace is a former royal palace located on the Right Bank of the Seine in Paris, between the Tuileries Gardens and the church of Saint-Germain l'Auxerrois. Originally a fortress built in the medieval period, it became a royal palace in the fourteenth century under Charles V and was used from time to time by the kings of France as their main Paris residence. Its present structure has evolved in stages since the 16th century. In 1793 part of the Louvre became a public museum, now the Musée du Louvre, which has expanded to occupy most of the building.`,
                    imgurl: '/img/trips/cities/louvre_palace.jpg',
                    location: [48.8606111, 2.3354553]
                },

                {
                    label: 'Notre-Dame de Paris',
                    description: 'Notre-Dame de Paris is a medieval Catholic cathedral on the Île de la Cité in the fourth arrondissement of Paris, France. The cathedral is widely considered to be one of the finest examples of French Gothic architecture, and it is among the largest and best-known church buildings in the Catholic Church in France, and in the world. The naturalism of its sculptures and stained glass serve to contrast it with earlier Romanesque architecture.',
                    imgurl: '/img/trips/cities/notre-dame-cathedral.jpg',
                    location: [48.8529682, 2.3477134]
                },

                {
                    label: 'Arc de Triomphe',
                    description: `The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, standing at the western end of the Champs-Élysées at the center of Place Charles de Gaulle, formerly named Place de l'Étoile — the étoile or "star" of the juncture formed by its twelve radiating avenues. Paris's Arc de Triomphe was the tallest triumphal arch until the completion of the Monumento a la Revolución in Mexico City in 1938, which is 67 metres (220 ft) high.`,
                    imgurl: '/img/trips/cities/arc_de_triomphe.jpg',
                    location: [48.8737917, 2.2928388]
                }
            ],
        },

        {
            city: 'Париж',
            language: 'ua',
            places: [{
                    label: 'Ейфелева вежа',
                    description: `Ейфелева вежа — архітектурна пам'ятка Парижа, розміщена на Марсовому полі, символ сучасної Франції. Вежу названо на честь її конструктора Густава Ейфеля. Сам Ейфель називав її «300-метровою вежею», інша, народна назва — «Залізна леді». Популярний туристичний об'єкт, щорічно приймає понад 6 мільйонів відвідувачів. У 2007 році на вежі побувало 6 893 000 осіб, що на 78 000 відвідувачів більше ніж у 2006, а за її історію з 1889 до 31 грудня 2007 року — 236 445 812 осіб. Вежа стала найвідвідуванішою і найфотографованішою туристичною пам'яткою світу.`,
                    imgurl: '/img/trips/cities/eiffil_tower.jpg',
                    location: [48.8583701, 2.2922926]
                },

                {
                    label: 'Луврский палац',
                    description: `Луврский палац - старовинний королівський замок в Парижі, перебудований у палац, розташований на правому березі Сени між садом Тюїльрі і церквою Сен-Жермен-л'Осерруа. Сьогодні це один з найбагатших музеїв світу - Лувр. Зведення нинішнього будинку Лувра тривало майже тисячоліття і невіддільне від історії самого міста Парижа.`,
                    imgurl: '/img/trips/cities/louvre_palace.jpg',
                    location: [48.8606111, 2.3354553]
                },

                {
                    label: 'Собор Паризької Богоматері',
                    description: `Собор Паризької Богоматері — собор у Парижі (Франція), присвячений Діві Марії, матері Ісуса Христа, кафедральний храм Паризької архідієцезії. Один з найпрекрасніших витворів готичного мистецтва. Стоїть на острові Сіте, на місці першої християнської церкви Парижа, базиліки Святого Стефана. Ця церква була побудована на місці галло-римського храму Юпітеру, що стояв тут за часів римської влади. Собор є п'ятинефною базилікою.`,
                    imgurl: '/img/trips/cities/notre-dame-cathedral.jpg',
                    location: [48.8529682, 2.3477134]
                },

                {
                    label: 'Паризька тріумфалана арка',
                    description: 'Паризька тріумфалана арка — тріумфальна арка, розташована на площі Шарля де Голля у столиці Франції місті Парижі. Тріумфальна арка є одним з найвідоміших паризьких монументів, одним із міських символів. На стінах арки вигравійовані назви 128 битв, виграних республіканською і імператорською армією, а також імена 658 французьких воєначальників. Арку оточують 100 гранітних тумб (на честь «ста днів» правління Наполеона), сполучених між собою чавунними ланцюгами.',
                    imgurl: '/img/trips/cities/arc_de_triomphe.jpg',
                    location: [48.8737917, 2.2928388]
                }
            ],
        },

        {
            city: 'Nice',
            language: 'en',
            places: [{
                    label: 'Matiss museum',
                    description: 'Museum in a villa of the XVII century with paintings by Matisse, most of which the artist wrote in Nice.',
                    imgurl: '/img/trips/cities/museum_in_a_villa.jpg',
                    location: [43.7193868, 7.2740543]
                },

                {
                    label: 'Musée Marc Chagall',
                    description: 'The Musée Marc Chagall is a French national museum dedicated to the work of painter Marc Chagall - essentially his works inspired by religion - located in Nice in the Alpes-Maritimes.',
                    imgurl: '/img/trips/cities/musee_marc_chagall.jpg',
                    location: [43.709137, 7.2672143]
                },

                {
                    label: 'French Riviera',
                    description: `The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend from Cassis or Toulon or Saint-Tropez on the west to the France-Italy border in the east, where the Italian Riviera joins. The coast is entirely within the Provence-Alpes-Côte d'Azur (PACA) region of France. The principality of Monaco is a semi-enclave within the region, surrounded on three sides by France and fronting the Mediterranean.`,
                    imgurl: '/img/trips/cities/french_riviera.jpg',
                    location: [43.388197, 5.9603247]
                }
            ],
        },

        {
            city: 'Ніцца',
            language: 'ua',
            places: [{
                    label: 'Музей Матісса в Ніцці',
                    description: 'Музей в віллі XVII століття з картинами Матісса, більшість з яких художник написав в Ніцці.',
                    imgurl: '/img/trips/cities/museum_in_a_villa.jpg',
                    location: [43.7193868, 7.2740543]
                },

                {
                    label: 'Музей Марка Шагала',
                    description: 'Музей Марка Шагала - музей художника в Ніцці, Франція.',
                    imgurl: '/img/trips/cities/musee_marc_chagall.jpg',
                    location: [43.709137, 7.2672143]
                },

                {
                    label: `Французька Рив'єра`,
                    description: `Французька Рив'єра — курортна зона на узбережжі Середземного моря, на території Італії, Франції, Монако, включає міста Сан-Ремо, Рапалло, Монте-Карло, Ніццу тощо. Назву «Рив'єра» придумав маловідомий зараз французький письменник і поет Стефан Л'єжар — 1870 року він видав роман з назвою «Лазуровий Берег»; ці слова спали йому на думку, коли він побачив «дивної краси» бухту міста Єр.`,
                    imgurl: '/img/trips/cities/french_riviera.jpg',
                    location: [43.388197, 5.9603247]
                }
            ],
        },

        {
            city: 'Athens',
            language: 'en',
            places: [{
                    label: 'Acropolis Museum',
                    description: 'The Acropolis Museum is an archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens. The museum was built to house every artifact found on the rock and on the surrounding slopes, from the Greek Bronze Age to Roman and Byzantine Greece. It also lies over the ruins of a part of Roman and early Byzantine Athens.',
                    imgurl: '/img/trips/cities/acropolis_museum.jpg',
                    location: [37.9684499, 23.726334]
                },

                {
                    label: 'Acropolis of Athens',
                    description: 'The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις (polis, "city"). Although the term acropolis is generic and there are many other acropoleis in Greece, the significance of the Acropolis of Athens is such that it is commonly known as "The Acropolis" without qualification. During ancient times it was known also more properly as Cecropia, after the legendary serpent-man, Cecrops, the first Athenian king.',
                    imgurl: '/img/trips/cities/acropolis_athens.jpg',
                    location: [37.9715323, 23.7235605]
                },

                {
                    label: 'Parthenon',
                    description: 'The Parthenon is a former temple, on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron. Construction began in 447 BC when the Athenian Empire was at the peak of its power. It was completed in 438 BC although decoration of the building continued until 432 BC. It is the most important surviving building of Classical Greece, generally considered the zenith of the Doric order. Its decorative sculptures are considered some of the high points of Greek art.',
                    imgurl: '/img/trips/cities/pantheon.jpg',
                    location: [37.9715285, 23.7245279]
                }
            ],
        },

        {
            city: 'Афіни',
            language: 'ua',
            places: [{
                    label: 'Новий музей акрополя',
                    description: 'Новий музей акрополя був закладений в Афінах на вул. Діонісія Ареопагіта 22 грудня 2007 року, та офіційно відкритий 20 червня 2009 року. Очільником Організації зі створення Музею став професор археології Фессалонікійського університету Аристотеля Дімітріос Пандермаліс. Проект музею був виконаний швейцарським архітектором Бернаром Чумі.',
                    imgurl: '/img/trips/cities/acropolis_museum.jpg',
                    location: [37.9684499, 23.726334]
                },

                {
                    label: 'Афінський акрополь',
                    description: `Афінський акрополь — найвідоміший акрополь у світі, розташований у столиці Греції місті Афіни на пагорбі Акрополіс висотою 156 м над рівнем моря. Афінський акрополь був офіційно проголошений провідною пам'яткою загальноєвропейської культурної спадщини 26 березня 2007 року. 20 червня 2009 року був офіційно відкритий Новий музей акрополя.`,
                    imgurl: '/img/trips/cities/acropolis_athens.jpg',
                    location: [37.9715323, 23.7235605]
                },

                {
                    label: 'Парфенон',
                    description: `Парфенон — головний храм Афінського акрополя, присвячений богині Афіні Парфенос, покровительці міста та всієї Аттики; визначна пам'ятка давньогрецького мистецтва. Був зведений до 438 року до н. е. за 10 років. Зазнав руйнування 1687 року під час облоги Акрополя венеціанцями періоду війни з турками.`,
                    imgurl: '/img/trips/cities/pantheon.jpg',
                    location: [37.9715285, 23.7245279]
                }
            ],
        },

        {
            city: 'Rhodes',
            language: 'en',
            places: [{
                    label: 'Colossus of Rhodes',
                    description: `The Colossus of Rhodes was a statue of the Greek titan-god of the sun Helios, erected in the city of Rhodes, on the Greek island of the same name, by Chares of Lindos in 280 BC. One of the Seven Wonders of the Ancient World, it was constructed to celebrate Rhodes' victory over the ruler of Cyprus, Antigonus I Monophthalmus, whose son unsuccessfully besieged Rhodes in 305 BC. According to most contemporary descriptions, the Colossus stood approximately 70 cubits, or 33 metres (108 feet) high—the approximate height of the modern Statue of Liberty from feet to crown—making it the tallest statue of the ancient world.`,
                    imgurl: '/img/trips/cities/colossus_rhodes.jpg',
                    location: [36.4510656, 28.2236446]
                },

                {
                    label: 'Palace of the Grand Master of the Knights of Rhodes',
                    description: 'The Palace of the Grand Master of the Knights of Rhodes is a medieval castle in the city of Rhodes, on the island of Rhodes in Greece. It is one of the few examples of Gothic architecture in Greece. The site was previously a citadel of the Knights Hospitaller that functioned as a palace, headquarters, and fortress.',
                    imgurl: '/img/trips/cities/palace__grand_master.jpg',
                    location: [36.4457685, 28.2219017]
                },

                {
                    label: 'Prasonisi',
                    description: 'Prasonisi (also Prassoníssi) cape is a part of the island of Rhodes. It is located 92 km from Rhodes town; 40 km from Lindos, at the southern-west part of Rhodes.',
                    imgurl: '/img/trips/cities/prasonisi.jpg',
                    location: [35.8824991, 27.7506896]
                }
            ],
        },

        {
            city: 'Родос',
            language: 'ua',
            places: [{
                    label: 'Колос Родоський',
                    description: 'Колос Родоський — величезна статуя грецького бога Сонця - Геліоса, споруджена між 292 та 280 роками до н. е. на вході до гавані острова Родос, Греція, учнем Лісіппа Харесом із Ліндоса. Статуя вважалася одним із Семи Чудес Античного Світу: за час свого існування була вона найвищою статуєю світу, висотою 70 ліктів (31,5 м).',
                    imgurl: '/img/trips/cities/colossus_rhodes.jpg',
                    location: [36.4510656, 28.2236446]
                },

                {
                    label: 'Родоський замок',
                    description: `Родоський замок, іноді Родоський палац чи Родоська фортеця — основна оборонна споруда середньовічного міста Родос, колишньої резиденція великого магістра Родоського ордена. Нині пам'ятка Світової спадщини ЮНЕСКО, музей, головна туристична пам'ятка острова Родос.`,
                    imgurl: '/img/trips/cities/palace__grand_master.jpg',
                    location: [36.4457685, 28.2219017]
                },

                {
                    label: 'Прасонісі',
                    description: `Прасонісі - мис в Греції в протоці Карпатос, що омивається Критським і Лівійським морями, південно-західний край Родосу. Являє собою острів, влітку при низькому рівні води з'єднаний піщаним перешийком з Родосом. Знаходиться в 91 кілометрі на північний захід від міста Родосу, в 12 кілометрах на південь від села Kатавей і в 40 кілометрах на північний захід від Линдоса.`,
                    imgurl: '/img/trips/cities/prasonisi.jpg',
                    location: [35.8824991, 27.7506896]
                }
            ],
        },

        {
            city: 'Moscow',
            language: 'en',
            places: [{
                    label: 'Moscow Kremlin',
                    description: `The Moscow Kremlin, usually referred to as the Kremlin, is a fortified complex at the heart of Moscow, overlooking the Moskva River to the south, Saint Basil's Cathedral and Red Square to the east, and the Alexander Garden to the west. It is the best known of the kremlins (Russian citadels) and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers.`,
                    imgurl: '/img/trips/cities/moscow_kremlin.jpg',
                    location: [55.7507982, 37.6132666]
                },

                {
                    label: 'Red Square',
                    description: `Red Square is a city square (plaza) in Moscow, Russia. It separates the Kremlin, the former royal citadel and now the official residence of the President of Russia, from a historic merchant quarter known as Kitai-gorod. Red Square is often considered the central square of Moscow since Moscow's major streets, which connect to Russia's major highways, originate from the square.`,
                    imgurl: '/img/trips/cities/red',
                    location: [55.7507979, 37.6067005]
                },

                {
                    label: `Saint Basil's Cathedral`,
                    description: `The Cathedral of Vasily the Blessed, commonly known as Saint Basil's Cathedral, is a church in Red Square in Moscow, Russia. The building, now a museum, is officially known as the Cathedral of the Intercession of the Most Holy Theotokos on the Moat or Pokrovsky Cathedral. It was built from 1555–61 on orders from Ivan the Terrible and commemorates the capture of Kazan and Astrakhan. It was the city's tallest building until the completion of the Ivan the Great Bell Tower in 1600.`,
                    imgurl: '/img/trips/cities/saint_basils_cathedral.jpg',
                    location: [55.7525229, 37.6208981]
                }
            ],
        },

        {
            city: 'Москва',
            language: 'ua',
            places: [{
                    label: 'Московський кремль',
                    description: 'Московський кремль — найдавніша частина Москви, головний суспільно-політичний, духовно-релігійний і історико-художній комплекс столиці Росії, офіційна резиденція президента Російської Федерації. Кремль розташований на високому лівому березі Москви-ріки — Боровицькому горбі, при впаданні в неї річки Неглинної.',
                    imgurl: '/img/trips/cities/moscow_kremlin.jpg',
                    location: [55.7507982, 37.6132666]
                },

                {
                    label: 'Красна площа',
                    description: 'Красна площа — головна площа Москви, розташована в центрі міста. Назва походить від давньоруського «красний» — гарний,  красивий. Із західної сторони до площі прилягає Кремль, зі східної ГУМ, «Китай-город», з північної Історичний музей та Собор Казанської ікони Божої Матері, а зі сходу Собор Василя Блаженного (Покровський собор).',
                    imgurl: '/img/trips/cities/red',
                    location: [55.7507979, 37.6067005]
                },

                {
                    label: 'Храм Покрови Богородиці на Рові',
                    description: 'Храм Покрови Богородиці на Ро́ві, відоміший як Собор Василія Блаженного — православний собор у Москві, побудований в XVI столітті. Є візитною карткою міста, одним з найбільш впізнаваних місць.',
                    imgurl: '/img/trips/cities/saint_basils_cathedral.jpg',
                    location: [55.7525229, 37.6208981]
                }
            ],
        },

        {
            city: 'St. Petersburg',
            language: 'en',
            places: [{
                    label: 'Hermitage Museum',
                    description: `The State Hermitage Museum is a museum of art and culture in Saint Petersburg, Russia. The second largest in the world, it was founded in 1764 when Empress Catherine the Great acquired an impressive collection of paintings from the Berlin merchant Johann Ernst Gotzkowsky. The museum celebrates the anniversary of its founding each year on 7 December, Saint Catherine's Day. It has been open to the public since 1852.`,
                    imgurl: '/img/trips/cities/hermitage_museum.jpg',
                    location: [59.9398317, 30.312371]
                },

                {
                    label: 'Winter Palace',
                    description: `The Winter Palace in Saint Petersburg, Russia, was, from 1732 to 1917, the official residence of the Russian monarchs. Today, the restored palace forms part of a complex of buildings housing the Hermitage Museum. Situated between the Palace Embankment and the Palace Square, adjacent to the site of Peter the Great's original Winter Palace, the present and fourth Winter Palace was built and altered almost continuously between the late 1730s and 1837, when it was severely damaged by fire and immediately rebuilt.`,
                    imgurl: '/img/trips/cities/winter_palace.jpg',
                    location: [59.9403958, 30.3116075]
                },

                {
                    label: 'The Peterhof Palace',
                    description: `The Peterhof Palace is a series of palaces and gardens located in Petergof, Saint Petersburg, Russia, laid out on the orders of Peter the Great. These palaces and gardens are sometimes referred as the "Russian Versailles". The palace-ensemble along with the city center is recognized as a UNESCO World Heritage Site.`,
                    imgurl: '/img/trips/cities/peterhof_palace.jpg',
                    location: [59.8713026, 29.9423921]
                }
            ],
        },

        {
            city: 'Санкт-Петербург',
            language: 'ua',
            places: [{
                    label: 'Державний Ермітаж у Санкт-Петербурзі',
                    description: `Державний Ермітаж у Санкт-Петербурзі — один із найбільших у світі художніх і культурно-історичних музеїв.`,
                    imgurl: '/img/trips/cities/hermitage_museum.jpg',
                    location: [59.9398317, 30.312371]
                },

                {
                    label: 'Зимовий палац',
                    description: 'Зимовий палац — палац міста Санкт-Петербург, розташований на Дворцовій площі, головна споруда всесвітньо відомого музею Ермітаж. Сучасна споруда побудована в середині 18 століття.',
                    imgurl: '/img/trips/cities/winter_palace.jpg',
                    location: [59.9403958, 30.3116075]
                },

                {
                    label: 'Петергоф (палацово-парковий ансамбль)',
                    description: 'Петергоф — музейний комплекс палаців і парків 18-19 століть на відстані 29 кілометрів від Санкт-Петербурга. З 1944 по 1997 роки місту змінили німецьку назву з Петергоф на Петропалац. Історична назва Петергоф повернута 1997 року.',
                    imgurl: '/img/trips/cities/peterhof_palace.jpg',
                    location: [59.8713026, 29.9423921]
                }
            ],
        },

        {
            city: 'Barcelona',
            language: 'en',
            places: [{
                    label: 'Park Güell',
                    description: 'The Park Güell is a public park system composed of gardens and architectonic elements located on Carmel Hill, in Barcelona, Catalonia (Spain). Carmel Hill belongs to the mountain range of Collserola – the Parc del Carmel is located on the northern face. Park Güell is located in La Salut, a neighborhood in the Gràcia district of Barcelona. With urbanization in mind, Eusebi Güell assigned the design of the park to Antoni Gaudí, a renowned architect and the face of Catalan modernism.',
                    imgurl: '/img/trips/cities/park_guell.jpg',
                    location: [41.4144948, 2.1505058]
                },

                {
                    label: 'Casa Milà',
                    description: `Casa Milà, popularly known as La Pedrera or "The stone quarry", a reference to its unconventional rough-hewn appearance, is a modernist building in Barcelona, Catalonia, Spain. It was the last private residence designed by architect Antoni Gaudí and was built between 1906 and 1912.`,
                    imgurl: '/img/trips/cities/casa_mila.jpg',
                    location: [41.3953805, 2.1597727]
                },

                {
                    label: 'Sagrada Família',
                    description: `The Basílica i Temple Expiatori de la Sagrada Família is a large unfinished Roman Catholic church in Barcelona, designed by Catalan architect Antoni Gaudí (1852–1926). Gaudí's work on the building is part of a UNESCO World Heritage Site, and in November 2010 Pope Benedict XVI consecrated and proclaimed it a minor basilica, as distinct from a cathedral, which must be the seat of a bishop.`,
                    imgurl: '/img/trips/cities/sagrada_familia.jpg',
                    location: [41.4036299, 2.1721671]
                }
            ],
        },

        {
            city: 'Барселона',
            language: 'ua',
            places: [{
                    label: 'Парк Гуель',
                    description: 'Парк Гуель – великий парк з численними будівлями, який знаходиться у Барселоні. Був спланований архітектором Антоні Гауді, побудований між 1900 та 1914, як громадський парк відкритий у 1926. Займає площу 17,18 га (0,1718 км²), є одним з найбільших парків Південної Європи.',
                    imgurl: '/img/trips/cities/park_guell.jpg',
                    location: [41.4144948, 2.1505058]
                },

                {
                    label: 'Будинок Міла',
                    description: `Будинок Міла, відомий також під назвою Ла Педре́ра або Ла Падре́ра (кат. La Pedrera - «кар'єр»), — житловий будинок, побудований каталонським архітектором Антоніо Гауді у 1906–1910 (будівництво офіційно закінчилося у 1912). Розміщений за адресою пр. Ґрасія, 92 у районі Барселони Ашямпла.`,
                    imgurl: '/img/trips/cities/casa_mila.jpg',
                    location: [41.3953805, 2.1597727]
                },

                {
                    label: 'Храм спокути Святого Сімейства',
                    description: 'Храм спокути Святого Сімейства, більше знаний як Храм Свято́го Сіме́́йства або за своєю каталанською назвою — Саґра́да Фамі́лія, — католицька церква у Барселоні. Її побудова почалась у 1882 і триває донині. Храм розташований на північ від барселонського району Старе Місто у міському районі Ашямпла.',
                    imgurl: '/img/trips/cities/sagrada_familia.jpg',
                    location: [41.4036299, 2.1721671]
                }
            ],
        },

        {
            city: 'Kiev',
            language: 'en',
            places: [{
                    label: 'Kiev Pechersk Lavra',
                    description: 'Kiev Pechersk Lavra or Kyiv Pechersk Lavra, also known as the Kiev Monastery of the Caves, is a historic Orthodox Christian monastery which gave its name to one of the city districts where it is located in Kiev. Together with the Saint Sophia Cathedral, it is inscribed as a UNESCO World Heritage Site.',
                    imgurl: '/img/trips/cities/kiev_pechersk_lavra.jpg',
                    location: [50.4346375, 30.5550671]
                },

                {
                    label: 'Maidan Nezalezhnosti',
                    description: `Maidan Nezalezhnosti is the central square of Kiev, the capital city of Ukraine. One of the city's main squares, it is located on Khreshchatyk Street in the Shevchenko Raion. The square has been known under many different names, but often it is called simply Maidan ("square").`,
                    imgurl: '/img/trips/cities/maidan_nezalezhnosti.jpg',
                    location: [50.4507781, 30.5214974]
                },

                {
                    label: 'Golden Gate',
                    description: `The Golden Gates of Kiev (Ukrainian: Золоті ворота, Zoloti vorota) was the main gate in the 11th century fortifications of Kiev, the capital of Kievan Rus'. It was named in imitation of the Golden Gate of Constantinople. The structure was dismantled in the Middle Ages, leaving few vestiges of its existence. It was completely rebuilt by the Soviet authorities in 1982, though no images of the original gates have survived.`,
                    imgurl: '/img/trips/cities/golden_gate.jpg',
                    location: [50.4507777, 30.5149313]
                }
            ],
        },

        {
            city: 'Київ',
            language: 'en',
            places: [{
                    label: 'Києво-Печерська лавра',
                    description: `Києво-Печерська лавра — православний монастирський комплекс в Києві, Україна. Один із найбільших християнських центрів-святинь країни. Визначна пам'ятка історії та архітектури.1994 року разом із Софійським собором внесений до переліку Світової спадщини ЮНЕСКО.`,
                    imgurl: '/img/trips/cities/kiev_pechersk_lavra.jpg',
                    location: [50.4346375, 30.5550671]
                },

                {
                    label: 'Майдан Незалежності',
                    description: 'Майдан Незалежності — центральна площа Києва. Розташований між Хрещатиком, вулицями Бориса Грінченка, Софіївською, Малою Житомирською, Михайлівською, Костьольною, алеєю Героїв Небесної Сотні, вулицею Архітектора Городецького та провулком Тараса Шевченка.',
                    imgurl: '/img/trips/cities/maidan_nezalezhnosti.jpg',
                    location: [50.4507781, 30.5214974]
                },

                {
                    label: 'Золоті ворота',
                    description: `«Золоті ворота» — головна брама стародавнього Києва, пам'ятка оборонної архітектури Київської Русі, одна із найдавніших датованих споруд Східної Європи, символ Києва. Свою назву одержали за аналогією із Золотими воротами в Константинополі (Царгороді).`,
                    imgurl: '/img/trips/cities/golden_gate.jpg',
                    location: [50.4507777, 30.5149313]
                }
            ],
        },

        {
            city: 'Lviv',
            language: 'en',
            places: [{
                    label: 'Cathedral Basilica of the Assumption',
                    description: `The Archcathedral Basilica of the Assumption of the Blessed Virgin Mary, usually called simply the Latin Cathedral is a 14th-century Roman Catholic cathedral in Lviv, western Ukraine. It is located in the city's Old Town, in the south western corner of the market square, called Cathedral Square.`,
                    imgurl: '/img/trips/cities/cathedral_basilica_assumption.jpg',
                    location: [49.8407468, 24.028373]
                },

                {
                    label: 'Market Square',
                    description: 'Rynok Square is a central square of the city of Lviv, Ukraine. It was planned in the second half of the 14th century, following granting city rights by King Casimir III the Great of Poland, who incorporated Red Ruthenia into the Kingdom of Poland in 1349. The king ordered Lviv to be moved more to the south, where a new city was built to the plan of a traditional European settlement: a central square surrounded by living quarters and fortifications. Old, Ruthenian Lviv had become a suburb of the new Polish city.',
                    imgurl: '/img/trips/cities/market_square.jpg',
                    location: [49.8413276, 24.0294036]
                },

                {
                    label: 'Lviv High Castle',
                    description: 'The Lviv High Castle or Lviv Castle Hill is a historic castle located on the top of the Castle Hill of the city of Lviv. It is currently the highest point in the city, 413 metres (1,355 ft) above sea level. The castle currently stands in ruins.',
                    imgurl: '/img/trips/cities/lviv_high_castle.jpg',
                    location: [49.8483101, 24.0306562]
                }
            ],
        },

        {
            city: 'Львів',
            language: 'ua',
            places: [{
                    label: 'Митрополича базиліка Внебовзяття Пресвятої Ді́ви Марі́ї',
                    description: `Митрополича базиліка Внебовзяття Пресвятої Ді́ви Марі́ї, Латинський катедральний собор, відомий під місцевою назвою Кате́дра — культова споруда, римо-католицька базиліка, головний храм Львівської архідієцезії Римо-Католицької церкви в Україні, розташований на Катедральній площі у Львові, Україна. Пам'ятка сакральної архітектури XIV—XVIII століття, пам'ятка архітектури національного значення.`,
                    imgurl: '/img/trips/cities/cathedral_basilica_assumption.jpg',
                    location: [49.8407468, 24.028373]
                },

                {
                    label: 'Площа Ринок',
                    description: 'Площа Ринок — центральний майдан у Львові, історичне серце сучасного міста, характерне явище для середньовічної архітектури європейських міст.',
                    imgurl: '/img/trips/cities/market_square.jpg',
                    location: [49.8413276, 24.0294036]
                },

                {
                    label: 'Високий Замок',
                    description: 'Високий Замок — замок, збудований під керівництвом Короля Русі Лева Даниловича, потім — польського короля Казимира III на Замковій горі у Львові. Майже повністю розібраний протягом XIX століття.',
                    imgurl: '/img/trips/cities/lviv_high_castle.jpg',
                    location: [49.8483101, 24.0306562]
                }
            ],
        },

        {
            city: 'Odessa',
            language: 'en',
            places: [{
                    label: 'Monument to the Duke de Richelieu',
                    description: 'Monument to the Duke de Richelieu (monument to Duke) in Odessa - a bronze sculpture dedicated to the first Odessa mayor, Duke Arman Emmanuel du Plessis de Richelieu. The first monument in Odessa.',
                    imgurl: '/img/trips/cities/monument_richelieu.jpg',
                    location: [46.4880752, 30.7388834]
                },

                {
                    label: 'Odessa city garden',
                    description: 'The Odessa City garden is located in town centre of Odessa, Ukraine, at the Deribasivska Street. Founded by Felix de Ribas (brother of José de Ribas) in 1803, it is the oldest park in the city. Felix de Ribas was an owner of most of this part of the town, but did not have enough resources to sustain the expenditure and so he donated the territory of the city garden to the city on November 10, 1806.',
                    imgurl: '/img/trips/cities/odessa_city_garden.jpg',
                    location: [46.4852738, 30.7327205]
                },

                {
                    label: 'Shevchenko Park',
                    description: 'Central Park of Culture and Recreation of Taras Shevchenko is a park in Odessa. It is located in the central part of Odessa city. It carries the name of Taras Shevchenko since 1954.',
                    imgurl: '/img/trips/cities/park_shevchenko_gon.jpg',
                    location: [46.4785981, 30.7535618]
                }
            ],
        },

        {
            city: 'Одеса',
            language: 'ua',
            places: [{
                    label: `Пам'ятник герцогу де Рішельє`,
                    description: `Пам'ятник герцогу де Рішельє (Пам'ятник дюку) в Одесі — бронзова скульптура присвячена першому одеському градоначальникові дюку Арману Еммануелю дю Плессі де Рішельє. Перший пам'ятник в Одесі.`,
                    imgurl: '/img/trips/cities/monument_richelieu.jpg',
                    location: [46.4880752, 30.7388834]
                },

                {
                    label: 'Міський сад',
                    description: 'Міський сад — сквер, розташований у центрі міста Одеси, на вулиці Дерибасівській. Найстаріший парк міста, закладений Феліксом Де Рібасом (брат засновника Одеси Хосе де Рібаса) у 1803 році, якому належала відповідна ділянка міської землі в центрі міста. Оскільки Фелікс де Рібас не мав належних коштів для утримання саду, він безкоштовно передав його на баланс міста, що відбулося 10 листопада 1806 року.',
                    imgurl: '/img/trips/cities/odessa_city_garden.jpg',
                    location: [46.4852738, 30.7327205]
                },

                {
                    label: 'Центральний парк культури й відпочинку імені Тараса Шевченка',
                    description: 'Центральний парк культури й відпочинку імені Тараса Шевченка — парк в Одесі. Межує із вулицями Маразліївською, Успенською й Лідерсовським бульваром.',
                    imgurl: '/img/trips/cities/park_shevchenko_gon.jpg',
                    location: [46.4785981, 30.7535618]
                }
            ],
        },

        {
            city: 'London',
            language: 'en',
            places: [{
                    label: 'London Eye',
                    description: `The London Eye is a giant Ferris wheel on the South Bank of the River Thames in London. The structure is 443 feet (135 m) tall and the wheel has a diameter of 394 feet (120 m). When it opened to the public in 2000 it was the world's tallest Ferris wheel. Its height was surpassed by the 525-foot (160 m) Star of Nanchang in 2006, the 541-foot (165 m) Singapore Flyer in 2008, and the 550-foot (167.6 m) High Roller (Las Vegas) in 2014. Supported by an A-frame on one side only, unlike the taller Nanchang and Singapore wheels, the Eye is described by its operators as "the world's tallest cantilevered observation wheel".`,
                    imgurl: '/img/trips/cities/london_eye.jpg',
                    location: [51.5088451, -0.1036086]
                },

                {
                    label: 'Big Ben',
                    description: 'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London and is usually extended to refer to both the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower, but it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II. The tower was designed by Augustus Pugin in a neo-gothic style.',
                    imgurl: '/img/trips/cities/big_ben.jpg',
                    location: [51.5007292, -0.126814]
                },

                {
                    label: 'Tower of London',
                    description: `The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle located on the north bank of the River Thames in central London. It lies within the London Borough of Tower Hamlets, separated from the eastern edge of the square mile of the City of London by the open space known as Tower Hill.`,
                    imgurl: '/img/trips/cities/tower_london.jpg',
                    location: [51.5081124, -0.078138]
                }
            ],
        },

        {
            city: 'Лондон',
            language: 'ua',
            places: [{
                    label: 'Лондонське Око',
                    description: 'Лондонське Око — одне з найбільших оглядових коліс у світі. Розташоване у Лондоні (Велика Британія).З висоти 135 метрів відкривається вигляд практично на все місто. Колесо огляду зроблене за проектом подружжя Девіда Маркса і Джулі Барфілд, який переміг на конкурсі проектів споруд на честь настання другого тисячоліття. Втілення проекту в життя зайняло шість років.',
                    imgurl: '/img/trips/cities/london_eye.jpg',
                    location: [51.5088451, -0.1036086]
                },

                {
                    label: 'Біг-Бен',
                    description: 'Біг-Бен — популярна туристична назва годинникової вежі Вестмінстерського палацу. Офіційна назва вежі з 2012 року — Вежа Єлизавети. Циферблати годинника дивляться на усі чотири сторони світу; виконані вони з бірмінгемського опалу, годинникові стрілки відлили з чавуну, а хвилинні зроблені з міді.',
                    imgurl: '/img/trips/cities/big_ben.jpg',
                    location: [51.5007292, -0.126814]
                },

                {
                    label: 'Лондонський Тауер',
                    description: `Лондонський Тауер — укріплення, побудоване на північному березі річки Темза, історичний центр міста Лондон. Одна з найстаріших історичних споруд Великої Британії, що довгий час слугувала резиденцією англійських монархів. Сьогодні Тауер є одночасно пам'ятником історії та музеєм, включеним до списку об'єктів, що належать до всесвітньої спадщини ЮНЕСКО.`,
                    imgurl: '/img/trips/cities/tower_london.jpg',
                    location: [51.5081124, -0.078138]
                }
            ],
        },

        {
            city: 'New York',
            language: 'en',
            places: [{
                    label: 'Times Square',
                    description: `Times Square is a major commercial intersection, tourist destination, entertainment center and neighborhood in the Midtown Manhattan section of New York City at the junction of Broadway and Seventh Avenue. It stretches from West 42nd to West 47th Streets. Brightly adorned with billboards and advertisements, Times Square is sometimes referred to as "The Crossroads of the World", "The Center of the Universe", "the heart of The Great White Way", and the "heart of the world". One of the world's busiest pedestrian areas, it is also the hub of the Broadway Theater District and a major center of the world's entertainment industry.`,
                    imgurl: '/img/trips/cities/timessquare.jpg',
                    location: [40.758895, -73.987319]
                },

                {
                    label: 'Statue of Liberty',
                    description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and built by Gustave Eiffel. The statue was dedicated on October 28, 1886.',
                    imgurl: '/img/trips/cities/statue_of_liberty.jpg',
                    location: [40.6892494, -74.0466891]
                },

                {
                    label: 'Empire State Building',
                    description: 'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. Designed by Shreve, Lamb & Harmon and completed in 1931, the building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. Its name is derived from "Empire State", the nickname of New York. As of 2017 the building is the 5th-tallest completed skyscraper in the United States and the 28th-tallest in the world. It is also the 6th-tallest freestanding structure in the Americas.',
                    imgurl: '/img/trips/cities/empire-state-building.jpg',
                    location: [40.7484405, -73.9878531]
                }
            ],
        },

        {
            city: 'Нью Йорк',
            language: 'ua',
            places: [{
                    label: 'Таймс-сквер',
                    description: `Таймс-сквер майдан у США в місті Нью-Йорк в окрузі Мангеттен. З 1907 р. Таймс-сквер є традиційним місцем масової зустрічі Нового року. Щороку близько півночі 31-го грудні понад 750 000 людей збираються на Таймс-сквер, щоб побачити традиційне спускання кришталевого м'яча, що має символізувати прихід Нового року. Таймс-сквер розташований на острові Мангеттен на перетині Бродвею і Сьомої Авеню. Таймс-сквер простягається між Шостою Авеню і Восьомою Авеню у східно-західному напрямку й між 40-ю стріт і 53-ю стріт у південно-підвнічному напрямку.`,
                    imgurl: '/img/trips/cities/timessquare.jpg',
                    location: [40.758895, -73.987319]
                },

                {
                    label: 'Статуя Свободи',
                    description: `Статуя Свободи — національний пам'ятник США, символ свободи, демократії та справедливості. Це одна з найзнаменитіших скульптур в США та у світі, часто звана «символом Нью-Йорка і США», «символом свободи і демократії», «Леді Свобода». Це подарунок французьких громадян до сторіччя американської революції.`,
                    imgurl: '/img/trips/cities/statue_of_liberty.jpg',
                    location: [40.6892494, -74.0466891]
                },

                {
                    label: 'Емпайр-Стейт-Білдінг',
                    description: `Емпайр-Стейт-Білдінг — хмарочос висотою 381 м (448 м з антеною), що має 102 поверхи, зведений у стилі ар деко в окрузі Мангеттен міста Нью-Йорка, США. Знаходиться будівля на П'ятій авеню між Західними 33-ю і 34-ю вулицями. Власником будівлі є компанія W & H Properties. Хмарочос Емпайр-Стейт-Білдінг став першою будівлею у світі, яка мала понад 100 поверхів.`,
                    imgurl: '/img/trips/cities/empire-state-building.jpg',
                    location: [40.7484405, -73.9878531]
                }
            ],
        },

        {
            city: 'Washington',
            language: 'en',
            places: [{
                    label: 'White House',
                    description: 'The White House is the official residence and workplace of the President of the United States. It is located at 1600 Pennsylvania Avenue NW in Washington, D.C. and has been the residence of every U.S. President since John Adams in 1800. The term is often used as a metonym for the president and his advisers.',
                    imgurl: '/img/trips/cities/white_house.jpg',
                    location: [38.8976763, -77.0387185]
                },

                {
                    label: 'Lincoln Memorial',
                    description: 'The Lincoln Memorial is an American national monument built to honor the 16th President of the United States, Abraham Lincoln. It is located on the western end of the National Mall in Washington, D.C., across from the Washington Monument. The architect was Henry Bacon; the designer of the primary statue – Abraham Lincoln, 1920 – was Daniel Chester French; the Lincoln statue was carved by the Piccirilli Brothers.',
                    imgurl: '/img/trips/cities/lincoln_memorial.jpg',
                    location: [38.8892686, -77.0523647]
                },

                {
                    label: 'United States Capitol',
                    description: `The United States Capitol, often called the Capitol Building, is the home of the United States Congress, and the seat of the legislative branch of the U.S. federal government. It is located on Capitol Hill at the eastern end of the National Mall in Washington, D.C. Though not at the geographic center of the Federal District, the Capitol forms the origin point for the District's street-numbering system and the District's four quadrants.`,
                    imgurl: '/img/trips/cities/us-capitol.jpg',
                    location: [38.8899389, -77.0112392]
                }
            ],
        },

        {
            city: 'Вашингтон',
            language: 'ua',
            places: [{
                    label: 'Білий дім',
                    description: 'Білий дім — резиденція президента США у Вашингтоні. Являє собою маєток в неокласичному стилі. Будівництво почалося у 1792, закінчилося 1 листопада 1800. Цього ж дня першим його господарем став другий президент США Джон Адамс.',
                    imgurl: '/img/trips/cities/white_house.jpg',
                    location: [38.8976763, -77.0387185]
                },

                {
                    label: 'Меморіал Лінкольна',
                    description: 'Меморіал Лінкольна розташований на Еспланаді в центрі Вашингтона. Він був побудований на честь шістнадцятого президента США Авраама Лінкольна. Проект розроблений архітектором Генрі Беконом. Його президентство припало на роки Громадянської війни (1861—1865). Меморіал, що зводився у 1914—1922 роках, символізує віру Лінкольна в те, що всі люди повинні бути вільні.',
                    imgurl: '/img/trips/cities/lincoln_memorial.jpg',
                    location: [38.8892686, -77.0523647]
                },

                {
                    label: 'Капітолій',
                    description: `Капітолій — місцеперебування Конгресу США на Капітолійському пагорбі в Вашингтоні, центр округу Колумбія. З'єднується з Монументом Вашингтона та Монументом Лінкольна 1800-метровою Національною алеєю. На схід від парламентського центру розкинулися Бібліотека Конгресу і резиденція Верховного суду США.`,
                    imgurl: '/img/trips/cities/us-capitol.jpg',
                    location: [38.8899389, -77.0112392]
                }
            ],
        },

        {
            city: 'Los Angeles',
            language: 'en',
            places: [{
                    label: 'Hollywood Sign',
                    description: 'The Hollywood Sign is an American cultural icon and landmark located in Los Angeles, California. It is situated on Mount Lee, in the Hollywood Hills area of the Santa Monica Mountains. The sign overlooks Hollywood, Los Angeles.',
                    imgurl: '/img/trips/cities/hollywood_sign.jpg',
                    location: [34.1340213, -118.3238652]
                },

                {
                    label: 'Disneyland',
                    description: 'Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built under the direct supervision of Walt Disney. It was originally the only attraction on the property; its official name was changed to Disneyland Park to distinguish it from the expanding complex in the 1990s.',
                    imgurl: '/img/trips/cities/disneyland.jpg',
                    location: [33.8120918, -117.9211629]
                },

                {
                    label: 'Hollywood Walk of Fame',
                    description: `The Hollywood Walk of Fame comprises more than 2,600 five-pointed terrazzo and brass stars embedded in the sidewalks along 15 blocks of Hollywood Boulevard and three blocks of Vine Street in Hollywood, California. The stars are permanent public monuments to achievement in the entertainment industry, bearing the names of a mix of actors, musicians, directors, producers, musical and theatrical groups, fictional characters, and others. The Walk of Fame is administered by the Hollywood Chamber of Commerce and maintained by the self-financing Hollywood Historic Trust.`,
                    imgurl: '/img/trips/cities/hollywood_walk_of_fame.jpg',
                    location: [34.1016991, -118.3358723]
                }
            ],
        },

        {
            city: 'Лос Анджелес',
            language: 'ua',
            places: [{
                    label: 'Знак Голлівуду',
                    description: `Знак Голлівуду — відомий пам'ятний знак на Голлівудських пагорбах у Лос-Анджелесі, Каліфорнія. Знак є словом «HOLLYWOOD» (назва місцевості), написаним великими білими буквами. Знак був створений як реклама у 1923 р., але він став настільки популярним, що став фірмовим знаком кіноіндустрії США. Розташований на висоті 491 м над рівнем моря, на південному схилі гори Маунт-Лі, Голівудських пагорбів, що є частиною хребта Санта Моніка.`,
                    imgurl: '/img/trips/cities/hollywood_sign.jpg',
                    location: [34.1340213, -118.3238652]
                },

                {
                    label: 'Діснейленд',
                    description: 'Діснейленд — популярний і високоприбутковий стилістичний парк розваг компанії «Волт Дісней» у місті Анахаймі (США, Каліфорнія). Відкрито в 1955 році, ставши втіленням ідеї Волта Діснея про парк, в якому був би відтворений світ мультфільмів і казок, де цікаво всім - і дорослим, і дітям. У середньому на рік «Діснейленд» відвідують 13,3 млн осіб. Площа парку, доступна для відвідувачів - 34,4 га.',
                    imgurl: '/img/trips/cities/disneyland.jpg',
                    location: [33.8120918, -117.9211629]
                },

                {
                    label: 'Голлівудська Алея Слави',
                    description: `Голлівудська Алея Слави — тротуар вздовж Голівудського бульвару і Вайн-стріт у Голлівуді (Лос-Анджелес, Каліфорнія, США), в якому вкладено більше 2 600 п'ятикутних зірок з іменами знаменитих людей та вигаданих персонажів за їхній внесок в індустрію розваг. Алея слави проходить із сходу на захід по Голлівудському бульвару від Гауер-авеню до Ла-Брея-авеню і з півдня на північ від Вайн-стріт до бульвару Сансет. Алея в довжину майже три з половиною милі (5,6 км).`,
                    imgurl: '/img/trips/cities/hollywood_walk_of_fame.jpg',
                    location: [34.1016991, -118.3358723]
                }
            ],
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