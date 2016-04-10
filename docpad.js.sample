var docpadConfig, 
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

var imgBaseUrl = '/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
  outPath: '../2015.mobilization.pl-gh-pages/',
  templateData: {
    site: {
      url: "http://mobilization.pl",
      oldUrls: ['www.mobilization.pl'],
      title: "Mobilization 2015",
      description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android, iOS and Windows Phone platforms.",
      keywords: "mobilization, conference, mobile conference, Łódź",
      styles: [],
      scripts: [],
    
      event: {
      	title: 'Mobilization 2015',
      	location: {
      		lat: 51.7505458,
      		lng: 19.4501351,
      		place: 'Expo-Łódź Sp. z o.o.',
      		street: 'al. Politechniki 4',
      		city: 'Łódź',
      		zip: '93-590',
      		country: 'Polska'
      	},
      	data: '18th Oct 2014',
      	time: '07:30-17:30'
      },
      sponsors: {
      	diamond: [ 
      		{ 
      			name: 'Samsung',
      			logo_url: sponsorsImgBaseUrl + 'samsung.png', 
      			description_html: '<p>Opis firmy Samsung</p>'
      		}
      	],
      	platinum: [
      		{ 
      			name: 'ABB',
      			logo_url: sponsorsImgBaseUrl + 'abb.png', 
      			description_html: '<p>Opis firmy ABB</p>'
      		},
      		{ 
      			name: 'Ericpol',
      			logo_url: sponsorsImgBaseUrl + 'ericpol.jpg', 
      			description_html: '<p>Opis firmy Ericpol</p>'
      		},
      		{ 
      			name: 'Mobica',
      			logo_url: sponsorsImgBaseUrl + 'mobica.png', 
      			description_html: '<p>Opis firmy Mobica</p>'
      		},
      		{ 
      			name: 'Transition Technologies',
      			logo_url: sponsorsImgBaseUrl + 'transition-technologies.png', 
      			description_html: '<p>Opis firmy Transition Technologies</p>'
      		}
      	],
      	gold: [
      		{ 
      			name: 'Allegro',
      			logo_url: sponsorsImgBaseUrl + 'allegro.png', 
      			description_html: '<p>Opis firmy Allegro</p>'
      		},
      		{ 
      			name: 'Pracuj.pl',
      			logo_url: sponsorsImgBaseUrl + 'pracuj-pl.jpg', 
      			description_html: '<p>Opis firmy Pracuj.pl</p>'
      		},
      		{ 
      			name: 'Rule Financial',
      			logo_url: sponsorsImgBaseUrl + 'rule-financial.jpg', 
      			description_html: '<p>Opis firmy Rule Financial</p>'
      		},
      		{ 
      			name: 'Seamless',
      			logo_url: sponsorsImgBaseUrl + 'seamless.png', 
      			description_html: '<p>Opis firmy Seamless</p>'
      		},
      		{ 
      			name: 'Symphony Teleca',
      			logo_url: sponsorsImgBaseUrl + 'symphony-teleca.jpg', 
      			description_html: '<p>Opis firmy Symphony Teleca</p>'
      		},
      		{ 
      			name: 'TomTom',
      			logo_url: sponsorsImgBaseUrl + 'tomtom.png', 
      			description_html: '<p>Opis firmy TomTom</p>'
      		}
      	],
      	silver: [
      		{ 
      			name: 'Accenture',
      			logo_url: sponsorsImgBaseUrl + 'accenture.png', 
      			link: 'http://www.accenture.com/pl-pl/Pages/index.aspx'
      		},
      		{ 
      			name: 'Zeto',
      			logo_url: sponsorsImgBaseUrl + 'zeto.png',
      			link: 'http://www.ckzeto.pl/'
      		},
      		{ 
      			name: 'Cybercom',
      			logo_url: sponsorsImgBaseUrl + 'cybercom.png', 
      			link: 'http://www.cybercom.com/pl/Poland/'
      		}
      	],	
      	copper: [
      		{ 
      			name: 'SoftwareMill',
      			logo_url: sponsorsImgBaseUrl + 'softwaremill.jpg', 
      			link: 'https://softwaremill.com/'
      		}
      	]
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
      		{ 
      			name: 'Upmenu',
      			logo_url: partnersImgBaseUrl + 'upmenu.png', 
      			description_html: 'Upmenu had created new layout for Mobilization 2014! Besides creating mobile and responsive layouts they work in Horeca business and help restaurants with online orders. Check out more on their webpage'
      		},
      		{ 
      			name: 'event shaper',
      			logo_url: partnersImgBaseUrl + 'eventshaper.png', 
      			description_html: 'Event shaper provides platfrom for managing online events (CRM, registration)'
      		},
      		{ 
      			name: 'Firmao',
      			logo_url: partnersImgBaseUrl + 'firmao.png', 
      			description_html: 'Firmao CRM module (Customer Relationships Management) is online system used for management of relationship with company customers. It allows to gather in one place all data regarding present and possible future customers, assign and supervise tasks related to their service, to catalogue information about customers, transactions and marketing actions. Mobilization uses Firmao to track and share emails between organizers. To check more about Firmao check webpage'
      		}
      	],
      	community: [
      		{ 
      			name: 'Łódź WiOSłuje',
      			logo_url: partnersImgBaseUrl + 'lodz-wiosluje.png', 
      			description_html: 'The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje'
      		},
      		{ 
      			name: 'Toruń JUG',
      			logo_url: partnersImgBaseUrl + 'jugtorun.png', 
      			description_html: 'Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl'
      		},
      		{ 
      			name: 'Polish Java User Group',
      			logo_url: partnersImgBaseUrl + 'polish-jug.png', 
      			description_html: 'Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals.'
      		},
      		{ 
      			name: 'Mobile Central Europe 2015',
      			logo_url: partnersImgBaseUrl + 'mce2015.png', 
      			description_html: 'We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price.'
      		},
      		{ 
      			name: 'GDG Kraków',
      			logo_url: partnersImgBaseUrl + 'gdgkrakow.png',
      			link: 'http://www.meetup.com/GDG-Krakow/'
      		},
      		{ 
      			name: 'MIT Łódź',
      			logo_url: partnersImgBaseUrl + 'mit.png',
      			link: 'http://mitlodz.pl'
      		}
      	],
      	media: [
      		{ 
      			name: 'AK74',
      			logo_url: partnersImgBaseUrl + 'ak74.png',
      			description_html: 'Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl'
      		},
      		{ 
      			name: 'Marketing Mobilny',
      			logo_url: partnersImgBaseUrl + 'marketing-mobilny.jpg',
      			link: 'http://marketingmobilny.pl'
      		},
      		{ 
      			name: 'Dworzynska',
      			logo_url: partnersImgBaseUrl + 'dworzynska.png',
      			link: 'http://dworzynska.com'
      		},
      		{ 
      			name: 'Praca IT',
      			logo_url: partnersImgBaseUrl + 'pracait.png',
      			link: 'http://pracait.com'
      		},
      		{ 
      			name: 'Software Developer\'s Journal',
      			logo_url: partnersImgBaseUrl + 'sdj.png',
      			link: 'http://sdjournal.pl'
      		},
      		{ 
      			name: 'GoMobi',
      			logo_url: partnersImgBaseUrl + 'gomobi.jpg',
      			link: 'http://gomobi.pl'
      		},
      		{ 
      			name: 'Programista Magazine',
      			logo_url: partnersImgBaseUrl + 'programistamag.png',
      			link: 'http://programistamag.pl'
      		},
      		{ 
      			name: 'MyApple',
      			logo_url: partnersImgBaseUrl + 'myapple.jpg',
      			link: 'http://myapple.pl'
      		},
      		{ 
      			name: '4tech.tv',
      			logo_url: partnersImgBaseUrl + '4techmobile.png',
      			link: 'http://testytelefonow.pl'
      		},
      		{ 
      			name: 'StartUpTV',
      			logo_url: partnersImgBaseUrl + 'startuptv.png',
      			link: 'http://startuptv.pl'
      		},
      		{ 
      			name: 'Linux Magazine',
      			logo_url: partnersImgBaseUrl + 'linuxmag.png',
      			link: 'http://www.linux-magazine.pl'
      		},
      		{ 
      			name: 'Kariera Plus',
      			logo_url: partnersImgBaseUrl + 'karieraplus.png',
      			link: 'http://karieraplus.pl'
      		},
      		{ 
      			name: 'Młodzi w Łodzi',
      			logo_url: partnersImgBaseUrl + 'mlodzi-w-lodzi.jpg',
      			link: 'http://mlodziwlodzi.pl'
      		},
      		{ 
      			name: 'Helion',
      			logo_url: partnersImgBaseUrl + 'helionpl.png',
      			link: 'http://helion.pl'
      		},
      		{ 
      			name: 'Manning Publications',
      			logo_url: partnersImgBaseUrl + 'manning.png',
      			link: 'http://www.manning.com'
      		}
      	]
      },
      slots: {
      	'slot-registration': {
      		from: '7:30',
      		to:   '9:00'
      	}, 
      	'slot-hello-world': {
      		from: '9:00',
      		to:   '9:10'
      	},
      	'slot-1': {
      		from: '9:10',
      		to:   '9:55'
      	}, 
      	'slot-coffee-1': {
      	   	from: '9:55',
      		to:   '10:15'
      	},
      	'slot-2': {
      		from: '10:15',
      		to:   '11:00'
      	}, 
      	'slot-coffee-2': {
      	   	from: '11:00',
      		to:   '11:20'
      	},
      	'slot-3': {
      		from: '11:20',
      		to:   '12:05'
      	}, 
      	'slot-coffee-3': {
      	   	from: '12:05',
      		to:   '12:25'
      	},
       	'slot-4': {
      		from: '12:25',
      		to:   '13:10'
      	}, 
      	'slot-lunch': {
      	   	from: '13:10',
      		to:   '14:30'
      	},
        'slot-5': {
      		from: '14:30',
      		to:   '15:15'
      	},
        'slot-coffee-4': {
      	   	from: '15:15',
      		to:   '15:30'
      	},
        'slot-6': {
      		from: '15:30',
      		to:   '16:15'
      	},
        'slot-coffee-5': {
      	   	from: '16:15',
      		to:   '16:30'
      	},
        'slot-7': {
      		from: '16:30',
      		to:   '17:15'
      	},
      	'slot-finally': {
      		from: '17:15',
      		to:   '18:00'
      	},
      },
      speakers: {
    	'speaker-maciej-gorski': {
    		firstname: 'Maciej',
    		lastname: 'Górski',
    		bio_html: 'Maciej is a passionate developer, but also a conference wanderer - during the last year, he spent more time listening (and sometimes speaking) to people during various conferences and meetups on topics mostly related to mobile and Java Eee, than sitting and coding behind his desk. He likes open source. Last year he worked at lot with the new Android API for maps, which resulted in the birth of a small library called Android Maps Extensions. This year he is working on Hrisey, a new kind of anti-boilerplate tool. When he\'s not programming, Maciej avoids computers and prefers to bike.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'maciej-gorski.jpg'
    	},
    	'speaker-maciej-schmidt': {
    		firstname: 'Maciej',
    		lastname: 'Schmidt',
    		bio_html: 'Zapalony programista, grafik, freelancer, miłośnik nowoczesnych technologii, w skrócie: informatyczny człowiek orkiestra. Od kilku lat specjalizuje się w technologii Augmented Reality (Rzeczywistości Rozszerzonej) oraz tworzy użytkowe i rozrywkowe aplikacje mobilne. Od 2007 roku prowadzi firmę MASKOM.pl świadczącą zaawansowane rozwiązania informatyczne dla biznesu. W swoim portfolio posiada realizacje m.in. dla sieci ROSSMANN, RTV Euro AGD, PKP S.A. czy klubów żużlowych Falubaz Zielona Góra i Unia Leszno.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'maciej-schmidt.jpg'
    	},
    	'speaker-cesare-rocchi': {
    		firstname: 'Cesare',
    		lastname: 'Rocchi',
    		bio_html: 'Cesare Rocchi is a speaker, writer, UX designer and developer specializing in web and mobile applications. He began working on interactive applications while he was a researcher in the academia. He runs Studio Magnolia, an interactive studio that creates compelling web and mobile applications. You can find him on Twitter (@_funkyboy). When off duty he enjoys snowboard and beach tennis.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'cesare-rocchi.jpg'
    	},
    	'speaker-witold-wysota': {
    		firstname: 'Witold',
    		lastname: 'Wysota',
    		bio_html: 'Witold Wysota na codzień pracuje jako inżynier oprogramowania oraz prowadzi zajęcia z Qt na Politechnice Warszawskiej. Od 10 lat aktywnie związany z Qt jako autor artykułów, recenzent książek oraz współzałożyciel,  współadministrator oraz główny gaduła na Qt Centre - forum, gdzie programiści przychodzą po pomoc w tematach związanych z tym narzędziem programistycznym. Uczestnik krajowych i międzynarodowych konferencji naukowych i technicznych. W zeszłym roku na Mobilization poprowadził wykład "Qt - programowanie mobilne bez nadgodzin".',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'witold-wysota.jpg'
    	},
    	'speaker-dominik-witczak': {
    		firstname: 'Dominik',
    		lastname: 'Witczak',
    		bio_html: 'A C/C++ developer who specializes in OpenGL and OpenGL ES APIs. Dominik is Mobica\'s technical representative at Khronos OpenGL ES. Working Group, who has contributed to both OpenGL and OpenGL ES specifications over the course of the last two years. He has also worked on a number of different OpenGL ES extensions (incl. the ones that have made it into the recently released Android Extension Pack).',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'dominik-witczak.jpg'
    	},
    	'speaker-bartlomiej-zass': {
    		firstname: 'Bartłomiej',
    		lastname: 'Zass',
    		bio_html: 'Od wielu lat programista .NET. Obecnie konsultant, trener, architekt na co dzień pracujący w Microsoft Polska. Zajmuje się szkoleniem i wspieraniem zespołów technicznych oraz wdrożeniami nowych technologii deweloperskich. Odpowiada przede wszystkim za projekty tworzone wspólnie z największymi w Polsce serwisami internetowymi, operatorami telefonii oraz bankami. Prelegent polskich i zagranicznych konferencji technicznych. W wolnych chwilach pasjonuje się fotografią, grafiką komputerową, żeglarstwem i montowaniem różnego rodzaju sprzętu audio.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'bartlomiej-zass.jpg'
    	},
    	'speaker-jakub-walinski': {
    		firstname: 'Jakub',
    		lastname: 'Waliński',
    		bio_html: 'Kapral Waliński już w bardzo młodym wieku zaczął ponadnormatywnie interesować się komputerami, co poskutkowało wcieleniem go w szeregi Politechniki Łódzkiej, gdy tylko uzyskał pełnoletność. W swojej karierze miał okazję walczyć za pomocą zróżnicowanego oręża (np. Java, PHP, ASP.NET/C#, C++, Python), na wielu polach bitew (od startupu, przez SME, aż po korpo-świat). Obecnie najczęściej stosuje najpopularniejszy na świecie wielozadaniowy karabin szturmowy o nazwie JavaScript, z pomocą którego podbija zarówno Internety jak i Smartfony. Ostatnio otrzymał powołanie do służby w łódzkim batalionie Centrum Systemów Informatycznych ABB. W wolnym czasie kapral Waliński jeździ na rowerze i słucha audiobooków.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'jakub-walinski.jpg'
    	},
    	'speaker-heiko-schilling': {
    		firstname: 'Heiko',
    		lastname: 'Schilling',
    		bio_html: 'Since 8 years I work for TomTom. At TomTom I am the Fellow Navigation, the highest level in the technical career ladder and a discretionary appointment by the TomTom management board. I contributed to TomTom’s unique product portfolio in different technical and management roles. I am now responsible for one of TomTom’s core navigation products: NavKit, the navigation engine software, used by over 80 million customers and driven over 300 billion kilometers by our customers. Before TomTom, as an entrepreneur, I co-founded a start-up company that I ran successfully for 6 years and sold in 1995. Our main product was an online shop system for bookstores, a very innovative idea at a time when the Internet age had not started yet. I also worked for 2 start-up companies at the peak time of the dot-com boom. At university I successfully completed 3 degrees (PhD, MSc, BA) and contributed to a range of optimization solutions in the transportation industry that saved money and/or time. Currently I do a part-time EMBA course at Cambridge University, UK.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'heiko-schilling.png'
    	},
    	'speaker-mieszko-lassota': {
    		firstname: 'Mieszko',
    		lastname: 'Lassota',
    		bio_html: 'Doświadczony programista, designer, (prawie)grafik i ewangelista Microsoftu (jakimś cudem tak zawsze wychodzi). Don Corleone w KODD.pl (software house) oraz Dessigne.com (design house), w których projektuje i implementuje wyborne oprogramowanie. Od zawsze związany z technologiami .NETowymi stworzył m.in. Verbalize, Proto, 9GAG.com dla Windows Phone oraz współtworzył FreeMetera. Papierki poświadczające, że naprawdę coś umie, a nie tylko lans: MS Technology Specialist (Siliverlight 4), Programming in C# Specialist, Certified Scrum Master, Nokia Certified Developer Trainer (Windows Phone) oraz LTE DVD USB LE 3.1.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'mieszko-lassota.jpg'
    	},
    	'speaker-slawomir-jasek': {
    		firstname: 'Sławomir',
    		lastname: 'Jasek',
    		bio_html: 'Konsultant bezpieczeństwa IT z ponad 10-letnim doświadczeniem. Uczestniczył w dziesiątkach projektów z zakresu oceny bezpieczeństwa systemów informatycznych i aplikacji (w tym wielu mobilnych) - dla wiodących firm z sektora finansowego, branży internetowej, instytucji publicznych. Aktualnie coraz częściej doradza bezpieczne rozwiązania dla różnego typu aplikacji już od etapu projektowania. Od 9 lat związany zawodowo z firmą SecuRing.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'slawomir-jasek.jpg'
    	},
    	'speaker-konrad-dzwinel': {
    		firstname: 'Konrad',
    		lastname: 'Dzwinel',
    		bio_html: 'Konrad jest front-end developerem w Making Waves Polska, ekspertem, w ramach programu Google Developer Experts, z zakresu przeglądarki Chrome oraz współorganizatorem krakowskiego Google Developers Group. W Making Waves zajmuje sie, od półtora roku, aplikacjami hybrydowymi. Po godzinach rozwija rozszerzenia do przeglądarki Chrome, eksperymentuje z rozmaitymi technologiami front-end\'owymi, prowadzi warsztaty i prezentacje.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'konrad-dzwinel.jpg'
    	},
    	'speaker-ola-gatner': {
    		firstname: 'Ola',
    		lastname: 'Gatner',
    		bio_html: 'Programistka systemów wbudowanych. Jako Technical Domain Leader odpowiedzialna jest za wszelkie rozwiązania embedded w Cybercom Poland.  Zawodowo programuje od 15 lat przeważnie systemy na rdzeniach Cortex-M plus rozwiązania Real Time. Projektantka cyfrowych układów elektronicznych. Absolwentka wydziału Elektronicznego Politechniki Wrocławskiej. Od pewnego czasu zafascynowana „Lean product development”. Lubi twórczo podejść do każdego problemu – gdyż nie zawsze utarte ścieżki powadzą do optymalnego osiągniecia celu.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'ola-gatner.jpg'
    	},
    	'speaker-sylwester-madej': {
    		firstname: 'Sylwester',
    		lastname: 'Madej',
    		bio_html: 'Sylwester Madej jest doświadczonym programistą Android oraz trenerem. No co dzień pełni rolę Head of Development w firmie Outline - mobilnym development house, specjalizującym się w Androidzie. Po godzinach prowadzi bloga soldiersofmobile.com i kanał YouTube, aby dzielić się swoją wiedzą. Stara się wpływać na jakość aplikacji Android przez edukację studentów na Politechnice Warszawskiej. Aktywnie udziela się w imprezach MobileWarsaw i Warsjawa. Pragmatyczny programista, fan TDD i dobrych narzędzi programistycznych.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'sylwester-madej.jpg'
    	},
    	'speaker-krzysztof-zablocki': {
    		firstname: 'Krzysztof',
    		lastname: 'Zabłocki',
    		bio_html: 'Programuje od 8 roku życia, od 5 lat na iOS. Pracowałem nad szerokim zakresem aplikacji od typowo biznesowych po rozrywkę i gry, przez 1.5 roku mieszkałem w Londynie gdzie kierowałem dużym zespołem programistów (10+), między innymi całkowicie zmieniając flotę mobilnych aplikacji News International. Oprócz tego prowadzę bloga merowing.info oraz tworzę swoje własne aplikacje takie jak Foldify http://foldifyapp.com czy Bord http://bord.pixle.pl.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'krzysztof-zablocki.jpeg'
    	},
    	'speaker-mateusz-herych': {
    		firstname: 'Mateusz',
    		lastname: 'Herych',
    		bio_html: 'Mateusz works as an Android Developer at Base CRM where he tries to make enterprise software users 10 times more productive. In his free time he still often chooses to stay in the IT world and he is organizing some community events - like KrakDroid conference or GDG Kraków meetups.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'mateusz-herych.jpg'
    	},
    	'speaker-filip-miloszewski': {
    		firstname: 'Filip',
    		lastname: 'Miłoszewski',
    		bio_html: 'Co-founder of Listonic, one of the most popular Polish apps, available on Android, iPhone, Windows Phone and few other platforms. Working on mobile apps since 2007. Speaker on many conferences including: Internet Beta, Mobile Standard, Mobile Trends for Business, Akademia Mediarun, App Academy, Jungle Web, Łódź WiOSłuje, MIT and more.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'filip-miloszewski.jpg'
    	},
    	'speaker-michal-tajchert': {
    		firstname: 'Michał',
    		lastname: 'Tajchert',
    		bio_html: 'Polidea Android Developer. Warsaw GDG Organizer. Developer of 12Hours Android widget.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'michal-tajchert.jpg'
    	},
    	'speaker-lena-rodziewicz': {
    		firstname: 'Lena',
    		lastname: 'Rodziewicz',
    		bio_html: 'Z programowaniem webowym jestem zawodowo związana ponad 9 lat. W miarę rozwoju możliwości przeglądarek z dedykowanych rozwiązań serwerowych zmieniłam moją specializację na tworzenie stanowych aplikacji w JavaScript. W ciągu ostatnich lat miałam szczeście do projektów na granicy możliwości technologicznych HTML5 co dało mi ciekawe doświadczenie w tym polu. Jestem zafascynowana możliwościami jakie dają nowe Web Components API oraz specyfikacja HTML 5.1. Jako prelegent brałam udział w jednej z poprzednich edycji Mobilization, Google DevFest oraz drugi rok z rzędu organizowałam Google I/O Extended Łódź.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'lena-rodziewicz.jpg'
    	},
    	'speaker-piotr-krawiec': {
    		firstname: 'Piotr',
    		lastname: 'Krawiec',
    		bio_html: 'Piotr Krawiec is Technology Evangelist at Estimote, Inc. He works with community of over 20 000 developers worldwide inspiring them and helping them deliver cutting-edge beacon enabled solutions.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'piotr-krawiec.png'
    	},
    	'speaker-tomek-pajak': {
    		firstname: 'Tomek',
    		lastname: 'Pająk',
    		bio_html: 'Engineering Team Lead @ Seamless, IT Coach @ Sages, Professional Scrum Master / Professional Scrum Product Owner, student \'MBA dla IT\' na Akademii Leona Koźmińskiego.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'tomek-pajak.jpg'
    	},
    	'speaker-anna-sperka': {
    		firstname: 'Anna Maria',
    		lastname: 'Sperka',
    		bio_html: 'Projektantka interfejsów, fanka użyteczności i miłośniczka prostoty. Absolwentka informatyki (spec. Grafika Komputerowa i Multimedia) na Politechnice Łódzkiej, od 2012 r. UI/UX Designer w firmie Mobica. Zajmuje się projektowaniem na szeroko pojęte urządzenia mobilne, dobrze zapoznana z procesem projektowym i jego kolejnymi etapami. Uczestniczka i prelegentka na łódzkich spotkaniach społeczności Geek Girls Carrots, jedna z "ojców założycieli" inicjatywy propagującej user experience w Łodzi. Fanka Androida, ale nie stroni od iOSa. Uczulona na Comic Sansa. W wolnych chwilach realizuje projekty DIY.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'anna-sperka.png'
    	},
    	'speaker-kamil-grondys': {
    		firstname: 'Kamil',
    		lastname: 'Grondys',
    		bio_html: 'Kamil Grondys, który od ponad 5 lat pracuje w Samsung R&amp;D Institute Poland, na codzień kieruje pracą zespołu odpowiedzialnego za tworzenie artykułów technicznych i przykładowych aplikacji na stronę Tizen Developers, a także tworzy aplikacje na najnowsze urządzenia Samsung (m.in. Gear 2 i Gear S) dla Samsung Galaxy Store. Jako prelegent miał okazję sprawdzić się na ponad 20 międzynarodowych konferencjach w 15 krajach.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'kamil-grondys.jpg'
    	},
    	'speaker-mariusz-lisiecki': {
    		firstname: 'Mariusz',
    		lastname: 'Lisiecki',
    		bio_html: 'Mariusz has been programming on iOS since 2009. He graduated from Adam Mickiewicz University in Poznan. Mariusz worked for various companies like Roche Polska, eConsulting and SuperMemo World. Currently, he works as Software Development Lead in Allegro Group.  Speaker at Mobilization^3 and Mobile Trends Conference 2014 and WWDC 2014 attendee. Privately, passionate about football, mobile devices, Jaguar® cars and old Lego® sets.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'mariusz-lisiecki.jpg'
    	},
    	'speaker-anastazia-kazakova': {
    		firstname: 'Anastazia',
    		lastname: 'Kazakova',
    		bio_html: 'Being C/C++ fan Anastasia has been creating real-time *nix-based systems and pushing them to the production for 8 years. She has passion for networking algorithms and embedded programming and believes in good tooling. Now she is a part of JetBrains team working as a Product Marketing Manager for AppCode and CLion (the upcoming C/C++ IDE).',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'anastazia-kazakova.jpeg'
    	},
    	'speaker-michal-waledziak': {
    		firstname: 'Michał',
    		lastname: 'Walędziak',
    		bio_html: 'Programista aplikacji mobilnych z wieloletnim doświadczeniem. Współpracował z wieloma firmami i instytucjami pomagając tworzyć aplikacje biznesowe, reklamowe i rozrywkowe. Aktualnie konsultant w firmie Cybercom. Fan koszykówki, boksu, książek Stevena Kinga, Philipa K. Dicka i Howarda P. Lovecrafta, oraz oczywiście wszelkich technologii mobilnych.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'michal-waledziak.jpg'
    	},
    	'speaker-patryk-zabkiewicz': {
    		firstname: 'Patryk',
    		lastname: 'Ząbkiewicz',
    		bio_html: 'Patryk Ząbkiewicz jest częścią zespołu operacyjnego firmy Bitbar. Realizuje z sukcesem inwestycje w duże farmy testowe na prawdziwych urządzeniach mobilnych. Tworzenie labolatorium do testów aplikacji mobilnych może być okazać się skomplikowanym zadaniem. Przedstawię 5 kruczków, o których możecie nie pomyśleć tworząc labolatorium testowe, a na które my natknęliśmy się podczas tworzenia naszej publicznie dostępnej chmury urządzeń mobilnych jak i labolatoriów testowych bezpośrednio u klientów.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'patryk-zabkiewicz.jpg'
    	}, 
    	'speaker-sergey-tarasevich': {
    		firstname: 'Sergey',
    		lastname: 'Tarasevich',
    		bio_html: 'Android developer at CactusSoft (Belarus), certified Java 7 programmer, author of the popular open source library for Android - Universal Image Loader. Attended in Mobile Optimized 2014 conference in Minsk (http://mo.dev.by), reported presentation "Universal Image Loader: Story, Architecture, FAQ". ',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'sergey-tarasevich.jpg'
    	},
    	'speaker-jacek-zadrag': {
    		firstname: 'Jacek',
    		lastname: 'Zadrąg',
    		bio_html: 'Założyciel i współwłaściciel JAVEO, entuzjasta nowych technologii i zwinnych metod rozwoju oprogramowania. Od wielu lat wymyśla sposoby na to jak lepiej, szybciej i sprawniej tworzyć oprogramowanie. Zwolennik i propagator ruchu Open Source. Brał udział jako prelegent w konferencjach Confitura, Warsjawa, GigaCon.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'jacek-zadrag.jpg'
    	},
    	'speaker-daniel-chrusciak': {
    		firstname: 'Daniel',
    		lastname: 'Chruściak',
    		bio_html: 'Programista w JAVEO odpowiedzialny za rozwój produktów i usług mobilnych na platformie Android.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'daniel-chrusciak.jpg'
    	},
    	'speaker-zofia-jakubczynska': {
    		firstname: 'Zofia',
    		lastname: 'Jakubczyńska',
    		bio_html: 'Career coach aktywnie wspierający klientów w działaniach na rynku pracy. W tym czasie, przeprowadziła przez proces zmiany blisko 200 klientów indywidualnych. W firmie Architekci Kariery, przez 2 lata, pełniła funkcję Dyrektora ds. programów rozwojowych, gdzie odpowiadała za merytorykę pracy 16-osobowego zespołu coachów i konsultantów kariery. Wcześniej realizowała długofalowe projekty personalne w jednej z największych instytucji finansowych w kraju. Współtworzyła grupę coachów pracujących z przedstawicielami handlowymi.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'zofia-jakubczynska.png'
    	},
    	'speaker-wojciech-kalicinski': {
    		firstname: 'Wojciech',
    		lastname: 'Kaliciński',
    		bio_html: 'Współzałożyciel i CTO agencji interaktywnej Kalicińscy.com. obecnie kieruje zespołem zajmującym się tworzeniem aplikacji mobilnych pod marką We Like CAPS! Lubi dzielić się wiedzą i doświadczeniem z innymi entuzjastami nowych technologii na spotkaniach organizowanych przez Google Developer Groups i nie tylko. Jako Google Developer Expert interestuje się wszystkim co związane z Androidem.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'wojciech-kalicinski.jpg'
    	},
    	'speaker-tomasz-grynfelder': {
    		firstname: 'Tomasz',
    		lastname: 'Grynfelder',
    		bio_html: 'Tomasz Grynfelder, Software Engineer at Polidea, mobile technologies freak highly focused on iOS development and security. Great fan of cycling and sailing.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'tomasz-grynfelder.png'
    	},
    	'speaker-sebastian-rutka': {
    		firstname: 'Sebastian',
    		lastname: 'Rutka',
    		bio_html: 'Sebastian Rutka pełni obecnie funkcje kierownika działu „Kernel &amp; System Frameworks” w Samsung R&amp;D Institute Poland. Z racji zajmowanego stanowiska oraz specyfiki projektów przez niego prowadzonych, jest również odpowiedzialny za współpracę ze społecznością wolnego oprogramowania.  W pracy łączy swoje zainteresowania z dziedziny zarządzania oraz nowoczesnych technologii.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'sebastian-rutka.jpg'
    	},
    	'speaker-marcin-klosinski': {
    		firstname: 'Marcin',
    		lastname: 'Kłosiński',
    		bio_html: 'Marcin Kłosiński pracuje w Transition Technologies S.A. od ponad 6 lat i jest obecnie ekspertem ds. oprogramowania. Na co dzień zajmuje się nie tylko tworzeniem oprogramowania, lecz również kontaktami z klientem, dyskusji rozwiązań oraz prowadzeniem szkoleń w Polsce i za granicą. Ponadto koordynuje współpracę z łódzkimi uczelniami w ramach programów B+R oraz w celu prowadzenia przedmiotów przybliżających studentom temat programowania dla biznesu. Prywatnie interesuje się zagadnieniami sztucznej inteligencji i pracuje nad doktoratem oraz w wolnych chwilach trenuje squash’a.',
    		www: '',
    		twitter: '',
    		photo_url: speakersImgBaseUrl + 'marcin-klosinski.jpg'
    	}
   	  },
   	  talks: {
   	  	'talk-tizen-ecosystem': {
   	  		title: 'Tizen ecosystem',
   	  		description_html: 'Tizen to platforma open-source wspierana przez różnych operatorów i producentów sprzętu. Dedykowana jest różnym urządzeniom: od mobilnych, poprzez telewizory, a skończywszy na znajdujących się w samochodach.Podczas tej prezentacji, uczestnicy poznają jaka jest wizja i cele Platformy, a także wskazówki dotyczące narzędzi, za pomocą których można przygotować aplikacje i rozwiązania w oparciu o platformę Tizen.',
   	  		speakers_keys: [ 'speaker-kamil-grondys' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-testy-bezpieczenstwa-aplikacji-mobilnych': {
   	  		title: 'Testy bezpieczeństwa aplikacji mobilnych na przykładach',
   	  		description_html: 'Na rzeczywistych przykładach pokażę jak wygląda proces oceny bezpieczeństwa aplikacji mobilnych. Zobaczymy m.in. jak wykrywać słabości związane z przechowywaniem danych na urządzeniu, nieprawidłowości w transmisji, oraz najgroźniejsze - błędy w API po stronie serwera (np. błędy logiczne, kontroli dostępu, REST). Jednocześnie okaże się jakie techniki utrudniają ataki, jaki jest faktyczny wpływ na ryzyko poszczególnych podatności, oraz jakie zabezpieczenia warto zastosować w różnych aplikacjach.',
   	  		speakers_keys: [ 'speaker-slawomir-jasek' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-quicker-journeys-through': {
   	  		title: 'Quicker Journeys through Algorithm Engineering',
   	  		description_html: 'Did you know that on a road map of Europe over 800 sextillion unique routes exist? That\'s an \'8\' followed by 23 zeros. The quantity of data available via the Internet today is mind boggling, yet a list of all Europe\'s routes would need more storage space than the Internet\'s total data storage. Even just calculating the list of routes in full would take around 27 trillion years - 2,000 times the current age of our universe. At TomTom we invented an algorithm that can pre-calculate the key properties of all 800 sextillion routes, together with a way to squeeze all that information into every TomTom device. That\'s how NavKit routing makes it possible to find quicker journeys when you need them at any point in time.',
   	  		speakers_keys: [ 'speaker-heiko-schilling' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-apps-and-mental-models': {
   	  		title: 'Apps and Mental Models',
   	  		description_html: 'When devising an app we make oceans of decisions. Some are dictated by personal preferences, some by principles, some by elaborating feedback on beta versions and some by taking inspiration from other apps. A posteriori, depending on the "success" of the app we can say which decisions were right or wrong. An alternative approach is based on Mental Models, "minimal pictures" that can be used to describe how people learn and interact. Before buying an app your customer has already a mental model of how it should work. Knowing more about that model helps you a lot to devise an experience that matches customers\' expectations.',
   	  		speakers_keys: [ 'speaker-cesare-rocchi' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-universal-image-loader': {
   	  		title: 'Universal Image Loader: Story, Architecture, FAQ',
   	  		description_html: 'Presentation contains 3 parts: 1) Brief story about project history: how it was born, grew and become what it is. 2) Library structure, internal features. It will be useful for those who use the library or plan to use it. 3) Short FAQ about the project with comments.',
   	  		speakers_keys: [ 'speaker-sergey-tarasevich' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-projektowanie-aplikacji-ios': {
   	  		title: 'Projektowanie aplikacji iOS - wzorce i triki które każdy programista wiedzieć powinien',
   	  		description_html: 'Chciałem zaprezentować kilkanaście praktycznych metod/hacków/wzorów które sprawią, że osoba nie interesująca się na co dzień UX, nie korzystająca z Photoshopa będzie w stanie tworzyć bardziej użyteczne i lepiej zaprojektowane aplikacje. Tylko praktyczne porady, często występujące problemy i rozwiązania które może zastosować praktycznie każdy developer iOS. (sam temat może ulec lekkiej zmianie), pomysł na prezentację dokładniej omówiłem z Rafałem Lenarczykiem. Ewentualnie mogę również ciekawie opowiedzieć o kwestii marketingu aplikacji mobilnych. Przykładowy tytuł takiej prezentacji mogłaby brzmieć - "Marketing aplikacji na iOS - tips &amp; tricks"',
   	  		speakers_keys: [ 'speaker-filip-miloszewski' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-wprowadzenie-do-augmented-reality': {
   	  		title: 'Wprowadzenie do Augmented Reality dla laików i dla developerów',
   	  		description_html: 'Wprowadzenie do technologii Augmented Reality (Rzeczywistości Rozszerzonej). Co to jest AR? Jakie są podstawowe obszary jej zastosowania? Co nowego może wnieść technologia AR w już używanych aplikacjach mobilnych wraz z prezentacją kilku własnych rozwiązań. W części developerskiej zostanie pokazane jak w kilka minut można stworzyć prostą aplikację AR wykorzystując środowisko Unity 3D oraz technologię Qualcomm Vuforia. Na koniec prezentacji kilkuminutowa sesja Q&amp;A.',
   	  		speakers_keys: [ 'speaker-maciej-schmidt' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-ionic-framework': {
   	  		title: 'Ionic Framework, czyli jak podbić smartfony i tablety z pomocą JavaScriptu',
   	  		description_html: 'Ionic Framework to nowe narzędzie pozwalające tworzyć zaawansowane aplikacje mobilne na iOS i Androida. Pozwala on programistom webowym rozpocząć przygodę z programowaniem mobilnym wykorzystując ich znajomość JavaScriptu. Na tej sesji poznasz podstawy AngularJS, na którym oparty jest Ionic oraz zobaczysz na żywo jak powstaje aplikacja mobilna korzystająca z tego frameworka.',
   	  		speakers_keys: [ 'speaker-jakub-walinski' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-jak-pisac-mniej-kodu': {
   	  		title: 'Jak pisać mniej kodu?',
   	  		description_html: 'O tym jak wykorzystać mniej znane bądź bardziej zaawansowane techniki dostępne dla programistów Objective-C aby zmniejszyć ilość i zwiększyć jakość i czytelność pisanego kodu, techniki takie jak tworzenie DSL, wykorzystanie meta-programmingu i Objective-C runtime.',
   	  		speakers_keys: [ 'speaker-krzysztof-zablocki' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-world-of-beacon-enabled-apps': {
   	  		title: 'World of beacon enabled apps',
   	  		description_html: 'What is the state of the art when it comes to enabling context inside your apps? What\'s possible with beacons? What\'s not possible and should be avoided? What are the best use cases and guidelines up to date and what\'s coming next?',
   	  		speakers_keys: [ 'speaker-piotr-krawiec' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-tools-and-techniques-that-help-maintain-high-quality-code-base': {
   	  		title: 'Tools and Techniques that help maintain a high quality code base',
   	  		description_html: 'It\'s obvious that nowadays just having working code is not enough. As projects and teams grow, the code often starts to diminish in quality, which increases maintainability costs. Code should be clean and concise. It should be easy to understand and consequently easy to maintain. A "GOTO FAIL" shouldn\'t ever pass! Dozens of tools and techniques exist to help developers keep their code base clean and of high quality. During this talk we\'re going to see what is available in the iOS/OSX space and see how combining these with good practices such as unit testing, we can help identify bugs, code smells and refactor to produce a better code base.',
   	  		speakers_keys: [ 'speaker-anastazia-kazakova' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-tuningujac-xcode': {
   	  		title: 'Tuningując Xcode',
   	  		description_html: 'Xcode dla rzeszy programistów iOS to codzienne narzędzie pracy. Wielu jednak nie zdaje sobie sprawy o potencjale drzemiącym w tym narzędziu. Na prezentacji zostanie pokazany szereg sposobów na przyspieszenie pracy z Xcode: od wykorzystania pluginów, poprzez ciekawe a czasami zabawne ukryte funkcje, pro skróty klawiaturowe, do tworzenia własnych szablonów projektów. Mam nadzieję, że każdy znajdzie w tej prezentacji coś dla siebie co przybliży go do osiągnięcia tytułu Xcode Ninja ;)',
   	  		speakers_keys: [ 'speaker-mariusz-lisiecki' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-reverse-engineering-in-ios': {
   	  		title: 'Reverse Engineering in iOS',
   	  		description_html: 'If you still believe, that your app is safe because it has been submitted to Apple\'s Appstore and protected with Apple\'s DRM - FairPlay, if you are still not worried about your code and app specific secrets, you should change your attitude. Have a sneak peak of ways to bundle app analysis and harden your app from reverse engineering and common security vulnerabilities.',
   	  		speakers_keys: [ 'speaker-tomasz-grynfelder' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-web-components': {
   	  		title: 'Web Components - Polymer ale nie tylko',
   	  		description_html: 'Web Components wiele osób kojarzy jedynie z Polymer, sytuacja, jak to zwykle bywa jest bardziej skomplikowana. Zaczynając od Mozilla Brick a kończąc na wykorzystaniu natywnych API wsparcie dla tych nadchodzących technologi wygląda coraz bardziej obiecująco. Jakie zmiany dla osób zajmujących się frontendem tak na prawdę niosą ze sobą komponenty? Chciałabym podzielić się moimi doświadczeniami z tą technologią, przykładami nietrywialnych zastosowań oraz korzyści płynących z jej użycia.',
   	  		speakers_keys: [ 'speaker-lena-rodziewicz' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-epapier-w-technologiach-mobilnych': {
   	  		title: 'E-papier w technologiach mobilnych',
   	  		description_html: 'W swojej prezentacji przybliżę technologie e-ink oraz jej zastosowania w urządzeniach embedded. Poruszony zostanie zarówno aspekt hardware jak i software zastosowania nowoczesnych wyświetlaczy opartych na e-papierze oraz pokrewnych (zero-power displays).',
   	  		speakers_keys: [ 'speaker-ola-gatner' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-uslugi-dla-aplikacji-mobilnych': {
   	  		title: 'Usługi dla aplikacji mobilnych',
   	  		description_html: 'Przegląd usług, pozwalających stworzyć backend dla aplikacji mobilnych (na przeróżne platformy). Od ASP.NET Web API, przez SignalR (usługi utrzymujące stałe połączenie) aż po Azure Mobile Services (prosty backend z autoryzacją, notyfikacjami PUSH, bazą danych) I inne usługi w Microsoft Azure dla aplikacji mobilnych (nie tylko Windows Phone).',
   	  		speakers_keys: [ 'speaker-bartlomiej-zass' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-wspolpraca-projektanta-i-programisty': {
   	  		title: 'Współpraca projektanta i programisty - jak pogodzić dwa światy',
   	  		description_html: 'Chciałabym poruszyć temat współpracy na linii projektant &lt;&gt; programista, spojrzeć na zagadnienie z obu stron i zastanowić się, w jaki sposób można by ograniczyć niepotrzebne konflikty, poprawić komunikację i uczynić wspólną pracę jak najbardziej bezbolesną.',
   	  		speakers_keys: [ 'speaker-anna-sperka' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-tworzenie-laboratoriow-testowych': {
   	  		title: 'Tworzenie laboratoriów testowych na dużą skalę',
   	  		description_html: 'Tworzenie laboratorium do testów aplikacji mobilnych może być okazać się skomplikowanym zadaniem. Przedstawię 5 kruczków, o których możecie nie pomyśleć tworząc labolatorium testowe, a na które my natknęliśmy się podczas tworzenia naszej publicznie dostępnej chmury urządzeń mobilnych jak i labolatoriów testowych bezpośrednio u klientów.',
   	  		speakers_keys: [ 'speaker-patryk-zabkiewicz' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-like-smth-is-not-the-way-to-go': {
   	  		title: 'LIKE \'%smth%\' is not the way to go ',
   	  		description_html: 'Podczas prezentacji będziemy mieli okazję posłuchać o różnych podejściach do wyszukiwania zawartości na Androidzie. Z uwzględnieniem aplikacji, które pracują offline. Później więcej detali o SQLite i rozszerzeniu FTS3 i co można dzięki temu osiągnąć.',
   	  		speakers_keys: [ 'speaker-mateusz-herych' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-wielki-projekt-i-wielka-firma': {
   	  		title: 'Wielki projekt i wielka firma. Krótka opowieść o wolnym oprogramowaniu',
   	  		description_html: 'Autor opowie o tym jak przez ostatnie lata wyglądała sytuacja w tworzeniu dużych projektów programistycznych. Przedstawi zmiany na rynku oraz spróbuje opowiedzieć na pytanie, co jest przyczyną takich zmian. Prezentacja skupi się na projektach tworzonych w środowiskach wolnego, otwartego oprogramowania. Następnie pokazany zostanie przykład takiej współpracy na przykładzie projektu kernel.org i wkładu Samsung R&amp;D Institute Poland w tworzenie jądra linuksa.',
   	  		speakers_keys: [ 'speaker-sebastian-rutka' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-mirror-szybki-development-ui-dla-androida': {
   	  		title: 'Mirror - szybki development UI dla Androida',
   	  		description_html: 'Mirror to nowe narzędzie, które pozwala zaoszczędzić godziny czasu w ciągu tygodnia, które programiści tracą na kompilacje i instalacje aplikacji. Dzięki niemu każda modyfikacja zasobów w projekcie jest widoczna na urządzeniu w kilka sekund - wystarczy zapisać plik. W trakcie prezentacji pokażę, jak korzystając z Mirror można szybko tworzyć prototypy UI, a nawet mocki.',
   	  		speakers_keys: [ 'speaker-sylwester-madej' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-new-features-introduced-in-opengl-es': {
   	  		title: 'New features introduced in OpenGL ES 3.1',
   	  		description_html: 'In his presentation, Dominik will cover some of the features that were introduced in OpenGL ES 3.1. Attendants are expected to have on-hands experience with OpenGL ES 3.0. The lecture will be held in Polish.',
   	  		speakers_keys: [ 'speaker-dominik-witczak' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-android-wear': {
   	  		title: 'Android Wear',
   	  		description_html: 'Android Wear to nowa edycja systemu Android przeznaczona specjalnie na inteligentne zegarki. Istnieje kilka prostych sposobów, abyś jako deweloper mógł dodać wsparcie dla Android Wear w swoim kodzie. Aby jednak mieć pewność, że twoja appka zagości na nadgarstku użytkowników na stałe, musisz oduczyć się niektórych przyzwyczajeń z projektowania na mobile. W tej prezentacji pokażę czego unikać, co robić i jak to robić podczas tworzenia interfejsów na Android Wear.',
   	  		speakers_keys: [ 'speaker-wojciech-kalicinski' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-android-wear-od-rozpoznawania-mowy-do-wlasnych-cyferblatow': {
   	  		title: 'Android Wear od rozpoznawiania mowy do własnych cyferblatów',
   	  		description_html: 'Chciałbym zapoznać uczestników z tym jak pisać: Watchaface, Activity, Notifications etc. na Android Wear i o czym warto pamiętać (prezentacja z kawałkami kodu).',
   	  		speakers_keys: [ 'speaker-michal-tajchert' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-boiling-out-boilerplate': {
   	  		title: 'Boiling out Boilerplate',
   	  		description_html: 'Ever since we started developing for Android platform, we noticed that some tasks are repetitive: from simple things like finding views in our activities, to sending extras or creating fragments with arguments, to creating parcelable classes, to persisting data, to creating web service clients. This not only slows down initial development, but is mostly a problem when reviewing the code and later continuing to develop new features. During the talk I will show you many tools and libraries that are available to make your code base smaller, simpler and easier to maintain. Tell which are still sexy and which you should stop using and why. And finally I want to give you a peek into the future.',
   	  		speakers_keys: [ 'speaker-maciej-gorski' ],
   	  		language: 'EN'
   	  	},
   	  	'talk-szybkie-programowanie-gier-w-qt': {
   	  		title: 'Szybkie programowanie gier w Qt Quick',
   	  		description_html: 'W ramach prezentacji pokazane zostanie jak w szybki sposób stworzyć od podstaw prostą grę na platformy mobilne korzystając z możliwości oferowanych przez Qt. Wykład będzie prowadzony na podstawie platformy Android, natomiast korzystając z wieloplatformowości oferowanej przez Qt, można go zrealizować na pozostałych wspieranych platformach takich jak iOS, SailfishOS, WinRT, Tizen.',
   	  		speakers_keys: [ 'speaker-witold-wysota' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-quo-vadis-programisto': {
   	  		title: 'Quo vadis programisto? – rynek, kariera, osobista marka',
   	  		description_html: 'Nowe technologie wprowadziły zmiany społeczne porównywalne do rewolucji przemysłowej. To co je łączy to ogromny wpływ na styl życia. Jako konsumenci lubimy nowości, chcemy być stymulowani wynalazkami. Z drugiej strony rozwój technologii wprost wpływa na ludzi, którzy je wytwarzają. To, co różni współczesność od XIX wieku, to tempo zmian. To niezwykłe tempo daje wszystko, poza poczuciem bezpieczeństwa. Jak w takich realiach zrobić karierę? Jak kształtują się trendy rynku pracy IT? Na jakiego czarnego konia postawić? O tym opowie ekspert Pracuj.pl.',
   	  		speakers_keys: [ 'speaker-zofia-jakubczynska' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-skynet-is-coming': {
   	  		title: 'SkyNet is coming, welcome to Internet of Things era',
   	  		description_html: 'Na prezentacji zostanie przeprowadzona prelekcja na temat ciekawych inicjatyw realizowanych przez Transition Technologies S.A. w coraz to bardziej rosnącej na popularności domenie Internet of Things. Zaprezentowane zostaną projekty, zarówno realizowane, jak i te w fazie koncepcji. Prezentacja zakończy się ciekawą niespodzianką dla publiczności.',
   	  		speakers_keys: [ 'speaker-marcin-klosinski' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-cztery-podstawy-projektowania-oprogramowania': {
   	  		title: 'Cztery podstawy projektowania oprogramowania',
   	  		description_html: 'Sądzisz, że projektowanie oprogramowania jest zbyt trudne? Opowiem Ci, jak w czterech krokach wkroczyć w wspaniały świat designu.',
   	  		speakers_keys: [ 'speaker-mieszko-lassota' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-rzeczy-ktorych-nauczylem-sie-pracujac-nad-hybrydowymi-aplikacjami': {
   	  		title: 'Rzeczy których nauczyłem się pracując nad hybrydowymi aplikacjami',
   	  		description_html: 'Aplikacje hybrydowe (aplikacje mobilne zbudowane w technologiach webowych) od zawsze były uważane za rozwiązanie kontrowersyjne. Jednak patrząc na ich rosnącą popularność, możemy być przekonani, że nie jest to technologia która odchodzi do lamusa. Podczas mojej perezentacji postaram się wyjaśnić czym są aplikacje hybrydowe oraz porównać je z ich głównymi alternatywami: aplikacjami natywnymi i webowymi. Podzielę się też moimi doświadczeniami i najważniejszymi wnioskami które wyciągnełem przez półtora roku mojej pracy nad "hybrydami".',
   	  		speakers_keys: [ 'speaker-konrad-dzwinel' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-android-do-uslug': {
   	  		title: 'Android do usług, czyli ultralekkie serwisy na urządzeniach mobilnych',
   	  		description_html: 'Żyjemy w świecie, w którym codziennie pojawia się wiele nowych wersji urządzeń, systemów i aplikacji. Internet jest dziś powszechnie dostępny i mamy go w kieszeni, w postaci smartfona. Posiadamy też wiele innych urządzeń przenośnych, takich jak tablety, odtwarzacze, kamery itp., które łączą się przez Internet. Każde z nich ma unikalne cechy i funkcje. Chcielibyśmy mieć do nich dostęp zawsze i wszędzie. Pokażemy Wam w jaki sposób, przy wykorzystaniu architektury mikroserwisów, można tworzyć ultralekkie usługi na urządzeniach działających pod kontrolą systemu Android i wykorzystywać je w aplikacjach. Wasze urządzenia i aplikacje mogą być dostępne przez przeglądarkę, mogą też się ze sobą łączyć i wymieniać dane. Wspólnie, na żywo, zbudujemy aplikację mobilną w taki sposób, aby można było korzystać z jej funkcji przez przeglądarkę.',
   	  		speakers_keys: [ 'speaker-jacek-zadrag', 'speaker-daniel-chrusciak' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-prosty-serwer-push-notifications': {
   	  		title: 'Prosty serwer z Push Notifications dla aplikacji mobilnych bez umiejętności programowania po stronie serwera',
   	  		description_html: 'Jak często masz świetny pomysł na aplikację ale nie znasz nikogo, kto może pomóc Ci stworzyć serwer dla projektu? Ile razy zdarzyło Ci się zrezygnować z niektórych funkcjonalności, bo nie nie wiedziałeś/nie wiedziałaś jak stworzyć komunikację serwerową, czy Push Notifications dla Twojej aplikacji? Czy zdarzyła Ci się sytuacja w której przy bardzo ograniczonym czasie musiałeś/musiałaś stworzyć aplikację mobilną komunikującą się z serwerem, jednak nie było czasu na to by zwoływać zespół backendowy by uzgadniać protokół sieciowy, komunikację, wymianę informacji ? Jeśli zdarzały Ci się takie sytuacje i chcesz uniknąć ich w przyszłości przyjdź i posłuchaj, jak w ciągu kilku minut i "kliknięć" stworzyć serwer dla Twojej aplikacji mobilnej. Wykład będzie oparty na tworzeniu aplikacji na system Android, ale prezentowane rozwiązanie współpracuje również z systemami iOS, OS X, Windows Phone etc.',
   	  		speakers_keys: [ 'speaker-michal-waledziak' ],
   	  		language: 'PL'
   	  	},
   	  	'talk-placisz-nadal-karta-lub-gotowska': {
   	  		title: 'Płacisz nadal kartą lub gotówką, czy już telefonem?',
   	  		description_html: 'Niedawno Apple ogłosiło, że tworzy w USA własny system płatności mobilnych Apple Pay. W Polsce joint venture 6 banków (PKO BP + mBank + ING + BZWBK + Alior + Millenium) pracuje nad Polskim Standardem Płatności. Jako Seamless już 2 lata temu uruchomiliśmy nasz system płatności mobilnych SEQR. Początkowo była to Szwecja, obecnie jest to dodatkowo Finlandia, Belgia i Rumunia, a niedługo będą to inne kraje strefy Euro, UK oraz USA. Każdy walczy o kawałek tortu dla siebie, ponieważ według wróżbitów rynek płatności mobilnych powinien być wart w 2017 roku ok. 720 mld USD przy 450 mln użytkowników. Droga tam jednak nie jest taka różowa i oprócz walki z konkurencją wymaga przekonania ludzi, że lepiej płacić telefonem niż kartą. Prezentacja w sposób przekrojowy (techniczny, biznesowy, marketingowy i prawny) spojrzy na wyzwania, szanse i ryzyka jakie niosą ze sobą płatności mobilne z perspektywy gracza, który już kilka lat jest na tym rynku.',
   	  		speakers_keys: [ 'speaker-tomek-pajak' ],
   	  		language: 'PL'
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
   	  		description_html: 'There is Solider soup - "Grochówka" for everyone! VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.'
   	  	},
   	  	'break-finally': {
   	  		title: 'Finally',
   	  		description_html: ''
   	  	}
   	  },
   	  venues: {
   	  	'venue-1': {
   	  		title: 'Samsung'
   	  	},
   	  	'venue-2': {
   	  		title: 'ABB'
   	  	},
   	  	'venue-3': {
   	  		title: 'Ericpol'
   	  	},
   	  	'venue-4': {
   	  		title: 'Mobica'
   	  	},
   	  	'venue-5': {
   	  		title: 'Transition Technologies'
   	  	}
   	  },
   	  schedule: {
   	  	'slot-registration': {
   	  		break_key: 'break-registration'
   	  	},
   	  	'slot-hello-world': {
   		  	break_key: 'break-hello-world'
   	  	}, 
   	  	'slot-1': {
   	  		'venue-1': {
   	  			talk_key: 'talk-tizen-ecosystem'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-ionic-framework'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-epapier-w-technologiach-mobilnych'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-new-features-introduced-in-opengl-es'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-skynet-is-coming'
   	  		}
   	  	},
   	  	'slot-coffee-1': {
   	  		break_key: 'break-coffee'
   	  	}, 
   	  	'slot-2': {
   	  		'venue-1': {
   	  			talk_key: 'talk-testy-bezpieczenstwa-aplikacji-mobilnych'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-jak-pisac-mniej-kodu'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-uslugi-dla-aplikacji-mobilnych'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-android-wear'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-cztery-podstawy-projektowania-oprogramowania'
   	  		}
   	  	}, 
   	  	'slot-coffee-2': {
   	  		break_key: 'break-coffee'
   	  	}, 
   	  	'slot-3': {
   	  		'venue-1': {
   	  			talk_key: 'talk-quicker-journeys-through'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-world-of-beacon-enabled-apps'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-wspolpraca-projektanta-i-programisty'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-android-wear-od-rozpoznawania-mowy-do-wlasnych-cyferblatow'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-rzeczy-ktorych-nauczylem-sie-pracujac-nad-hybrydowymi-aplikacjami'
   	  		}
   	  	},  
   	  	'slot-coffee-3': {
   	  		break_key: 'break-coffee'
   	  	}, 
   	  	'slot-4': {
   	  		'venue-1': {
   	  			talk_key: 'talk-apps-and-mental-models'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-tools-and-techniques-that-help-maintain-high-quality-code-base'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-tworzenie-laboratoriow-testowych'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-boiling-out-boilerplate'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-android-do-uslug'
   	  		}
   	  	},  
   	  	'slot-lunch': {
   	  		break_key: 'break-lunch'
   	  	},  
   	  	'slot-5': {
   	  		'venue-1': {
   	  			talk_key: 'talk-universal-image-loader'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-tuningujac-xcode'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-like-smth-is-not-the-way-to-go'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-szybkie-programowanie-gier-w-qt'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-prosty-serwer-push-notifications'
   	  		}
   	  	},  
   	  	'slot-coffee-4': {
   	  		break_key: 'break-coffee'
   	  	}, 
   	  	'slot-6': {
   	  		'venue-1': {
   	  			talk_key: 'talk-projektowanie-aplikacji-ios'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-reverse-engineering-in-ios'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-wielki-projekt-i-wielka-firma'
   	  		},
   	  		'venue-4': {
   	  			talk_key: 'talk-quo-vadis-programisto'
   	  		},
   	  		'venue-5': {
   	  			talk_key: 'talk-placisz-nadal-karta-lub-gotowska'
   	  		}
   	  	},
   	  	'slot-coffee-5': {
   	  		break_key: 'break-coffee'
   	  	},
   	  	'slot-7': {
   	  		'venue-1': {
   	  			talk_key: 'talk-wprowadzenie-do-augmented-reality'
   	  		},
   	  		'venue-2': {
   	  			talk_key: 'talk-web-components'
   	  		},
   	  		'venue-3': {
   	  			talk_key: 'talk-mirror-szybki-development-ui-dla-androida'
   	  		}
   	  	},
   	  	'slot-finally': {
   	  		break_key: 'break-finally'
   	  	}
   	  }
    },
    getPreparedTitle: function() {
      if (this.document.title) {
        return this.document.title + " | " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getPreparedDescription: function() {
      return this.document.description || this.site.description;
    },
    getPreparedKeywords: function() {
      return this.site.keywords.concat(this.document.keywords || []).join(', ');
    }
  },
  collections: {
    posts: function() {
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
    serverExtend: function(opts) {
      var docpad, latestConfig, newUrl, oldUrls, server;
      server = opts.server;
      docpad = this.docpad;
      latestConfig = docpad.getConfig();
      oldUrls = latestConfig.templateData.site.oldUrls || [];
      newUrl = latestConfig.templateData.site.url;
      return server.use(function(req, res, next) {
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