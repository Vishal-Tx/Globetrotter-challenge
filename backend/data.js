const data = [
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "This city is home to a famous tower that sparkles every night.",
        "Known as the 'City of Love' and a hub for fashion and art."
      ],
      "fun_fact": [
        "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
        "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
      ],
      "trivia": [
        "This city is famous for its croissants and macarons. Bon appétit!",
        "it was originally a Roman city called Lutetia."
      ]
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "clues": [
        "This city has the busiest pedestrian crossing in the world.",
        "You can visit an entire district dedicated to anime, manga, and gaming."
      ],
      "fun_fact": [
        "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
        "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
      ],
      "trivia": [
        "The city has over 160,000 restaurants, more than any other city in the world.",
        "It’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
      ]
    },
    {
      "city": "New York",
      "country": "USA",
      "clues": [
        "Home to a green statue gifted by France in the 1800s.",
        "Nicknamed 'The Big Apple' and known for its Broadway theaters."
      ],
      "fun_fact": [
        "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
        "Times Square was once called Longacre Square before being renamed in 1904."
      ],
      "trivia": [
        "It has 468 subway stations, making it one of the most complex transit systems in the world.",
        "The Empire State Building has its own zip code: 10118."
      ]
    },
    {
        "city": "London",
        "country": "United Kingdom",
        "clues": [
          "Famous for its clock tower that is often mistakenly called Big Ben.",
          "Home to the British monarchy and historic landmarks."
        ],
        "fun_fact": [
          "The London Eye was the world's tallest Ferris wheel until 2006.",
          "There are over 170 museums in London, many of which are free to enter."
        ],
        "trivia": [
          "It has more than 300 languages spoken within its borders.",
          "The Tube is one of the oldest underground railways in the world, opening in 1863."
        ]
      },
      {
        "city": "Sydney",
        "country": "Australia",
        "clues": [
          "Home to an iconic opera house shaped like sails.",
          "Known for its stunning harbor and beautiful beaches."
        ],
        "fun_fact": [
          "The Sydney Opera House took 15 years to build and was completed in 1973.",
          "Sydney is built on the world's largest natural harbor."
        ],
        "trivia": [
          "The Sydney Harbour Bridge is often called 'The Coathanger' due to its shape.",
          "Bondi Beach is one of the most famous beaches in the world."
        ]
      },
      {
        "city": "Rome",
        "country": "Italy",
        "clues": [
          "Home to the Colosseum and the Vatican City.",
          "Known for its rich history and stunning architecture."
        ],
        "fun_fact": [
          "Rome is often referred to as the 'Eternal City' and has a history spanning over 2,500 years.",
          "The Vatican City is the smallest independent state in the world."
        ],
        "trivia": [
          "There are more than 900 churches in here.",
          "The Trevi Fountain is one of the most famous fountains in the world."
        ]
      },
      {
        "city": "Moscow",
        "country": "Russia",
        "clues": [
          "Famous for its colorful St. Basil's Cathedral.",
          "Home to the Kremlin, the seat of Russian power."
        ],
        "fun_fact": [
          "Moscow's metro stations are known for their stunning architecture and design.",
          "The city has more billionaires than any other city in the world."
        ],
        "trivia": [
          "It is the largest city in Europe by population.",
          "The Bolshoi Theatre is one of the oldest and most famous theaters in the world."
        ]
      },
      {
        "city": "Beijing",
        "country": "China",
        "clues": [
          "Home to the Great Wall and the Forbidden City.",
          "A city where ancient history meets modern technology."
        ],
        "fun_fact": [
          "The Great Wall of China is not a single wall but a series of walls built by different dynasties.",
          "Beijing has a population of over 21 million people."
        ],
        "trivia": [
          "The city hosted the Summer Olympics in 2008.",
          "Here Peking Duck is a famous dish enjoyed by locals and tourists alike."
        ]
      },
      {
        "city": "Mumbai",
        "country": "India",
        "clues": [
          "Known as the financial capital of India.",
          "Famous for Bollywood and its vibrant street food scene."
        ],
        "fun_fact": [
          "Mumbai is home to the largest slum in Asia, Dharavi.",
          "The city is built on a cluster of islands and connected by bridges."
        ],
        "trivia": [
          "The Gateway of India is one of the most famous landmarks.",
          "This Place has a diverse population, with people from all over India and the world."
        ]
      },
      {
        "city": "Rio de Janeiro",
        "country": "Brazil",
        "clues": [
          "Known for its annual Carnival festival.",
          "Home to the Christ the Redeemer statue."
        ],
        "fun_fact": [
          "The Rio Carnival is one of the largest and most famous in the world.",
          "The Christ the Redeemer statue is one of the New Seven Wonders of the World."
        ],
        "trivia": [
          "It is famous for its beaches, including Copacabana and Ipanema.",
          "The city hosted the Summer Olympics in 2016."
        ]
      },
      {
        "city": "Cairo",
        "country": "Egypt",
        "clues": [
          "Home to the ancient pyramids and the Sphinx.",
          "A city where history and modernity coexist."
        ],
        "fun_fact": [
          "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World.",
          "Cairo is the largest city in the Arab world."
        ],
        "trivia": [
          "The city has a rich Islamic heritage and is known as the 'City of a Thousand Minarets'.",
          "Koshari, a popular dish made of rice, lentils, and pasta, is a must-try."
        ]
      },
      {
        "city": "Berlin",
        "country": "Germany",
        "clues": [
          "Known for its iconic Brandenburg Gate.",
          "A city rich in history, especially regarding World War II."
        ],
        "fun_fact": [
          "Berlin has more museums than rainy days in a year.",
          "The Berlin Wall, which divided the city from 1961 to 1989, is now a popular tourist attraction."
        ],
        "trivia": [
          "The city is famous for its vibrant nightlife and cultural scene.",
          "Berlin is home to the largest zoo in Europe."
        ]
      },
      {
        "city": "Bangkok",
        "country": "Thailand",
        "clues": [
          "Known for its bustling street life and cultural landmarks.",
          "Home to the Grand Palace and Wat Pho."
        ],
        "fun_fact": [
          "Bangkok is known for having the longest name of any city in the world.",
          "The city is famous for its floating markets."
        ],
        "trivia": [
          "Street food in Bangkok is a must-try experience.",
          "The city's public transportation system includes boats, buses, and the Skytrain."
        ]
      },
      {
        "city": "Barcelona",
        "country": "Spain",
        "clues": [
          "Famous for its unique architecture by Antoni Gaudí.",
          "Known for its vibrant art scene and beaches."
        ],
        "fun_fact": [
          "La Sagrada Familia is a basilica that has been under construction since 1882.",
          "Barcelona is home to the world's largest football stadium, Camp Nou."
        ],
        "trivia": [
          "The city hosted the Summer Olympics in 1992.",
          "Tapas are a popular culinary tradition in Barcelona."
        ]
      },
      {
        "city": "Istanbul",
        "country": "Turkey",
        "clues": [
          "A city that straddles two continents.",
          "Home to the historic Hagia Sophia and the Blue Mosque."
        ],
        "fun_fact": [
          "Istanbul was formerly known as Byzantium and later Constantinople.",
          "The city has been the capital of three empires: Roman, Byzantine, and Ottoman."
        ],
        "trivia": [
          "The Grand Bazaar is one of the largest and oldest covered markets in the world.",
          "Turkish delight is a popular sweet treat in Istanbul."
        ]
      },
      {
        "city": "Los Angeles",
        "country": "USA",
        "clues": [
          "Known as the entertainment capital of the world.",
          "Famous for Hollywood and its beautiful beaches."
        ],
        "fun_fact": [
          "Los Angeles is home to the Hollywood Walk of Fame, featuring over 2,600 stars.",
          "The city has more than 75 miles of coastline."
        ],
        "trivia": [
          "Los Angeles is the second-most populous city in the United States.",
          "The Griffith Observatory offers stunning views of the city and the Hollywood sign."
        ]
      },
      {
        "city": "Toronto",
        "country": "Canada",
        "clues": [
          "Home to the iconic CN Tower.",
          "A multicultural city known for its diverse neighborhoods."
        ],
        "fun_fact": [
          "Toronto has more than 150 different ethnic origins represented in its population.",
          "The city is home to the largest film festival in the world, the Toronto International Film Festival (TIFF)."
        ],
        "trivia": [
          "Toronto's PATH is the largest underground shopping complex in the world.",
          "The city has a vibrant arts scene, with numerous galleries and theaters."
        ]
      },
      {
        "city": "Singapore",
        "country": "Singapore",
        "clues": [
          "Known for its cleanliness and strict laws.",
          "Home to the iconic Marina Bay Sands."
        ],
        "fun_fact": [
          "Singapore is made up of 63 islands, including the main island.",
          "The city has one of the highest standards of living in the world."
        ],
        "trivia": [
          "Hawker centers are a must-try for authentic local food.",
          "The city is known for its impressive skyline and modern architecture."
        ]
      },
      {
        "city": "Amsterdam",
        "country": "Netherlands",
        "clues": [
          "Famous for its canals and cycling culture.",
          "Home to the Anne Frank House and Van Gogh Museum."
        ],
        "fun_fact": [
          "Amsterdam has more than 1,500 bridges.",
          "The city is known for its liberal attitudes and vibrant nightlife."
        ],
        "trivia": [
          "The Dutch tulip season attracts tourists from around the world.",
          "Amsterdam's Rijksmuseum is home to masterpieces by Rembrandt and Vermeer."
        ]
      },
      {
        "city": "Buenos Aires",
        "country": "Argentina",
        "clues": [
          "Known for its tango music and dance.",
          "Home to beautiful European-style architecture."
        ],
        "fun_fact": [
          "Buenos Aires is often called the 'Paris of South America'.",
          "The city has the largest and most diverse population in Argentina."
        ],
        "trivia": [
          "The famous Recoleta Cemetery is the final resting place of Eva Perón.",
          "Argentinian steak is a must-try culinary experience."
        ]
      },
      {
        "city": "Lima",
        "country": "Peru",
        "clues": [
          "Known for its rich history and culinary scene.",
          "Home to the ancient ruins of Huaca Pucllana."
        ],
        "fun_fact": [
          "Lima was founded by Spanish conquistador Francisco Pizarro in 1535.",
          "The city is known for being the gastronomic capital of South America."
        ],
        "trivia": [
          "Ceviche is a popular dish that originated in Lima.",
          "The city has a mix of colonial and modern architecture."
        ]
      },
      {
        "city": "Seoul",
        "country": "South Korea",
        "clues": [
          "Known for its pop culture and technology.",
          "Home to the historic Gyeongbokgung Palace."
        ],
        "fun_fact": [
          "Seoul is one of the world's most technologically advanced cities.",
          "The city is known for its vibrant street food scene."
        ],
        "trivia": [
          "Hanbok is a traditional Korean dress often worn during festivals.",
          "Seoul's public transportation system is known for its efficiency."
        ]
      },
      {
        "city": "Hong Kong",
        "country": "China",
        "clues": [
          "Known for its stunning skyline and vibrant harbor.",
          "A major financial center and shopping destination."
        ],
        "fun_fact": [
          "Hong Kong has the highest number of skyscrapers in the world.",
          "The city is known for its dim sum cuisine."
        ],
        "trivia": [
          "Victoria Peak offers breathtaking views of the city.",
          "Hong Kong is home to the world's longest escalator."
        ]
      },
      {
        "city": "Kuala Lumpur",
        "country": "Malaysia",
        "clues": [
          "Home to the iconic Petronas Twin Towers.",
          "A city known for its diverse cultures and cuisines."
        ],
        "fun_fact": [
          "The Petronas Towers were once the tallest buildings in the world.",
          "Kuala Lumpur is famous for its street food, especially nasi lemak."
        ],
        "trivia": [
          "The city has a vibrant nightlife scene with rooftop bars.",
          "Batu Caves is a popular tourist attraction located just outside the city."
        ]
      },
      {
        "city": "Dublin",
        "country": "Ireland",
        "clues": [
          "Known for its historic pubs and literary heritage.",
          "Home to the famous Trinity College and the Book of Kells."
        ],
        "fun_fact": [
          "Dublin is known for its vibrant music scene, especially traditional Irish music.",
          "The city has a rich history that dates back to the Viking era."
        ],
        "trivia": [
          "The Guinness Storehouse is one of the most popular tourist attractions in Dublin.",
          "The city has a number of beautiful parks, including Phoenix Park."
        ]
      },
      {
        "city": "Vienna",
        "country": "Austria",
        "clues": [
          "Known for its classical music and elegant architecture.",
          "Home to the Vienna State Opera and Schönbrunn Palace."
        ],
        "fun_fact": [
          "Vienna has been the birthplace of many famous composers, including Mozart and Beethoven.",
          "The city is known for its coffee culture and traditional coffeehouses."
        ],
        "trivia": [
          "The Vienna Philharmonic Orchestra is one of the most prestigious orchestras in the world.",
          "The city has a rich history of art and culture, with numerous museums and galleries."
        ]
      },
      {
        "city": "Hanoi",
        "country": "Vietnam",
        "clues": [
          "Known for its centuries-old architecture and rich culture.",
          "Home to the Hoan Kiem Lake and the Old Quarter."
        ],
        "fun_fact": [
          "Hanoi is known for its delicious street food, especially pho.",
          "The city has a mix of French colonial and traditional Vietnamese architecture."
        ],
        "trivia": [
          "Hanoi is one of the oldest capitals in the world, with a history of over a thousand years.",
          "The city hosts the largest number of museums in Vietnam."
        ]
      },
      {
        "city": "Mexico City",
        "country": "Mexico",
        "clues": [
          "Home to the ancient Aztec ruins of Templo Mayor.",
          "A city known for its vibrant culture and art scene."
        ],
        "fun_fact": [
          "Mexico City was built on the ruins of the ancient Aztec capital, Tenochtitlán.",
          "The city is one of the largest in the world, with a population of over 9 million."
        ],
        "trivia": [
          "The city's historic center is a UNESCO World Heritage Site.",
          "Tacos al pastor is a popular street food in Mexico City."
        ]
      },
      {
        "city": "Santiago",
        "country": "Chile",
        "clues": [
          "Known for its stunning mountain backdrop.",
          "Home to historic sites and vibrant neighborhoods."
        ],
        "fun_fact": [
          "Santiago is one of the cleanest cities in South America.",
          "The city is known for its wine production and is close to many vineyards."
        ],
        "trivia": [
          "The Plaza de Armas is the historical heart of Santiago.",
          "Santiago has a diverse culinary scene, with influences from around the world."
        ]
      },
      {
        "city": "Copenhagen",
        "country": "Denmark",
        "clues": [
          "Known for its colorful waterfront and cycling culture.",
          "Home to the famous Little Mermaid statue."
        ],
        "fun_fact": [
          "Copenhagen is one of the happiest cities in the world according to various surveys.",
          "The city is known for its sustainable living and green spaces."
        ],
        "trivia": [
          "The Tivoli Gardens is one of the oldest amusement parks in the world.",
          "Copenhagen has a rich history of design and architecture."
        ]
      },
      {
        "city": "Brussels",
        "country": "Belgium",
        "clues": [
          "Famous for its waffles, chocolate, and beer.",
          "Home to the European Union headquarters."
        ],
        "fun_fact": [
            "Brussels is known for its unique blend of Gothic and Baroque architecture.",
            "The Atomium, built for the 1958 World Expo, is one of the city’s most iconic structures."
          ],
          "trivia": [
            "The Grand Place is a UNESCO World Heritage site and is renowned for its ornate guildhalls.",
            "Belgium has over 1,000 different types of beer!"
          ]
        },
        {
          "city": "Helsinki",
          "country": "Finland",
          "clues": [
            "Known for its design district and beautiful archipelago.",
            "Home to the stunning Helsinki Cathedral."
          ],
          "fun_fact": [
            "Helsinki is often referred to as the 'White City of the North' due to its neoclassical architecture.",
            "The city has over 300 islands in its archipelago."
          ],
          "trivia": [
            "Helsinki was named the World Design Capital in 2012.",
            "The city is known for its high standard of living and innovative public transport."
          ]
        },
        {
          "city": "Lisbon",
          "country": "Portugal",
          "clues": [
            "Famous for its hills and historic trams.",
            "Home to the stunning Belém Tower."
          ],
          "fun_fact": [
            "Lisbon is one of the oldest cities in the world, predating Rome.",
            "The city is known for its delicious pastries, especially pastéis de nata."
          ],
          "trivia": [
            "The Alfama district is famous for its narrow streets and traditional Fado music.",
            "Lisbon has a vibrant street art scene, attracting artists from around the globe."
          ]
        },
        {
          "city": "Nairobi",
          "country": "Kenya",
          "clues": [
            "Home to a unique national park within a major city.",
            "Known for its wildlife conservation efforts."
          ],
          "fun_fact": [
            "Nairobi National Park is the only national park in the world located within a city.",
            "The city is known as 'The Green City in the Sun' due to its lush vegetative cover."
          ],
          "trivia": [
            "The Nairobi Railway Museum showcases the history of the railway in East Africa.",
            "Kenya is famous for its coffee and tea production."
          ]
        },
        {
          "city": "Dubai",
          "country": "United Arab Emirates",
          "clues": [
            "Known for its luxury shopping and ultramodern architecture.",
            "Home to the Burj Khalifa, the tallest building in the world."
          ],
          "fun_fact": [
            "Dubai has some of the largest shopping malls in the world, including the Dubai Mall.",
            "The city has a rich cultural heritage, with numerous museums and heritage sites."
          ],
          "trivia": [
            "The Palm Jumeirah is an artificial archipelago and one of the city's most iconic landmarks.",
            "Dubai hosts the annual Dubai Shopping Festival, attracting millions of visitors."
          ]
        },
        {
          "city": "Casablanca",
          "country": "Morocco",
          "clues": [
            "Famous for its historic medina and the Hassan II Mosque.",
            "A city where modernity meets tradition."
          ],
          "fun_fact": [
            "The Hassan II Mosque is the largest mosque in Morocco and has the tallest minaret in the world.",
            "Casablanca is often referred to as the economic capital of Morocco."
          ],
          "trivia": [
            "The city is known for its vibrant nightlife and culinary scene.",
            "Casablanca's medina is a UNESCO World Heritage site."
          ]
        },
        {
          "city": "Budapest",
          "country": "Hungary",
          "clues": [
            "Known for its stunning thermal baths and historic bridges.",
            "Home to the Parliament building and Buda Castle."
          ],
          "fun_fact": [
            "Budapest is often called the 'Paris of the East' due to its beautiful architecture.",
            "The city is famous for its ruin bars, which are unique bars set in abandoned buildings."
          ],
          "trivia": [
            "The Chain Bridge is one of the most iconic symbols of Budapest.",
            "The city has a rich history of music and is home to the Hungarian State Opera House."
          ]
        },
        {
          "city": "Oslo",
          "country": "Norway",
          "clues": [
            "Known for its green spaces and vibrant cultural scene.",
            "Home to the Nobel Peace Center."
          ],
          "fun_fact": [
            "Oslo is one of the fastest-growing cities in Europe.",
            "The city has a rich maritime history reflected in its museums."
          ],
          "trivia": [
            "The Oslo Opera House is a modern architectural marvel that allows visitors to walk on its roof.",
            "Oslo is surrounded by fjords and forests, making it a paradise for nature lovers."
          ]
        },
        {
          "city": "Athens",
          "country": "Greece",
          "clues": [
            "Home to ancient ruins and the Acropolis.",
            "Known for its rich history and vibrant culture."
          ],
          "fun_fact": [
            "Athens is often referred to as the cradle of Western civilization.",
            "The city has a lively street art scene and a rich culinary tradition."
          ],
          "trivia": [
            "The Parthenon, located on the Acropolis, is one of the most iconic ancient structures in the world.",
            "Athens hosted the first modern Olympic Games in 1896."
          ]
        },
        {
          "city": "Edinburgh",
          "country": "Scotland",
          "clues": [
            "Known for its historic and architectural landmarks.",
            "Home to the famous Edinburgh Castle."
          ],
          "fun_fact": [
            "Edinburgh is known as the 'Athens of the North' due to its neoclassical architecture.",
            "The city hosts the world's largest arts festival, the Edinburgh Festival Fringe."
          ],
          "trivia": [
            "The Royal Mile is a historic street that runs through the heart of the Old Town.",
            "The city is famous for its Scotch whisky and traditional haggis."
          ]
        },
        {
          "city": "Krakow",
          "country": "Poland",
          "clues": [
            "Home to the historic Wawel Castle and Market Square.",
            "Known for its rich history and cultural heritage."
          ],
          "fun_fact": [
            "Krakow is one of the oldest cities in Poland and a UNESCO World Heritage site.",
            "The city has a vibrant arts scene, with numerous galleries and theaters."
          ],
          "trivia": [
            "The Cloth Hall in the Main Market Square is one of the oldest shopping malls in the world.",
            "Krakow is close to the Auschwitz-Birkenau concentration camp, a significant historical site."
          ]
        },
        {
          "city": "Stockholm",
          "country": "Sweden",
          "clues": [
            "Known for its archipelago and beautiful waterfront.",
            "Home to the Nobel Museum."
          ],
          "fun_fact": [
            "Stockholm is built on 14 islands connected by over 50 bridges.",
            "The city has a vibrant cultural scene, with numerous museums and galleries."
          ],
          "trivia": [
            "The Vasa Museum features a well-preserved 17th-century warship.",
            "Stockholm is known for its commitment to sustainability and green living."
          ]
        },
        {
          "city": "Lagos",
          "country": "Nigeria",
          "clues": [
            "Known for its vibrant music and arts scene.",
            "Home to one of the fastest-growing economies in Africa."
          ],
          "fun_fact": [
            "Lagos is the most populous city in Africa.",
            "The city has a rich cultural heritage, with numerous festivals throughout the year."
          ],
          "trivia": [
            "Lekki Conservation Centre is a popular eco-tourism destination in Lagos.",
            "The city is known for its diverse culinary scene, with a mix of traditional and modern cuisine."
          ]
        },
        {
          "city": "Helsinki",
          "country": "Finland",
          "clues": [
            "The capital city known for its design and architecture.",
            "Home to the Sibelius Monument and the Ateneum Art Museum."
          ],
          "fun_fact": [
            "Helsinki was named the World Design Capital in 2012.",
            "The city has a unique mix of neoclassical and modern architecture."
          ],
          "trivia": [
            "The Fortress of Suomenlinna, a UNESCO World Heritage site, is located just off the coast of Helsinki.",
            "Helsinki's public transport includes trams, buses, and ferries."
          ]
        },
        {
          "city": "Manila",
          "country": "Philippines",
          "clues": [
            "Known for its historical landmarks and vibrant nightlife.",
            "Home to Intramuros, the old walled city."
          ],
          "fun_fact": [
            "Manila is one of the most densely populated cities in the world.",
            "The city has a rich history, influenced by Spanish, American, and indigenous cultures."
          ],
          "trivia": [
            "Rizal Park is a significant historical site dedicated to the Philippine national hero, José Rizal.",
            "Manila is known for its delicious street food, including adobo and lumpia."
          ]
        },
        {
          "city": "Addis Ababa",
          "country": "Ethiopia",
          "clues": [
            "Known as the political capital of Africa.",
            "Home to the African Union headquarters."
          ],
          "fun_fact": [
            "Addis Ababa is one of the highest capital cities in the world, located at an elevation of over 2,400 meters.",
            "The city is known for its rich coffee culture, being the birthplace of Arabica coffee."
          ],
          "trivia": [
            "The National Museum of Ethiopia houses the famous fossilized remains of 'Lucy', one of the oldest hominids.",
            "Addis Ababa has a vibrant arts scene, with numerous galleries and theaters."
          ]
        },
        {
          "city": "Caracas",
          "country": "Venezuela",
          "clues": [
            "Known for its stunning mountain backdrop.",
            "Home to the beautiful Parque Nacional El Ávila."
          ],
          "fun_fact": [
            "Caracas is one of the highest capital cities in the world, situated at an altitude of 1,000 meters.",
            "The city has a rich cultural heritage influenced by indigenous, Spanish, and African traditions."
          ],
          "trivia": [
            "The city is known for its vibrant music scene, especially salsa and merengue.",
            "Caracas is home to the famous Simon Bolívar Cultural Center."
          ]
        },
        {
          "city": "Baku",
          "country": "Azerbaijan",
          "clues": [
            "Known for its modern Flame Towers and ancient architecture.",
            "Home to the UNESCO-listed Old City (Icherisheher)."
          ],
          "fun_fact": [
            "Baku is located on the western coast of the Caspian Sea.",
            "The city experiences strong winds, earning it the nickname 'City of Winds'."
          ],
          "trivia": [
            "The Heydar Aliyev Center, designed by Zaha Hadid, is a stunning example of modern architecture.",
            "Baku hosted the European Games in 2015."
          ]
        },
        {
          "city": "Algiers",
          "country": "Algeria",
          "clues": [
            "Home to the stunning Casbah, a UNESCO World Heritage site.",
            "Known for its Mediterranean coastline."
          ],
          "fun_fact": [
            "Algiers is often referred to as 'Alger la Blanche' due to its white buildings.",
            "The city has a rich history influenced by various cultures, including Berber, Arab, and French."
          ],
          "trivia": [
            "The city is known for its vibrant arts scene, with numerous galleries and theaters.",
            "The Martyrs' Memorial is a prominent landmark commemorating the Algerian War of Independence."
          ]
        },
        {
          "city": "Tallinn",
          "country": "Estonia",
          "clues": [
            "Known for its well-preserved medieval old town.",
            "Home to the Tallinn Music Week festival."
          ],
          "fun_fact": [
            "Tallinn is one of the best-preserved medieval cities in Europe.",
            "The city is known for its innovative tech scene and is often referred to as 'e-Estonia'."
          ],
          "trivia": [
            "The Alexander Nevsky Cathedral is a stunning example of Russian architecture.",
            "Tallinn's Christmas market is one of the oldest in Europe."
          ]
        },
        {
          "city": "Quito",
          "country": "Ecuador",
          "clues": [
            "Known for its historic center and stunning views.",
            "Home to the Mitad del Mundo monument."
          ],
          "fun_fact": [
            "Quito is the highest capital city in the world, located at an elevation of 2,850 meters.",
            "The city is surrounded by volcanoes and has a rich indigenous history."
          ],
          "trivia": [
            "The historic center of Quito is a UNESCO World Heritage site.",
            "The city has a vibrant arts scene, with numerous galleries and theaters."
          ]
        },
        {
          "city": "La Paz",
          "country": "Bolivia",
          "clues": [
            "Known for its breathtaking views and vibrant culture.",
            "Home to the world's highest capital city."
          ],
          "fun_fact": [
            "La Paz is located at an altitude of over 3,600 meters, making it the highest capital city in the world.",
            "The city has a rich indigenous heritage and is known for its colorful markets."
          ],
          "trivia": [
            "The Witches' Market is a popular tourist attraction where traditional remedies and potions are sold.",
            "The city offers stunning views of the Illimani mountain range."
          ]
        },
        {
          "city": "Banjul",
          "country": "Gambia",
          "clues": [
            "Known for its beautiful beaches and vibrant culture.",
            "Home to the Arch 22 monument."
          ],
          "fun_fact": [
            "Banjul is one of the smallest capital cities in the world.",
            "The city has a rich cultural heritage influenced by various ethnic groups."
          ],
          "trivia": [
            "The city is located on an island at the mouth of the Gambia River.",
            "The Banjul Market is a vibrant place to experience local life and cuisine."
          ]
        },
        {
          "city": "Yerevan",
          "country": "Armenia",
          "clues": [
            "Known for its rich history and cultural heritage.",
            "Home to the stunning Cascade Complex."
          ],
          "fun_fact": [
            "Yerevan is one of the oldest continuously inhabited cities in the world.",
            "The city has a vibrant art scene and numerous museums."
          ],
          "trivia": [
            "The Republic Square is the city's central square and a popular gathering place.",
            "Yerevan is known for its delicious Armenian cuisine, including khorovats (barbecue)."
          ]
        },
        {
          "city": "Helsinki",
          "country": "Finland",
          "clues": [
            "Known for its beautiful waterfront and design.",
            "Home to the Sibelius Monument and the Market Square."
          ],
          "fun_fact": [
            "Helsinki was named the World Design Capital in 2012.",
            "The city has a unique mix of neoclassical and modern architecture."
          ],
          "trivia": [
            "The Fortress of Suomenlinna, a UNESCO World Heritage site, is located just off the coast of Helsinki.",
            "Helsinki's public transport includes trams, buses, and ferries."
          ]
        },
        {
          "city": "Sofia",
          "country": "Bulgaria",
          "clues": [
            "Known for its rich history and diverse architecture.",
            "Home to the stunning Alexander Nevsky Cathedral."
          ],
          "fun_fact": [
            "Sofia is one of the oldest cities in Europe, with a history dating back over 2,500 years.",
            "The city is surrounded by mountains, making it a popular destination for outdoor activities."
          ],
          "trivia": [
            "The city has a vibrant arts scene, with numerous galleries and theaters.",
            "Sofia is known for its delicious local cuisine, including banitsa (cheese pastry)."
          ]
        },
        {
          "city": "San José",
          "country": "Costa Rica",
          "clues": [
            "Known for its lush forests and biodiversity.",
            "Home to the National Theatre and the Precolumbian Gold Museum."
          ],
          "fun_fact": [
            "San José is the political and cultural capital of Costa Rica.",
            "The city is surrounded by mountains and is a gateway to nearby national parks."
          ],
          "trivia": [
            "The Central Market is a popular place to experience local life and cuisine.",
            "San José has a vibrant arts scene, with numerous galleries and theaters."
          ]
        },
        {
          "city": "Porto",
          "country": "Portugal",
          "clues": [
            "Famous for its port wine and historic Ribeira district.",
            "Home to the stunning Dom Luís I Bridge."
          ],
          "fun_fact": [
            "Porto is one of the oldest cities in Europe and a UNESCO World Heritage site.",
            "The city is known for its colorful facades and narrow streets."
          ],
          "trivia": [
            "The Livraria Lello is one of the most beautiful bookstores in the world.",
            "Porto's wine cellars are a popular tourist attraction."
          ]
        },
        {
          "city": "Tunis",
          "country": "Tunisia",
          "clues": [
            "Home to the ancient ruins of Carthage.",
            "Known for its vibrant souks and Mediterranean coastline."
          ],
          "fun_fact": [
            "Tunis is the capital city of Tunisia and a major cultural center in North Africa.",
            "The city has a rich history influenced by various civilizations, including Phoenician, Roman, and Arab."
          ],
          "trivia": [
            "The Bardo Museum houses one of the largest collections of Roman mosaics in the world.",
            "Tunis is known for its delicious cuisine, including couscous and brik."
          ]
        },
        {
            "city": "Prague",
            "country": "Czech Republic",
            "clues": [
              "Known for its medieval architecture and the Charles Bridge.",
              "Home to the largest ancient castle in the world."
            ],
            "fun_fact": [
              "Prague's astronomical clock is the oldest still in operation, dating back to 1410.",
              "The city is often called the 'City of a Hundred Spires' due to its numerous historic towers."
            ],
            "trivia": [
              "Prague was one of the few European cities largely untouched by World War II.",
              "The city is famous for its beer culture, with Czechs consuming more beer per capita than any other country."
            ]
          },
          {
            "city": "Zurich",
            "country": "Switzerland",
            "clues": [
              "Known as a global financial hub and for its high quality of life.",
              "Home to the beautiful Lake Zurich and the Swiss National Museum."
            ],
            "fun_fact": [
              "Zurich is one of the most expensive cities in the world to live in.",
              "The city has over 1,200 fountains, all of which provide drinkable water."
            ],
            "trivia": [
              "Zurich's Bahnhofstrasse is one of the most exclusive shopping streets in the world.",
              "The city is a gateway to the Swiss Alps, making it a popular destination for outdoor enthusiasts."
            ]
          },
          {
            "city": "Warsaw",
            "country": "Poland",
            "clues": [
              "Known for its reconstructed Old Town and vibrant cultural scene.",
              "Home to the Royal Castle and the Warsaw Uprising Museum."
            ],
            "fun_fact": [
              "Warsaw was almost completely destroyed during World War II but was meticulously rebuilt.",
              "The city is home to the tallest building in the European Union, the Varso Tower."
            ],
            "trivia": [
              "Warsaw's Old Town is a UNESCO World Heritage site.",
              "The city is known for its thriving music and arts scene, with numerous festivals throughout the year."
            ]
          },
          {
            "city": "Reykjavik",
            "country": "Iceland",
            "clues": [
              "Known for its geothermal pools and stunning natural landscapes.",
              "Home to the Hallgrímskirkja church and the Harpa Concert Hall."
            ],
            "fun_fact": [
              "Reykjavik is the northernmost capital city in the world.",
              "The city is powered almost entirely by renewable energy, primarily geothermal and hydroelectric."
            ],
            "trivia": [
              "The Blue Lagoon, one of Iceland's most famous attractions, is located just outside Reykjavik.",
              "The city is known for its vibrant nightlife and music scene, with many famous Icelandic bands originating here."
            ]
          },
          {
            "city": "Cape Town",
            "country": "South Africa",
            "clues": [
              "Known for its stunning Table Mountain and beautiful beaches.",
              "Home to the historic Robben Island and the Cape of Good Hope."
            ],
            "fun_fact": [
              "Cape Town is one of the most biodiverse cities in the world, with the Cape Floral Kingdom nearby.",
              "The city is a major wine-producing region, with vineyards dating back to the 17th century."
            ],
            "trivia": [
              "Table Mountain is one of the New7Wonders of Nature.",
              "Cape Town is known for its diverse culinary scene, blending African, European, and Asian influences."
            ]
          },
          {
            "city": "Marrakech",
            "country": "Morocco",
            "clues": [
              "Known for its vibrant souks and historic medina.",
              "Home to the stunning Jardin Majorelle and the Koutoubia Mosque."
            ],
            "fun_fact": [
              "Marrakech is often referred to as the 'Red City' due to the color of its buildings.",
              "The city's medina is a UNESCO World Heritage site."
            ],
            "trivia": [
              "The Djemaa el-Fna square is a bustling hub of activity, with street performers, food stalls, and markets.",
              "Marrakech is known for its luxurious riads, traditional Moroccan houses with interior gardens."
            ]
          },
          {
            "city": "Vancouver",
            "country": "Canada",
            "clues": [
              "Known for its stunning natural beauty and outdoor activities.",
              "Home to Stanley Park and the Capilano Suspension Bridge."
            ],
            "fun_fact": [
              "Vancouver is one of the most ethnically diverse cities in Canada.",
              "The city is consistently ranked as one of the most livable cities in the world."
            ],
            "trivia": [
              "Vancouver's film industry is so robust that it's often referred to as 'Hollywood North'.",
              "The city is a gateway to Whistler, one of the most famous ski resorts in North America."
            ]
          },
          {
            "city": "Auckland",
            "country": "New Zealand",
            "clues": [
              "Known for its stunning harbors and volcanic landscapes.",
              "Home to the Sky Tower and the Auckland War Memorial Museum."
            ],
            "fun_fact": [
              "Auckland is built on a volcanic field, with over 50 volcanoes in the region.",
              "The city is known as the 'City of Sails' due to its large number of yachts and sailing boats."
            ],
            "trivia": [
              "Auckland is the largest city in New Zealand, with a third of the country's population living here.",
              "The city is a major hub for outdoor activities, including hiking, sailing, and bungee jumping."
            ]
          },
          {
            "city": "Dubrovnik",
            "country": "Croatia",
            "clues": [
              "Known for its well-preserved medieval walls and stunning Adriatic coastline.",
              "Home to the historic Old Town and the Fort Lovrijenac."
            ],
            "fun_fact": [
              "Dubrovnik is often referred to as the 'Pearl of the Adriatic'.",
              "The city's walls have been featured in the TV series 'Game of Thrones' as King's Landing."
            ],
            "trivia": [
              "Dubrovnik's Old Town is a UNESCO World Heritage site.",
              "The city is known for its beautiful beaches and crystal-clear waters."
            ]
          },
          {
            "city": "Seville",
            "country": "Spain",
            "clues": [
              "Known for its flamenco dancing and historic architecture.",
              "Home to the stunning Alcázar of Seville and the Seville Cathedral."
            ],
            "fun_fact": [
              "Seville is the birthplace of flamenco dancing.",
              "The city's cathedral is the largest Gothic cathedral in the world."
            ],
            "trivia": [
              "The Giralda tower, part of the Seville Cathedral, was originally a minaret.",
              "Seville is known for its vibrant festivals, including the famous Feria de Abril."
            ]
          },
          {
            "city": "Kyoto",
            "country": "Japan",
            "clues": [
              "Known for its traditional temples and beautiful cherry blossoms.",
              "Home to the famous Fushimi Inari Shrine and the Golden Pavilion."
            ],
            "fun_fact": [
              "Kyoto was the capital of Japan for over 1,000 years before Tokyo.",
              "The city is home to over 2,000 temples and shrines."
            ],
            "trivia": [
              "Kyoto's Gion district is famous for its geishas and traditional tea houses.",
              "The city is a UNESCO World Heritage site, with 17 historic locations recognized."
            ]
          },
          {
            "city": "Florence",
            "country": "Italy",
            "clues": [
              "Known for its Renaissance art and architecture.",
              "Home to the Uffizi Gallery and the Florence Cathedral."
            ],
            "fun_fact": [
              "Florence is considered the birthplace of the Renaissance.",
              "The city's historic center is a UNESCO World Heritage site."
            ],
            "trivia": [
              "The Florence Cathedral's dome, designed by Brunelleschi, is an architectural marvel.",
              "Florence is known for its leather goods and high-quality craftsmanship."
            ]
          },
          {
            "city": "Venice",
            "country": "Italy",
            "clues": [
              "Known for its canals and historic architecture.",
              "Home to St. Mark's Basilica and the Rialto Bridge."
            ],
            "fun_fact": [
              "Venice is built on 118 small islands connected by over 400 bridges.",
              "The city is famous for its gondolas and traditional Venetian masks."
            ],
            "trivia": [
              "Venice's Grand Canal is the main waterway, lined with beautiful palaces.",
              "The city is a UNESCO World Heritage site and is slowly sinking due to rising sea levels."
            ]
          },
          {
            "city": "Salzburg",
            "country": "Austria",
            "clues": [
              "Known for its baroque architecture and musical heritage.",
              "Home to the birthplace of Mozart and the Hohensalzburg Fortress."
            ],
            "fun_fact": [
              "Salzburg is often referred to as the 'City of Mozart'.",
              "The city's historic center is a UNESCO World Heritage site."
            ],
            "trivia": [
              "Salzburg was the filming location for the movie 'The Sound of Music'.",
              "The city is known for its annual Salzburg Festival, one of the most prestigious music festivals in the world."
            ]
          },
          {
            "city": "Geneva",
            "country": "Switzerland",
            "clues": [
              "Known for its international organizations and stunning lake.",
              "Home to the United Nations Office and the Jet d'Eau fountain."
            ],
            "fun_fact": [
              "Geneva is home to the Red Cross and the World Health Organization.",
              "The city is known for its high quality of life and cosmopolitan atmosphere."
            ],
            "trivia": [
              "Geneva's Jet d'Eau is one of the tallest fountains in the world.",
              "The city is a major hub for diplomacy and international relations."
            ]
          },
          {
            "city": "Valencia",
            "country": "Spain",
            "clues": [
              "Known for its futuristic City of Arts and Sciences and beautiful beaches.",
              "Home to the historic Valencia Cathedral and the Central Market."
            ],
            "fun_fact": [
              "Valencia is the birthplace of paella, one of Spain's most famous dishes.",
              "The city's Falles festival is one of the most unique and vibrant festivals in Spain."
            ],
            "trivia": [
              "The City of Arts and Sciences is a stunning architectural complex designed by Santiago Calatrava.",
              "Valencia is known for its vibrant street art and cultural scene."
            ]
          },
          {
            "city": "Bruges",
            "country": "Belgium",
            "clues": [
              "Known for its medieval architecture and picturesque canals.",
              "Home to the Belfry of Bruges and the Basilica of the Holy Blood."
            ],
            "fun_fact": [
              "Bruges is often referred to as the 'Venice of the North' due to its canals.",
              "The city's historic center is a UNESCO World Heritage site."
            ],
            "trivia": [
              "Bruges is famous for its chocolate shops and lace-making tradition.",
              "The city is a popular destination for romantic getaways due to its charming atmosphere."
            ]
          },
          {
            "city": "Ljubljana",
            "country": "Slovenia",
            "clues": [
              "Known for its green spaces and charming old town.",
              "Home to the Ljubljana Castle and the Triple Bridge."
            ],
            "fun_fact": [
              "Ljubljana is one of the smallest capital cities in Europe.",
              "The city is known for its commitment to sustainability and green living."
            ],
            "trivia": [
              "Ljubljana's old town is a pedestrian-friendly area with numerous cafes and shops.",
              "The city is a gateway to the Julian Alps and Lake Bled, popular tourist destinations."
            ]
          },
          {
            "city": "Riga",
            "country": "Latvia",
            "clues": [
              "Known for its art nouveau architecture and historic old town.",
              "Home to the Riga Cathedral and the Freedom Monument."
            ],
            "fun_fact": [
              "Riga is the largest city in the Baltic states.",
              "The city's historic center is a UNESCO World Heritage site."
            ],
            "trivia": [
              "Riga is known for its vibrant nightlife and cultural scene.",
              "The city is a major hub for music festivals, including the Riga Opera Festival."
            ]
          },
          {
            "city": "Tallinn",
            "country": "Estonia",
            "clues": [
              "Known for its well-preserved medieval old town.",
              "Home to the Alexander Nevsky Cathedral and the Toompea Castle."
            ],
            "fun_fact": [
              "Tallinn is one of the best-preserved medieval cities in Europe.",
              "The city is known for its innovative tech scene and is often referred to as 'e-Estonia'."
            ],
            "trivia": [
              "Tallinn's old town is a UNESCO World Heritage site.",
              "The city is a popular destination for digital nomads due to its advanced e-residency program."
            ]
          },
          {
            "city": "Vilnius",
            "country": "Lithuania",
            "clues": [
              "Known for its baroque architecture and historic old town.",
              "Home to the Vilnius Cathedral and the Gediminas Tower."
            ],
            "fun_fact": [
              "Vilnius is one of the few cities in the world with its own 'Republic' – the self-proclaimed Republic of Užupis.",
              "The city's old town is a UNESCO World Heritage site."
            ],
            "trivia": [
              "Vilnius is known for its vibrant arts and culture scene.",
              "The city is a major hub for festivals, including the Vilnius Film Festival."
            ]
          },
          {
            "city": "Sarajevo",
            "country": "Bosnia and Herzegovina",
            "clues": [
              "Known for its rich history and cultural diversity.",
              "Home to the Latin Bridge and the Baščaršija market."
            ],
            "fun_fact": [
              "Sarajevo is often referred to as the 'Jerusalem of Europe' due to its religious diversity.",
              "The city hosted the 1984 Winter Olympics."
            ],
            "trivia": [
              "Sarajevo's old town is a mix of Ottoman and Austro-Hungarian architecture.",
              "The city is known for its vibrant coffee culture and traditional Bosnian cuisine."
            ]
          },
          {
            "city": "Zagreb",
            "country": "Croatia",
            "clues": [
              "Known for its historic upper town and vibrant cultural scene.",
              "Home to the Zagreb Cathedral and the Museum of Broken Relationships."
            ],
            "fun_fact": [
              "Zagreb is one of the oldest cities in Central Europe.",
              "The city is known for its quirky museums and festivals."
            ],
            "trivia": [
              "Zagreb's Christmas market is one of the best in Europe.",
              "The city is a gateway to the Plitvice Lakes National Park, a UNESCO World Heritage site."
            ]
          },
          {
            "city": "Belgrade",
            "country": "Serbia",
            "clues": [
              "Known for its vibrant nightlife and historic landmarks.",
              "Home to the Belgrade Fortress and the Church of Saint Sava."
            ],
            "fun_fact": [
              "Belgrade is one of the oldest cities in Europe, with a history dating back over 7,000 years.",
              "The city is known as the 'White City' due to the color of its buildings."
            ],
            "trivia": [
              "Belgrade's nightlife is famous for its floating river clubs, known as 'splavovi'.",
              "The city is a major cultural hub, with numerous festivals and events throughout the year."
            ]
          },
          {
            "city": "Sofia",
            "country": "Bulgaria",
            "clues": [
              "Known for its rich history and diverse architecture.",
              "Home to the Alexander Nevsky Cathedral and the Vitosha Mountain."
            ],
            "fun_fact": [
              "Sofia is one of the oldest cities in Europe, with a history dating back over 2,500 years.",
              "The city is surrounded by mountains, making it a popular destination for outdoor activities."
            ],
            "trivia": [
              "Sofia is known for its mineral springs, with many public fountains offering free mineral water.",
              "The city has a vibrant arts scene, with numerous galleries and theaters."
            ]
          },
          {
            "city": "Bratislava",
            "country": "Slovakia",
            "clues": [
              "Known for its charming old town and historic castle.",
              "Home to the Bratislava Castle and the UFO Bridge."
            ],
            "fun_fact": [
              "Bratislava is the only capital city in the world that borders two other countries – Austria and Hungary.",
              "The city is known for its vibrant wine culture, with numerous vineyards in the surrounding area."
            ],
            "trivia": [
              "Bratislava's old town is a pedestrian-friendly area with numerous cafes and shops.",
              "The city is a popular destination for river cruises along the Danube."
            ]
          },
          {
            "city": "Reykjavik",
            "country": "Iceland",
            "clues": [
              "Known for its geothermal hot springs and northern lights.",
              "Home to the iconic Hallgrímskirkja church."
            ],
            "fun_fact": [
              "Reykjavik is the northernmost capital city in the world.",
              "The city is powered almost entirely by renewable energy."
            ],
            "trivia": [
              "The Blue Lagoon is one of Iceland's most famous geothermal spas.",
              "Reykjavik has a vibrant music scene and hosts the annual Iceland Airwaves festival."
            ]
          },
          {
            "city": "Wellington",
            "country": "New Zealand",
            "clues": [
              "Known for its windy weather and vibrant arts scene.",
              "Home to the Te Papa Museum and the Beehive government building."
            ],
            "fun_fact": [
              "Wellington is the southernmost capital city in the world.",
              "The city has more cafes and restaurants per capita than New York City."
            ],
            "trivia": [
              "The Weta Workshop, famous for its work on 'The Lord of the Rings' films, is based in Wellington.",
              "Wellington is known for its craft beer and coffee culture."
            ]
          },
          {
            "city": "Canberra",
            "country": "Australia",
            "clues": [
              "Known for its planned layout and national monuments.",
              "Home to the Australian War Memorial and Parliament House."
            ],
            "fun_fact": [
              "Canberra was purpose-built as the capital of Australia in 1908.",
              "The city is surrounded by nature reserves and bushland."
            ],
            "trivia": [
              "The National Gallery of Australia houses one of the largest art collections in the country.",
              "Canberra is known for its vibrant autumn foliage."
            ]
          },
          {
            "city": "Kathmandu",
            "country": "Nepal",
            "clues": [
              "Known for its ancient temples and bustling streets.",
              "Home to the Swayambhunath Stupa and Durbar Square."
            ],
            "fun_fact": [
              "Kathmandu is the gateway to the Himalayas and Mount Everest.",
              "The city has a rich cultural heritage influenced by Hinduism and Buddhism."
            ],
            "trivia": [
              "Pashupatinath Temple is one of the most sacred Hindu temples in the world.",
              "Kathmandu is known for its vibrant festivals, including Dashain and Tihar."
            ]
          },
          {
            "city": "Colombo",
            "country": "Sri Lanka",
            "clues": [
              "Known for its colonial architecture and bustling markets.",
              "Home to the Gangaramaya Temple and Galle Face Green."
            ],
            "fun_fact": [
              "Colombo is the commercial capital of Sri Lanka.",
              "The city has a mix of modern skyscrapers and historic buildings."
            ],
            "trivia": [
              "The Colombo Fort area is a historic district with Dutch and British colonial influences.",
              "Colombo is known for its delicious street food, including kottu roti."
            ]
          },
          {
            "city": "Dhaka",
            "country": "Bangladesh",
            "clues": [
              "Known for its vibrant culture and bustling streets.",
              "Home to the Lalbagh Fort and Ahsan Manzil."
            ],
            "fun_fact": [
              "Dhaka is one of the most densely populated cities in the world.",
              "The city is known as the 'Rickshaw Capital of the World' due to its large number of cycle rickshaws."
            ],
            "trivia": [
              "The Dhaka University area is a hub for art, culture, and politics.",
              "Dhaka is famous for its traditional Bengali cuisine, including biryani and pithas."
            ]
          },
          {
            "city": "Jakarta",
            "country": "Indonesia",
            "clues": [
              "Known for its bustling streets and diverse culture.",
              "Home to the National Monument and Taman Mini Indonesia Indah."
            ],
            "fun_fact": [
              "Jakarta is the largest city in Southeast Asia.",
              "The city is sinking at a rate of 25 cm per year due to excessive groundwater extraction."
            ],
            "trivia": [
              "The Old Town (Kota Tua) is a historic district with Dutch colonial architecture.",
              "Jakarta is known for its vibrant street food scene, including nasi goreng and satay."
            ]
          },
          {
            "city": "Managua",
            "country": "Nicaragua",
            "clues": [
              "Known for its lakeside location and vibrant culture.",
              "Home to the Old Cathedral of Managua and Tiscapa Lagoon."
            ],
            "fun_fact": [
              "Managua is the capital and largest city of Nicaragua.",
              "The city has been rebuilt several times due to earthquakes and natural disasters."
            ],
            "trivia": [
              "The Malecón is a popular waterfront area with stunning views of Lake Managua.",
              "Managua is known for its lively nightlife and traditional music."
            ]
          },
          {
            "city": "Panama City",
            "country": "Panama",
            "clues": [
              "Known for its modern skyline and historic Casco Viejo district.",
              "Home to the Panama Canal and Biomuseo."
            ],
            "fun_fact": [
              "Panama City is the only capital city in the world with a rainforest within its metropolitan area.",
              "The city is a major financial hub in Central America."
            ],
            "trivia": [
              "The Panama Canal is one of the most important engineering marvels in the world.",
              "Panama City is known for its vibrant nightlife and seafood cuisine."
            ]
          },
          {
            "city": "Asunción",
            "country": "Paraguay",
            "clues": [
              "Known for its colonial architecture and vibrant culture.",
              "Home to the Palacio de los López and Costanera de Asunción."
            ],
            "fun_fact": [
              "Asunción is one of the oldest cities in South America, founded in 1537.",
              "The city is known for its relaxed pace of life and friendly locals."
            ],
            "trivia": [
              "The Mercado 4 is a bustling market where you can find everything from crafts to fresh produce.",
              "Asunción is known for its traditional Paraguayan harp music."
            ]
          },
          {
            "city": "Montevideo",
            "country": "Uruguay",
            "clues": [
              "Known for its beautiful beaches and historic architecture.",
              "Home to the Rambla of Montevideo and Ciudad Vieja."
            ],
            "fun_fact": [
              "Montevideo is the southernmost capital city in the Americas.",
              "The city is known for its high quality of life and progressive social policies."
            ],
            "trivia": [
              "The Mercado del Puerto is a popular spot for traditional Uruguayan barbecue.",
              "Montevideo is known for its vibrant tango and candombe music scenes."
            ]
          },
          {
            "city": "Georgetown",
            "country": "Guyana",
            "clues": [
              "Known for its colonial architecture and vibrant markets.",
              "Home to St. George's Cathedral and the Stabroek Market."
            ],
            "fun_fact": [
              "Georgetown is the only English-speaking capital city in South America.",
              "The city is located below sea level and is protected by a series of sea walls."
            ],
            "trivia": [
              "The Demerara Harbour Bridge is one of the longest floating bridges in the world.",
              "Georgetown is known for its diverse cuisine, influenced by Indian, African, and Creole cultures."
            ]
          },
          {
            "city": "Paramaribo",
            "country": "Suriname",
            "clues": [
              "Known for its Dutch colonial architecture and multicultural heritage.",
              "Home to the Presidential Palace and Fort Zeelandia."
            ],
            "fun_fact": [
              "Paramaribo is a UNESCO World Heritage site due to its well-preserved colonial architecture.",
              "The city is known for its diverse population, with influences from Dutch, Indian, African, and Indonesian cultures."
            ],
            "trivia": [
              "The Central Market is a bustling hub where you can find fresh produce and local crafts.",
              "Paramaribo is known for its vibrant festivals, including Phagwa and Diwali."
            ]
          },
          {
            "city": "Kingston",
            "country": "Jamaica",
            "clues": [
              "Known for its reggae music and vibrant culture.",
              "Home to the Bob Marley Museum and Devon House."
            ],
            "fun_fact": [
              "Kingston is the birthplace of reggae music and the legendary Bob Marley.",
              "The city is surrounded by the Blue Mountains, famous for their coffee."
            ],
            "trivia": [
              "The National Gallery of Jamaica houses an impressive collection of Caribbean art.",
              "Kingston is known for its lively street food scene, including jerk chicken and patties."
            ]
          },
          {
            "city": "Port-au-Prince",
            "country": "Haiti",
            "clues": [
              "Known for its vibrant art scene and historic landmarks.",
              "Home to the Musée du Panthéon National and Iron Market."
            ],
            "fun_fact": [
              "Port-au-Prince is the capital and largest city of Haiti.",
              "The city is known for its colorful tap-tap buses and vibrant street art."
            ],
            "trivia": [
              "The Citadelle Laferrière is a historic fortress located near the city.",
              "Port-au-Prince is known for its delicious Haitian cuisine, including griot and pikliz."
            ]
          },
          {
            "city": "Nassau",
            "country": "Bahamas",
            "clues": [
              "Known for its beautiful beaches and colonial architecture.",
              "Home to the Queen's Staircase and Atlantis Paradise Island."
            ],
            "fun_fact": [
              "Nassau is the capital and largest city of the Bahamas.",
              "The city is a popular cruise ship destination."
            ],
            "trivia": [
              "The Straw Market is a popular spot for handmade crafts and souvenirs.",
              "Nassau is known for its vibrant Junkanoo festival, held every Boxing Day and New Year's Day."
            ]
          },
          {
            "city": "Bridgetown",
            "country": "Barbados",
            "clues": [
              "Known for its historic buildings and vibrant culture.",
              "Home to the Parliament Buildings and Carlisle Bay."
            ],
            "fun_fact": [
              "Bridgetown is a UNESCO World Heritage site due to its well-preserved colonial architecture.",
              "The city is known for its lively Crop Over festival, celebrating the end of the sugar cane harvest."
            ],
            "trivia": [
              "The Garrison Historic Area is home to the George Washington House, where the first U.S. president once stayed.",
              "Bridgetown is known for its delicious Bajan cuisine, including flying fish and cou-cou."
            ]
          },
          {
            "city": "Castries",
            "country": "St. Lucia",
            "clues": [
              "Known for its natural beauty and vibrant markets.",
              "Home to the Derek Walcott Square and Castries Market."
            ],
            "fun_fact": [
              "Castries is the capital and largest city of St. Lucia.",
              "The city is surrounded by lush mountains and beautiful beaches."
            ],
            "trivia": [
              "The Morne Fortune area offers stunning views of the city and the Caribbean Sea.",
              "Castries is known for its vibrant Creole culture and cuisine."
            ]
          },
          {
            "city": "Kingstown",
            "country": "St. Vincent and the Grenadines",
            "clues": [
              "Known for its historic churches and vibrant markets.",
              "Home to the St. George's Cathedral and Kingstown Market."
            ],
            "fun_fact": [
              "Kingstown is the capital and largest city of St. Vincent and the Grenadines.",
              "The city is known as the 'City of Arches' due to its many historic stone arches."
            ],
            "trivia": [
              "The Botanical Gardens in Kingstown are among the oldest in the Western Hemisphere.",
              "Kingstown is known for its vibrant street food scene, including roasted breadfruit and fried jackfish."
            ]
          },
          {
            "city": "Roseau",
            "country": "Dominica",
            "clues": [
              "Known for its natural beauty and vibrant culture.",
              "Home to the Dominica Museum and Morne Bruce."
            ],
            "fun_fact": [
              "Roseau is the capital and largest city of Dominica.",
              "The city is surrounded by lush rainforests and volcanic peaks."
            ],
            "trivia": [
              "The Boiling Lake, one of the largest of its kind in the world, is located near Roseau.",
              "Roseau is known for its vibrant Creole culture and cuisine."
            ]
          },
          {
            "city": "Basseterre",
            "country": "St. Kitts and Nevis",
            "clues": [
              "Known for its colonial architecture and vibrant markets.",
              "Home to the Independence Square and St. George's Anglican Church."
            ],
            "fun_fact": [
              "Basseterre is the capital and largest city of St. Kitts and Nevis.",
              "The city was founded by the French in 1627 and later taken over by the British."
            ],
            "trivia": [
              "The Circus, a roundabout in the city center, is modeled after Piccadilly Circus in London.",
              "Basseterre is known for its vibrant Carnival celebrations."
            ]
          },
          {
            "city": "St. John's",
            "country": "Antigua and Barbuda",
            "clues": [
              "Known for its colorful buildings and historic landmarks.",
              "Home to the St. John's Cathedral and Heritage Quay."
            ],
            "fun_fact": [
              "St. John's is the capital and largest city of Antigua and Barbuda.",
              "The city is a popular cruise ship destination."
            ],
            "trivia": [
              "The Museum of Antigua and Barbuda is housed in the oldest building in the city.",
              "St. John's is known for its vibrant Carnival celebrations."
            ]
          },
          {
            "city": "Port of Spain",
            "country": "Trinidad and Tobago",
            "clues": [
              "Known for its vibrant Carnival and multicultural heritage.",
              "Home to the Queen's Park Savannah and the National Museum."
            ],
            "fun_fact": [
              "Port of Spain is the capital and largest city of Trinidad and Tobago.",
              "The city is known for its lively nightlife and street food scene."
            ],
            "trivia": [
              "The Magnificent Seven is a row of historic colonial buildings in the city.",
              "Port of Spain is known for its delicious street food, including doubles and roti."
            ]
          },
          {
            "city": "Georgetown",
            "country": "Cayman Islands",
            "clues": [
              "Known for its beautiful beaches and luxury resorts.",
              "Home to the Cayman Islands National Museum and Seven Mile Beach."
            ],
            "fun_fact": [
              "Georgetown is the capital and largest city of the Cayman Islands.",
              "The city is a major financial hub in the Caribbean."
            ],
            "trivia": [
              "The Cayman Islands are known for their crystal-clear waters and coral reefs.",
              "Georgetown is known for its vibrant culinary scene, including fresh seafood."
            ]
          },
          {
            "city": "Oranjestad",
            "country": "Aruba",
            "clues": [
              "Known for its Dutch colonial architecture and beautiful beaches.",
              "Home to the Fort Zoutman and the Aruba Historical Museum."
            ],
            "fun_fact": [
              "Oranjestad is the capital and largest city of Aruba.",
              "The city is a popular cruise ship destination."
            ],
            "trivia": [
              "The Renaissance Marketplace is a popular shopping and dining area in the city.",
              "Oranjestad is known for its vibrant Carnival celebrations."
            ]
          },
          {
            "city": "Willemstad",
            "country": "Curaçao",
            "clues": [
              "Known for its colorful Dutch colonial architecture.",
              "Home to the Queen Emma Bridge and the Mikvé Israel-Emanuel Synagogue."
            ],
            "fun_fact": [
              "Willemstad is the capital and largest city of Curaçao.",
              "The city is a UNESCO World Heritage site due to its well-preserved colonial architecture."
            ],
            "trivia": [
              "The Floating Market is a popular spot for fresh produce and seafood.",
              "Willemstad is known for its vibrant Carnival celebrations."
            ]
          },
          {
            "city": "Philipsburg",
            "country": "Sint Maarten",
            "clues": [
              "Known for its beautiful beaches and vibrant shopping scene.",
              "Home to the Front Street shopping district and Great Bay Beach."
            ],
            "fun_fact": [
              "Philipsburg is the capital and largest city of Sint Maarten.",
              "The city is a popular cruise ship destination."
            ],
            "trivia": [
              "The Guavaberry Emporium is a popular spot for local liqueurs and souvenirs.",
              "Philipsburg is known for its vibrant nightlife and beach bars."
            ]
          },
          {
            "city": "Gustavia",
            "country": "Saint Barthélemy",
            "clues": [
              "Known for its luxury yachts and high-end shopping.",
              "Home to the Shell Beach and the Wall House Museum."
            ],
            "fun_fact": [
              "Gustavia is the capital and largest city of Saint Barthélemy.",
              "The city is a popular destination for the rich and famous."
            ],
            "trivia": [
              "The Gustavia Harbor is filled with luxury yachts and sailboats.",
              "Gustavia is known for its vibrant culinary scene, including French and Creole cuisine."
            ]
          },
  ]

export default data;