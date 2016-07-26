var docpadConfig,
    indexOf = [].indexOf || function (item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };

var imgBaseUrl = '/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
    outPath: '../2016.mobilization.pl-gh-pages/',
    templateData: {
        site: {
            url: "http://mobilization.pl",
            oldUrls: ['www.mobilization.pl'],
            title: "Mobilization 2016",
            description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android and iOS mobile platforms.",
            keywords: "mobilization, conference, mobile conference, Łódź",
            styles: [],
            scripts: [],
            visibility: {
                "features": false,
                "agenda": false,
                "speakers": true,
                "volunteers": false
            },
            event: {
                title: 'Mobilization 2016',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: 'Expo-Łódź Sp. z o.o.',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '22nd Oct 2016',
                time: '08:00-17:30'
            },
            sponsors: {
                diamond: [],
                platinum: [
                    {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                    {
                        "name": "TomTom",
                        "logo_url": "/images/sponsors/tomtom-on-white.png",
                        "link": "http://www.tomtom.com/pl_pl/"
                    },
                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png",
                        "description_html": "<p>Mobica provides high-end software development and integration services for consumer electronics manufacturers, operators, application vendors and platform providers. We work on all mainstream mobile platforms and operating systems and can work on virtually any component of a device: from embedded systems and device drivers, core multimedia components and middleware, through to innovative applications/UI design and connectivity solutions.</p><p>We have grown a world-class team of architects, project managers and software engineers based in our UK and Poland development centres, enabling us to provide consultancy services across the software and product lifecycle from initial concept definition and design, through to implementation and testing.</p><p>Mobica adds value to our customers through a combination of flexible consultancy services, the highest levels of technical expertise, and the creation of innovative, technically optimised software component design.</p><p>Mobica are listed in The Sunday Times Tech Track 100 as the 4th fastest growing private technology company in the UK in 2009. See: <a href='http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf'>http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf</a></p><p>Mobica is hiring and looking for talented engineers! Check our current job offers at <a href='http://www.mobica.com/careers'>http://www.mobica.com/careers</a></p><p>&nbsp;</p>"
                    },
                    // {"name":"Harman","logo_url":"/images/sponsors/harman.jpg","link":"http://www.symphonyteleca.com/careers/jobs-in-poland/"},
                    // {"name":"HP","logo_url":"/images/sponsors/hp.png","link":"http://www.linkedin.com/company/hp-enterprise-services"},
                ],
                gold: [
                    {
                        "name": "Ceri International",
                        "logo_url": "/images/sponsors/ceri.png",
                        "link": "http://www.ceri.pl/"
                    },
                    {"name":"Appyourself","logo_url":"/images/sponsors/appyourself.png","link":"http://www.appyourself.net/"},
                    // {"name":"eConsulting","logo_url":"/images/sponsors/econsulting.gif","link":"http://econsulting.pl/"},
                    // {"name":"GFT","logo_url":"/images/sponsors/gft.jpg","link":"http://gft.com/"},
                    // {"name":"Pracuj.pl","logo_url":"/images/sponsors/pracuj-pl.jpg","link":"http://www.pracuj.pl/"},
                    // {"name":"Accenture","logo_url":"/images/sponsors/accenture.png","link":"http://www.accenture.com/pl-pl/Pages/index.aspx"},
                ],
                silver: [
                    {"name":"Sii","logo_url":"/images/sponsors/sii.png","link":"http://http://sii.pl/oddzialy/lodz/"},
                    // {"name":"ABB","logo_url":"/images/sponsors/abb.png","link":"http://new.abb.com/pl/o-nas/technologie/centrum-systemow-informatycznych-abb"},
                    //          {"name":"Touk","logo_url":"/images/sponsors/touk-logo.png","link":"http://www.touk.pl/"},
                    //          {"name":"Cybercom","logo_url":"/images/sponsors/cybercom.png","link":"http://www.cybercom.com/pl/Poland/"},
                ],
                copper: [
                    {"name":"Jetbrains","logo_url":"/images/sponsors/jetbrains.png","link":"http://www.jetbrains.com/"}
                ],
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.png',
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódźarea. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],
                supporters: [
                    // {"name": "Miliataria Łódź", "logo_url":"/images/partners/militaria.png", "link":"http://militaria.lodz.pl/"},
                ],
                community: [
                    {
                        "name": "Łódź WiOSłuje",
                        "logo_url": "/images/partners/lodz-wiosluje.png",
                        "description_html": "The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje",
			"link": "http://www.meetup.com/Lodz-w-iOS-luje/"
                    },
                    // {"name":"Toruń JUG","logo_url":"/images/partners/jugtorun5d_3_square.png","description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"},
                    {
                        "name": "Android Developer Group Poznań",
                        "logo_url": "/images/partners/adgp.jpeg",
                        "link": "http://www.meetup.com/Poznan-Android-Developer-Group/"
                    },
                    // {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
                    // {"name":"Mobile Central Europe 2016","logo_url":"/images/partners/mce2016.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
                    {"name":"GDG Kraków","logo_url":"/images/partners/gdgkrakow.png","link":"http://www.meetup.com/GDG-Krakow/"},
                    // {"name":"MIT Łódź","logo_url":"/images/partners/mit.png","link":"http://mitlodz.pl"},
                    // {"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.png","link":"http://devday.pl"},
                    // {"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.png","link":"http://codepot.pl"},
                    {"name":"Zwinna Łódź","logo_url":"/images/partners/zwinna_lodz.jpg","link":"http://zwinnalodz.eu/"},
                    // {"name":"Mobile Warsaw","logo_url":"/images/partners/mw-logo.png","link":"http://mobile-warsaw.pl"},
                    // {"name":"Ionic Poland", "logo_url":"/images/partners/ionicpoland-logo.png", "link":"http://www.meetup.com/ionicpoland/"},
                    {
                        "name": "Droidcon Poland",
                        "logo_url": "/images/partners/droidcon.png",
                        "link": "http://droidcon.pl/"
                    },
                ],
                media: [

                    // {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
                    // {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
                    // {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
                    // {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
                    // {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
                    // {"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
                    {
                        "name": "Programista Magazine",
                        "logo_url": "/images/partners/programistamag.png",
                        "link": "http://programistamag.pl"
                    },
                    // {"name":"MyApple","logo_url":"/images/partners/myapple.jpg","link":"http://myapple.pl"},
                    // {"name":"4tech.tv","logo_url":"/images/partners/4techmobile.png","link":"http://testytelefonow.pl"},
                    // {"name":"StartUpTV","logo_url":"/images/partners/startuptv.png","link":"http://startuptv.pl"},
//			{"name":"Linux Magazine","logo_url":"/images/partners/linuxmag.png","link":"http://www.linux-magazine.pl"},
                    // {"name":"Kariera Plus","logo_url":"/images/partners/karieraplus.png","link":"http://karieraplus.pl"},
                    // {"name":"Młodzi w Łodzi","logo_url":"/images/partners/mlodzi-w-lodzi.jpg","link":"http://mlodziwlodzi.pl"},
                    // {"name":"Helion","logo_url":"/images/partners/helionpl.png","link":"http://helion.pl"},
                    // {"name":"Manning Publications","logo_url":"/images/partners/manning.png","link":"http://www.manning.com"}
                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:10'
                },
                'slot-1': {
                    from: '9:10',
                    to: '9:55'
                },
                'slot-coffee-1': {
                    from: '9:55',
                    to: '10:15'
                },
                'slot-2': {
                    from: '10:15',
                    to: '11:00'
                },
                'slot-coffee-2': {
                    from: '11:00',
                    to: '11:20'
                },
                'slot-3': {
                    from: '11:20',
                    to: '12:05'
                },
                'slot-coffee-3': {
                    from: '12:05',
                    to: '12:25'
                },
                'slot-4': {
                    from: '12:25',
                    to: '13:10'
                },
                'slot-lunch': {
                    from: '13:10',
                    to: '14:10'
                },
                'slot-5': {
                    from: '13:25',
                    to: '13:55'
                },
                'slot-6': {
                    from: '14:10',
                    to: '14:55'
                },
                'slot-coffee-4': {
                    from: '14:55',
                    to: '15:10'
                },
                'slot-7': {
                    from: '15:10',
                    to: '15:55'
                },
                'slot-coffee-5': {
                    from: '15:55',
                    to: '16:10'
                },
                'slot-8': {
                    from: '16:10',
                    to: '16:55'
                },
                'slot-no-coffee-6': {
                    from: '16:55',
                    to: '17:00'
                },
                'slot-finally': {
                    from: '17:00',
                    to: '17:15'
                },
                'slot-afterparty': {
                    from: '17:30',
                    to: '23:59'
                },

            },
            speakers: {
                //1
                "speaker-jens-ravens": {
                   "firstname": "Jens",
                     "lastname": "Ravens",
                     "bio_html": "Jens is an iOS, macOS and backend Developer, writing ObjC since 2006. Currently working at nerdgeschoss helping clients to create awesome apps. Organiser of the monthly swift.berlin meetup. Scaring people with functional concepts since 2014.",
                "www": "",
                "twitter": "https://twitter.com/jensravens",
                "facebook": "",
                "github": "",
                "linkedin": "",
                "photo_url": "/images/speakers/jens-ravens.jpg"
                },
                 //2
                 "speaker-pedro-buendia": {
                     "firstname": "Pedro",
                     "lastname": "Buendia",
                     "bio_html": "Pedro is an iOS Developer at SoundCloud. Open source lover and runner in his free time. He loves coding and contributing with his own libraries. In his spare time, Pedro is starting his own project, GitDo. Open to learning new concepts and paradigms, of late he is interested in architectures like VIPER, and reactive programming.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/pedro-buendia.png"
                 },
                 //3
                 "speaker-konstantin-raev": {
                     "firstname": "Konstantin",
                     "lastname": "Raev",
                     "bio_html": "Konstantin is a Developer at Facebook who is working in React Native team. For the last few years his passions were infrastructure, Continuous Delivery, JavaScript and stable builds. Before joining Facebook he worked at a New Zealand startup <a href='www.booktrack.com'>Booktrack</a>.",
                     "wwww": "",
                     "twitter": "https://twitter.com/bestander_nz",
                     "photo_url": "/images/speakers/konstantin-raev.png"
                 },
                 //4
                 "speaker-pawel-gajda": {
                     "firstname": "Gautier",
                     "lastname": "Mechling",
                     "bio_html": "Gautier is an aspiring Software Craftsman in Paris, France. Agile thinker passionate in Android Development, he creates and maintains some FOSS tools to improve productivity. Talk to him about Kotlin, Clean Code, or Free Software and you will see his eyes light up.",
                     "wwww": "",
                     "twitter": "https://twitter.com/Nilhcem",
                     "photo_url": "/images/speakers/gautier-mechling.png"
                 },
                 //5
                 "speaker-nicola-zaghini": {
                     "firstname": "Nicola",
                     "lastname": "Zaghini",
                     "bio_html": "Nicola Zaghini is a software architect at Mobile Travel Technologies. He has been developing mobile apps since the first iOS SDK was released, from indie game development to major airlines and travel companies. Prior to that, he enjoyed Java development as professional and researcher in academia. He is currently in charge of mobile architecture in MTT and helps teams deliver amazing apps.",
                     "www": "",
                     "twitter": "https://twitter.com/nzaghini",
                     "photo_url": "/images/speakers/nicola-zaghini.png"
                 },
                 //6
                 "speaker-roberto-orgiu": {
                     "firstname": "Roberto",
                     "lastname": "Orgiu",
                     "bio_html": "Android developer and enthusiastic, DroidCon and community fan, I love the Android environment and pushing the limits of the platform.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/roberto-orgiu.png"
                 },
                 //7
                 "speaker-eric-kok": {
                     "firstname": "Eric",
                     "lastname": "Kok",
                     "bio_html": "Hi, I'm Eric. I currently work as a contractor at KBC Bank in Belgium creating the next mobile banking app. But if you know me, it is through my open-source work published under the 2312 development name. I build apps, such as RateBeer, and libraries, such as RxCupboard. I love brewing and drinking craft beer, chatting about Android and building with Legos with my son.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/eric-kok.png"
                 },
                 //8
                 "speaker-dan-cuello": {
                     "firstname": "Dan",
                     "lastname": "Cuellar",
                     "bio_html": "Dan Cuellar is the creator of the open source mobile automation framework Appium, and Head of Test Engineering at FOODit in London. Previously, he headed the test organisation at Shazam in London and Zoosk in San Francisco, and worked as a software engineer on Microsoft Outlook for Mac, and other products in the Microsoft Office suite. He is an advocate of open source technologies and technical software testing. He earned a Bachelor’s degree in Computer Science, with a minor in Music Technology, from the world-renowned School of Computer Science at Carnegie Mellon University in Pittsburgh.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/dan-cuellar.png"
                 },
                 //9
                 "speaker-roman-mazur": {
                     "firstname": "Roman",
                     "lastname": "Mazur",
                     "bio_html": "Roman has been working with Android for more than 6 years. You can find him delivering fixes and new features to a plenty of Android libraries and frameworks including support library, Robolectric, Madge, Spoon, Retrofit, and Helium. At Stanfy he is working on a customized Android OS for in-room tablets installed at hotels by KEYPR.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/roman-mazur.png"
                 },
                 //10
                 "speaker-markus-junginger": {
                     "firstname": "Markus",
                     "lastname": "Junginger",
                     "bio_html": "Markus Junginger is an Android enthusiast and developer since the first SDK release in 2007. His mobile software company greenrobot focuses on high quality Android apps and open source libraries, which are widely used by many popular apps. Markus has 15+ years experience with Java and did his first mobile software project in 2001. He regularly speaks and writes about Android, gives Android trainings, and develops for Android.",
                     "www": "",
                     "twitter": "",
                     "photo_url": "/images/speakers/markus-junginger.png"
                 },
                //11
                "speaker-madis-pink": {
                    "firstname": "Madis",
                    "lastname": "Pink",
                    "bio_html": "Madis is currently working on JRebel for Android at ZeroTurnaround. He started hacking on Android apps on a T-Mobile G1 more than 7 years ago and quickly grew a particular interest in build systems and developer tooling. His previous experience includes working on the Android Platform team at Spotify and producing multiple apps at Mobi Lab. During his free time he likes to dabble around with guitars and home recording.",
                    "www": "www.appvetica.com",
                    "twitter": "dusker",
                    "photo_url": "/images/speakers/madis-pink.png"
                },
                //12
                "speaker-pablo-guardiola": {
                    "firstname": "Pablo",
                    "lastname": "Guardiola",
                    "bio_html": "I'm a Software Engineer, lover of new technologies, passionate about challenges and motivated to continue learning current coding languages and methodologies. I'm a regular attendee at developers’ events and meetups. I'm a Testing-lover and I try to share my knowledge collaborating @AprendiendoTDD and @theEvnt facilitating coding dojos, katas and other stuff.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/speakers/pablo-guardiola.png"
                },
                // //13
                // "speaker-krzysztof-siejkowski": {
                //     "firstname": "Krzysztof",
                //     "lastname": "Siejkowski",
                //     "bio_html": "Po trzech latach zawodowego programowania wie tylko tyle, że nic nie wie. Pisał w Javie, Scali i Swifcie, ale Objective-C, pierwsza miłość, zajmuje w jego sercu specjalne miejsce. Wierzy, że wszyscy deweloperzy to jedna rodzina, i chce tę świadomość krzewić organizując spotkania MobileWarsaw oraz konferencję Codepot. Robi co może dla rozwoju aplikacji mobilnych w firmie TouK. ",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/krzysztof-siejkowski.png"
                // },
                // //14
                // "speaker-zbigniew-szymanski": {
                //     "firstname": "Zbigniew",
                //     "lastname": "Szymański",
                //     "bio_html": "Senior Developer / Architect at <a href=\"wire.com\">wire.com</a>, responsible for keeping Android Wire app in sync. Focusing on Android development in Scala, obsessed with idea of creating apps with simpler and more powerful abstractions",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/zbigniew-szymanski.png"
                // },
                // //15
                // "speaker-lukasz-olejarczuk": {
                //     "firstname": "Łukasz",
                //     "lastname": "Olejarczuk",
                //     "bio_html": "Łukasz is a technology evangelist and software developer at Bank Zachodni WBK where he is creating a wide variety of state-of-the-art applications. Now he is strongly focused on mobile hybrid applications in the enterprise world.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/lukasz-olejarczuk.png"
                // },
                // //16
                // "speaker-krzysztof-scira": {
                //     "firstname": "Krzysztof",
                //     "lastname": "Ścira",
                //     "bio_html": "Prezes i front-end developer firmy desi9n.pl sp. z o. o. - tworzącej hybrydowe aplikacje mobilne (iOS, Android, WindowsPhone), aplikacje i strony internetowe RWD. Wielokrotny prelegent na wydarzeniach związanych z programowaniem urządzeń mobilnych i programowaniem front-end. Na co dzień pracuje w HTML5, CSS3, SASS / SCSS, AngularJS i oczywiście Cordova / Phonegap - czy to jako developer w desi9n.pl czy to trener programowania w firmie SAGES. W wolnych chwilach pasjonat boksu olimpijskiego.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/krzysztof-scira.png"
                // },
                // //17
                // "speaker-michal-tuszynski": {
                //     "firstname": "Michał",
                //     "lastname": "Tuszyński",
                //     "bio_html": "Programista iOS w aplikacji Tidal związany z polską sceną startupową oraz miłośnik wszelkich nowych technologii",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/michal-tuszynski.png"
                // },
                // //18
                // "speaker-marin-todorov": {
                //     "firstname": "Marin",
                //     "lastname": "Todorov",
                //     "bio_html": "Marin Todorov is an independent iOS consultant and publisher. He started developing on an Apple ][ more than 20 years ago and keeps rocking till today. Meanwhile he has worked in great companies like Monster Technologies and Native Instruments, has lived in 4 different countries, and (more recently) is one the founding members of the raywenderlich.com tutorial team. Besides crafting code, Marin also enjoys bloging on www.touch-code-magazine.com, writing books www.ios-animations-by-tutorials.com, and speaking at mobile conferences. He sometimes open sources his code. He walked the way to Santiago. More info & prev. speaking experience <a href=\"http://www.underplot.com/#speaking\">here</a>",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/marin-todorov.png"
                // },
                // //19
                // "speaker-edwin-adriaansen": {
                //     "firstname": "Edwin",
                //     "lastname": "Adriaansen",
                //     "bio_html": "Edwin Adriaansen has been programming since the early nineties. He worked for several IT companies and joined TomTom 7 years ago. Currently he is managing the teams responsible for the software running on the TomTom navigation devices. Furthermore he has a personal interest in new technical developments (geeky products), mechanical watches and good food.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/edwin-adriaansen.png"
                // },
                // //20
                // "speaker-daniel-rurarz": {
                //     "firstname": "Daniel",
                //     "lastname": "Rurarz",
                //     "bio_html": "Scrum Master w Seamless Payments. Uczestniczył w wielu projektach informatycznych od systemów operacyjnych na kary bankomatowe po High Performance Computing. Zaczynał od programowania, prowadził projekty informatyczne, najwięcej satysfakcji daje mu jednak praca z zaangażowanymi samozorganizowanymi zespołami i usprawnianie całej organizacji w roli Scrum Mastera.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/daniel-rurarz.png"
                // },
                // //21
                // "speaker-lukasz-szadkowski": {
                //     "firstname": "Łukasz",
                //     "lastname": "Szadkowski",
                //     "bio_html": "UX Designer w Seamless Payments, autor bloga UserExpired.com. Wierzy w rolę UX we wspieraniu biznesu. Wie, że ta dziedzina to dużo więcej niż diagramy, mapy, czy makiety. To tylko środki wspierające kreowanie wizji, gdzie główną rolę gra Klient i jego potrzeby. Myśli o UX w kontekście zachowań konsumenckich, możliwości technologicznych, trendów rynkowych, ale przede wszystkim spełniania oczekiwań użytkowników.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/lukasz-szadkowski.png"
                // },
                // //22
                // "speaker-lena-rodziewicz": {
                //     "firstname": "Lena",
                //     "lastname": "Rodziewicz",
                //     "bio_html": "Wielka orędowniczka WebComponents oraz pierwsza osoba do testowania  wszelkich nowości technologicznych. Nieszczęśliwie zakochana w Internet of Things. Stara się, z różnym skutkiem, chociaż trochę ulepszyć świat z użyciem techniki. W branży od 10 lat oraz wiele nieprzespanych nocy. Od ponad 4 lat kieruje zespołami programistów pod flagą Mobica Limited. Odpowiedzialna za dostarczanie ekspertyzy technicznej w zakresie JavaScript jako wsparcie dla biura CTO. Ma kota o imieniu Java. Na Mobilization po raz trzeci.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/lena-rodziewicz.png"
                // },
                // //23
                // "speaker-maciej-chwiloc": {
                //     "firstname": "Maciej",
                //     "lastname": "Chwiłoc",
                //     "bio_html": "Dyrektor Rozwoju Produktu Grupy Pracuj S.A. pracujący na co dzień z ponad 80 osobowym zespołem developerów – pasjonatów. W wolnych chwilach budowy dronów i lotów FPV.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/maciej-chwiloc.png"
                // },
                // //24
                // "speaker-cezary-kapicki": {
                //     "firstname": "Cezary",
                //     "lastname": "Kąpicki",
                //     "bio_html": "Starszy programista w Grupie Pracuj S.A.. Zawodowo zajmuje się programowaniem aplikacji webowych w C# i PHP.  Wolny czas spędza na wielogodzinnych spacerach i poznawaniu nowych miejsc.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/cezary-kapicki.png"
                // },
                // //25
                // "speaker-jacek-rondio": {
                //     "firstname": "Jacek",
                //     "lastname": "Rondio",
                //     "bio_html": "Senior Software Engineer w firmie HARMAN Connected Services zajmujący się głównie rozwijaniem aplikacji na platformę Android, nie bojący się jednak siegać do głębszych warstw systemu. Obecnie związany z branżą automotive, wcześniej z accessibility i komercyjnymi aplikacjami jednego z operatorów komórkowych. Entuzjasta nowych technologii mobilnych, wciąż szukający nowych technologicznych wyzwań.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/jacek-rondio.png"
                // },
                // //26
                // "speaker-anton-miniailo": {
                //     "firstname": "Anton",
                //     "lastname": "Miniailo",
                //     "bio_html": "Inżynier oprogramowania Android z 5 letnim doświadczeniem. Entuzjasta Javy, lubiący wyzwania z zakresu architektury oprogramowania. Interesuje sie zarówno pracą z software jak i middleware. Do HARMAN Connected Services dołączył rok temu.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/anton-miniailo.png"
                // },
                // //27
                // "speaker-rafal-szpoton": {
                //     "firstname": "Rafał",
                //     "lastname": "Szpoton",
                //     "bio_html": "A very retro gadgets maniac.. He used to know how to program modern windows UI in MS DOS using Turbo Pascal 7.0 but he doesn’t know it anymore J As his primary field of expertise disappeared in the mists of history he moved to more modern environments like iOS or Android.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/rafal-szpoton.jpg"
                // },
                // //28
                // "speaker-tomasz-netczuk": {
                //     "firstname": "Tomasz",
                //     "lastname": "Netczuk",
                //     "bio_html": "Programista nie trzymający się kurczowo jednej platformy. Na koncie ma: frontendy webowe, aplikacje iOS, backendy w node i pythone, devopowanie... Organizator Warsjawy 2014, Codepota 2015, wcześniej prowadził wykład o Foundation na Mobilization oraz warsztaty o tym frameworku na Warsjawie 2013.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/tomasz-netczuk.png"
                // },
                // //29
                // "speaker-karol-kowalski": {
                //     "firstname": "Karol",
                //     "lastname": "Kowalski",
                //     "bio_html": "Karol began his journey into the world of developers two years ago. From the very first day he learned best practices from Uncle Bob and after one year in Impaq, he took a fancy to Groovy and Android development. Since march he combined both these interests in ElPassion as Android-Groovy Dev.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/karol-kowalski.png"
                // },
                // //30
                // "speaker-pawel-junak": {
                //     "firstname": "Paweł",
                //     "lastname": "Junak",
                //     "bio_html": "Wroclaw University of Technology graduate, interested in Android from the first Google announce. After few years in Film industry, engineering mindset and love for technology made him come back to roots and start programming full time. Now he works in Polidea making great mobile apps for the whole world.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/pawel-junak.png"
                // },
                // //31
                // "speaker-konrad-krakowiak": {
                //     "firstname": "Konrad",
                //     "lastname": "Krakowiak",
                //     "bio_html": "Senior Software Engineer w Polidea. Prawie 6 lat doświadczenia z czego 5 jako programista na platformę Android. Doświadczenie prelegenckie: wykład na Politechnice Wrocławskiej, (o bibliotece SPen Samsunga), wykład o AndEginie, (w ramach konkursu z Samsunga), wykład na Politechnice Warszawskiej w ramach przedmiotu Szlif, mentor na CodePot 2015",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/konrad-krakowiak.jpg"
                // },
                // //32
                // "speaker-slawomir-jasek": {
                //     "firstname": "Sławomir",
                //     "lastname": "Jasek",
                //     "bio_html": "Konsultant bezpieczeństwa z kilkunastoletnim doświadczeniem. Jako programista tworzył bezpieczne systemy certyfikowane dla użytku w instytucjach rządowych. Jako pentester wskazał krytyczne podatności w dziesiątkach aplikacji - www, mobilnych, embedded - wiodących firm z sektora finansowego, IT, branży internetowej, nowych technologii.  Entuzjasta innowacyjnych rozwiązań i gadżetów, a zwłaszcza możliwości ich ataku. Prelegent wielu polskich i zagranicznych konferencji. Od 10 lat w firmie SecuRing doradza bezpieczne rozwiązania dla różnego typu aplikacji - coraz częściej już od etapu projektowania.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/slawomir-jasek.png"
                // },
                // //33
                // "speaker-sebastian-kacprzak": {
                //     "firstname": "Sebastian",
                //     "lastname": "Kacprzak",
                //     "bio_html": "Sebastian pracuje jako Solutions Architect w firmie Outline. Pasjonat kasowania kodu, upraszczanie architektury i wyodrębniania powtarzalnych fragmentów kodu jako open sourcowe biblioteki. Prowadził pierwszą edycję Warsaw Android Livecode. Po pracy lubi fotografować.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/sebastian-kacprzak.png"
                // },
                // //34
                // "speaker-pawel-wojdera": {
                //     "firstname": "Paweł",
                //     "lastname": "Wojdera",
                //     "bio_html": "I'm goal-oriented mobile evangelist with technical background and strong communication skills. Main assumption is to be 1% better than yesterday, so day-by-day I’m studying details of programming Android platform, exploring Android Arsenal and following influencers via Github. Personally, I can't wait when Internet of Things will glut the market, beacons technology will be on daily basis and driveless cars will drop me anywhere I want.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/pawel-wojdera.png"
                // },
                // //35
                // "speaker-aleksander-piotrowski": {
                //     "firstname": "Aleksander",
                //     "lastname": "Piotrowski",
                //     "bio_html": "Kiedyś backendowiec, dziś deweloper mobilny. Ze względu na wiek piastujący stanowisko Senior Android Developer od pierwszego dnia jako androidowiec.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/aleksander-piotrowski.png"
                // },
                // //36
                // "speaker-michal-wlodarczyk": {
                //     "firstname": "Michał",
                //     "lastname": "Włodarczyk",
                //     "bio_html": "Senior Software Engineer w firmie Open-RnD. Od 4 zajmuje się rozwijaniem aplikacji mobilnych na platformę Android. Uczestnik studiów doktoranckich na Politechnice Łódzkiej, w Katedrze Mikroelektroniki i Technik Informatycznych (wydział Elektroniki, Elektrotechniki, Informatyki i Automatyki). Odpowiedzialny za przedmioty \"Systemy operacyjne na platformach mobilnych\", \"Przetwarzanie w chmurze dla aplikacji mobilnych\" oraz \"m-Commerce\". Autor licznych publikacji z zakresu biometrii i przetwarzania danych na platformie Android. Więcej informacji na profilu na <a href='https://pl.linkedin.com/pub/michał-włodarczyk/33/3a4/b08'>LinkedIn</a>",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/michal-wlodarczyk.png"
                // },
                // //37
                // "speaker-michal-szczepanik": {
                //     "firstname": "Michał",
                //     "lastname": "Szczepanik",
                //     "bio_html": "Badacz, projektant, programista. Od wielu lat związany z branżą mobilną, swoją przygodę zaczynał JME, Symbianem, Blackberry, obecnie programista Androida w BLStream. Założyciel  Meet.Mobile Wrocław. Fan planszówek i nowych technologii oraz prelegent wielu eventów mobilnych.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/michal-szczepanik.png"
                // },
                // //38
                // /*
                //  "speaker-maciej-schmidt":{
                //  "firstname": "Maciej",
                //  "lastname":"Schmidt",
                //  "bio_html":"Zapalony programista, grafik, freelancer, miłośnik nowoczesnych technologii, w skrócie: informatyczny człowiek orkiestra. Od kilku lat specjalizuje się w technologii Augmented Reality (Rzeczywistości Rozszerzonej) oraz tworzy użytkowe i rozrywkowe aplikacje mobilne. Od 2007 roku prowadzi firmę MASKOM.pl świadczącą zaawansowane rozwiązania informatyczne dla biznesu. W swoim portfolio posiada realizacje m.in. dla sieci ROSSMANN, RTV Euro AGD, PKP S.A. Prelegent na temat Augmented Reality m.in. na Mobilization 4 for Mobile Conference w Łodzi, JUG Zielona Góra, Mobile Trends Conference 2015 w Krakowie, I Kongresie Mobilnym w Warszawie.",
                //  "www":"",
                //  "twitter":"",
                //  "photo_url":"/images/speakers/maciej-schmidt.png"
                //  },
                //  */
                // //39
                // "speaker-sebastian-gos": {
                //     "firstname": "Sebastian",
                //     "lastname": "Gos",
                //     "bio_html": "A special Agent 007 on Her Majesty Secret Frontend Services which include but is not limited to: UX espionage, mobile warfare discovery, UI takeovers. Currently under cover at HP Polska working on his another top secret assignment. Big fan of  rock stars, leisure activities like guitar playing and sailing culinary travels. During his missions a very active Android and iOS user. A big fan of Moneypenny.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/sebastian-gos.png"
                // },
                // //40
                // "speaker-lech-migdal": {
                //     "firstname": "Lech",
                //     "lastname": "Migdal",
                //     "bio_html": "A big fan of simplicity and usability.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/lech-migdal.jpg"
                // },
                // //41
                // "speaker-michal-aleksander": {
                //     "firstname": "Michał",
                //     "lastname": "Aleksander",
                //     "bio_html": "Z wykształcenia dziennikarz, który w pewnym momencie swojego życia bardzo skręcił w stronę (bliskiej mu od zawsze) technologii i projektowania. Przez 5 lat projektował dla kluczowego serwisu e-commerce w Europie Środkowo-Wschodniej, mocno skupiając się na mobilności, rozpoznaniu potrzeb użytkownika oraz naturalnym kontekście użycia projektowanych produktów. Obecnie Interaction Designer i Design Team Manager w przedsionku technologicznym największej na świecie firmy edukacyjnej - Pearson English Technologies, w której mocno skupia sieę na porządkowaniu procesów, wypracowywaniu najlepszych podejść projektowych oraz metodach warsztatowych, w które angażuje reprezentantów wszystkich działów w firmie. Autor elektronicznej książki <a href='http://www.ibuk.pl/fiszka/141731/jak-stac-sie-lepszym-projektantem-ux.html'>Jak stać się lepszym projektantem UX</a>. Prelegent na UXCampie (Gdynia, 2014), World of Usability Day (Gdynia, 2014) oraz Product Campie (Gdynia, 2015).",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/michal-aleksander.png"
                // },
                // //42
                // "speaker-pawel-urban": {
                //     "firstname": "Paweł",
                //     "lastname": "Urban",
                //     "bio_html": "Developer z krwi i kości od 6 lat. Do tej pory związany z firmami takimi jak LG Electronics, Allegro oraz PayU. Pasjonat świata mobilnego, szczególnie z zielonym robotem w tle.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/pawel-urban.png"
                // },
                // //43
                // "speaker-lukasz-krupa": {
                //     "firstname": "Łukasz",
                //     "lastname": "Krupa",
                //     "bio_html": "Aktualnie odpowiedzialny za rozwój działu rozwiązań mobilnych w R&D Viessmann we Wrocławiu. Miłośnik zwinnych metod rozwoju produktów i filozofii Kaizen. Swoją przygodę z IT rozpoczynał jako tester oprogramowania i przez ostatnie 10 lat uczestniczył w kilkudziesięciu projektach współpracując ze znanymi firmami branży IT w różnorodnych rolach m.in. Inżyniera rozwoju oprogramowania, kierownika projektu, lidera zespołu, kierownika działu, Agile Coacha. Inicjator społeczności „Agile Wrocław”, konsultant zwinnych metod, praktyk Scruma, współorganizator pierwszego na świecie szkolenia o Scrumie w formie gry miejskiej. Potwierdzeniem jego kompetencji są liczne międzynarodowe certyfikaty: PMI-ACP, PRINCE-2, IPMA-D, PSM I, CSM oraz ISTQB Foundation. W tym roku występował m.in. na konferencji Scrum Days, Testing Cup oraz wielokrotnie na spotkaniach branżowych.",
                //     "www": "",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/lukasz-krupa.png"
                // },
                // //44
                // "speaker-michal-majcherski": {
                //     "firstname": "Michał",
                //     "lastname": "Majcherski",
                //     "bio_html": "Software Engineer w Seamless Payments. Podczas blisko 8 letniej kariery brał udział w tworzeniu i utrzymywaniu oprogramowania zarówno dla dużych korporacji jak i szybko dostosowujących się do aktualnych potrzeb rynku kilkuosobowych startupów. Zwolennik czystego kodu i dobrych praktyk wytwarzania oprogramowania.",
                //     "www": "l",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/michal-majcherski.png"
                // },
                // //44
                // "speaker-filip-miloszewski": {
                //     "firstname": "Filip",
                //     "lastname": "Miłoszewski",
                //     "bio_html": "Co-founder of Listonic, one of the most popular Polish apps, available on Android, iPhone, Windows Phone and few other platforms. Working on mobile apps since 2007. Speaker on many conferences including: Internet Beta, Mobile Standard, Mobile Trends for Business, Akademia Mediarun, App Academy, Jungle Web, Łódź WiOSłuje, MIT and more.",
                //     "www": "l",
                //     "twitter": "",
                //     "photo_url": "/images/speakers/filip-miloszewski.jpg"
                // },
            },
            talks: {
                // "talk-clean-architecture": {
                //     "title": "Przejrzysty i testowalny kod na Androidzie? Spróbujmy z Clean Architecture",
                //     "description_html": "Pisanie dobrego oprogramowania na platformę Android jest trudnym zadaniem. Jednym z dużych problemów, zwłaszcza w przypadku sporych aplikacji, może być podział logiki aplikacji tak, aby nasze Activity czy Fragmenty nie były nią przeładowane oraz aplikacja była podatna na testowanie jednostkowe. Szukając pomysłu na architekturę aplikacji, która będzie dobrze się skalowała wraz z rozwojem projektu, natknąłem się na Clean Architecture zaproponowaną przez Boba C. Martina. Podczas prezentacji zobaczymy czy i jak CA sprawdza się w przypadku aplikacji mobilnych na Androida i na co pozwala jej zastosowanie. Oczywiście nie pominiemy takich kluczowych kwestii jak pogodzenie tego wszystkiego z wszechobecną na Androidzie asynchronicznością.",
                //     "speakers_keys": [
                //         "speaker-michal-charmas"
                //     ],
                //     "language": "PL"
                // },
                // "talk-swift-and-objective-c-interoperability": {
                //     "title": "Swift and Objective-C interoperability",
                //     "description_html": "Have a look at how to make Swift and Objective-C interoperability seamless. Basics of including Swift code in your new or existing Objective-C based projects and helping yourself when you want to deliver some parts of Swift-based application using Objective-C code.",
                //     "speakers_keys": [
                //         "speaker-tomasz-grynfelder"
                //     ],
                //     "language": "EN"
                // },
                // "talk-espressive-functional-testing-with-espresso": {
                //     "title": "Espressive functional testing with Espresso",
                //     "description_html": "Testing mobile apps is not easy. If you wanted to test \"Hello World\" app with a button and text label, that wouldn't be really hard. But our apps do a lot more. They are calling RESTful services, checking on user's GPS location or using Facebook or Google+ login buttons, which connect to network themselves. How do you test that? I want to show you my approach to functional testing with Espresso and a bit of dependency inversion magic. Do you have a feeling testing network error conditions is hard or cumbersome when done manually. Turns out it's even easier to automatically test it than \"the happy path\". You will see real code from production app, so remember to drink a shot of espresso before joining this session.",
                //     "speakers_keys": [
                //         "speaker-maciej-gorski"
                //     ],
                //     "language": "EN"
                // },
                // "talk-kotlin-for-android": {
                //     "title": "Kotlin for Android",
                //     "description_html": "Wprowadzenie do Kotlina na Androida. Omówienie składni języka oraz jego kluczowych aspektów umożliwiających znacznie szybsze pisanie aplikacji na platformę Android. Porównanie Kotlina z alternatywnymi językami JVM. Zakończone sesją Q&A.",
                //     "speakers_keys": [
                //         "speaker-pawel-gajda"
                //     ],
                //     "language": "PL"
                // },
                // "talk-reaktywne-programowanie-z-rxjava": {
                //     "title": "Reaktywne programowanie z RxJava",
                //     "description_html": "Programowanie reaktywne jako lekarstwo na ból głowy związany z kodem asynchronicznym. W czasie mojej prezentacji przedstawię fundamentalne idee stojące za tym paradygmatem oraz zademonstruję od podstaw jak tworzyć reaktywne rozwiązania. Wszystko to na przykładzie biblioteki RxJava na platformie Android.",
                //     "speakers_keys": [
                //         "speaker-piotr-krystyniak"
                //     ],
                //     "language": "PL"
                // },
                // "talk-hipster-oriented-programming": {
                //     "title": "Hipster Oriented Programming",
                //     "description_html": "Not sure if you should order a burrito or a monad for lunch? Get a quick overview of Object Oriented, Functional and Protocol Oriented programming in Swift 2 and learn what all that fuss is about and why you should care.",
                //     "speakers_keys": [
                //         "speaker-jens-ravens"
                //     ],
                //     "language": "EN"
                // },
                // "talk-behavior-driven-development": {
                //     "title": "Behavior Driven Development",
                //     "description_html": "Building apps is hard. But making sure that apps don't break in the process of adding new functionality is even harder. Your code is constantly changing. If you're lucky your requirements aren't changing that much, but you probably live in the world of constant change. And that change poses a certain risk. Things sometimes might go missing. Pieces of code, pieces of behavior that should be there. But are not. In this talk you'll learn how you can avoid falling into this trap by leveraging behavior driven development. You'll find out how to write tests for iOS and what technologies you can use to keep your code safe and sound. ",
                //     "speakers_keys": [
                //         "speaker-pawel-dudek"
                //     ],
                //     "language": "EN"
                // },
                // "talk-dagger-2-dependency-injection-w-kodzie-produkcyjnym": {
                //     "title": "Dagger 2 - Dependency Injection w kodzie produkcyjnym",
                //     "description_html": "Dagger 2 to pierwszy framework do Dependency Injection, który można uznać za Android friendly. Nie korzysta z refleksji, jest tak szybki jak ręcznie pisany kod, nie wymaga dodatkowej konfiguracji Proguarda. W związku z tym, że wartość Dependency Injection wzrasta wraz ze złożonością projektu, na prezentacji pokazane zostaną przykłady użycia Daggera w kodzie produkcyjnym. Zobaczymy co dają nam Scope'y, jak Dagger 2 pomaga w różnych typach testów, jak unikać wycieków pamięci oraz jak Dagger 2 pomaga w pracy zespołowej.",
                //     "speakers_keys": [
                //         "speaker-miroslaw-stanek"
                //     ],
                //     "language": "PL"
                // },
                // "talk-watch-out-for-the-watch": {
                //     "title": "Watch out for the watch",
                //     "description_html": "Apple Watch might be the most polarising, controversial and innovative product added to Apple's portfolio in the last few years. Let's take a brief look to see if it's worth it, and first and foremost how to bring our apps to people's wrists.",
                //     "speakers_keys": [
                //         "speaker-peter-tuszynski"
                //     ],
                //     "language": "EN"
                // },
                // "talk-app-indexing-i-deep-linking-w-aplikacjach-androidowych": {
                //     "title": "App Indexing i Deep linking w aplikacjach Androidowych",
                //     "description_html": "Podczas prelekcji dowiesz się w jaki sposób wzbogacić aplikację o wsparcie dla App Indexingu, pozwoli to zwiększyć zaangażowanie obecnych użytkowników oraz przyciągnąć nowych. Zobaczysz na jakie problemy można natknąć się podczas implementacji, jak można sobie z nimi poradzić, a także poznasz kilka sztuczek ułatwiających wdrożenie App Indexingu.",
                //     "speakers_keys": [
                //         "speaker-krzysztof-kocel"
                //     ],
                //
                //     "language": "PL"
                // },
                // "talk-qtquick-spotyka-html": {
                //     "title": "QtQuick spotyka HTML",
                //     "description_html": "Celem prezentacji jest pokazanie w jaki sposób połączyć ze sobą dwa światy -- oferowany przez Qt wydajny i prosty w użyciu mechanizm QtQuick/QML oraz niezwykle popularny HTML. Zademonstrowane zostanie, jak osadzić w scenie QtQuickowej treść HTML i jak komunikować ze sobą skrypt QML i JavaScript na stronie.",
                //     "speakers_keys": [
                //         "speaker-witold-wysota"
                //     ],
                //     "language": "PL"
                // },
                // "talk-dobry-zwyczaj-nie-odziedziczaj": {
                //     "title": "Dobry zwyczaj: nie odziedziczaj",
                //     "description_html": "Swift zainspirował środowisko programistów OSX/iOS do poszukiwań w miejscach, w które się dotąd nie zapuszczali. Na przykład w rejony programowania funkcyjnego. My też się tam wybierzemy, żeby przejrzeć kilka prostych koncepcji i technik gotowych do natychmiastowego wykorzystania w aplikacjach mobilnych. W podróż zabierze nas rollercoster emocji: radość na widok znajomych problemów, przed którymi programowanie funkcyjne nas chroni, oraz smutek na widok nowych, które wprowadza.",
                //     "speakers_keys": [
                //         "speaker-krzysztof-siejkowski"
                //     ],
                //     "language": "PL"
                // },
                // "talk-reactive-ui-on-adroid-with-scala": {
                //     "title": "Reactive UI on Android with Scala",
                //     "description_html": "Reactive programming can bring many benefits to mobile application development, especially when implementing UI. User interfaces developed this way are naturally responsive and code tends to be much more concise, which leads to easier development and less bugs. Reactive Extensions is became quite popular among Android developers recently, unfortunately creating UI with this library tends to be very unnatural, partially due to Java language limitations. Using Scala and techniques borrowed from Functional Reactive Programming we can achieve much better results. This talk is not going to be about Scala itself, nor about using Scala on Android. This talk is going to show how we can use Scala to implement UI in reactive fashion, achieving better results, with less code. There will be quite a lot of Scala code, but it should be accessible for Java developers.",
                //     "speakers_keys": [
                //         "speaker-zbigniew-szymanski"
                //     ],
                //     "language": "EN"
                // },
                // "talk-ionic-io-services-for-hybrid-mobile-applications": {
                //     "title": "ionic.io - services for hybrid mobile applications",
                //     "description_html": "ionic.io - usługi dla hybrydowych aplikacji mobilnych W prezentacji przedstawię możliwości platformy ionic.io oraz ich wykorzystanie w hybrydowej aplikacji mobilnej. Podzielę się także nowościami ze świata Ionic i powiem parę słów o inicjatywie Ionic Poland. ionic.io - services for hybrid mobile applications In the presentation I will introduce service of the ionic.io platform and show how to use it in hybrid mobile applications. I'm going to share news from the ionic world and introduce Ionic Poland.",
                //     "speakers_keys": [
                //         "speaker-lukasz-olejarczuk"
                //     ],
                //     "language": "PL"
                // },
                // "talk-angular-js-i-cordova-tworzenie-hybrydowych-aplikacji-mobilnych": {
                //     "title": "AngularJS i Cordova - tworzenie hybrydowych aplikacji mobilnych",
                //     "description_html": "Prelekcja dotycząca programowania urządzeń mobilnych z wykorzystaniem AngularJS na systemy iOS, Android i Windows Phone z wykorzystaniem Cordova / Phonegap. Poruszone będą następujące tematy: wstęp do tworzenia hybrydowych aplikacji mobilnych, wykorzystanie AngularJS w budowie aplikacji webowych, zwiększanie wydajności aplikacji hybrydowych, zalecane narzędzia i biblioteki, typowe i nietypowe pułapki i sposoby ich rozwiązywania. Na koniec wystąpienia przewidziana dyskusja z uczestnikami.",
                //     "speakers_keys": [
                //         "speaker-krzysztof-scira"
                //     ],
                //     "language": "PL"
                // },
                // "talk-titanium-develop-native-mobile-apps-with-javascript": {
                //     "title": "Titanium: Develop Native Mobile Apps with JavaScript",
                //     "description_html": "Forget about the whole Mobile Web versus Native Apps debate; if you already (truly) know JavaScript then you can use those Web skills to create Native Apps! Titanium is a cross-platform proxy between JavaScript and the iOS, Android and Windows Native API's. Unlike some other solutions this allows you not only to access potentially any system API like that for Geolocation, but also use Native UI Components to build truly Native Interfaces. You wil be introduced to Titanium and see how easy it is to get started via actual code samples and live cross-platform demos. Bring your JavaScript skills and you will leave this presentation as a Native Mobile App Developer!",
                //     "speakers_keys": [
                //         "speaker-fokke-zandbergen"
                //     ],
                //     "language": "EN"
                // },
                // "talk-modern-ios-app-architecture": {
                //     "title": "Modern iOS App Architecture",
                //     "description_html": "Programowanie aplikacji na iOS zmieniają się z roku na roku wraz z rozwojem języka Objective-C, wprowadzenia nowego języka Swift jak i niezliczonych ulepszeń bibliotek wchodzących w skład iOS SDK. Prezentacja pokaże najlepsze praktyki jakie współczesne aplikacje powinny wykorzystywać.",
                //     "speakers_keys": [
                //         "speaker-michal-tuszynski"
                //     ],
                //     "language": "PL"
                // },
                // "talk-what-s-in-it-for-us-after-the-indiepocalipse": {
                //     "title": "What’s in it for us after the Indiepocalipse?",
                //     "description_html": "We’re an indie iOS studi of two. We released our first iPhone app for iOS 3.1 and we kept putting out small fun apps for the next five years. Times were good and we thought it’s always gonna be like this in the App Store. Apple isn’t into indies anymore and the App Store is a slaughterhouse. Tons of developers are in a kind of limbo - why is this happening and what to do after the Indiepocalipse is over? What is the next logical step - try harder on the App Store, pivot, change platforms? But now that the Indiepocalipse is upon us. Or is it?",
                //     "speakers_keys": [
                //         "speaker-marin-todorov"
                //     ],
                //     "language": "EN"
                // },
                // "talk-developing-software-for-dedicated-devices-using-agile": {
                //     "title": "Developing Software for Dedicated Devices using Agile",
                //     "description_html": "Agile methodologies like SCRUM, DaD and SAFe help us to effectively develop software products. But when developing software for dedicated devices for the consumer market such as navigation devices, watches and multimedia systems you need some adaptation to make it work. I’ll guide you through the world of software engineering using the principles of the SAFe framework (with some adaptations), starting from running Android on your device till having a final product in she shops. And of course some do’s – don’ts, tools that you could use and much more.",
                //     "speakers_keys": [
                //         "speaker-edwin-adriaansen"
                //     ],
                //     "language": "EN"
                // },
                // "talk-dont-reinvent-the-wheel-use-libraries-modern-android-stack": {
                //     "title": "Don't reinvent the wheel, use libraries: Modern Android Stack",
                //     "description_html": "Use of libraries gives you speed and smaller error rate than writing everything by yourself. In this talk you gonna learn about how to use modern libraries that make your developer life easier. From Timber through Picasso, ButterKnife to RoboSpice, Dagger2 and few other libs you gonna learn about modern approach to build Android apps that make your customers happy.",
                //     "speakers_keys": [
                //         "speaker-pawel-junak"
                //     ],
                //     "language": "EN"
                // },
                // "talk-unit-testy-w-androidzie-z-uzyciem-biblioteki-spock": {
                //     "title": "Unit Testy w Androidzie z użyciem biblioteki Spock",
                //     "description_html": "Chciałbym pokazać jak w łatwy, prosty i przyjemny sposób można pisać Unit Testy na platformę Android z użyciem biblioteki Spock. Mój wykład pokazuję w jaki sposób konfigurować a potem tworzyć test w groovy-m dla Androidowego projektu.",
                //     "speakers_keys": [
                //         "speaker-konrad-krakowiak"
                //     ],
                //     "language": "PL"
                // },
                //
                // "talk-android-data-binding-nie-tylko-w-teorii": {
                //     "title": "Android Data Binding nie tylko w teorii",
                //     "description_html": "Data Binding na Androidzie - zalety, wady, przykłady użycia. Demonstracja biblioteki ułatwiającej (u)życie.",
                //     "speakers_keys": [
                //         "speaker-sebastian-kacprzak"
                //     ],
                //     "language": "PL"
                // },
                // "talk-xamarin-dla-nie-tylko-deweloperow-androida": {
                //     "title": "Xamarin dla (nie tylko) deweloperów Androida",
                //     "description_html": "W ramach moich przygotowań do warsztatu o Xamarinie na codepot.pl 2015 powstała prezentacja o tym czym właściwie ta platforma jest. Często, mylnie, mówi się że Xamarin to kolejna hybrydowa technologia, zupełnie jak, fuj, cordova.W ramach prezentacji dowiemy się:<br/>- co to właściwie jest Xamarin<br/>- czy to druga, równie kiepska, technologia co Cordova<br/>- co właściwie jest natywne (platform-specific) a co można współdzielić między projektami<br/>- jakie natywne komponenty są dostępne (UIKit dla iOS, RecycleView czy Support Library dla Androida)<br/>- czy to jest wreszcie to rozwiąznie gdzie piszemy raz a działa wszędzieBędę szczęśliwy jeśli w czasie prezentacji iOS-owcy pomyślą sobie \"o fajnie, normalnie mam tam UIKit i moge nawet pisać kawałki w Objective-C\", a Androidowcy westchną \"o super, jest wspierana najnowsza wersja Support Library, już tydzień po wydaniu\".",
                //     "speakers_keys": [
                //         "speaker-aleksander-piotrowski"
                //     ],
                //     "language": "PL"
                // },
                // "talk-material-design-with-android-design-library": {
                //     "title": "Material design with Android Design Library",
                //     "description_html": "At Google I/O 2015 the Material Design Support Library was announced, and with it creating material apps suddenly got a lot easier. With a little help from the new Android Design Support Library, we are getting a number of important material design components to all developers and to all Android 2.1 or higher devices. In this talk I will show most important components of design library from developer point of view. I will show how to start and what may be unintuitive in the begining.",
                //     "speakers_keys": [
                //         "speaker-karol-kowalski"
                //     ],
                //     "language": "PL"
                // },
                // "talk-optymalizacja-hierarchii-widokow-na-platformie-android": {
                //     "title": "Optymalizacja hierarchii widoków na platformie Android",
                //     "description_html": 'Optymalizacja hierarchii widoków na przykładzie aplikacji "Stereoscopic Image Calculator" realizowanej w ramach projektu ROS3D. Celem prezentacji jest omówienie sposobu renderowania widoków jako podstawy do opracowywania wydajnych aplikacji na platformę Android. Na prezentacji porszuane będą następujące tematy:<ol><li>Szczegóły techniczne dotyczące sposobu renderowania widoków<li>Omówienie kluczowych metod, które są wywoływane podczas rysowania i odświeżania poszczególnych elementów<li>Pisanie własnych "ViewGroup"<li>Narzędzie "HierarchyViewer"<li>Pomiary wykokane na przykładzie aplikacji "Stereoscopic Image Calculator"',
                //     "speakers_keys": [
                //         "speaker-michal-wlodarczyk"
                //     ],
                //     "language": "PL"
                // },
                // "talk-czy-ar-i-vr-zmienia-nasza-przyszlosc": {
                //     "title": "Czy AR i VR zmienią naszą przyszłość?",
                //     "description_html": "W ostatnim czasie przeżywamy prawdziwy boom na technologie Virtual i Augmented Reality dzięki pojawieniu się łatwo dostępnych „gogli” na telefon takich jak Google Cardboard czy Samsung Gear VR. Czy mobilne zwiedzanie odległych światów dzięki VR lub interaktywne gry z wykorzystaniem AR wzbogacą niedługo naszą percepcję? Przegląd dostępnych urządzeń oraz środowisk programistycznych. Analiza przykładów dobrego użycia i wskazówki jakich błędów uniknąć, aby aplikacja AR/VR odniosła sukces.",
                //     "speakers_keys": [
                //         "speaker-maciej-schmidt"
                //     ],
                //     "language": "PL"
                // },
                // "talk-potrzeby-biznesowe-a-technologia-w-mobdev-na-przykladzie-seqr": {
                //     "title": "Biznes a technologia w mobdev - SEQR case study",
                //     "description_html": "Specjaliści z dziedziny rozwoju produktu, użyteczności i technologii opowiedzą:- W jaki sposób warto planować rozwój ekosystemu usług płatniczych w sytuacji, gdy potrzeba jak najszybciej adaptować się do zmieniającego się rynku, potrzeb użytkowników i działań konkurencji.<br/>- Jak skalujemy SCRUM by dobrze koordynować pracę wielu zespołów.<br/>- Dlaczego stawiamy na jak najszybsze zmiany (i ewentualne niepowodzenia) i jak się to nam udaje.<br/>- Dotychczasowa implementacja Lean Startup - doświadczone pętle zwrotne między strategią biznesową, UX, a zastosowaną technologią.<br/>- Dlaczego User Experience jest tak ważny - jaką wartość biznesową daje w przypadku SEQR.",
                //     "speakers_keys": [
                //         "speaker-daniel-rurarz",
                //         "speaker-lukasz-szadkowski",
                //         "speaker-michal-majcherski"
                //     ],
                //     "language": "PL"
                // },
                // "talk-czy-nastala-era-continuous-everything": {
                //     "title": "Czy nastała era \"continuous everything\"? Przewodnik po bezustannym procesie tworzenia aplikacji mobilnych na przykładzie Matrix42 Mobile [case study]",
                //     "description_html": "Przedstawienie idei medotologii \"continiuous\", skupiając się na aspektach: integration, development, delivery, testing i wszystich pozostałych, wykorzystywanych w tworzeniu aplikacji mobilnych na przykładzie Matrix42 Mobile, wdrażanej na platformy Android oraz iOS. Kilka słów wprowadzających w połączeniu z przykładami wykorzystania w procesie developmentu - przybliżenie narzędzi oraz sposobu ich wykorzystania w codziennej pracy. Dodatkowo kilka zdań na tematy pokrewne niezwykle ważne dla użytkownika końcowego, czyli \"BYOD - Private Devices, Company Content\" oraz \"Mobile Management\".Link <a href='https://play.google.com/store/apps/details?id=com.matrix42.m42mobileLink'>Android</a>,<a href='https://itunes.apple.com/pl/app/m42mobile/id430536897?mt=8'>iOS</a>",
                //     "speakers_keys": [
                //         "speaker-pawel-wojdera"
                //     ],
                //     "language": "PL"
                // },
                // "talk-html5-goes-for-a-ride-czyli-wyzwania-dla-technologii-webowych-w-przemysle-automotive": {
                //     "title": "HTML5 goes for a ride - Czyli wyzwania dla technologii webowych w przemyśle automotive",
                //     "description_html": "Biorąc pod uwagę fakt, że samochody należą do konstrukcji dość mobilnych było jedynie kwestią czasu kiedy trafi tam HTML5. Tradycyjne środowisko tej technologii dawno przestało przestało być jedynym.Jak jednak wygląda tworzenie aplikacji typu IVI (In-vehicle infotainment)? Czym ekran w aucie różni się od tabletu?Opowiem o wyzwaniach jakie stawia przed HTML5 rynek automotive oraz innych doświadczeniach specyficznych dla tej platformy. W części praktycznej zaprezentuje różnice w działaniu demonstracyjnej aplikacji, na zbliżonym do docelowego sprzęcie, w porównaniu z urządzeniami mobilnymi i PC.",
                //     "speakers_keys": [
                //         "speaker-lena-rodziewicz"
                //     ],
                //     "language": "PL"
                // },
                //
                // "talk-hacking-bluetooth-smart": {
                //     "title": "Hacking Bluetooth Smart",
                //     "description_html": "Rozłożymy na czynniki pierwsze bezpieczeństwo jednej z najpopularniejszych, a zarazem najbliższej aplikacjom mobilnym technologii związanej z Internet of Things: Bluetooth Smart. Jak zwykle z pomocą niezawodnej publiczności Mobilization, na rzeczywistych przykładach krok po kroku wspólnie zaatakujemy kolejne urządzenia: m.in. beacony, opaskę sportową, samochód. Analizując warunki i skutki ataków ustalimy wpływ na ryzyko konkretnych podatności, i zastanowimy się w jakich przypadkach bezpieczeństwo będzie naprawdę istotne. Uczestnicy wyniosą spojrzenie intruza na nową technologię oraz jej ograniczenia, co pozwoli projektować bezpieczniejsze rozwiązania.",
                //     "speakers_keys": [
                //         "speaker-slawomir-jasek"
                //     ],
                //     "language": "PL"
                // },
                // "talk-hunt-me-od-kuchni-jak-powstal-innowacyjny-sposob-na-szukanie-pracy": {
                //     "title": "Hunt Me od kuchni - jak powstał innowacyjny sposób na szukanie pracy",
                //     "description_html": "Podczas prelekcji opowiemy jak powstał projekt angażujący 3 niezależne zespoły developerskie.Tematami na których się skupimy będzie organizacja pracy nad aplikacją powstającą w 3 różnych miejscach i z wykorzystaniem 3 różnych platform, oraz część wspólna dla wszystkich obsługiwanych platform, czyli API po stronie serwera. Przy jego tworzeniu z powodzeniem integrowaliśmy różnorodne technologie (WebAPI, OAuth), korzystaliśmy z istniejących bibliotek zewnętrznych (Ninject, EF) i stworzonych w Grupie Pracuj (GP.Juno, EndpointSwitcher). Opowiemy też o tym co niewidoczne - czyli architekturze, WebAPI jako rozbudowanym proxy i funkcjonowaniu na w rozproszonym środowisku. Zapraszamy!",
                //     "speakers_keys": [
                //         "speaker-maciej-chwiloc",
                //         "speaker-cezary-kapicki"
                //     ],
                //     "language": "PL"
                // },
                // "talk-android-auto": {
                //     "title": "Android Auto",
                //     "description_html": "Aplikacja Android Auto stworzona została, aby umożliwić dostęp do głównych funkcji smartphona przy zachowaniu maksimum bezpieczeństwa w trakcie jazdy. Kontrolowanie nawigacji, odtwarzacza audio, telefonu i wiadomości bezpośrednio z wbudowanego ekranu przy użyciu głosu i przycisków na kierownicy pozwala skupić się na drodze i zminimalizować niebezpieczeństwo związane z obsługą smartphona.Podczas prezentacji pokażemy działającą implementację Android Auto wraz z krótkim omówieniem funkcjonalności, a także przeprowadzimy Państwa przez proces tworzenia aplikacji umożliwiającej komunikację z kierowcą w trakcie jazdy.",
                //     "speakers_keys": [
                //         "speaker-anton-miniailo",
                //         "speaker-jacek-rondio"
                //     ],
                //     "language": "PL"
                // },
                // "talk-co-kryje-pianka-czyli-o-nowej-wersji-androida": {
                //     "title": "Co kryje Pianka, czyli o nowej wersji Androida.",
                //     "description_html": "Pewnie każdy fan i developer Androida oglądał Google I/O, podczas którego usłyszał o zmianach M-ki. Nowy sposób zarządzania permission'ami oraz doze mode to tylko nieliczne zmiany, które nowa wersja wprowadza. Poznaj jakie zmiany powinieneś(aś)  zrobić, by Twoja aplikacja  nadal poprawnie działała na Androidzie 6.0 (Marshmallow) .  Ta prelekcja uwzględnia wiele nowości i zmian o których Google nie wspomina, nie daj się zaskoczyć ... przyjdź.",
                //     "speakers_keys": [
                //         "speaker-michal-szczepanik"
                //     ],
                //     "language": "PL"
                // },
                // "talk-no-platformy-natywne": {
                //     "title": "Porzuć platformy natywne! Czyli czemu HTML5 jest lepszy.",
                //     "description_html": "Skoro to czytasz, to znaczy że tytuł zadziałał. Tak na prawdę nie twierdzę że HTML5 jest lepszy. On jest inny, a to można wykorzystać w naszej pracy, jaką jest dostarczanie gotowych, działających rozwiązań klientom.Podczas prezentacji chcę poruszyć temat zalet, wad i różnic w programowaniu aplikacji klienckich na platformy natywne i webowe. Przedstawię powody czemu moim zdaniem większość MVP można wykonywać przy użyciu HTML5 zamiast technologii natywnych.Dla uwiarygodnienia mojej tezy planuję wykonać odrobinę live-codingu.",
                //     "speakers_keys": [
                //         "speaker-tomasz-netczuk"
                //     ],
                //     "language": "PL"
                // },
                // "talk-ux-pitfalls-in-multi-os-apps": {
                //     "title": "UX pitfalls in multi-os apps",
                //     "description_html": "In this session we will answer simple but demanding questions: </br>- Is UX really device agnostic? </br>- What should be our approach when designing a multi-OS or multi-platform apps? </br>- Is the philosophy “design once – run anywhere” still alive? </br> We will take you on a short journey from a simple idea to the mockup realization. Be prepared for silly ideas, tricky questions and unconventional approach to challenges awaiting you in the design process.",
                //     "speakers_keys": [
                //         "speaker-rafal-szpoton", "speaker-sebastian-gos", "speaker-lech-migdal"
                //     ],
                //     "language": "EN"
                // },
                // "talk-kiedy-zespol-scrumowy-nie-kocha-swojego-produktu-mobilnego": {
                //     "title": "Kiedy zespół Scrumowy nie kocha swojego produktu mobilnego",
                //     "description_html": "Celem prezentacji jest przedstawienie różnych technik (w tym metod Agile UX), które mogą sprawić, że zespół Scrumowy bardziej zaangażuje się w produkt i nie skupi tylko na realizacji oczekiwań Product Ownera w określonych odcinkach czasu. Jak sprawić, żeby członkowie zespołu scrumowego utożsamiali się z produktem, który tworzą, co jest szczególnie trudne w dużych organizacjach? Prezentacja oparta na doświadczeniach i eksperymentach przeprowadzonych w kilku zespołach Scrumowych, pracujących nad takimi projektami, jak aplikacja mobilna czy strona responsywna.",
                //     "speakers_keys": [
                //         "speaker-michal-aleksander"
                //     ],
                //     "language": "PL"
                // },
                // "talk-zwinna-lodz-przedstawia-panel": {
                //     "title": "Jeden zespół czy zespół per platforma?",
                //     "description_html": "Panel dyskusyjny oparty na konkretnych case studies organizowany przez grupę Zwinna Łódź.<br>Czy interdyscyplinarność w jednym zespole ma dobry wpływ na tworzenie nowych funkcjonalności? Jak wygodnie synchronizować pracę, gdy kilka zespołów różnych platform tworzy jeden produkt? Zalety i wady, czyli które podejście jest bardziej korzystne?",
                //     "speakers_keys": [
                //         "speaker-pawel-urban", "speaker-lukasz-krupa", "speaker-pawel-wojdera", "speaker-filip-miloszewski"
                //     ],
                //     "language": "PL"
                // }
            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
                },
                'break-hello-world': {
                    title: 'Hello World',
                    description_html: 'This is couple of words about Mobilization. For community by community.'
                },
                'break-coffee': {
                    title: 'Coffee Break',
                    description_html: ''
                },
                'break-lunch': {
                    title: 'Lunch Break',
                    description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.<br>Attendees will have soldiers\' soup outside the building!',
                },
                'break-no-coffee': {
                    title: 'No Coffee Break',
                    description_html: ''
                },
                'break-finally': {
                    title: 'Finally meeting',
                    description_html: 'Time to give thanks to all the sponsors and the organizer\'s team.'
                },
                'break-afterparty': {
                    title: 'AfterParty in Indeks Club',
                    description_html: 'Free pizza and beer and follow up talks.<br>5min from conference venue.<br>Stefanowskiego 17 90-452 Łódź'
                }
            },
            venues: {
                "venue-diamond": {
                    "title": "Diamond"
                },
                "venue-seqr": {
                    "title": "SEQR"
                },
                "venue-mobica": {
                    "title": "Platinum"
                },
                "venue-platinum": {
                    "title": "Mobica"
                },
                "venue-tomtom": {
                    "title": "TomTom"
                }
            },
            schedule: {
                // "slot-registration": {"break_key": "break-registration"},
                // "slot-hello-world": {"break_key": "break-hello-world"},
                // "slot-1": {
                //     "venue-diamond": {
                //         "talk_key": "talk-potrzeby-biznesowe-a-technologia-w-mobdev-na-przykladzie-seqr"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-developing-software-for-dedicated-devices-using-agile"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-html5-goes-for-a-ride-czyli-wyzwania-dla-technologii-webowych-w-przemysle-automotive"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-android-auto"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-ux-pitfalls-in-multi-os-apps"
                //     }
                // },
                // "slot-coffee-1": {"break_key": "break-coffee"},
                //
                // "slot-2": {
                //     "venue-diamond": {
                //         "talk_key": "talk-optymalizacja-hierarchii-widokow-na-platformie-android"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-hacking-bluetooth-smart"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-modern-ios-app-architecture"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-titanium-develop-native-mobile-apps-with-javascript"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-espressive-functional-testing-with-espresso"
                //     }
                // },
                // "slot-coffee-2": {"break_key": "break-coffee"},
                // "slot-3": {
                //     "venue-diamond": {
                //         "talk_key": "talk-app-indexing-i-deep-linking-w-aplikacjach-androidowych"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-watch-out-for-the-watch"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-unit-testy-w-androidzie-z-uzyciem-biblioteki-spock"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-hunt-me-od-kuchni-jak-powstal-innowacyjny-sposob-na-szukanie-pracy"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-angular-js-i-cordova-tworzenie-hybrydowych-aplikacji-mobilnych"
                //     }
                // },
                // "slot-coffee-3": {"break_key": "break-coffee"},
                // "slot-4": {
                //     "venue-diamond": {
                //         "talk_key": "talk-behavior-driven-development"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-ionic-io-services-for-hybrid-mobile-applications"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-dont-reinvent-the-wheel-use-libraries-modern-android-stack"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-clean-architecture"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-kotlin-for-android"
                //     }
                // },
                // "slot-lunch": {"break_key": "break-lunch"},
                // "slot-5": {
                //     "venue-seqr": {
                //         "talk_key": "talk-kiedy-zespol-scrumowy-nie-kocha-swojego-produktu-mobilnego"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-czy-nastala-era-continuous-everything"
                //     },
                // },
                // "slot-6": {
                //     "venue-diamond": {
                //         "talk_key": "talk-reaktywne-programowanie-z-rxjava"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-no-platformy-natywne"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-swift-and-objective-c-interoperability"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-dagger-2-dependency-injection-w-kodzie-produkcyjnym"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-qtquick-spotyka-html"
                //     }
                // },
                // "slot-coffee-4": {"break_key": "break-coffee"},
                // "slot-7": {
                //     "venue-diamond": {
                //         "talk_key": "talk-android-data-binding-nie-tylko-w-teorii"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-dobry-zwyczaj-nie-odziedziczaj"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-hipster-oriented-programming"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-co-kryje-pianka-czyli-o-nowej-wersji-androida"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-material-design-with-android-design-library"
                //     }
                // },
                // "slot-coffee-5": {"break_key": "break-coffee"},
                // "slot-8": {
                //     "venue-diamond": {
                //         "talk_key": "talk-what-s-in-it-for-us-after-the-indiepocalipse"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-reactive-ui-on-adroid-with-scala"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-zwinna-lodz-przedstawia-panel"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-xamarin-dla-nie-tylko-deweloperow-androida"
                //     },
                // },
                // "slot-no-coffee-6": {"break_key": "break-no-coffee"},
                // "slot-finally": {"break_key": "break-finally"},
                // "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Nothing to say.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/speakers/jens-ravens.jpg"
                }
            },
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function () {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function () {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        }
    },
    collections: {
        posts: function () {
            return this.getCollection('documents').findAllLive({
                relativeOutDirPath: 'posts'
            });
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: false
                }
            }
        }
    },
    events: {
        serverExtend: function (opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function (req, res, next) {
                var ref;
                if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        }
    }
};

module.exports = docpadConfig;

// ---
// generated by coffee-script 1.9.2
