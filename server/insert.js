const Country = require('./db/country');

function ins() {
    var gd = [{
            name: 'Austria',
            description: 'Despite its small size, Austria has a long-established international reputation, which is why most visitors arrive with heads full of Habsburg, Mozart and Alpine visions. Some expectations are delightfully met – the mountain scenery is breathtakingly real, there are the omnipresent fingerprints of the old empire in Vienna, and home-grown musical icons Mozart, Schubert and Strauss are championed everywhere – but Austria also has a few surprises up its sleeve in the form of contemporary art, cutting-edge architecture and innovative cuisine.Austria is frequently cited as one of the best places to live in Europe, and it is not difficult to see why. Remarkably safe and clean, it offers plenty of affordable culture, natural beauty and elegant Baroque and neoclassical architecture, as well as an efficient public transport system.',
            imgurl: '/img/trips/au.jpg',
            cities: [{
                    name: 'Vienna',
                    description: 'Vienna is the capital of Austria, located in the eastern part of the country on the Danube River. In the cultural and intellectual heritage of the city, such well-known residents as V.A. Mozart, L. Beethoven and Z. Freud. Vienna is also famous for its imperial palaces, among which Schönbrunn is the summer residence of the Habsburg dynasty. And in the Museum Quarter area in historical and modern buildings works of such artists as E. Schiele and G. Klimt are collected.',
                    imgurl: '/img/trips/cities/schonbrunn_palace.jpg'
                },
                {
                    name: 'Salzburg',
                    description: 'Salzburg is a city in Austria near the border with Germany, surrounded by the Eastern Alps. The Salzach River divides Salzburg into two districts - the left-bank pedestrian Old Town, famous for buildings erected in the Middle Ages and the Baroque era, and the right-bank New Town built in the 19th century. In the Old Town there is a house in which the famous composer Wolfgang Amadeus Mozart was born. Now there is a museum and tourists can see the instruments on which Mozart played in childhood.',
                    imgurl: '/img/trips/cities/nonnberg_abbey.jpg'
                }
            ],
            language: 'en'
        },

        {
            name: 'Aвстрія',
            description: `Aвстрія - це центральноєвропейська країна з імперською історією, архітектурою в стилі бароко, гірськими селами і альпійським ландшафтом. Державна мова тут німецький. Столиця Австрії - Відень - розташована на річці Дунай. Відень примітна своїми палацами Шенбрунн і Хофбург, а також тим, що в ній жили такі відомі люди, як Вольфганг Амадей Моцарт, Йоганн Штраус і Зигмунд Фрейд. Популярними пам'ятками Австрії є Богемський ліс на півночі країни, озеро Траунзе і розташовані на сході виноградники.`,
            imgurl: '/img/trips/au.jpg',
            cities: [{
                    name: 'Відень',
                    description: 'Відень - столиця Австрії, розташована в східній частині країни на річці Дунай. У культурний та інтелектуальний спадок міста внесли вклад такі відомі жителі, як В.А. Моцарт, Л. Бетховен і З. Фрейд. Також Відень знаменита своїми імператорськими палацами, серед яких Шенбрунн - літня резиденція династії Габсбургів. А в районі Музейний квартал в історичних і сучасних будівлях зібрані роботи таких художників, як Е. Шіле і Г. Клімт.',
                    imgurl: '/img/trips/cities/schonbrunn_palace.jpg'
                },
                {
                    name: 'Зальцбург',
                    description: 'Зальцбург - місто в Австрії поблизу кордону з Німеччиною, оточений Східними Альпами. Річка Зальцах ділить Зальцбург на два райони - лівобережний пішохідний Старе місто, яке славиться будівлями, зведеними в Середні віки і в епоху бароко, і правобережний Нове місто, побудований в XIX столітті. У Старому місті знаходиться будинок, в якому народився знаменитий композитор Вольфганг Амадей Моцарт. Зараз там відкрито музей і туристи можуть побачити інструменти, на яких Моцарт грав в дитинстві.',
                    imgurl: '/img/trips/cities/nonnberg_abbey.jpg'
                }
            ],
            language: 'ua'
        },

        {
            name: 'Andorra',
            description: 'Tucked away in the eastern Pyrenees, the tiny Principality of Andorra is a land of narrow valleys and mountainous landscapes that’s popular for skiing and trekking. Its pretty villages and hamlets – dotted along the main road that traverses the country – are filled with Romanesque churches and houses, built in a unique, local style and preserved through the country’s seclusion. Tracing its roots back to Ancient Greek times and Polybius’ mention of Iberian Andosinos, Andorra is not short of history. Tradition has it that Charlemagne rewarded the Andorrans for fending off the Moors by granting them a charter. It’s this peculiar independence, somehow enduring over the ages against successive threats, that has allowed Andorra’s beautiful architecture to remain so unspoiled.',
            imgurl: '/img/trips/ad.jpg',
            cities: [{
                name: 'Andorra la Vella',
                description: 'Andorra la Vella is the capital of the Principality of Andorra. It is located high in the east Pyrenees, between France and Spain. It is also the name of the parish that surrounds the capital.',
                imgurl: '/img/trips/cities/st_armenols_church.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Андорра',
            description: 'Андорра - це маленьке незалежне князівство, розташоване на Піренеях між Францією та Іспанією. Воно є відомою зоною безмитної торгівлі, а також приваблює туристів своїми гірськолижними курортами. У столиці держави, місті Андорра-ла-Велья, багато бутиків, ювелірних магазинів і торгових центрів. Більшість з них зосереджена на проспекті Мерічель. Також в столиці є старий квартал, в якому знаходиться романська церква Санта-Колома з круглою дзвонярській вежею.',
            imgurl: '/img/trips/ad.jpg',
            cities: [{
                name: 'Андорра-ла-Велья',
                description: 'Андорра-ла-Велья — столиця Андорри і одна із семи парафій — релігійних та адміністративних громад, на які розділена країна.',
                imgurl: '/img/trips/cities/st_armenols_church.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Bulgaria',
            description: `Bulgaria's spectacular mountains, golden beaches and vibrant cities have begun attracting hordes of eager - eyed tourists over the past few years, and with them much has been transformed in this crossroads between the Mediterranean and Eastern Europe.The country 's mammoth changes have seen its cities and resorts undergoing construction booms galore, tempting buyers from Western Europe with relatively cheap property and stunning landscapes.Bulgaria's beautiful beach and ski resorts are expanding quickly as a result and have lured visitors away from more expensive European destinations with low - priced lift passes and accommodation options.The main cities have shrugged off their weary Communist - era image and have become vibrant and attractive, with well - kept boulevards, varied shopping and lively nightlife.In contrast, many towns and villages have preserved the authentic Bulgarian spirit and hospitality and the country is especially proud of its rich folklore traditions.`,
            imgurl: '/img/trips/blg.jpg',
            cities: [{
                name: 'Sofia',
                description: 'Sofia is the capital of Bulgaria, located in the west of the country at the foot of the Vitosha mountain massif. The history of the city is more than two thousand years, during which it was captured by the Greeks, Romans and Ottomans. Frescoes of the 13th century were preserved in the medieval Boyana Church. The rotunda of St. George, built by the Romans in the IV century, preserved the Turkish decor of the 10th century.',
                imgurl: '/img/trips/cities/national_art_gallery_sofia_bulgaria.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Болгарія',
            description: `Болгарія - балканська держава з різноманітним рельєфом. На його території знаходиться узбережжя Чорного моря, рівнини, гори і річки, одна з яких - Дунай. У Болгарії відчувається вплив грецької, слов'янської, османської та перської культур.Країна багата на спадщину ЮНЕСКО.Тут збереглася традиційна музика і безліч танців, костюмів і ремесел.У V столітті до нашої ери біля підніжжя куполоподібного гірського масиву Вітоша була заснована столиця держави - Софія.`,
            imgurl: '/img/trips/blg.jpg',
            cities: [{
                name: 'Софія',
                description: 'Софія - столиця Болгарії, розташована на заході країни біля підніжжя гірського масиву Вітоша. Історія міста налічує більше двох тисяч років, під час яких його захоплювали греки, римляни і османи. У середньовічній Боянської церкви збереглися фрески XIII століття. У ротонді Святого Георгія, побудованої римлянами в IV столітті, зберігся турецький декор X століття.',
                imgurl: '/img/trips/cities/national_art_gallery_sofia_bulgaria.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Czech Republic',
            description: 'Nestled in the center of Europe, the Czech Republic is a country steeped in history. It’s been populated for thousands of years and is a land dotted with castles, medieval towns, beautiful mountains, ancient ruins, and world-class wineries. The country sees more and more tourists each year but they mostly stick to Prague. Once you escape that beautiful (but crowded) city you’ll find an inexpensive country with some of the most beautiful and rugged landscape in this part of Europe. I love taking the train from place to place and just staring out the window. If you visit, you’ll probably be coming for Prague but be sure to leave the city and see the rest of what the country has to offer! It’s too often overlooked!',
            imgurl: '/img/trips/cr.jpg',
            cities: [{
                name: 'Saxon Switzerland',
                description: 'Reserve: walking and cycling paths, mountaineering routes and trams on solar panels.',
                imgurl: '/img/trips/cities/karlov-bridge.jpg'
            }, {
                name: 'Prague',
                description: 'Prague is the capital of the Czech Republic, stretching along both banks of the Vltava River and known as the City of a hundred steeples. The heart of the historic center of the city is the Old Town Square, surrounded by colorful baroque buildings, Gothic churches and the medieval town hall with astronomical clock. Prague Chimes, in which figures move every hour.',
                imgurl: '/img/trips/cities/karlov-bridge.jpg'
            }, {
                name: 'Cesky Krumlov',
                description: 'Cesky Krumlov is a Czech city located in southern Bohemia on the banks of the Vltava River. Above it stands the castle of the XIII century, combining elements of Gothic, Renaissance and Baroque. On its territory there is a garden with an area of 11 hectares and a Baroque theater of the XVII century. From the bell tower of the castle you can enjoy panoramic views of the Old Town and the river.',
                imgurl: '/img/trips/cities/cesky_krumlov.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Чеська Республіка',
            description: `Чеська Республіка, більш відома як Чехія, - країна в Центральній Європі, яка славиться своїми вишукано прикрашеними замками, багатою історією і пивом. За головні визначні пам'ятки Праги, столиці країни, є Празький Град IX століття - добре збереглася середньовічна частина міста - і Карлів міст з його статуями.Ческі - Крумлов, невелике місто в Південній Богемії, примітний своєю архітектурою, в якій поєднується готика, ренесанс і бароко.У його старовинних будівлях відкрито безліч магазинів і ресторанів.`,
            imgurl: '/img/trips/cr.jpg',
            cities: [{
                name: 'Саксонська Швейцарія',
                description: 'Заповідник: пішохідні та велосипедні доріжки, маршрути для альпінізму і трамваї на сонячних батареях.',
                imgurl: '//img/trips/cities/lilienstein.jpg'
            }, {
                name: 'Прага',
                description: 'Прага - столиця Чехії, що розкинулася вздовж обох берегів річки Влтави і відома як Місто ста шпилів. Серцем історичного центру міста є Староміська площа, оточена барвистими будинками в стилі бароко, готичними церквами і середньовічної ратушею з астрономічним годинником Празькі куранти, в яких кожну годину рухаються фігурки.',
                imgurl: '/img/trips/cities/karlov-bridge.jpg'
            }, {
                name: 'Ческі-Крумлов',
                description: 'Ческі-Крумлов - чеське місто, розташований в південній Богемії на березі річки Влтава. Над ним височіє замок XIII століття, що поєднує в собі елементи готики, Відродження та бароко. На його території знаходяться сад площею 11 гектарів і бароковий театр XVII століття. З дзвіниці замку відкриваються панорамні види на Старе місто і річку.',
                imgurl: '/img/trips/cities/cesky_krumlov.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Italy',
            description: 'Italy’s great food, beautiful countryside, fabulous wine, and long history make it an excellent country to visit. I fall in love with it every time I go. The vineyards in Tuscany, the history of Florence, the ancient streets in Rome, the laid back nature of Southern Italy, the gorgeous Cinque Terre, and the romantic canals in Venice all make the country irresistible. Italy leaves no one underwhelmed and, with so much to do and see, it would take a lifetime to complete. Italy is best seen slowly – just like the attitude of the country – so don’t rush it in one visit and try to do too much. Relax, take in the scenery, and enjoy a latte.',
            imgurl: '/img/trips/it.jpg',
            cities: [{
                name: 'Milan',
                description: 'Milan is a large city in the north of Italy, located in Lombardy, the world capital of design and fashion. Here is the stock exchange of Italy, so the city is also considered the financial center of the country. Milan is famous for its luxurious restaurants and boutiques, as well as the gothic cathedral of the Duomo and the church of Santa Maria delle Grazie, where you can see the famous fresco "The Last Supper" by Leonardo da Vinci.',
                imgurl: '/img/trips/cities/milan_cathedral.jpg'
            }, {
                name: 'Rome',
                description: `Rome is the capital of Italy, a huge multinational city, whose history is almost three thousand years old. His architecture and works of art had a huge impact on world culture. The ruins of the ancient Forum and the Coliseum demonstrate the former greatness of the Roman Empire. The Vatican, the residence of the leadership of the Roman Catholic Church, enjoys great popularity among tourists thanks to St. Peter's Cathedral and numerous museums`,
                imgurl: '/img/trips/cities/papal_basilica.jpg'
            }, {
                name: 'Venice',
                description: `Venice - the capital of the eponymous region in the north of Italy. The city is located on more than 100 small islands in the lagoon of the Adriatic Sea. There are no roads at all, only the canals are moving. The busiest is the Grand Canal. Along it are many palaces in Gothic style and Renaissance style. St. Mark's Square is the main square in the city.Here is the Cathedral of St.Mark, decorated with mosaics in the Byzantine style, as well as the bell tower(kriminala), which overlooks the red roofs of the city houses.`,
                imgurl: '/img/trips/cities/piazza_san_marco.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Італія',
            description: 'Італія - середземноморська держава в Південній Європі з довгою береговою лінією, що справив величезний вплив на західну культуру і кухню. На території столиці країни, Рима, знаходиться держава Ватикан, а також всесвітньо відомі музеї і стародавні руїни. Інші великі міста Італії - Флоренція, де можна побачити шедеври епохи Відродження, наприклад статую Давида роботи Мікеланджело і собор Дуомо, створений за проектом архітектора Брунеллески, а також місто каналів Венеція і столиця моди Мілан',
            imgurl: '/img/trips/it.jpg',
            cities: [{
                name: 'Мілан',
                description: 'Мілан - велике місто на півночі Італії, розташований в Ломбардії, світова столиця дизайну і моди. Тут знаходиться фондова біржа Італії, тому місто також вважається фінансовим центром країни. Мілан славиться розкішними ресторанами і бутиками, а також готичним кафедральним собором Дуомо і церквою Санта-Марія-делле-Граціє, в якій можна побачити знамениту фреску "Таємна вечеря" роботи Леонардо да Вінчі.',
                imgurl: '/img/trips/cities/milan_cathedral.jpg'
            }, {
                name: 'Рим',
                description: 'Рим - столиця Італії, величезний багатонаціональне місто, історія якого налічує майже три тисячі років. Його архітектура і твори мистецтва справили величезний вплив на світову культуру. Руїни античного Форуму та Колізею демонструють колишню велич Римської імперії. Ватикан, резиденція керівництва Римо-католицької церкви, користується величезною популярністю у туристів завдяки собору Святого Петра і численних музеях',
                imgurl: '/img/trips/cities/papal_basilica.jpg'
            }, {
                name: 'Венеція',
                description: 'Венеція - столиця однойменного регіону на півночі Італії. Місто розташоване на більш ніж 100 невеликих островах у лагуні Адріатичного моря. Зовсім немає дорог, тільки рухаються канали. Найбільш жвавим є Великий канал. Поряд з ним багато палаців у стилі готики та стилю ренесансу. Площа Марії - головна площа міста. Ось собор Святого Марка, декорований мозаїкою в візантійському стилі, а також дзвіниця (кримінала), яка виходить на червоні дахи міських будинків.',
                imgurl: '/img/trips/cities/piazza_san_marco.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'France',
            description: 'You could spend a lifetime’s worth of holidays in France and still not feel you’d done the country justice. It remains the planet’s most visited tourist destination, meriting its standing with an almost overwhelming mass of historical treasures, storybook landscapes and cultural idiosyncrasies.The teeming glam of Paris makes for one hell of a centrepiece, matching any city on the planet for ambiance, individuality and set-piece sights. But the real beauty of France, in many ways, lies elsewhere. The country’s natural gifts are striking, with white sands, hulking mountains and swathes of rolling countryside. It’s a land that has inspired dreamers and drinkers, revolutionaries and artists. Little wonder that Francophiles (and it’s telling that even the country’s devotees have a given word to describe them) are found the world over.',
            imgurl: '/img/trips/fr.jpg',
            cities: [{
                name: 'Paris',
                description: 'The capital of France Paris is one of the main European cities and the world center of culture, art, fashion and gastronomy. In the central part of the city, built in the XIX century, there are wide boulevards and the river Seine flows. The most famous sights of Paris - the Eiffel Tower and the Notre Dame Cathedral in the Gothic style, erected in the XII century.',
                imgurl: '/img/trips/cities/louvre_palace.jpg'
            }, {
                name: 'Nice',
                description: `Nice - the capital of the department of the Alpes-Maritimes on the Cote d'Azur of France, lying on the pebbled shores of the Gulf of the Angels.Founded by the ancient Greeks, in the XIX century the city became popular among the European aristocracy sea resort.Many artists have connected their destiny with Nice.In the Museum of Matisse is one of the largest collections of paintings by the master, who lived in Nice for about 40 years.`,
                imgurl: '/img/trips/cities/museum_in_a_villa.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Франція',
            description: `Франція - це країна в Західній Європі, на території якої знаходяться середньовічні міста, альпійські села і пляжі Середземного моря. Париж, столиця держави, славиться своїми будинками моди, найстаршими художніми музеями, в числі яких Лувр, і пам'ятками, такими як Ейфелева вежа.Франція відома своїми винами і вишуканою кухнею.Наскальний живопис в печері Ласко, амфітеатр Трьох Галій в Ліоні і величезний Версальський палац свідчать про багату історію цих місць.`,
            imgurl: '/img/trips/fr.jpg',
            cities: [{
                name: 'Париж',
                description: `Столиця Франції Париж - один з головних європейських міст і світовий центр культури, мистецтва, моди і гастрономії. У центральній частині міста, побудованої в XIX столітті, проходять широкі бульвари і протікає річка Сена. Найвідоміші пам'ятки Парижа - Ейфелева вежа і собор Паризької Богоматері в готичному стилі, зведений в XII столітті.`,
                imgurl: '/img/trips/cities/louvre_palace.jpg'
            }, {
                name: 'Ніцца',
                description: `Ніцца - столиця департаменту Приморські Альпи на Лазурному березі Франції, що лежить на галькових берегах затоки Ангелів. Заснований ще древніми греками, в XIX столітті місто стало популярним серед європейської аристократії морським курортом. З Ніццою зв'язали свою долю багато художників.У Музеї Матісса знаходиться одне з найбільших зібрань картин майстра, який прожив в Ніцці близько 40 років.`,
                imgurl: '/img/trips/cities/museum_in_a_villa.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Greece',
            description: 'A flavourful melting pot of sparkling nightspots, fresh seafood, sizzling Mediterranean passion and mythical legend, Greece is a fascinating and enchanting destination.The country has long held appeal for travellers, who decamp to its shores to lounge on beaches, explore ancient relics and take advantage of the legendary Grecian hospitality.Yet despite its popularity, there is still an undiscovered feel to parts of Greece with Mount Olympus, the Peloponnese coast and some of the more remote islands slipping, for now at least, under the radar of mass tourism.The first port of call for most visitors is Athens, the country’s stunning capital, which combines a modern centre with the stark ancient beauty of the Parthenon and a position overlooking a cerulean stretch of the Saronic Gulf.',
            imgurl: '/img/trips/gre.jpg',
            cities: [{
                name: 'Athens',
                description: 'Athens - the capital of modern Greece and the center of ancient Greek civilization, which was famous for its power in the era of antiquity. Above the city rises the Acropolis - built in the 5th century. BC fortress, which is crowned by the Temple Parthenon with its famous colonnade. The exposition of the Museum of the Acropolis and the National Archaeological Museum presents sculptures, vases, jewelry and other items of material culture of Ancient Greece.',
                imgurl: '/img/trips/cities/acropolis_museum.jpg'
            }, {
                name: 'Rhodes',
                description: 'Rhodes is the largest of the islands of the Dodecanese archipelago, which belongs to Greece. It is famous for its seaside resorts, ancient ruins and buildings, which were built during the Crusades by the Knights Hospitallers. In the Old Town of Rhodes, the main settlement of the island, is worth visiting the medieval street of the Knights and the castle-like palace of the Great Masters, which was captured by the Ottomans, and then by the Italians. Now it has a historical museum.',
                imgurl: '/img/trips/cities/palace__grand_master.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Греція',
            description: 'Греція - країна в Південній Європі, розташована на Балканському півострові і тисячах островів в Егейському та Іонічному морях. Вона є спадкоємицею могутньої Стародавній Греції, яка вважається колискою західної цивілізації. Столиця Греції Афіни славиться своєю фортецею Акрополь, яка була зведена в V столітті до н. е., і храмом Парфенон. У туристів користуються популярністю пляжі острова Санторіні з чорним піском, курорти острова Міконос і інші місця літнього відпочинку.',
            imgurl: '/img/trips/gr.jpg',
            cities: [{
                name: 'Афіни',
                description: 'Афіни - столиця сучасної Греції і центр давньогрецької цивілізації, яка славилася своєю могутністю в епоху античності. Над містом височить Акрополь - зведена в V ст. до нашої ери фортеця, яку вінчає храм Парфенон з його знаменитої колонадою. В експозиції Музею Акрополя і Національного археологічного музею представлені скульптури, вази, ювелірні вироби та інші предмети матеріальної культури Стародавньої Греції.',
                imgurl: '/img/trips/cities/acropolis_museum.jpg'
            }, {
                name: 'Родос',
                description: 'Родос - найбільший з островів належить Греції архіпелагу Додеканес. Він відомий своїми морськими курортами, стародавніми руїнами і будівлями, які звели в період хрестових походів лицарі-госпітальєри. У Старому місті Родосу, головного поселення острова, варто відвідати середньовічну вулицю Лицарів і нагадує фортецю палац Великих магістрів, який був захоплений османами, а потім італійцями. Тепер в ньому відкритий історичний музей.',
                imgurl: '/img/trips/cities/palace__grand_master.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Russia',
            description: `The world's largest country offers it all, from historic cities and idyllic countryside to artistic riches, epic train rides and vodka - fuelled nightlife.Whether you’ re a culture vulture in search of inspiration from great artists and writers or an adventure addict looking for new horizons to conquer, Russia amply delivers.Tread in the footsteps of literary greats, including Tolstoy and Pushkin, on their country estates.Ski or climb lofty mountains in the Caucasus, go trekking or white - water rafting in the Altai Republic, hike around Lake Baikal, or scale an active volcano in Kamchatka– the variety of possibilities will make your head spin.`,
            imgurl: '/img/trips/rus.jpg',
            cities: [{
                name: 'Moscow',
                description: 'Moscow is the capital of Russia, a multinational city on the Moscow River in the western part of the country. In its historical center is the medieval fortress Kremlin - the residence of the Russian president. On its territory you can visit the Armory Chamber, where precious objects belonging to the royal family are exhibited. The northeast wall of the Kremlin is the Red Square, the symbolic center of Russia. Here you can see the Lenin Mausoleum, the State Historical Museum and the Cathedral of St. Basil the Blessed with colorful onion domes.',
                imgurl: '/img/trips/cities/moscow_kremlin.jpg'
            }, {
                name: 'St. Petersburg',
                description: 'St. Petersburg is a Russian port city on the coast of the Baltic Sea, which for two centuries served as the capital of the Russian Empire. It was founded in 1703 by Peter I, who will erect the famous monument "The Bronze Horseman". The city is rightly considered the cultural center of the country. The Mariinsky Theater is popular with tourists, where opera and ballet performances are held, and the State Russian Museum with a collection of Russian art that includes both Orthodox icons and the works of abstract artist Vasily Kandinsky.',
                imgurl: '/img/trips/cities/peterhof_palace.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Росія',
            description: 'Росія - найбільша країна світу, розташована в Східній Європі і Північній Азії і омивається водами Тихого і Північного Льодовитого океанів. Ландшафт Росії вкрай різноманітний: на її території є і тундра, і ліси, і субтропічні пляжі. У Великому театрі в Москві і Маріїнському театрі в Санкт-Петербурзі виступають балетні трупи, які здобули всесвітню славу. Санкт-Петербург, заснований імператором Петром I, відомий своїм Зимовим палацом в стилі бароко, в якому розміщується частина великої художньої колекції музею "Ермітаж".',
            imgurl: '/img/trips/rus.jpg',
            cities: [{
                name: 'Москва',
                description: 'Москва - столиця Росії, багатонаціональне місто на Москві-річці в західній частині країни. У його історичному центрі знаходиться середньовічна фортеця Кремль - резиденція російського президента. На її території можна відвідати Збройна палата, де виставляються дорогоцінні предмети, що належали царській родині. За північно-східною стіною Кремля розкинулася Червона площа - символічний центр Росії. Тут можна побачити Мавзолей В. І. Леніна, Державний історичний музей і собор Василя Блаженного з барвистими куполами.',
                imgurl: '/img/trips/cities/moscow_kremlin.jpg'
            }, {
                name: 'Санкт-Петербург',
                description: `Санкт-Петербург - російська портове місто на узбережжі Балтійського моря, який протягом двох століть служив столицею Російської імперії. Він був заснований в 1703 році Петром I, якому споруджено знаменитий пам'ятник "Мідний вершник".Місто по праву вважається культурним центром країни.У туристів користуються популярністю Маріїнський театр, де проходять оперні та балетні вистави, і Державний Російський музей з колекцією російського мистецтва, яка включає як православні ікони, так і роботи художника - абстракціоніста Василя Кандинського.`,
                imgurl: '/img/trips/cities/peterhof_palace.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Spain',
            description: 'Land of the siesta, daily life in Spain moves slowly and runs late. Many travelers can get frustrated by the limited store hours and seemingly laid back pace of life. But it’s this Spanish perspective — move slowly, enjoy yourself, eat well, and relax — which gives the country so much character – and why I keep coming back, over and over again. Spain is a beautiful, interesting, and dynamic country with a lot of regional uniqueness and variety. Madrid and Barcelona are hip and energetic cities, Granada has a Moorish touch, Basque Country up north contrast itself to Southern living. The Spaniards love visitors, hosting strangers, drinking good wine, laughing at a good meal, and enjoying life. A fiery, passionate place, this country will stay withy you forever and, unlike other Western European countries, will be a lot kinder to your wallet.',
            imgurl: '/img/trips/sp.jpg',
            cities: [{
                name: 'Barcelona',
                description: 'Barcelona is the capital of the autonomous region of Catalonia. This multinational city is famous for its architecture and art. Some of the main attractions are the buildings of architect Antonio Gaudi, for example the temple of the Holy Family. Also in the city are museums of contemporary art: the Picasso Museum and the Joan Miró Foundation. In the Museum of History of Barcelona you can see not only the exhibits related to the Roman period, but also the archaeological sites in the underground part.',
                imgurl: '/img/trips/cities/casa_mila.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Іспанія',
            description: 'Іспанія - європейська країна, розташована на Піренейському півострові. Територія Іспанії розділена на 17 автономних регіонів. У столиці країни, Мадриді, знаходяться Королівський палац і музей Прадо, де зберігаються твори європейських майстрів. У Сеговії можна відвідати середньовічний замок (Алькасар) і побачити добре збережений римський акведук. Барселона - столиця автономного співтовариства Каталонія. Зовнішність цього міста визначають численні химерно-фантастичні твори архітектора Антоніо Гауді, серед яких храм Святого Сімейства.',
            imgurl: '/img/trips/sp.jpg',
            cities: [{
                name: 'Барселона',
                description: `Барселона - столиця автономної області Каталонія. Цей багатонаціональне місто знаменитий своєю архітектурою і мистецтвом. Одні з головних визначних пам'яток - будівлі архітектора Антоніо Гауді, наприклад храм Святого Сімейства.Також в місті знаходяться музеї сучасного мистецтва: Музей Пікассо і Фонд Жоана Міро.У Музеї історії Барселони можна подивитися не тільки експонати, пов 'язані з римського періоду, але і місця археологічних розкопок в підземній частині.`, 
                imgurl: '/img/trips/cities/casa_mila.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'Ukraine',
            description: 'Vast and mysterious to many, Ukraine is barely known to outsiders despite being one of the largest countries in Europe. Long-associated with its colossal neighbour Russia, it’s a country that stands out in its own right for its varied landscapes and surprising cultural diversity.To the majority of those visiting for the first time, the reputation of Ukraine’s hardy inhabitants can seem formidable. But while, much like in neighbouring Russia, cracking a smile at a stranger in the street is deemed a sure sign of madness, locals tend to be a thoroughly welcoming lot once you’ve broken the ice. Before long they’ll be showing you round the sights and inviting you to their home for a steaming borscht – the country’s iconic beetroot soup.Ukraine’s natural side is also seen as tough – and it’s true that in winter snow covers most of the land as temperatures plummet. During the rest of the year, though, it’s surprisingly clement. What’s more, with its largely unspoilt, verdant interior, Ukraine is ideal for hikers and cyclists.The Carpathian Mountains that spill over the border with Poland, Hungary and Romania dominate the west of the country while flat plains carpeted with sunflowers and cereals make up much of the central and eastern region. To the south are the almost Mediterranean-like Black Sea coast and the Crimean Peninsula, which remains a huge draw for holidaymakers every summer. And even when snow falls through the winter, the landscape is beautiful, while there are many old churches and Soviet-era buildings to dive into for shelter.',
            imgurl: '/img/trips/ukr.jpg',
            cities: [{
                name: 'Kiev',
                description: 'Kiev is the capital of Ukraine, located on the Dnieper River. The city is famous for monuments of religious architecture and historical museums. The Kiev-Pechersk Lavra of the 11th century is a monastery and pilgrimage center. On its territory there are several churches, crowned with golden domes. This architectural complex is famous for its underground passages leading to the tombs of Orthodox monks, and a collection of gold objects of Scythian times.',
                imgurl: '/img/trips/cities/maidan_nezalezhnosti.jpg'
            }, {
                name: 'Lviv',
                description: 'Lviv is a city in the west of Ukraine, about 70 kilometers from the border with Poland. The architecture of the city keeps traces of the Polish and Austro-Hungarian heritage and combines the styles of Eastern and Central Europe, namely Italy and Germany. In the park of the High Castle on the top of the mountain there are ruins of a fortress of the XIV century. From here you can enjoy a panoramic view of the green domes of churches and the surrounding hills.',
                imgurl: '/img/trips/cities/market_square.jpg'
            }, {
                name: 'Odessa',
                description: 'Odessa is a port city on the Black Sea in the southern part of Ukraine. It is famous for its beaches and architecture of the XIX century, for example, the building of the Odessa Opera and Ballet Theater. Potemkin Stairs, which gained worldwide fame thanks to the film "Battleship Potemkin", leads to the sea, where Vorontsovsky lighthouse is located. Along the coast stretches Primorsky Boulevard. Here you can walk and admire the coastal mansions and monuments.',
                imgurl: '/img/trips/cities/monument_richelieu.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Україна',
            description: 'Україна - це велика країна в Східній Європі, відома православними церквами, чорноморськими курортами і лісистими горами. У Києві, столиці країни, розташований Софійський собор, прикрашений золотими куполами, мозаїкою XI століття і фресками. Над річкою Дніпро височить монастир Києво-Печерська лавра, місце паломництва багатьох православних християн. В її скитах зберігаються релігійні реліквії, а в катакомбах - муміфіковані останки православних монахів.',
            imgurl: '/img/trips/ukr.jpg',
            cities: [{
                name: 'Київ',
                description: `Київ - столиця України, розташована на річці Дніпро. Місто відоме пам'ятками релігійної архітектури та історичними музеями.Києво - Печерська лавра XI століття - це монастир і центр паломництва.На його території височать кілька церков, увінчаних золотими куполами.Цей архітектурний комплекс знаменитий своїми підземними ходами, які ведуть у усипальниці православних монахів, і колекцією золотих предметів скіфських часів.`,
                imgurl: '/img/trips/cities/maidan_nezalezhnosti.jpg'
            }, {
                name: 'Львів',
                description: 'Львів - місто на заході України, приблизно в 70 кілометрах від кордону з Польщею. Архітектура міста зберігає сліди польського і австро-угорського спадщини і поєднує стилі Східної і Центральної Європи, а саме Італії та Німеччини. У парку Високого замку на вершині гори збереглися руїни фортеці XIV століття. Звідси відкривається панорамний вид на зелені куполи церков і навколишні місто пагорби.',
                imgurl: '/img/trips/cities/market_square.jpg'
            }, {
                name: 'Одеса',
                description: `Одеса - це портове місто на Чорному морі в південній частині України. Він відомий своїми пляжами і архітектурою XIX століття, наприклад будівлею Одеського театру опери і балету. Потьомкінські сходи, що отримала всесвітню популярність завдяки фільму "Броненосець Потьомкін", веде до моря, де розташований Воронцовський маяк. Уздовж узбережжя тягнеться Приморський бульвар. Тут можна прогулятися і помилуватися прибережними особняками і пам'ятниками.`,
                imgurl: '/img/trips/cities/monument_richelieu.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'United Kingdom',
            description: 'Few places cram in as much scenery, history and culture as the United Kingdom. It’s a busy, eccentric and unique destination; a land of daft humour, tea-and-cake clichés and a thousand and one different personalities; a land where thrusting cities like London, Glasgow and Manchester share map space with the peaks of Snowdonia and the colossal slopes of the Highlands.Four component nations make up the UK, and the end result is as many-layered as that fact would suggest. Its arts scene continues to be one of the most creative and successful in the world, its passions still run high on everything from politics to sport and its overall character is as modern as it is multicultural. Even the food’s good these days.',
            imgurl: '/img/trips/gbr.jpg',
            cities: [{
                name: 'London',
                description: 'London is the capital of England and the United Kingdom. The history of this modern city goes back to the time of the Romans. In the heart of London is the parliament building - Westminster Palace, as well as the famous Big Ben clock tower and Westminster Abbey. This church is the place of coronation of the British monarchs. On the opposite bank of the Thames is the London Eye, which offers a panoramic view not only to the south coast, but also to the whole city.',
                imgurl: '/img/trips/cities/big_ben.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Великобританія',
            description: 'Великобританія - острівна держава на північному заході Європи, що складається з Англії, Шотландії, Уельсу та Північної Ірландії. В Англії, на батьківщині Шекспіра і групи The Beatles, знаходиться столиця держави Лондон - світовий діловий і культурний центр. Також країна відома неолітичним спорудою Стоунхендж, римськими лазнями в місті Бат і старовинними університетами в Оксфорді та Кембриджі.',
            imgurl: '/img/trips/gbr.jpg',
            cities: [{
                name: 'Лондон',
                description: 'Лондон - столиця Англії та Сполученого Королівства. Історія цього сучасного міста сягає часів римлян. У самому центрі Лондона знаходиться будівля парламенту - Вестмінстерський палац, а також знаменита годинникова башта Біг-Бен і Вестмінстерське абатство. Ця церква є місцем коронації британських монархів. На протилежному березі Темзи розташовано колесо огляду "Лондонське око", з якого відкривається панорамний вигляд не тільки на південний берег, а й на все місто.',
                imgurl: '/img/trips/cities/big_ben.jpg'
            }],
            language: 'ua'
        },

        {
            name: 'United States',
            description: 'The United States isn’t a popular destination for backpackers and budget travelers. Most people just come here for a short vacation and to visit one or two cities. After all, it’s a large country without a real tourist infrastructure or good cross-country transportation. Hostels really aren’t big in the United States, trains don’t go a lot of places, and we don’t offer working holiday visas. Moreover, most round-the-world tickets only stop in LA or NYC. That being said, the United States is a country that demands more time. There are lots of national parks, a diverse geography, culture, music, and great regional food. Rent a car and drive around. Take some cross-country tours. While the coastal cities are mind-blowing, the U.S. really reveals itself in the middle. I’ve done two massive road trips across the United States and I can tell you that this country amazing, diverse, friendly, and inexpensive. Don’t limit yourself on your visit here!',
            imgurl: '/img/trips/usa.jpg',
            cities: [{
                name: 'New York',
                description: `New York includes five boroughs (districts) located at the confluence of the Hudson River in the Atlantic Ocean. In the center of the city is the densely populated Manhattan - one of the world's largest commercial, financial and cultural centers.The main attractions of New York are numerous skyscrapers, including the Empire State Building, and a huge Central Park.On the neon lights of Times Square, the Broadway Theater is located.`,
                imgurl: '/img/trips/cities/statue_of_liberty.jpg'
            }, {
                name: 'Washington',
                description: 'The US capital Washington is a small city in the District of Columbia, between the states of Maryland and Virginia. It is distinguished by a number of neoclassical monuments and buildings, including the famous three buildings, where three branches of US power are located: the Capitol, the White House and the Supreme Court building. The city also houses famous museums and concert halls, including the Kennedy Center.',
                imgurl: '/img/trips/cities/white_house.jpg'
            }, {
                name: 'Los Angeles',
                description: 'Los Angeles is a huge city in the south of California, the capital of the American film industry and television. The area of ​​Hollywood, whose name is laid out on the hill in huge letters, has gained worldwide fame thanks to the film studios Paramount Pictures, Universal and Warner Brothers. Tourists can go on a tour of the film sets of popular films. On the Hollywood Boulevard is the Chinese Theater TCL, in front of which the movie stars leave fingerprints of the palms and feet. And on the Walk of Fame, you can buy a map where celebrity houses are celebrated.',
                imgurl: '/img/trips/cities/hollywood_sign.jpg'
            }],
            language: 'en'
        },

        {
            name: 'Сполучені Штати Америки',
            description: 'Сполучені Штати Америки - держава, що складається з 50 штатів, займає значну частину Північної Америки. Штат Аляска розташований на північному заході континенту, а Гаваї - в Тихому океані. До великих містах атлантичного узбережжя відносяться Нью-Йорк і столиця Вашингтон. На захід від них знаходиться ще одне важливе місто - Чикаго, відоме своєю вражаючою архітектурою. А на західному узбережжі розташований Лос-Анджелес зі знаменитими голлівудськими кіностудіями.',
            imgurl: '/img/trips/usa.jpg',
            cities: [{
                name: 'Нью-Йорк',
                description: `Нью-Йорк включає п'ять боро(районів), розташованих в місці впадання річки Гудзон в Атлантичний океан.У центрі міста розташований густонаселений Манхеттен - один з найбільших в світі комерційних, фінансових та культурних центрів.Головні пам 'ятки Нью-Йорка - численні хмарочоси, в тому числі Емпайр-стейт-білдінг, і величезний Центральний парк. На залитій неоновими вогнями площі Таймс-сквер розташований театр "Бродвей".`,
                imgurl: '/img/trips/cities/statue_of_liberty.jpg'
            }, {
                name: 'Вашингтон',
                description: `Столиця США Вашингтон - це невелике місто в окрузі Колумбія, між штатами Меріленд і Віргінія. Його відрізняє безліч неокласичних пам'ятників і будівель, включаючи знамениті три будівлі, де розташовані три гілки влади США: Капітолій, Білий дім і будівля Верховного суду.У місті також знаходяться знамениті музеї та концертні зали, в тому числі Кеннеді - центр.`,
                imgurl: '/img/trips/cities/white_house.jpg'
            }, {
                name: 'Лос-Анджелес',
                description: 'Лос-Анджелес - величезне місто на півдні Каліфорнії, столиця американської кіноіндустрії і телебачення. Район Голлівуд, назва якого викладено на пагорбі величезними буквами, придбав всесвітню популярність завдяки кіностудіям "Парамаунт Пікчерз", "Юніверсал" і "Уорнер Бразерс". Туристи можуть відправитися на екскурсію по знімальним майданчикам популярних фільмів. На Голлівудському бульварі розташований Китайський театр TCL, перед яким кінозірки залишають відбитки долонь і ступень. А на Алеї слави можна купити карту, де відзначені будинки знаменитостей.',
                imgurl: '/img/trips/cities/hollywood_sign.jpg'
            }],
            language: 'ua'
        }
    ];

    gd.map(p => {
        Country.create(p, function (err, item) {
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