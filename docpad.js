var docpadConfig;
var indexOf = [].indexOf || function (item) {
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
                "agenda": true,
                "talks": false,
                "speakers": true,
                "volunteers": true
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
                diamond: [
                    {"name": "Rndity", "logo_url": "/images/sponsors/rndity.png", "link": "http://rndity.com/"},
                ],
                platinum: [
                    {
                        "name": "Cybercom",
                        "logo_url": "/images/sponsors/cybercom.png",
                        "link": "http://www.cybercom.com/pl/Poland/"
                    },
                    {"name": "Ericpol", "logo_url": "/images/sponsors/ericpol.jpeg", "link": "http://www.ericpol.pl"},
                    {
                        "name": "Harman",
                        "logo_url": "/images/sponsors/harman.jpeg",
                        "link": "http://services.harman.com/"
                    },
                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png",
                        "description_html": "<p>Mobica provides high-end software development and integration services for consumer electronics manufacturers, operators, application vendors and platform providers. We work on all mainstream mobile platforms and operating systems and can work on virtually any component of a device: from embedded systems and device drivers, core multimedia components and middleware, through to innovative applications/UI design and connectivity solutions.</p><p>We have grown a world-class team of architects, project managers and software engineers based in our UK and Poland development centres, enabling us to provide consultancy services across the software and product lifecycle from initial concept definition and design, through to implementation and testing.</p><p>Mobica adds value to our customers through a combination of flexible consultancy services, the highest levels of technical expertise, and the creation of innovative, technically optimised software component design.</p><p>Mobica are listed in The Sunday Times Tech Track 100 as the 4th fastest growing private technology company in the UK in 2009. See: <a href='http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf'>http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf</a></p><p>Mobica is hiring and looking for talented engineers! Check our current job offers at <a href='http://www.mobica.com/careers'>http://www.mobica.com/careers</a></p><p>&nbsp;</p>"
                    },
                    {
                        "name": "Oberthur Technologies R&D Poland",
                        "logo_url": "/images/sponsors/oberthur.png",
                        "link": "http://www.oberthur.com/"
                    },
                    {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                    {
                        "name": "TomTom",
                        "logo_url": "/images/sponsors/tomtom-on-white.png",
                        "link": "http://www.tomtom.com/pl_pl/"
                    },
                ],
                gold: [
                    {
                        "name": "Appyourself",
                        "logo_url": "/images/sponsors/appyourself.png",
                        "link": "http://www.appyourself.net/"
                    },
                    {
                        "name": "Ceri International",
                        "logo_url": "/images/sponsors/ceri.png",
                        "link": "http://www.ceri.pl/"
                    },
                    {"name": "Intive", "logo_url": "/images/sponsors/intive.png", "link": "https://www.intive.com/en"},
                    {"name": "Pracuj.pl", "logo_url": "/images/sponsors/pracujpl.png", "link": "http://www.pracuj.pl/"},
                ],
                silver: [
                    {
                        "name": "ITKontrakt",
                        "logo_url": "/images/sponsors/itkontrakt.png",
                        "link": "https://www.itkontrakt.pl/"
                    },
                    {"name": "Sii", "logo_url": "/images/sponsors/sii.png", "link": "http://sii.pl/oddzialy/lodz/"},
                ],
                copper: [
                    {
                        "name": "Jetbrains",
                        "logo_url": "/images/sponsors/jetbrains.png",
                        "link": "http://www.jetbrains.com/"
                    }
                ],
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.jpeg',
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódźarea. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],
                supporters: [
                    // {"name": "Miliataria Łódź", "logo_url":"/images/partners/militaria.png", "link":"http://militaria.lodz.pl/"},
                    {
                        "name": "Krawka",
                        "logo_url": "/images/partners/krawka.png",
                        "link": "https://www.etsy.com/shop/Krawka?ref=hdr_shop_menu"
                    },
                    {
                        "name": "Medialab",
                        "logo_url": "/images/partners/medialab.png",
                        "link": "http://www.medialab.pl/"
                    },
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
                    {
                        "name": "GDG Kraków",
                        "logo_url": "/images/partners/gdgkrakow.jpeg",
                        "link": "http://www.meetup.com/GDG-Krakow/"
                    },
                    {
                        "name": "Let Swift",
                        "logo_url": "/images/partners/letswift.png",
                        "link": "https://www.facebook.com/letswiftwroclaw/"
                    },
                    // {"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.png","link":"http://devday.pl"},
                    // {"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.png","link":"http://codepot.pl"},
                    {
                        "name": "Zwinna Łódź",
                        "logo_url": "/images/partners/zwinna_lodz.jpeg",
                        "link": "http://zwinnalodz.eu/"
                    },
                    {
                        "name": "Mobile Warsaw",
                        "logo_url": "/images/partners/mw-logo.png",
                        "link": "http://mobile-warsaw.pl"
                    },
                    {
                        "name": "Meet Mobile",
                        "logo_url": "/images/partners/meet-mobile.png",
                        "link": "https://www.meetup.com/meet-mobile/"
                    },
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
                    // {"name":"Linux Magazine","logo_url":"/images/partners/linuxmag.png","link":"http://www.linux-magazine.pl"},
                    {
                        "name": "Packt Publishing",
                        "logo_url": "/images/partners/packt.png",
                        "link": "https://www.packtpub.com/"
                    },
                    // {"name":"Młodzi w Łodzi","logo_url":"/images/partners/mlodzi-w-lodzi.jpg","link":"http://mlodziwlodzi.pl"},
                    {"name": "Helion", "logo_url": "/images/partners/helionpl.png", "link": "http://helion.pl"},
                    {
                        "name": "Manning Publications",
                        "logo_url": "/images/partners/manning.png",
                        "link": "http://www.manning.com"
                    },
                    {
                        "name": "Pluralsight",
                        "logo_url": "/images/partners/pluralsight.png",
                        "link": "https://www.pluralsight.com/"
                    }
                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:15'
                },
                'slot-1': {
                    from: '9:15',
                    to: '10:00'
                },
                'slot-coffee-1': {
                    from: '10:00',
                    to: '10:20'
                },
                'slot-2': {
                    from: '10:20',
                    to: '11:05'
                },
                'slot-coffee-2': {
                    from: '11:05',
                    to: '11:25'
                },
                'slot-3': {
                    from: '11:25',
                    to: '12:10'
                },
                'slot-lunch': {
                    from: '12:10',
                    to: '13:15'
                },
                'slot-during-lunch': {
                    from: '12:20',
                    to: '13:05'
                },
                'slot-4': {
                    from: '13:15',
                    to: '14:00'
                },
                'slot-coffee-3': {
                    from: '14:00',
                    to: '14:15'
                },
                'slot-5': {
                    from: '14:15',
                    to: '15:00'
                },
                'slot-coffee-4': {
                    from: '15:00',
                    to: '15:15'
                },
                'slot-6': {
                    from: '15:15',
                    to: '16:00'
                },
                'slot-coffee-5': {
                    from: '16:00',
                    to: '16:15'
                },
                'slot-7': {
                    from: '16:15',
                    to: '17:00'
                },
                'slot-no-coffee-6': {
                    from: '17:00',
                    to: '17:10'
                },
                'slot-finally': {
                    from: '17:10',
                    to: '17:40  '
                },
                'slot-afterparty': {
                    from: '18:15',
                    to: '23:59'
                },

            },
            speakers: {
                //1
                "speaker-jens-ravens": {
                    "firstname": "Jens",
                    "lastname": "Ravens",
                    "bio_html": "Jens is an iOS, macOS and backend Developer, writing ObjC since 2006. Currently working at nerdgeschoss helping clients to create awesome apps. Organiser of the monthly swift.berlin meetup. Scaring people with functional concepts since 2014.",
                    "www": "http://jensravens.com/",
                    "twitter": "https://twitter.com/jensravens",
                    "facebook": "",
                    "github": "https://github.com/JensRavens",
                    "linkedin": "https://www.linkedin.com/in/jens-ravens-31416251",
                    "photo_url": "/images/speakers/jens-ravens.jpg"
                },
                //2
                "speaker-pedro-buendia": {
                    "firstname": "Pedro",
                    "lastname": "Piñera Buendía",
                    "bio_html": "Pedro is an iOS Developer at SoundCloud. Open source lover and runner in his free time. He loves coding and contributing with his own libraries. In his spare time, Pedro is starting his own project, GitDo. Open to learning new concepts and paradigms, of late he is interested in architectures like VIPER, and reactive programming.",
                    "www": "http://www.ppinera.es/",
                    "github": "https://github.com/pepibumur",
                    "twitter": "https://twitter.com/pepibumur",
                    "photo_url": "/images/speakers/pedro-buendia.jpeg"
                },
                //3
                "speaker-konstantin-raev": {
                    "firstname": "Konstantin",
                    "lastname": "Raev",
                    "bio_html": "Konstantin is a Developer at Facebook who is working in React Native team. For the last few years his passions were infrastructure, Continuous Delivery, JavaScript and stable builds. Before joining Facebook he worked at a New Zealand startup <a href='www.booktrack.com'>Booktrack</a>.",
                    "wwww": "",
                    "github": "https://github.com/bestander/",
                    "linkedin": "https://uk.linkedin.com/in/koraev",
                    "twitter": "https://twitter.com/bestander_nz",
                    "medium": "https://medium.com/@bestander_nz",
                    "photo_url": "/images/speakers/konstantin-raev.jpeg"
                },
                //4
                "speaker-gautier-mechling": {
                    "firstname": "Gautier",
                    "lastname": "Mechling",
                    "bio_html": "Gautier is an aspiring Software Craftsman in Paris, France. Agile thinker passionate in Android Development, he creates and maintains some FOSS tools to improve productivity. Talk to him about Kotlin, Clean Code, or Free Software and you will see his eyes light up.",
                    "wwww": "http://nilhcem.com",
                    "github": "https://github.com/Nilhcem",
                    "twitter": "https://twitter.com/Nilhcem",
                    "photo_url": "/images/speakers/gautier-mechling.jpeg"
                },
                //5
                "speaker-nicola-zaghini": {
                    "firstname": "Nicola",
                    "lastname": "Zaghini",
                    "bio_html": "Nicola Zaghini is a software architect at Mobile Travel Technologies. He has been developing mobile apps since the first iOS SDK was released, from indie game development to major airlines and travel companies. Prior to that, he enjoyed Java development as professional and researcher in academia. He is currently in charge of mobile architecture in MTT and helps teams deliver amazing apps.",
                    "www": "",
                    "twitter": "https://twitter.com/nzaghini",
                    "photo_url": "/images/speakers/nicola-zaghini.jpeg"
                },
                //6
                "speaker-roberto-orgiu": {
                    "firstname": "Roberto",
                    "lastname": "Orgiu",
                    "bio_html": "Android developer and enthusiastic, DroidCon and community fan, I love the Android environment and pushing the limits of the platform.",
                    "www": "",
                    "twitter": "https://github.com/tiwiz",
                    "photo_url": "/images/speakers/roberto-orgiu.jpeg"
                },
                //7
                "speaker-eric-kok": {
                    "firstname": "Eric",
                    "lastname": "Kok",
                    "bio_html": "Hi, I'm Eric. I currently work as a contractor at KBC Bank in Belgium creating the next mobile banking app. But if you know me, it is through my open-source work published under the 2312 development name. I build apps, such as RateBeer, and libraries, such as RxCupboard. I love brewing and drinking craft beer, chatting about Android and building with Legos with my son.",
                    "www": "",
                    "twitter": "https://twitter.com/erickoknl",
                    "photo_url": "/images/speakers/eric-kok.jpeg"
                },
                //8
                "speaker-dan-cuellar": {
                    "firstname": "Dan",
                    "lastname": "Cuellar",
                    "bio_html": "Dan Cuellar is the creator of the open source mobile automation framework Appium, and Head of Test Engineering at FOODit in London. Previously, he headed the test organisation at Shazam in London and Zoosk in San Francisco, and worked as a software engineer on Microsoft Outlook for Mac, and other products in the Microsoft Office suite. He is an advocate of open source technologies and technical software testing. He earned a Bachelor’s degree in Computer Science, with a minor in Music Technology, from the world-renowned School of Computer Science at Carnegie Mellon University in Pittsburgh.",
                    "github": "https://github.com/penguinho",
                    "linkedin": "https://uk.linkedin.com/in/dacuellar",
                    "www": "",
                    "twitter": "https://twitter.com/thedancuellar",
                    "photo_url": "/images/speakers/dan-cuellar.jpeg"
                },
                //9
                "speaker-roman-mazur": {
                    "firstname": "Roman",
                    "lastname": "Mazur",
                    "bio_html": "Roman has been working with Android for more than 6 years. You can find him delivering fixes and new features to a plenty of Android libraries and frameworks including support library, Robolectric, Madge, Spoon, Retrofit, and Helium. At Stanfy he is working on a customized Android OS for in-room tablets installed at hotels by KEYPR.",
                    "www": "https://www.stanfy.com/",
                    "github": "https://github.com/roman-mazur",
                    "twitter": "https://twitter.com/roman_mazur",
                    "photo_url": "/images/speakers/roman-mazur.jpeg"
                },
                //10
                "speaker-markus-junginger": {
                    "firstname": "Markus",
                    "lastname": "Junginger",
                    "bio_html": "Markus Junginger is an Android enthusiast and developer since the first SDK release in 2007. His mobile software company greenrobot focuses on high quality Android apps and open source libraries, which are widely used by many popular apps. Markus has 15+ years experience with Java and did his first mobile software project in 2001. He regularly speaks and writes about Android, gives Android trainings, and develops for Android.",
                    "www": "",
                    "twitter": "https://twitter.com/greenrobot_de",
                    "photo_url": "/images/speakers/markus-junginger.jpeg"
                },
                //11
                "speaker-madis-pink": {
                    "firstname": "Madis",
                    "lastname": "Pink",
                    "bio_html": "Madis is currently working on JRebel for Android at ZeroTurnaround. He started hacking on Android apps on a T-Mobile G1 more than 7 years ago and quickly grew a particular interest in build systems and developer tooling. His previous experience includes working on the Android Platform team at Spotify and producing multiple apps at Mobi Lab. During his free time he likes to dabble around with guitars and home recording.",
                    "www": "",
                    "github": "https://github.com/madisp",
                    "twitter": "https://twitter.com/madisp",
                    "photo_url": "/images/speakers/madis-pink.jpeg"
                },
                //12
                "speaker-pablo-guardiola": {
                    "firstname": "Pablo",
                    "lastname": "Guardiola",
                    "bio_html": "I'm a Software Engineer, lover of new technologies, passionate about challenges and motivated to continue learning current coding languages and methodologies. I'm a regular attendee at developers’ events and meetups. I'm a Testing-lover and I try to share my knowledge collaborating @AprendiendoTDD and @theEvnt facilitating coding dojos, katas and other stuff.",
                    "www": "http://pguardiola.com/",
                    "github": "https://github.com/Guardiola31337",
                    "twitter": "https://twitter.com/guardiola31337",
                    "photo_url": "/images/speakers/pablo-guardiola.jpeg"
                },
                //13
                "speaker-jorge-castillo": {
                    "firstname": "Jorge",
                    "lastname": "Castillo",
                    "bio_html": "Jorge Castillo is a spanish experienced Android developer currently working as an Android Engineer at Jobandtalent, an important International product company from Madrid. Its main work is focused on Open Source projects.",
                    "www": "http://jorgecastillo.xyz/",
                    "twitter": "https://twitter.com/JorgeCastilloPr",
                    "github": "https://github.com/JorgeCastilloPrz/",
                    "photo_url": "/images/speakers/jorge-castillo.jpeg"
                },
                //14
                "speaker-inaki-villar": {
                    "firstname": "Inaki",
                    "lastname": "Villar",
                    "bio_html": "Android Developer since 5 years ago. I worked with Bank apps in Spain for three years. Later I moved to Ireland to work with apps of Airlines and GSM carriers. Actually I'm living in Thailand working for Agoda. I'm Google Developer Expert and I enjoy being involve with the android community.",
                    "www": "",
                    "github": "https://github.com/cdsap",
                    "twitter": "https://twitter.com/inyaki_mwc",
                    "photo_url": "/images/speakers/inaki-villar.jpeg"
                },
                //15
                "speaker-enrique-manas": {
                    "firstname": "Enrique",
                    "lastname": "López Mañas",
                    "bio_html": "Enrique López-Mañas is a Google Developer Expert and independent IT consultor. He has been working with mobile technologies and learning from then since 2007.  He is an avid contributor to the Open Source community and a FLOSS (Free Libre Open Source Software) kind of guy, being among the top 10 Open Source Java Contributors in Germany. He is a part of the Google LaunchPad accelerator, where he participates in Google global initiatives to influence over hundreds of the best startups from all around the globe. He is also a Big Data and Machine Learning aficionado. On his free time he rides his bike, take pictures and travel until extenuation. He also writes literature and enjoys all kind of arts. He also likes to write about himself in third person.",
                    "www": "http://www.lopez-manas.com/",
                    "github": "https://github.com/kikoso",
                    "twitter": "https://twitter.com/eenriquelopez",
                    "photo_url": "/images/speakers/enrique-manas.jpeg"
                },
                //16
                "speaker-hugo-visser": {
                    "firstname": "Hugo",
                    "lastname": "Visser",
                    "bio_html": "Hugo is a software engineer who has worked on enterprise, desktop and mobile software products. Since the introduction of Android he has been steadily focussing on developing for Android only, resulting in his first app in 2009. Hugo has released several open source libraries and tools to help him and other developers build better software. He’s a Google Developer Expert for Android and one of the organizers of the Dutch Android User Group. With his company Little Robots, he focuses on smart use of Android in every possible way.",
                    "www": "http://littlerobots.nl/",
                    "github": "https://github.com/hvisser",
                    "twitter": "https://twitter.com/botteaap",
                    "photo_url": "/images/speakers/hugo-visser.jpeg"
                },
                //17
                "speaker-saul-diaz": {
                    "firstname": "Saúl",
                    "lastname": "Díaz",
                    "bio_html": "Saúl Díaz has been developing Android since 2010. Currently he is working on Chicisimo, and Android app selected as one of the best of 2015 on Spain, and featured on Google Play by the Google Play Team. Previously he has worked as Android Lead on Fever and Android Developer on Tuenti, two renowned companies of Spain. He is an active member of the Spanish Android Development community and regularly participates in events and conferences.",
                    "www": "",
                    "twitter": "https://twitter.com/sefford",
                    "photo_url": "/images/speakers/saul-diaz.jpeg"
                },
                //18
                "speaker-francisco-estevez": {
                    "firstname": "Francisco",
                    "lastname": "Estevez",
                    "bio_html": "Paco Estevez is an Android developer at Hudl by day, and an opensource contributor by night. He's been an early adopter of new paradigms and techniques in Android, like reactive programming with RxJava or a functional approach to Kotlin. You can follow his thoughts on his <a href='http://www.pacoworks.com'>blog</a>, or his <a href='https://github.com/pakoito'>libraries</a>",
                    "www": "http://www.pacoworks.com",
                    "twitter": "",
                    "github": "https://github.com/pakoito",
                    "photo_url": "/images/speakers/francisco-estevez.jpeg"
                },
                //19
                "speaker-frederik-schweiger": {
                    "firstname": "Frederik",
                    "lastname": "Schweiger",
                    "bio_html": "Frederik is a young computer science student from Germany who's chief interest is creating and inventing new stuff. He currently works as an Android Developer at trivago. Besides writing code he loves jumping out of airplanes and to go skiing.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/speakers/frederik-schweiger.jpeg"
                },
                //20
                "speaker-roy-marmelstein": {
                    "firstname": "Roy",
                    "lastname": "Marmelstein",
                    "bio_html": "Creator of PhoneNumberKit, Interpolate and Localize.",
                    "www": "http://marmelroy.github.io/",
                    "github": "https://github.com/marmelroy",
                    "twitter": "https://twitter.com/marmelroy",
                    "photo_url": "/images/speakers/roy-marmelstein.jpeg"
                },
                //21
                "speaker-esteban-torres": {
                    "firstname": "Esteban",
                    "lastname": "Torres",
                    "bio_html": "iOS Developer for over 5 years. Big proponent of OSS and head organizer of CocoaHeads Costa Rica.",
                    "www": "http://estebantorr.es",
                    "github": "https://github.com/esttorhe",
                    "twitter": "https://twitter.com/esttorhe",
                    "photo_url": "/images/speakers/esteban-torres.png"
                },
                //22
                "speaker-kostiantyn-koval": {
                    "firstname": "Kostiantyn",
                    "lastname": "Koval",
                    "bio_html": "Kostiantyn Koval is in Love with Swift. He is a contributor to Swift open source, a Swift High Performance book author and just a person who loves to type some code at night :)",
                    "www": "http://kostiakoval.github.io/",
                    "github": "https://github.com/kostiakoval",
                    "twitter": "https://twitter.com/KostiaKoval",
                    "photo_url": "/images/speakers/kostiantyn-koval.png"
                },
                //23
                "speaker-marius-rackwitz": {
                    "firstname": "Marius",
                    "lastname": "Rackwitz",
                    "bio_html": "Marius has been developing mobile & web applications ever since he graduated from university. In more recent years, he's shifted his focus towards mobile development, especially iOS and Objective-C, and since it came out a growing portion of Swift. With his work on the CocoaPods team, he hasn't forgotten about Ruby either.",
                    "github": "https://github.com/mrackwitz",
                    "twitter": "https://twitter.com/mrackwitz",
                    "photo_url": "/images/speakers/marius-rackwitz.png"
                },
                //24"
                "speaker-tomasz-gebarowski": {
                    "firstname": "Tomasz",
                    "lastname": "Gebarowski",
                    "bio_html": "Software Engineer, currently working as an iOS Developer at mBank. Working full time in Swift. Switched to Mobile apps development after +4 years of C/C++ and writing distributed VoIP servers. Experienced in maintaining large and long term projects.",
                    "photo_url": "/images/speakers/tomasz-gebarowski.png"
                },
                //24.5
                "speaker-wojciech-lukaszuk": {
                    "firstname": "Wojciech",
                    "lastname": "Łukaszuk",
                    "bio_html": "Software engineer at mBank. Lifelong learner. Can’t stand workarounds and spaghetti code.",
                    "twitter": "https://twitter.com/wojteklu",
                    "www": "http://wojteklu.com/",
                    "photo_url": "/images/speakers/wojciech-lukaszuk.png"
                },
                //25
                "speaker-michal-kucharski": {
                    "firstname": "Michał",
                    "lastname": "Kucharski",
                    "bio_html": "Fan of technological solutions that makes life easier. From own proof-of-concept hardware, to designed IoT devices or ConnectedCar solution. Carpenter with love and passion, claiming that the best way to relax is a chisel, plane and a piece of wood. With testing and security connected from childhood - Everything can be breached and everything can be automated :)",
                    "photo_url": "/images/speakers/michal-kucharski.png"
                },
                //26
                "speaker-agnieszka-czyzak": {
                    "firstname": "Agnieszka",
                    "lastname": "Czyżak",
                    "bio_html": "Agnieszka is currently working as a UI Designer at Polidea. She graduated from the Warsaw Academy of Arts in 2016. Her bottomless passion for humans beings developed her constant question-asking attitude, and her love for design and design thinking lead her career path toward Service and Experience Design. It is during a Summer School at the Copenhagen Institute of Interactive Design that she polished her skills in user research, prototyping, design thinking, basic programming, workability and teamwork",
                    "photo_url": "/images/speakers/agnieszka-czyzak.png"
                },
                //26.5
                "speaker-rafal-tulwin": {
                    "firstname": "Rafał",
                    "lastname": "Tulwin",
                    "bio_html": "For the past 4 years Rafał has been involved in mobile app development. He is Currently working at Polidea as a senior iOS developer. Passionate programmer and triathlete he is constantly looking for new thrills both in app development and in sports",
                    "photo_url": "/images/speakers/rafal-tulwin.png"
                },
                //27
                "speaker-lukasz-mroz": {
                    "firstname": "Łukasz",
                    "lastname": "Mróz",
                    "bio_html": "Started as a back-end web developer, quickly found a new home in iOS. In ❤︎ with Swift, learning and everything that's being reactive. Endorsed on LinkedIn for coffee skills.",
                    "photo_url": "/images/speakers/lukasz-mroz.png"
                },
                //28
                "speaker-anton-minashkin": {
                    "firstname": "Anton",
                    "lastname": "Minashkin",
                    "bio_html": "Lead Android developer, speaker, GDG Lviv organizer and co-founder of GDG Kremenchuk, currently works at EPAM. Have experience in both server and mobile side development. All my free time I spend on the endless search of silver bullets, perfect architectures and holy wars",
                    "photo_url": "/images/speakers/anton-minashkin.png"
                },
                //29
                "speaker-cybercom-mastercorder": {
                    "firstname": "Master",
                    "lastname": "Coder",
                    "bio_html": "MasterCoder is a national programming contest organized by Cybercom Poland. It is a competition created by programmers for programmers. This year over 300 participants from Poland joined the unique coding challenge. The challenge includes accomplishing ten different tasks in ten days. It fosters creativity, innovation and enables participants to test their ability to perform under pressure. During the finals we will see 10 best ranked coders who will fight for MasterCoder title and Samsung Galaxy S6, Samsung Gear VR, AirWheel X3, GoPro Hero Session Full HD! The semi-final will include a variety of tasks such as live programming. Join the audience and become a part of real programming battle !!!",
                    "photo_url": "/images/speakers/master-coder.png"
                },
                //30
                "speaker-krzysztof-kudrynski": {
                    "firstname": "Krzysztof",
                    "lastname": "Kudryński",
                    "bio_html": "Passionate problem solver with experience in algorithms prototyping, software design and optimization for mobile platforms. Perfectionist in public presentations. On a daily basis working for Tomtom, trying to squeeze the self-driving-car's imagination within an SD card, and the cars' eyes and ears within the tip of a side mirror",
                    "photo_url": "/images/speakers/krzysztof-kudrynski.png"
                },
                //30.5
                "speaker-blazej-kubiak": {
                    "firstname": "Błażej",
                    "lastname": "Kubiak",
                    "bio_html": "An enthusiast of all aspects of big data processing and all technologies that bring this enthusiasm from dream into reality. Blazej has been working in Tele Atlas and TomTom for eight years and has been involved in many challenging projects related to image and laser data processing. Blazej is one of the authors of automated traffic signs detection systems and bird-eye image mosaic creation tools. Currently he works as Expert Software Engineer in areas of Deep Neural Networks for object detection and recognition.",
                    "photo_url": "/images/speakers/blazej-kubiak.png"
                },
                //31
                "speaker-michal-mela": {
                    "firstname": "Michał",
                    "lastname": "Mela",
                    "bio_html": "",
                    "photo_url": "/images/speakers/michal-mela.png"
                },//31.5
                "speaker-michal-kaminski": {
                    "firstname": "Michał",
                    "lastname": "Kamiński",
                    "bio_html": "",
                    "photo_url": "/images/speakers/michal-kaminski.png"
                },
                //32
                "speaker-jacek-rondio": {
                    "firstname": "Jacek",
                    "lastname": "Rondio",
                    "bio_html": "A software engineer currently working at HARMAN Connected Services mainly focused on Android applications development, however not afraid of deeper layers of the system. Team leader in the project dedicated to advanced head unit software development for Mercedes cars.",
                    "photo_url": "/images/speakers/jacek-rondio.png"
                },
                //32.25
                "speaker-krzysztof-sasiak": {
                    "firstname": "Krzysztof",
                    "lastname": "Sasiak",
                    "bio_html": "A software engineer, Linux enthusiast. Currently working at Harman Connected Services, assumed a role of Bluetooth and Telephony architect in one of the projects. Doesn’t like Facebook and Twitter, likes to build things and getting his hands dirty. Afterwards, he always washes his hands.",
                    "photo_url": "/images/speakers/krzysztof-sasiak.png"
                },
                //32.5
                "speaker-lukasz-kwiecinski": {
                    "firstname": "Łukasz",
                    "lastname": "Kwieciński",
                    "bio_html": "Software engineer at Harman Connected Services department. Strongly interested in c/c++ programming in Unix-like systems. Works on the project where implements the solutions, which integrate mobile applications together with cars’ head units.",
                    "photo_url": "/images/speakers/lukasz-kwiecinski.png"
                },
                //32.75
                "speaker-mariusz-kazmierczak": {
                    "firstname": "Mariusz",
                    "lastname": "Kaźmierczak",
                    "bio_html": "Software engineer working at Harman Connected Services. Strongly interested in c++ programming in Unix-like systems. Works on the project where implements the solutions allowing to integrate mobile applications together with cars' head units.",
                    "photo_url": "/images/speakers/mariusz-kazmierczak.png"
                },
                //33
                "speaker-ola-rosinska": {
                    "firstname": "Ola",
                    "lastname": "Rosińska",
                    "bio_html": "Handling all aspects of marketing and communications in rndity; Ola balances between creation, strategy and technology to properly verify and develop new business ideas. Restless advocate of empirical studies, not a big fan of „we already know it all” kind of chitchats ;-) Believes that there is always something you can learn and explore in any situation.",
                    "linkedin": "https://www.linkedin.com/in/ola-rosi%C5%84ska-87b352104/en",
                    "photo_url": "/images/speakers/ola-rosinska.png"
                },
                //33.5
                "speaker-piotrek-stanislawski": {
                    "firstname": "Piotrek",
                    "lastname": "Stanisławski",
                    "bio_html": "UX designer with strong believe that in order to carry out the project perfectly you simply need pencil, open mind and aroused empathy. He always combines user needs with clients’ business objectives using available UX techniques. Not so secretly addicted to the post-it notes.",
                    "linkedin": "https://www.linkedin.com/in/stanislawskipiotr/en",
                    "photo_url": "/images/speakers/piotrek-stanislawski.png"
                },
                //34
                "speaker-bartek-swiercz": {
                    "firstname": "Bartek",
                    "lastname": "Świercz",
                    "bio_html": "Addicted to speed, challenges and technology, constantly using his passion to design and develop challenging projects. Bartek has been involved in mobile technologies ever since first smartphones, always looking for the best tech mixes that deliver highest performance possible.",
                    "linkedin": "https://www.linkedin.com/in/swierczu",
                    "twitter": "https://twitter.com/BartekSwiercz",
                    "photo_url": "/images/speakers/bartek-swiercz.png"
                },
                //34.5
                "speaker-pawel-czapnik": {
                    "firstname": "Paweł",
                    "lastname": "Czapnik",
                    "bio_html": "Full time Android developer with still short but pretty solid work background. Paweł has managed to work on couple of most popular mobile apps in Poland. He knows how to point out worst mistakes in the project without making everyone miserable. „Quiet one” type of guy ;-)",
                    "photo_url": "/images/speakers/pawel-czapnik.png"
                },
                //35
                "speaker-marek-wyrwicki": {
                    "firstname": "Marek",
                    "lastname": "Wyrwicki",
                    "bio_html": "ERICSSON Managers R&D",
                    "photo_url": "/images/speakers/marek-wyrwicki.png"
                },
                //35.5
                "speaker-christer-lindell": {
                    "firstname": "Christer",
                    "lastname": "Lindell",
                    "bio_html": "ERICSSON Managers R&D",
                    "photo_url": "/images/speakers/christer-lindell.png"
                }
            },
            talks: {
                "talk-modularizing-your-apps-framework-oriented-programming": {//1
                    "title": "Modularizing your apps: Framework Oriented Programming",
                    "description_html": "Have you ever tried to reuse code from your mobile apps and you haven’t been able to? Did you start using frameworks only when Apple suggested it for Watch Extensions? With more platforms coming out, there's a clear need of bundling logic that can be reused and shared in multiple platforms. Frameworks will help us with that and will benefit our application code bases in many ways. Learn how to do it, with or without dependency manager involved, recommendations and some caveats you must keep in mind. Start building your own Foundation frameworks, reusable, well designed, and with single responsibilities.",
                    "speakers_keys": [
                        "speaker-pedro-buendia"
                    ],
                    "language": "EN"
                },
                "talk-reactive-programming-for-ios-with-interstellar-2": {//2
                    "title": "Reactive Programming for iOS with Interstellar 2",
                    "description_html": "Have a look at how to make Swift and Objective-C interoperability seamless. Basics of including Swift code in your new or existing Objective-C based projects and helping yourself when you want to deliver some parts of Swift-based application using Objective-C code.",
                    "speakers_keys": [
                        "speaker-jens-ravens"
                    ],
                    "language": "EN"
                },
                "talk-taming-node-modules-at-facebook": {//3
                    "title": "Taming node_modules at Facebook",
                    "description_html": "Managing Node.js dependencies is a common problem for anyone who does JavaScript development these days. Should you check in node_modules into github or should you rely on shrinkwrap.json? The path of taming node_modules is long for Facebook Engineering, I will talk about a solution that satisfied multiple parties: source control team, engineers who manage dependencies, security team and app developers.",
                    "speakers_keys": [
                        "speaker-konstantin-raev"
                    ],
                    "language": "EN"
                },
                "talk-the-2016-android-developer-toolbox": {//4
                    "title": "The 2016 Android Developer Toolbox",
                    "description_html": "Whether your native Android app is a pet project or has millions of users, you probably need the right tools, during the development, to help you modify persisted data in real time, simulate an slow/unstable HTTP(s) connection, detect bugs as fast as possible, or create mock servers to anticipate the development of a feature. We'll make a demonstration of all the tools we use, in 2016, to write maintainable code and improve our productivity.",
                    "speakers_keys": [
                        "speaker-gautier-mechling"
                    ],
                    "language": "EN"
                },
                "talk-break-the-monolith-with-b-viper-modules": {//5
                    "title": "Break the monolith with (B)VIPER Modules. Or how do I start modularising my code for a better (engineering) life.",
                    "description_html": "In the software engineering business there is no one fits all solution but when design patterns arise in the community it is important to understand the reasons why they were originated and how to tweak them for our purposes. This talk will explore the VIPER design with top-down approach, deriving the design decisions from quality attributes of a software system including modularity, reusability, testability, single responsibility and more. You will learn the reasons why the design was initially conceived (Clean Architecture by Uncle Bob) then formalised for mobile (by Mutual Mobile) and how to revise it to fit your purposes. Eventually a modified version of the design, friendly called (B)VIPER, will be discussed as improvement for better reuse of modules among different teams.",
                    "speakers_keys": [
                        "speaker-nicola-zaghini"
                    ],
                    "language": "EN"
                },
                "talk-green-dao-3-and-beyond": {//6
                    "title": "greenDAO 3 and beyond",
                    "description_html": "greenDAO is the fastest ORM for Android. greenDAO 3 brings annotations and prepares the way for further enhancements like RX support. The author of greenDAO gives deep insights about how to best use ORM to make app development productive and fun. But SQL is not your thing? We also have a sneak peek at a new alternative to greenDAO/SQLite.",
                    "speakers_keys": [
                        "speaker-markus-junginger"
                    ],
                    "language": "EN"
                },
                "talk-bonjour-android-it-is-zeroconf": {//7
                    "title": "Bonjour Android, it's ZeroConf",
                    "description_html": "ZeroConf is a protocol that helps us advertising a service or discovering the available services in our networks. This is how Chromecast works, but why don’t we go deeper? We will dive into the definition of ZeroConf and why the protocol is needed, how it works and what libraries will help us implementing it on Android.",
                    "speakers_keys": [
                        "speaker-roberto-orgiu"
                    ],
                    "language": "EN"
                },
                "talk-functional-on-android-lambdas-rx-and-streams-in-your-app": {//8
                    "title": "Functional on Android: lambdas, Rx and streams in your app",
                    "description_html": "On Android, more and more developers are attracted to the functional programming-style concept of declarative data manipulation using lambdas. Java 8 has a new steams API, but it's limited to Android N. Backports exist, but it's RxJava that's all the rage, with its elegant threading solution. How do we use lambdas, streams and Rx effectively on Android? Orientation changes and background tasks? I propose to stop worrying about the lifecycle and cache your way into a blissful user experience.",
                    "speakers_keys": [
                        "speaker-eric-kok"
                    ],
                    "language": "EN"
                },
                "talk-appium-automation-for-apps": {//9
                    "title": "Appium: Automation for Apps",
                    "description_html": "Basic introduction to automating mobile apps with Appium.",
                    "speakers_keys": [
                        "speaker-dan-cuellar"
                    ],
                    "language": "EN"
                },
                "talk-interacting-with-your-app-through-command-line": { //10
                    "title": "Interacting with your app through command line",
                    "description_html": "Android command line is a very powerful tool. During this talk, we'll briefly review what Android shell commands can be useful for development, testing, and automation. We'll concentrate on how your application can interact with the command line considering 2 approaches. The first one is based on Android framework tools and the second is the core of Facebook Stetho tool.",
                    "speakers_keys": [
                        "speaker-roman-mazur"
                    ],

                    "language": "EN"
                },
                "talk-how-jrebel-for-android-does-performance-testing": { //11
                    "title": "How JRebel for Android Does Performance Testing",
                    "description_html": "As developers we often employ unit- and integration testing to catch bugs early during development. But how to detect regressions in performance? Sometimes a small slowdown can go unnoticed for weeks or months until the app becomes unbearably slow and a profiler gets attached. In this talk, we'll take an in-the-trenches look at how we set up a performance testing suite for JRebel for Android. We'll talk about challenges we faced when running the tests on our CI servers. We'll also cover how we pinpoint regressions to a single commit with the help of Elasticsearch and Kibana.",
                    "speakers_keys": [
                        "speaker-madis-pink"
                    ],
                    "language": "EN"
                },
                "talk-elegant-unit-testing": { //12
                    "title": "Elegant?? Unit Testing",
                    "description_html": "In this session we will learn the basics of Unit Testing and its importance. We will define what a Unit Test is, what type of Unit Tests there are and then talk about Test Doubles. Finally, we will focus on how to write new tests and improve existing ones by reviewing some Android Github projects. Can you sleep soundly without writing tests? Really???",
                    "speakers_keys": [
                        "speaker-pablo-guardiola"
                    ],
                    "language": "EN"
                },
                "talk-custom-annotation-processors-for-your-production-code": { //13
                    "title": "Custom Annotation processors for your production code",
                    "description_html": "The annotation processing tool (APT) was released into the JDK 5, but we did not paid enough attention to it in order to exploit its potential. Today, annotation processors are part of many well known libraries that we use everyday in our professional code. On this talk we will learn how to code our custom annotation processor and to start looking at it as a very useful tool to reduce overhead in our production code. Because many recurrent problems could get solved using annotation processors!",
                    "speakers_keys": [
                        "speaker-jorge-castillo"
                    ],
                    "language": "EN"
                },
                "talk-espresso-beyond-the-basics": { // 14
                    "title": "Espresso, beyond the basics",
                    "description_html": "More than the typical onView example Espresso offers a complete framework to interact with your UI. Once you start developing your tests you find common issues, in this talk learn tips and tricks on how to deal with the framework and avoid problems like synchronization, permissions, environment test scenarios and much more. ",
                    "speakers_keys": [
                        "speaker-inaki-villar"
                    ],
                    "language": "EN"
                },
                "talk-android-high-performance": { //15
                    "title": "Android High Performance",
                    "description_html": "Performant applications are one of the key drivers of success in the mobile world. Users may abandon an app if it runs slowly. Learning how to build applications that balance speed and performance with functionality and UX can be a challenge; however, it's now more important than ever to get that balance right. This session will show you how to wring the most from any hardware your app is installed on, so you can increase your reach and engagement. An introduction to state–of-the-art Android techniques and the importance of performance in an Android application will be introduced, and later we will slowly walk through the Android SDK tools regularly used to debug and profile Android applications, learn about some advanced topics such as building layouts, multithreading, networking, security and battery life ( one of the biggest bottleneck in applications).",
                    "speakers_keys": [
                        "speaker-enrique-manas"
                    ],
                    "language": "EN"
                },
                "talk-rx-java-for-the-rest-of-us": { //16
                    "title": "RxJava for the rest of us",
                    "description_html": "The Reactive Extensions for the JVM, better known as RxJava, have become a popular tool in Android development over the past years. Many new and existing libraries added support for Rx and “reactive” solutions to existing problems popped up over time. RxJava is both known for it’s power and it’s steep learning curve, so if you aren’t using RxJava already, what are you missing out on? Should you even be using RxJava? In this talk we’ll go over what RxJava is and how you can use it to solve problems in your Android apps, one step at a time. We will discuss how you can prevent shooting yourself in the foot by looking at common mistakes you may make when using RxJava and discussing tips and tricks for keeping your reactive app manageable.",
                    "speakers_keys": [
                        "speaker-hugo-visser"
                    ],
                    "language": "EN"
                },
                "talk-getting-down-to-business-with-firebase": { // 17
                    "title": "Getting down to business with Firebase",
                    "description_html": "Firebase goes beyond being just an alternative to building a serverless application. It is a complete solution to control and monitor several aspects of both your product and business. We will discuss how easy is to integrate Firebase with your current application and how it can be used to improve your experience towards your users from a technical standpoint.",
                    "speakers_keys": [
                        "speaker-saul-diaz"
                    ],
                    "language": "EN"
                },
                "talk-revisiting-types-in-kotlin": { // 18
                    "title": "Revisiting types in Kotlin",
                    "description_html": "With a domain driven approach, this talk will go through several coding examples and how they can be improved by leveraging the powerful type system in Kotlin with function objects, sealed classes, tuples, and the core collections. We'll review the way your application communicates across layers, and how you can improve your APIs with explicit types.",
                    "speakers_keys": [
                        "speaker-francisco-estevez"
                    ],
                    "language": "EN"
                },
                "talk-security-at-your-fingertips": { //19
                    "title": "Security at your Fingertips - A dive into M&N's new Fingerprint and Keystore APIs.",
                    "description_html": "Android Marshmallow (and most recently Android Nougat) have introduced a lot of fresh features and the new permission system is by far not the only new security enhancement. Most of you already use their finger to unlock the smartphone and may have heard about this new fingerprint API - but have you ever played with it? And once we’re there: Do you know about the newly introduced improvements in the Keystore API? No? Then this talk is definitely for you! Still hesitating? Just remember that security and a good user experience is something we cannot know enough about. With just a few simple steps you can learn how to increase the security of your app, making authentication easier and your users happier - all at once. And to be honest: in the end that’s all we want, right?",
                    "speakers_keys": [
                        "speaker-frederik-schweiger"
                    ],
                    "language": "EN"
                },
                "talk-the-objective-c-runtime-and-swift-dynamism-a-2016-perspective": { //20
                    "title": "The Objective C runtime and Swift dynamism - a 2016 perspective",
                    "description_html": "A new talk introducing advanced techniques with the Objective C runtime and assessing their relevance in an increasingly Swifty world. ",
                    "speakers_keys": [
                        "speaker-roy-marmelstein"
                    ],
                    "language": "EN"
                },
                "talk-hacking-siri-kit": { //21
                    "title": "Hacking SiriKit",
                    "description_html": "iOS talk detailing the benefits that SiriKit exposes and how can developers would greatly benefit from Apple actually opening it up for other users. <ul><li>Introduction to SiriKit<li>How to implement it<li>Pro and Cons of th current implementation<li>Hacking it to overuse or abuse it to communicate without TravisCi",
                    "speakers_keys": [
                        "speaker-esteban-torres"
                    ],
                    "language": "EN"
                },
                "talk-swift-revolution": { //22
                    "title": "Swift rEvolution",
                    "description_html": "Swift have huge impact and on how we develop software these days. In thin talk I will explain why everyone needs to learn Swift regardless if you are  iOS, android, backend or any software developer. I will cover why Swift is so powerful and popular, how huge impact it has on whole Software development, what you need to do to stay competitive and productive developer and how you can shape Swift they way you want",
                    "speakers_keys": [
                        "speaker-kostiantyn-koval"
                    ],
                    "language": "EN"
                },
                "talk-crafting-reactive-apps-with-realm": { //23
                    "title": "Crafting Reactive Apps with Realm",
                    "description_html": "Realm is a popular database for mobile used already in thousands of apps in the app stores and deployed on over a billion devices. This talk will show you how you can craft reactive applications, especially if you embrace persistence and state as a central part of your application architecture, by using the unique features of this database.",
                    "speakers_keys": [
                        "speaker-marius-rackwitz"
                    ],
                    "language": "EN"
                },
                "talk-swift-at-scale": { //24
                    "title": "Swift at scale",
                    "description_html": "Is Swift ready for large scale business apps?  We would like to share our experience on writing one of the most popular mobile banking apps in Poland. The mBank app, that is entirely written in Swift. The problems we faced, lessons learnt, pitfalls and benefits",
                    "speakers_keys": [
                        "speaker-tomasz-gebarowski",
                        "speaker-wojciech-lukaszuk"
                    ],
                    "language": "EN"
                },
                "talk-mobile-and-application-security-based-on-man-in-the-middle-MITM-vectors": { //25
                    "title": "Mobile and application security based on Man-in-the-middle (MITM) vectors",
                    "description_html": "We have that good feeling that if we have AV and Firewall, we are safe and secure in cyber space. Nothing more misleading. If you are targeted, then every access vector will be tailored to compromise your security. These days every kid knows how to bypass wireless network security to get a free internet access. What could happen if a real attacker broke into your network and targeted his payloads into your sensitive data? What about gathering sensitive data from around 50? 100? 500? Mobiles, laptop devices at once? From penetration testing, reverse engineering to intercepting mobile application traffic. How to craft attacks and how to avoid them? Theory and practice.",
                    "speakers_keys": [
                        "speaker-michal-kucharski"
                    ],
                    "language": "EN"
                },
                "talk-design-that-breaks-down-barriers": { //26
                    "title": "Design that breaks down barriers",
                    "description_html": "While having an opportunity to start an enterprise from scratch, humans tend to try out new processes, tools or technology. It is with that state of mind that we embraced “accessibility”. Indeed, as one of the hottest emerging topic in UX Design, “accessibility” methodology was to be integrated in the development of our latest project. Considering both designer’s and developer's point of view, we will talk about how we approached accessibility while making Shuttle - a mobile app for Android and iOS. We will describe step by step our full working process related to “accessibility”, with a strong focus on the importance of interdisciplinary collaboration and end user testing",
                    "speakers_keys": [
                        "speaker-agnieszka-czyzak",
                        "speaker-rafal-tulwin"
                    ],
                    "language": "EN"
                },
                "talk-mvvm-with-coordinators-and-rx-swift": { //27
                    "title": "MVVM with Coordinators & RxSwift",
                    "description_html": "Every application needs good architecture. In my talk I will try to show you our architecture that we use in our iOS projects: MVVM with Coordinators & RxSwift. Not only I will talk about basics, but we will quickly start writing the code live, describing what belongs where, controlling the flow using Coordinators, testing everything using Quick/Nimble, and make network requests using Moya",
                    "speakers_keys": [
                        "speaker-lukasz-mroz"
                    ],
                    "language": "EN"
                },
                "talk-how-to-design-your-app-and-not-to-be-damned-by-maitenance-team": { //28
                    "title": "How to design your app and not be damned by maintenance team",
                    "description_html": "How to deal with complexity, technical debt and not to fall into depression. Let's discuss the ways, architecture patterns and common mistakes and let's try to find the \"silver bullet\" of architecture, or at least let's find requirements for it",
                    "speakers_keys": [
                        "speaker-anton-minashkin"
                    ],
                    "language": "EN"
                },
                "talk-master-coder-final": { //29
                    "title": "MASTERCODER VOL. 3 – NATIONAL PROGRAMMING CONTEST FINALS",
                    "description_html": "MasterCoder is a national programming contest organized by Cybercom Poland. It is a competition created by programmers for programmers. This year over 300 participants from Poland joined the unique coding challenge. The challenge includes accomplishing ten different tasks in ten days. It fosters creativity, innovation and enables participants to test their ability to perform under pressure. During the finals we will see 10 best ranked coders who will fight for MasterCoder title and Samsung Galaxy S6, Samsung Gear VR, AirWheel X3, GoPro Hero Session Full HD! The semi-final will include a variety of tasks such as live programming. Join the audience and become a part of real programming battle !!!",
                    "speakers_keys": [
                        "speaker-cybercom-mastercorder"
                    ],
                    "language": "EN"
                },
                "talk-master-coder-eliminations": { //29.5
                    "title": "MASTERCODER VOL. 3 – NATIONAL PROGRAMMING CONTEST ELIMINATIONS",
                    "description_html": "MasterCoder is a national programming contest organized by Cybercom Poland. It is a competition created by programmers for programmers. This year over 300 participants from Poland joined the unique coding challenge. The challenge includes accomplishing ten different tasks in ten days. It fosters creativity, innovation and enables participants to test their ability to perform under pressure. During the finals we will see 10 best ranked coders who will fight for MasterCoder title and Samsung Galaxy S6, Samsung Gear VR, AirWheel X3, GoPro Hero Session Full HD! The semi-final will include a variety of tasks such as live programming. Join the audience and become a part of real programming battle !!!",
                    "speakers_keys": [
                        "speaker-cybercom-mastercorder"
                    ],
                    "language": "EN"
                }
                ,
                "talk-flying-services-using-mobile-phone-paired-with-drone": { //30
                    "title": "Flying services using mobile phone paired with drone",
                    "description_html": "Android mobile phone, a drone, strong passion and a lot of patience. These are all the ingredients you need to start your adventure in the emerging world of flying services. During this presentation we will show you how we started ours. Hovewer funny and amusing, this will be a presentation about serious, high-level technology, unpredictable ideas and insistent scientific struggle to make all the algorithmic meat work on a mobile phone communicating with the flying machine. If you are planning to start a remote post office on the Moon, you cannot miss this presentation.",
                    "speakers_keys": [
                        "speaker-krzysztof-kudrynski",
                        "speaker-blazej-kubiak"
                    ],
                    "language": "EN"
                },
                "talk-prawdziwe-bezpieczenstwo-w-aplikacjach-mobilnych": { //31
                    "title": "(Prawdziwe) bezpieczeństwo danych w urządzeniach mobilnych",
                    "description_html": "Bezpieczeństwo to temat-rzeka i choć wiele jego aspektów pomoże rozwiązać Ci wujek Google, stan wiedzy internetu na temat bezpieczeństwa danych w urządzeniach mobilnych uznajemy za niesatysfakcjonujący, przesycony starymi i niekompletnymi informacjami. Dlatego opowiemy Ci o praktycznych problemach, z którymi mierzymy się na co dzień,  zapewniając najwyższy możliwy poziom zabezpieczeń w mobilnych zastosowaniach płatniczych oraz uchylimy rąbka tajemnicy o najnowszych rozwiązaniach w tym zakresie. Na prezentacji zapoznasz się z aspektami bezpieczeństwa danych w urządzeniach mobilnych od trzech stron: <ul><li>kryptografii – o czym należy pamiętać, jak jej (i jakiej) używać <li>bezpieczeństwa transportu – co musisz zapewnić i w jaki sposób<li>bezpieczeństwa przechowywania – jakie masz możliwości, jakie są ich wady i zalety",
                    "speakers_keys": [
                        "speaker-michal-mela",
                        "speaker-michal-kaminski"
                    ],
                    "language": "PL"
                },
                "talk-make-your-mobile-more-mobile": { //32
                    "title": "Make your mobile more mobile",
                    "description_html": "How car became a rich accessory for the mobile. We will present the wide range of possibilities that arose with the development of technologically advanced head units. From Bluetooth hands-free to advanced companion applications. All based on Mercedes S-class example.",
                    "speakers_keys": [
                        "speaker-jacek-rondio",
                        "speaker-krzysztof-sasiak",
                        "speaker-lukasz-kwiecinski",
                        "speaker-mariusz-kazmierczak"
                    ],
                    "language": "EN"
                },
                "talk-mvp-business": { //33
                    "title": "MVP - getting business, design and technology together.",
                    "description_html": "Getting started with new product development we often forget that making it work requires more then just a great idea. Big ideas come with huge responsibilities which we not always know how to handle. The dilemma that we’ll be trying to find answer to is how to minimize the risk of the concept overgrowing us?",
                    "speakers_keys": [
                        "speaker-ola-rosinska",
                        "speaker-piotrek-stanislawski"
                    ],
                    "language": "EN"
                },
                "talk-beacon-idea": { //34
                    "title": "Z beaconem przez projekt - od pomysłu do klęski, od klęski do wdrożenia",
                    "description_html": "Na podstawie wykonanego i wdrożonego projektu przedstawiamy fakty i mity ze świata beaconów. Przekonacie się, że wdrożenie projektu beaconowego wymaga wielu testów, a otrzymywane wyniki mogą Was nie raz zaskoczyć.",
                    "speakers_keys": [
                        "speaker-bartek-swiercz",
                        "speaker-pawel-czapnik"
                    ],
                    "language": "PL"
                },
                "talk-networked-society": { //35
                    "title": "Networked Society",
                    "description_html": "Connectivity is the starting point for new ways of innovating, collaborating and socializing. The Networked Society starts with connections, between devices and things but more importantly it is about the big ideas that become possible and will shape benefits to people. The Networked Society, as we see it, is based on four key elements: People: all of us, using connectivity to live, work and play more freely Things: everything that benefits from being connected is connected – from phones and tablets, to cars and containers, to classrooms and clinics Interactivity: the ways that all these people and things communicate with each other, for example through mobile broadband and cloud Big ideas: game-changing innovations and services that connects what people want and need with things and interactivity and create something entirely new and beneficial to people, business and society Seen in that light, the Networked Society is a global movement. It is positive change driven across borders by people, business, governments and NGOs. The shaping of the Networked Society is a constant collaboration where we aspire to take a key role.",
                    "speakers_keys": [
                        "speaker-marek-wyrwicki",
                        "speaker-christer-lindell"
                    ],
                    "language": "EN"
                }
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
                    title: 'AfterParty in All Star Klubokawiarnia',
                    description_html: 'Free pizza and beer and follow up talks.<br>15min from conference venue.<br>Piotrkowska 217 Łódź'
                }
            },
            venues: {
                "venue-rndity": {
                    "title": "Rndity"
                },
                "venue-ericpol": {
                    "title": "Ericpol"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },
                "venue-seqr": {
                    "title": "SEQR"
                },
                "venue-tomtom": {
                    "title": "TomTom"
                }
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {"break_key": "break-hello-world"},
                "slot-1": {
                    "venue-rndity": {
                        "talk_key": "talk-mvp-business"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-networked-society"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-mobile-and-application-security-based-on-man-in-the-middle-MITM-vectors"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-prawdziwe-bezpieczenstwo-w-aplikacjach-mobilnych"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-flying-services-using-mobile-phone-paired-with-drone"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-rndity": {
                        "talk_key": "talk-android-high-performance"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-swift-at-scale"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-modularizing-your-apps-framework-oriented-programming"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-revisiting-types-in-kotlin"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-taming-node-modules-at-facebook"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-rndity": {
                        "talk_key": "talk-rx-java-for-the-rest-of-us"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-make-your-mobile-more-mobile"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-security-at-your-fingertips"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-mvvm-with-coordinators-and-rx-swift"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-green-dao-3-and-beyond"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-during-lunch": {
                    "venue-tomtom": {
                        "talk_key": "talk-master-coder-eliminations"
                    }
                },
                "slot-4": {
                    "venue-rndity": {
                        "talk_key": "talk-functional-on-android-lambdas-rx-and-streams-in-your-app"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-reactive-programming-for-ios-with-interstellar-2"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-espresso-beyond-the-basics"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-bonjour-android-it-is-zeroconf"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-hacking-siri-kit"
                    }
                },
                "slot-coffee-3": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-rndity": {
                        "talk_key": "talk-the-2016-android-developer-toolbox"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-how-jrebel-for-android-does-performance-testing"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-interacting-with-your-app-through-command-line"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-custom-annotation-processors-for-your-production-code"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-the-objective-c-runtime-and-swift-dynamism-a-2016-perspective"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-rndity": {
                        "talk_key": "talk-how-to-design-your-app-and-not-to-be-damned-by-maitenance-team"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-design-that-breaks-down-barriers"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-beacon-idea"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-break-the-monolith-with-b-viper-modules"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-getting-down-to-business-with-firebase"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-7": {
                    "venue-rndity": {
                        "talk_key": "talk-elegant-unit-testing"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-crafting-reactive-apps-with-realm"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-swift-revolution"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-appium-automation-for-apps"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-master-coder-final"
                    }
                },
                "slot-no-coffee-6": {"break_key": "break-no-coffee"},
                "slot-finally": {"break_key": "break-finally"},
                "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Created docpad generator for mobilization webpage. Deals with iOS talks.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/team/marcin-iwanicki.jpeg"
                },
                //2
                "volunteer-marek-defecinski": {
                    "firstname": "Marek",
                    "lastname": "Defeciński",
                    "bio_html": "Coordinates all things with Mobilization. Seeks for speakers. The brain of Mobilization conference.",
                    "www": "",
                    "twitter": "https://twitter.com/marekdef",
                    "photo_url": "/images/team/marek-defecinski.jpeg"
                },
                //3
                "volunteer-karolina-draus": {
                    "firstname": "Karolina",
                    "lastname": "Draus",
                    "bio_html": "Coordinates promotion and contact with partners. Content Manager - Facebook & Twitter. Talented copywriter.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/karolina-draus.jpeg"
                },
                //4
                "volunteer-mariusz-saramak": {
                    "firstname": "Mariusz",
                    "lastname": "Saramak",
                    "bio_html": "If Marek is the brain, he is the heart of Mobilization. Full of crazy ideas - the first one was this conference.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/mariusz-saramak.jpeg"
                },
                //5
                "volunteer-tomasz-zielinski": {
                    "firstname": "Tomasz",
                    "lastname": "Zieliński",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/tomasz-zielinski.jpeg"
                },
                //6
                "volunteer-beata-nagorniewicz": {
                    "firstname": "Beata",
                    "lastname": "Nagórniewicz",
                    "bio_html": "Responsible for AfterParty :)",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/beata-nagorniewicz.jpeg"
                },
                //7
                "volunteer-cezary-draus": {
                    "firstname": "Cezary",
                    "lastname": "Draus",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/cezary-draus.jpeg"
                },
                //8
                "volunteer-agnieszka-saramak": {
                    "firstname": "Agnieszka",
                    "lastname": "Saramak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/agnieszka-saramak.jpeg"
                },
                //9
                "volunteer-rafal-lenarczyk": {
                    "firstname": "Rafał",
                    "lastname": "Lenarczyk",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/rafal-lenarczyk.jpeg"
                },
                //10
                "volunteer-anna-defecinska": {
                    "firstname": "Anna",
                    "lastname": "Defecińska",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/anna-defecinska.jpeg"
                },
                //11
                "volunteer-andrzej-jozwiak": {
                    "firstname": "Andrzej",
                    "lastname": "Jóźwiak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/andrzej-jozwiak.jpeg"
                },
                //12
                "volunteer-krzysztof-gutowski": {
                    "firstname": "Krzysztof",
                    "lastname": "Gutowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krzysztof-gutowski.jpeg"
                },
                //13
                "volunteer-krystian-laskowski": {
                    "firstname": "Krystian",
                    "lastname": "Laskowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krystian-laskowski.jpeg"
                },
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
        },
        getHtmlLangImg: function (_talk) {
            if (_talk.language == "EN") {
                return "<img src=\"/assets/img/page/lang_en.png\" alt=\"English\" class=\"language\" />";
            }
            if (_talk.language == "PL") {
                return "<img src=\"/assets/img/page/lang_pl.png\" alt=\"Polish\" class=\"language\" />";
            }
            return "";
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
