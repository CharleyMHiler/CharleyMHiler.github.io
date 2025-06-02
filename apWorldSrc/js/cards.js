const cardsData = [
  {
    header: "Moon Landing",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Apollo_15_flag%2C_rover%2C_LM%2C_Irwin.jpg",
    attribution: "Astronaut David R. Scott, Apollo 15 commander., Public domain, via Wikimedia Commons",
    description: "First humans landed on the Moon.",
    year: 1969
  },
  {
    header: "Fall of Berlin Wall",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg",
    attribution: "Lear 21 at English Wikipedia, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    description: "The Berlin Wall was torn down, reuniting Germany.",
    year: 1989
  },
  {
    header: "Internet Goes Public",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/EMailSystem.svg",
    attribution: "BWenk, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "The World Wide Web became publicly accessible.",
    year: 1991
  },
  {
    header: "Russian Empire Collapses ",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Vladimir-Ilich-Lenin-1918.jpg",
    attribution: "Pyotr Otsup, Public domain, via Wikimedia Commons",
    description: "The Bolsheviks defeat the Romanovs and the formation of the communist USSR",
    year: 1917
  },
  {
    header: "Ottoman Empire Collapses (End)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Territorial_losses_of_the_Ottoman_Empire_after_the_Great_Turkish_War.png",
    attribution: "Bosphore9, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "The Ottoman Empire dissolves into a series of separate national states.",
    year: 1922
  },
  {
    header: "Russian Empire Emancipates Serfs",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Emancipation_of_the_serfs_in_1861.jpg",
    attribution: "AnonymousUnknown author, Public domain, via Wikimedia Commons",
    description: "Emancipation of serfs to build a larger workforce.",
    year: 1861
  },
  {
    header: "First Industrial Revolution (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Newcomen_steam_engine.jpg",
    attribution: "Elmer Ellsworth Burns, Public domain, via Wikimedia Commons",
    description: "In Great Britain, a move towards a production economy.",
    year: 1760
  },
  {
    header: "Columbian Exchange (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/77/BRI_Columbian_Exchange.jpg",
    attribution: "Mark Christensen, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "The spread of goods, crops, animals and pathogens across the Atlantic",
    year: 1492
  },
  {
    header: "Siberian Fur Trade  (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Siberian_Hunter.jpg",
    attribution: "Rneufeld, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons",
    description: "Hint(this will be a specific century XX00 year due to not having a specific year)", 
    year: 1500
  },
  {
    header: "Second Industrial Revolution (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/S%C3%A4chsische_Maschinenfabrik_um_1905_%2801%29.jpg",
    attribution: "scan by Norbert Kaiser, Public domain, via Wikimedia Commons",
    description: "Steel, coal and electricity",
    year: 1870
  },
  {
    header: "Voyages of Zheng He (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/2016_Malakka%2C_Stadhuys_%2809%29.jpg",
    description: "Zheng he sets out in the Pacific and Indian Ocean expeditions to make tribute with other people.",
    attribution: "Photo: Marcin Konsek / Wikimedia Commons",
    year: 1405
  },
  {
    header: "95 Theses written",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Luther_95_Thesen.png",
    attribution: "Martin Luther, Public domain, via Wikimedia Commons",
    description: "Martin Luther writes the 95 theses, starts protestant reformation.",
    year: 1517
  },
  {
    header: "Ibn Battuta (First Voyage)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ibn_Battuta%2C_Sayr_mulhimah_min_al-Sharq_wa-al-Gharb.png",
    attribution: "See page for author, Public domain, via Wikimedia Commons",
    description: "Muslim explorer who travelled across the Mediterranean, Africa and Western Coast",
    year: 1325
  },
  {
    header: "Akbar’s Rule (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Asaf_Khan_presenting_spoils_to_Akbar_at_Jaunpur.jpg",
    attribution: "Miskina and Bhagwan, Public domain, via Wikimedia Commons",
    description: "Mughal ruler with high religious tolerance",
    year: 1556
  },
  {
    header: "Aurangzeb's Rule (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Aurangzeb%2C_in_The_Rulers_of_the_Mughal_Dynasty_from_Babur_to_Awrangzeb%2C_with_their_Ancestor_Timur_MSS_874%2C_India%2C_circa_1707%E2%80%9312._Khalili_Collection.jpg",
    attribution: "1707-12 artist, Public domain, via Wikimedia Commons",
    description: "Mughal ruler with little religious tolerance",
    year: 1658
  },
  {
    header: "Container Ship (First Made)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/MSC_HARMONY_III_%28container_ship%2C_2006%29_in_Port_Koper_%28SIKOP%2C_2024%29.jpg",
    attribution: "Petar Milošević, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "Allowed oceanic hauling of extremely large quantities of goods",
    year: 1956
  },
  {
    header: "Cold War (starts)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/NATO_vs._Warsaw_Pact_%281949-1990%29.svg",
    attribution: "Discombobulates, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "A major economic conflict between capitalism and communism.",
    year: 1945
  },
  {
    header: "Mejii restoration (start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_New_fighting_the_Old_in_early_Meiji_Japan_circa_1870.jpg",
    attribution: "Unknown Japanese artist, Public domain, via Wikimedia Commons",
    description: "Japan’s methods at industrializing themselves", 
    year:1868
  },
  {
    header: "Black Death (First Wave start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Doctor_con_m%C3%A1scara_durante_%C3%A9poca_de_la_plaga_en_Europa.png",
    attribution: "See page for author, Public domain, via Wikimedia Commons",
    description: "Spread by fleas, killing millions, especially in urban areas.", 
    year: 1347
  },
  {
    header: "American Revolution (start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
    attribution: "",
    description: "One of the global revolutions, based off enlightenment thought.",
    year: 1776,
  },
  {
    header: "French Revolution (start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/11-french_revolution_1789.jpg",
    attribution: "",
    description: "One of the global revolutions, only one in Europe. Changed their country rather than making a new one.", 
    year:1789
  },
  {
    header: "Latin American Revolutions (start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png",
    attribution: "",
    description: "Lead by Simon Bolivar, revolutions against Spanish control in Latin America first state.",
    year: 1808
  },
  {
    header: "Touissant Loverture (Birth)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/G%C3%A9n%C3%A9ral_Toussaint_Louverture.jpg",
    attribution: "",
    description: "Leader of the Haitain Revolutions, for freedom from slavery and the creation of the Haitian state.",
    year: 1743
  },
  {
    header: "Scientific Revolution (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
    attribution: "",
    description: "Conflicting the dogma of the church, the use of scientific reasoning was used to better understand the universe.",
    year: 1543
  },
  {
    header: "Constantinople Falls",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Fall-of-constantinople-22.jpg",
    attribution: "",
    description: "Capital of the Byzantine Empire falls by invasions of the Ottoman Turks.",
    year: 1453
  },
  {
    header: "Fall of Baghdad",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Fall_Of_Baghdad_%28Diez_Albums%29.jpg",
    attribution: "",
    description: "Baghdad, capital of the Abassid Caliphate falls due to Mongol invasion. This is the end of the Abbasid Caliphate. ",
    year: 1258
  },
  {
    header: "Ghengis Khan (death)",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Genghis_Khan_Hunts_a_Tiger.jpg",
    attribution: "",
    description: "Unifier and Militarizer of Mongolia, preparing the stepping stones of the great military empire/",
    year: 1228
  },
  {
    header: "Hajj of Mansa Musa",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa_%28cropped%29.jpg",
    attribution: "",
    description: "Mansa Musa took part on the Hajj, a pillar of Islam, donating a vast quantity of wealth along the way.",
    year: 1324
  },
  {
    header: "Fall of the Mongol Empire",
    image: "",
    attribution: "",
    description: "Ended with the fall of the Yuan dynasty, the last Khanate.",
    year: 1368
  },
  {
    header: "Printing Press (invented)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/J._Howe_%26_Co._printing_press%2C_1830.svg",
    attribution: "",
    description: "Invented by Johannes Gutenberg. Allowed printing of works like the bible in local vanaculars.",
    year: 1440
  },
  {
    header: "Tokugawa Shogunate (start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shogun-Tokugawa-Ieyasu.png",
    attribution: "",
    description: "Period of Japanese isolation and feudal rule.",
    year: 1603
  },
  {
    header: "First Opium War (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Opium_War_%28cropped%29.jpg",
    attribution: "",
    description: "Sino-British war to open up Chinese ports for trade and import of Opium, the only commodity that could penetrate China.",
    year: 1839
  },
  {
    header: "",
    image: "",
    attribution: "",
    description: "",
    year: 0
  },
  {
    header: "",
    image: "",
    attribution: "",
    description: "",
    year: 0
  }
];
