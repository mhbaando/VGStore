import images from "../Constants/images";

const Games = [
  {
    title: "Outriders",
    desc: "Is a 1-3 player co-op RPG shooter set in an original, dark and desperate sci-fi universe. As mankind bleeds out in the trenches of Enoch, you'll create your own Outrider and embark on a dangerous journey across the unknown planet...",
    price: 249,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.outrider,
  },

  {
    title: "Control",
    desc: "Control is an action-Adventure game developed by Remedy Entertainment and published by 505 Games. The game was released in August 2019 for Microsoft Windows, PlayStation 4, and Xbox One, and for PlayStation 5 and Xbox Series X/S …",
    price: 319,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.contorl,
  },

  {
    title: "Horizon Zero",
    desc: "Horizon Zero Dawn is a 2017 Action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young huntress in a world overrun by machines, who sets out to uncover her past.",
    price: 319,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.horizon,
  },

  {
    title: "Medium",
    desc: "The Medium is a third-person psychological horror game that features an innovative dual-reality gameplay, unique art style inspired by painter Zdzisław Beksiński, and original soundtrack co-composed by Arkadiusz Reikowski and Akira Yamaoka.",
    price: 199,
    category: "Horror ",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.medium,
  },
  {
    title: "Red Dead",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 289,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.redDead,
  },

  // Populars
  {
    title: "Rainbow Six Siege",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 289.74,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Rainbow,
  },
  {
    title: "Jurassic World Evolution",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 219.99,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Jurassic,
  },
  {
    title: "Mortal Kombat X",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 349.75,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Mortal,
  },
  {
    title: "The Witcher",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 140.78,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Witcher,
  },

  {
    title: "Halo Reach",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 417.87,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Halo,
  },
  {
    title: "Grand Theft Aout",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 312.45,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.GTA,
  },
  {
    title: "Red Dead",
    desc: "Red Dead is a series of Western-themed action-Adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead …",
    price: 189.99,
    category: "Action",
    isPopular: true,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.RedDead,
  },

  // Promotions 40%
  {
    title: "assassin creed valhalla",
    desc: "Unlike some of the previous Assassin's Creed titles, Valhalla has a much more centralized story following Evior's journey from Norway to England, and seeking to build out a new home for their viking clan by forming alliances ...",
    price: 199.99,
    category: "Horror",
    isPopular: false,
    isDiscounted: true,
    discountPercent: "40",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Assasin,
  },
  {
    title: "Call of Duty",
    desc: "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War...",
    price: 159.99,
    category: "Horror",
    isPopular: false,
    isDiscounted: true,
    discountPercent: "40",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.CallofDuty,
  },
  {
    title: "The Elder Scrolls",
    desc: "The Elder Scrolls is a series of action role-playing video games primarily developed by Bethesda Game Studios and published by Bethesda Softworks. The series focuses on free-form gameplay in a detailed open world. ",
    price: 99.99,
    category: "Horror",
    isPopular: false,
    isDiscounted: true,
    discountPercent: "40",
    isOnSale: false,
    salePrice: "",
    thmubnail: images.Elder,
  },

  // onsale
  {
    title: "Borderlands 2",
    desc: "Borderlands 2 is a 2012 first-person shooter video game developed by Gearbox Software and published by 2K Games. Taking place five years following the events of Borderlands (2009), the game is once again set on the planet of Pandora. ",
    price: 199.99,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: true,
    salePrice: 101.65,
    thmubnail: images.Borderland,
  },

  {
    title: "DarkSiders",
    desc: "Darksiders is a hack and slash action-Adventure video game franchise created by Vigil Games, now developed by Gunfire Games, which consists of some of the original members of Vigil. The series is set on a post-apocalyptic Earth.",
    price: 149.99,
    category: "Adventure",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: true,
    salePrice: 98.99,
    thmubnail: images.DarkSide,
  },
  {
    title: "Shadow Warrior 2",
    desc: "Shadow Warrior 2 is a first-person shooter game developed by Flying Wild Hog and published by Devolver Digital. It is the sequel to the 2013 Shadow Warrior, the reboot of the 1997 original. The game was released for ...",
    price: 299.99,
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: true,
    salePrice: 198.99,
    thmubnail: images.shadow,
  },
  {
    title: "Metro Last Light",
    desc: "Metro: Last Light is a post-apocalyptic-themed, first-person shooter video game with stealth and survival horror elements. It was developed by Ukrainian studio 4A Games and published by Deep Silver for Microsoft ...",
    price: "149.99",
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: true,
    salePrice: 118.99,
    thmubnail: images.Metro,
  },

  {
    title: "Elite Dangerous",
    desc: 'Elite Dangerous[a] is a space flight simulation game developed and published by Frontier Developments. The player takes the role of a pilot (colloquially referred to as "Commander" or "CMDR") of a spaceship, and explores.',
    price: "139.99",
    category: "Action",
    isPopular: false,
    isDiscounted: false,
    discountPercent: "",
    isOnSale: true,
    salePrice: 95.99,
    thmubnail: images.Elite,
  },
];

export default Games;
