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
    description: "Baghdad, capital of the Abbasid Caliphate falls due to Mongol invasion. This is the end of the Abbasid Caliphate. ",
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
    header: "Tupac Amaru ii (death)",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Death_of_Tupac_Amaru_II.jpg",
    attribution: "Pouazity3, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",
    description: "Led a revolution against the Spanish in Peru.",
    year: 1781
  },
  {
    header: "India Colonized",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/India_%28British_Raj%29_-_Recuit_Little_Cigas.png",
    attribution: "Bharata-indstar, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: " India officially became a territory of the British Empire. Led by the British Raj.",
    year: 1858
  },
  {
    header: "Spanish Conquest of Granada",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/La_Rendici%C3%B3n_de_Granada_-_Pradilla.jpg",
    attribution: "Francisco Pradilla y Ortiz, Public domain, via Wikimedia Commons",
    description: "The Catholic Spanish conquered Granada, taking control of Spain, removing Jews and Muslims.",
    year: 1492
  },
  {
    header: "Aztec Civilization (starts)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Templo_Mayor_in_Mexico-Tenochtitlan_16th_century_%28illustration_1900%29.jpg",
    attribution: "Attributed to Diego Rivera, Public domain, via Wikimedia Commons",
    description: "After centuries of searching on a prophecy, a nomadic people start a new civilization in a lake.",
    year: 1345
  },
  {
    header: "Incan empire (starts)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_41.JPG",
    attribution: "Diego Delso, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "Native American civilization high in the Andean Mountain range.",
    year: 1438
  },
  {
    header: "Aztec Civilization (ends)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Templo_Mayor_in_Mexico-Tenochtitlan_16th_century_%28illustration_1900%29.jpg",
    attribution: "Attributed to Diego Rivera, Public domain, via Wikimedia Commons",
    description: "After war, disease and political instability, the Aztec Empire falls.",
    year: 1528
  },
  {
    header: "Incan empire (ends)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_41.JPG",
    attribution: "Diego Delso, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "After war, disease and political instability, the Incan Empire falls.",
    year: 1533
  },
  {
    header: "Sultanate of Delhi established",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Map_of_the_Delhi_Sultanate.png",
    attribution: "Maps created from DEMIS Mapserver, which are public domain. Koba-chanTerritorial area: पाटलिपुत्र (talk), per Schwartberg Atlas p.148, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons",
    description: "Islamic Sultanate established and ruled by Turks in the Indian subcontinent.",
    year: 1206
  },
  {
    header: "Joseon Dynasty (start of rule)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flag_of_the_king_of_Joseon.svg",
    attribution: "See page for author, Public domain, via Wikimedia Commons",
    description: "Last Dynasty of Korea, borrowed ideas like neo-confucianism, bureaucracy and the civil service exam from China.",
    year: 1392
  },
  {
    header: "Final Crusade",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Combat_deuxi%C3%A8me_croisade.jpg",
    attribution: "",
    description: "The Final large scale Crusade for the holy land.",
    year: 1291
  },
  {
    header: "Fall of Songhay Kingdom",
    image: "",
    attribution: "",
    description: "The Songhay Kingdom in West Africa falls due to Moroccan Invasion.",
    year: 1591
  },
  {
    header: "Spanish Takeover of Philippines (begins)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Colonial_Coat_of_Arms_of_the_Philippines.jpg",
    attribution: "Unknown Author, Public domain, via Wikimedia Commons",
    description: "Conquest of the Indian Ocean group of islands in order to gain access to spice trade, and a destination for American silver.",
    year: 1565
  },
  {
    header: "Jamestown (Established)",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Jamestown_Virginia_in_1622_Conquestofvirg1939sams_0590.jpg",
    attribution: "Peter Vander (via Conway Whittle Sams), Public domain, via Wikimedia Commons",
    description: "In North America, the First English colony is created at Jamestown.",
    year: 1607
  },
  {
    header: "Golden Horde (Falls)",
    image: "",
    attribution: "",
    description: "The fall of the Golden Horde khanate, leading to the establishment of numerous new states in Eurasia.",
    year: 1480
  },
  {
    header: "Russian incorporation of Ukraine (begins)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Golden_Horde_Warriors.jpg",
    attribution: "WSP300, CC0, via Wikimedia Commons",
    description: "A growing Russian empire incorporates Ukraine.",
    year: 1648
  },
  {
    header: "Treaty of Nerchinsk",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B8_%D0%A2%D0%B5%D0%BA%D1%81%D1%82_%D0%9D%D0%B5%D1%80%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80a_%28%D0%B0%D0%B2%D0%BF%D1%80%2C_%D5%93._163%2C_%D0%9E%D0%BF._1%2C_%D0%94._22%2C_%D0%90%D0%BB._6_%D0%9E%D0%B1.%29_-_2.jpg",
    attribution: "",
    description: "Resolves border between Chinese and Russian Empires",
    year: 1689
  },
  {
    header: "Ottoman Conquest of Egypt",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Ottoman_Egypt.png",
    attribution: "AbdurRahman AbdulMoneim, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "The Ottoman EMpire, expands their territory and conquers Egypt.",
    year: 1517
  },
  {
    header: "Improved Telescope (Developed)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Galilei%27s_newer_telescope%2C_part_with_lens%2C_Museo_Galileo%2C_Florence%2C_Inv._2427%2C_224092.jpg",
    attribution: "Zde, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    description: "Galileo develops a new telescope, capable of observing and monitoring the celestial bodies of our solar system much more accurately.",
    year: 1609
  },
  {
    header: "Thirty Years War (Start)",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Thirty_Years_War_3.jpg",
    attribution: "See page for author, Public domain, via Wikimedia Commons",
    description: "A large-scale conflict within the Holy-Roman Empire, dividing it into Protestant and Catholic sections.",
    year: 1618
  },
  {
    header: "Voltaire (Born)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_Mus%C3%A9e_Carnavalet_-_2.jpg/500px-Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_Mus%C3%A9e_Carnavalet_-_2.jpg?20201229230851",
    attribution: "",
    description: "French philosopher who frequently criticized slavery and advocated for individual's rights.",
    year: 1694
  },
  {
    header: "Mirabi (Born)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kangra_painting_of_Mirabai%2C_the_female_Bhakti_saint.jpg",
    attribution: "",
    description: "Very influential poet and writer in the bhakti movement.",
    year: 1498
  },
  {
    header: "Vasco de Gama reaches India",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Greg%C3%B3rio_Lopes_-_Vasco_da_Gama_%28ca_1524%29.jpg",
    attribution: "Gregório Lopes, Public domain, via Wikimedia Commons",
    description: "Vasco de Gama reaches India, searching for routes for the spice trade",
    year: 1498
  },
  {
    header: "Assault on Mombasa",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mombasa%2C_Kenya_-_51970582532.jpg",
    attribution: "Ninara, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
    description: "The Portuguese attack the East African city of Mombasa in order to secure a fort.",
    year: 1505
  },
  {
    header: "East India Companies (established)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Arms_of_the_Honourable_the_East_India_Company.jpg",
    attribution: "AnonymousUnknown author, Public domain, via Wikimedia Commons",
    description: "The British and Dutch East India companies are established as corporations with exclusive rights to spice trade.",
    year: 1601
  },
  {
    header: "British Slavery Abolished",
    image: "https://commons.wikimedia.org/wiki/File:Official_medallion_of_the_British_Anti-Slavery_Society_(1795).jpg",
    attribution: "",
    description: "After numerous slave revolts, and the idea of wage labor being more effective than slave labor, the British Empire abolished slavery",
    year: 1861
  },
  {
    header: "Unification of Italy",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Brigantaggio_lancieri_montebello_in_capitanata_1861_1863.jpg",
    attribution: "unknown - sconosciuto, Public domain, via Wikimedia Commons",
    description: "Italy is unified under nationalistic thought and belief",
    year: 1870
  },
  {
    header: "Unification of Germany",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hinterhalt_bei_Hardheim.jpg",
    attribution: "Anonymer Verfasser, Public domain, via Wikimedia Commons",
    description: "Germany is unified under nationalistic thought and belief",
    year: 1871
  },
  {
    header: "19th Amendment (Ratified)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/National_American_Woman_Suffrage_Association.jpg",
    attribution: "Internet Archive Book Images, No restrictions, via Wikimedia Commons",
    description: "The 19th Amendment is ratified to the U.S. constitution, allowing women the right to vote. ",
    year: 1920
  }

];
