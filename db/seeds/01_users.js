exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Romain Scrogges',
          email: 'rscrogges0@digg.com',
          password: 'iehgJpem'
        },
        {
          name: 'Ofelia Trusler',
          email: 'otrusler1@parallels.com',
          password: 'XepY9Cd'
        },
        {
          name: 'Nelli Kadwallider',
          email: 'nkadwallider2@ehow.com',
          password: 'FZi1pU4'
        },
        {
          name: 'Arne Cabena',
          email: 'acabena3@delicious.com',
          password: '7CJsEZw'
        },
        {
          name: 'Janice Rosenqvist',
          email: 'jrosenqvist4@ebay.com',
          password: 'dphNdsJOC47'
        },
        {
          name: 'Berri Louisot',
          email: 'blouisot5@jiathis.com',
          password: 'XBPoJ8aH'
        },
        {
          name: 'Blair Gabotti',
          email: 'bgabotti6@globo.com',
          password: 'YgyzwH'
        },
        {
          name: 'Sebastian Greenalf',
          email: 'sgreenalf7@nsw.gov.au',
          password: 'Fr76Nyz3F7N'
        },
        {
          name: 'Opalina Hatherley',
          email: 'ohatherley8@youtube.com',
          password: 'MZjdFtLmq'
        },
        {
          name: 'Nigel Biner',
          email: 'nbiner9@webs.com',
          password: 'XZfZzXPzzLHZ'
        },
        {
          name: 'Binnie Leyborne',
          email: 'bleybornea@com.com',
          password: 'msaa6R'
        },
        {
          name: 'Ellynn Clemenza',
          email: 'eclemenzab@cpanel.net',
          password: 'aKAgQxOnxOd'
        },
        {
          name: 'Titus Humbles',
          email: 'thumblesc@ask.com',
          password: 'o50YlwUN1E'
        },
        {
          name: 'Dimitri Mollison',
          email: 'dmollisond@eepurl.com',
          password: 'PaRDkdiFcq'
        },
        {
          name: 'Randi Pedreschi',
          email: 'rpedreschie@geocities.com',
          password: 'lhwgcrbFoAi'
        },
        {
          name: 'Stormie Britt',
          email: 'sbrittf@zimbio.com',
          password: 'IYyc9mD'
        },
        {
          name: 'Tomasina Beverstock',
          email: 'tbeverstockg@google.com.au',
          password: 'fjx4daOJDU'
        },
        {
          name: 'Randal Slegg',
          email: 'rsleggh@bloomberg.com',
          password: 'lPRKbFllG6Y'
        },
        {
          name: 'Linnet Vynoll',
          email: 'lvynolli@time.com',
          password: 't78uus'
        },
        {
          name: 'Shawn Caulcott',
          email: 'scaulcottj@earthlink.net',
          password: 'EhtZUdru'
        },
        {
          name: 'Florentia Angelini',
          email: 'fangelinik@phoca.cz',
          password: 'Z8PCuayq'
        },
        {
          name: 'Dorita Gurnay',
          email: 'dgurnayl@discuz.net',
          password: 'WcQy26jMo'
        },
        {
          name: 'Wilhelmina Treamayne',
          email: 'wtreamaynem@blogs.com',
          password: '144BLtomFB'
        },
        {
          name: 'Chantalle Taaffe',
          email: 'ctaaffen@yale.edu',
          password: 'H2NEw7tsc'
        },
        {
          name: 'Helenka Morefield',
          email: 'hmorefieldo@eepurl.com',
          password: 'vYGhhKfCU'
        },
        {
          name: 'Edee Meaker',
          email: 'emeakerp@cnbc.com',
          password: 'aw4JLIFW'
        },
        {
          name: 'Bernita Fairburn',
          email: 'bfairburnq@loc.gov',
          password: 'x9crRDqnPj4'
        },
        {
          name: 'Flory Redholls',
          email: 'fredhollsr@washingtonpost.com',
          password: 'FLQNtPvc4zT'
        },
        { name: 'Richie Bank', email: 'rbanks@google.nl', password: 'bLD7Oq' },
        {
          name: 'Broddy Sworne',
          email: 'bswornet@wp.com',
          password: 'WweUTAAhB'
        },
        {
          name: 'Guntar Georgeot',
          email: 'ggeorgeotu@networkadvertising.org',
          password: 'jwmyPzgJ'
        },
        {
          name: 'Godfrey Boldock',
          email: 'gboldockv@ftc.gov',
          password: 'SXfGMLTyD'
        },
        {
          name: 'Jacinthe Lismer',
          email: 'jlismerw@topsy.com',
          password: 'CD0jjCXU'
        },
        {
          name: 'Rodi Finkle',
          email: 'rfinklex@wiley.com',
          password: 'OQxol1s5P'
        },
        {
          name: 'Darlleen Benoy',
          email: 'dbenoyy@amazonaws.com',
          password: 'a1yn7o8KCn'
        },
        {
          name: 'Lamont Ruggier',
          email: 'lruggierz@alibaba.com',
          password: 'Y0kE3eN'
        },
        {
          name: 'Orelie Smaleman',
          email: 'osmaleman10@thetimes.co.uk',
          password: 'wx5C5xCjf'
        },
        {
          name: 'Payton Dummett',
          email: 'pdummett11@tinypic.com',
          password: 'sxiZes9uVa6'
        },
        {
          name: 'May Burras',
          email: 'mburras12@google.com.hk',
          password: '3tDU08qTyAH'
        },
        {
          name: 'Brigham Coonan',
          email: 'bcoonan13@lycos.com',
          password: 'VOvS51dknVL'
        },
        {
          name: 'Jervis Kiernan',
          email: 'jkiernan14@wunderground.com',
          password: 'UHmwLChdbsl'
        },
        {
          name: 'Vivi Jeacock',
          email: 'vjeacock15@bing.com',
          password: 'WvPZ4621l5H'
        },
        {
          name: 'Mag Alkins',
          email: 'malkins16@discovery.com',
          password: 'PUuUVgQrZw'
        },
        {
          name: 'Farlie Cuffe',
          email: 'fcuffe17@omniture.com',
          password: 'OMCqQHju05v'
        },
        {
          name: 'Megen Klosges',
          email: 'mklosges18@dropbox.com',
          password: 'IOjoSCyi'
        },
        {
          name: 'Talbert Marven',
          email: 'tmarven19@scribd.com',
          password: '7INqSs9VPswH'
        },
        {
          name: 'Warde Jauncey',
          email: 'wjauncey1a@apple.com',
          password: '1KjMHMRQAbz'
        },
        {
          name: 'Farley Ganforthe',
          email: 'fganforthe1b@homestead.com',
          password: 'ey3Jnnfv'
        },
        {
          name: 'Constantine Odney',
          email: 'codney1c@usgs.gov',
          password: '7qnFnEizPw4'
        },
        {
          name: 'Earvin Leborgne',
          email: 'eleborgne1d@amazon.com',
          password: 'ahBeYG8m'
        },
        {
          name: 'Abigale Grovier',
          email: 'agrovier1e@amazon.com',
          password: 'ov5rkHc7o'
        },
        {
          name: 'Kaylyn Francioli',
          email: 'kfrancioli1f@deviantart.com',
          password: 'VYKBybesxjp'
        },
        {
          name: 'Rebbecca Giordano',
          email: 'rgiordano1g@imdb.com',
          password: 'mWz4iQcEzPvs'
        },
        {
          name: 'Cammy Ridsdale',
          email: 'cridsdale1h@ameblo.jp',
          password: 'zOiNBxBJII'
        },
        {
          name: 'Jillane Loft',
          email: 'jloft1i@cnn.com',
          password: 'FRrg28lYp'
        },
        {
          name: 'Yulma Jouanot',
          email: 'yjouanot1j@i2i.jp',
          password: '6Ojtiv'
        },
        {
          name: 'Jemimah Kerrey',
          email: 'jkerrey1k@fc2.com',
          password: 'Mbf1aUWkT5mc'
        },
        {
          name: 'Fiorenze Wiz',
          email: 'fwiz1l@biblegateway.com',
          password: 'jd8vaH'
        },
        {
          name: 'Jere Readings',
          email: 'jreadings1m@furl.net',
          password: 'RUYSf0'
        },
        {
          name: 'Byrle Boller',
          email: 'bboller1n@oracle.com',
          password: 'Jy251vncvX9'
        },
        {
          name: 'Had Treffrey',
          email: 'htreffrey1o@behance.net',
          password: 'vSP6H19t9'
        },
        {
          name: 'Ruprecht Breslane',
          email: 'rbreslane1p@usatoday.com',
          password: 'AJDGgPpj'
        },
        {
          name: 'Orelle Fletcher',
          email: 'ofletcher1q@meetup.com',
          password: '2tRMNa'
        },
        {
          name: 'Ethan Ing',
          email: 'eing1r@soup.io',
          password: '6KdvG194FFEd'
        },
        {
          name: 'Bayard Howsin',
          email: 'bhowsin1s@phoca.cz',
          password: 'GiX6kcPq'
        },
        {
          name: 'Susie Agett',
          email: 'sagett1t@buzzfeed.com',
          password: 'P4dFECRYhC5'
        },
        {
          name: 'Morgan Eyeington',
          email: 'meyeington1u@huffingtonpost.com',
          password: 'L8jIDNhIj'
        },
        {
          name: 'Der Lanfare',
          email: 'dlanfare1v@ehow.com',
          password: 'w8OEl8xk'
        },
        {
          name: 'Fiorenze Holtham',
          email: 'fholtham1w@google.pl',
          password: 'ufVzO8gK'
        },
        {
          name: 'Elvera Sallings',
          email: 'esallings1x@devhub.com',
          password: 'Gqarzum'
        },
        {
          name: 'Jessey Belitz',
          email: 'jbelitz1y@nbcnews.com',
          password: 'hwT9PdDgiKT0'
        },
        {
          name: 'Felicia Muino',
          email: 'fmuino1z@artisteer.com',
          password: 'wUoruROT'
        },
        {
          name: 'Mignon Cavozzi',
          email: 'mcavozzi20@discuz.net',
          password: '8i8Gdav'
        },
        {
          name: 'Loydie Bernardo',
          email: 'lbernardo21@nydailynews.com',
          password: '0EP9fTDD'
        },
        {
          name: 'Lotte Pattrick',
          email: 'lpattrick22@bbc.co.uk',
          password: '5hBKtA'
        },
        {
          name: 'Kristyn Cartmale',
          email: 'kcartmale23@163.com',
          password: 'H6jAxYrRTk'
        },
        {
          name: 'Freedman Yashaev',
          email: 'fyashaev24@icq.com',
          password: '7LhAaM'
        },
        {
          name: 'Dean Ryle',
          email: 'dryle25@seesaa.net',
          password: '9geuWUsFVE'
        },
        {
          name: 'Reynard Longea',
          email: 'rlongea26@sourceforge.net',
          password: 'DI68frss9e9'
        },
        {
          name: 'Shari Vinnick',
          email: 'svinnick27@geocities.jp',
          password: '5q5YAHz0X'
        },
        {
          name: 'Cathyleen Downham',
          email: 'cdownham28@cocolog-nifty.com',
          password: 'rwY5r8OxL'
        },
        {
          name: 'Rhea Bulcroft',
          email: 'rbulcroft29@mapy.cz',
          password: 'KebIfrduKJ'
        },
        {
          name: 'Christian Etridge',
          email: 'cetridge2a@vkontakte.ru',
          password: '7DlCGD'
        },
        {
          name: 'Fonsie Velden',
          email: 'fvelden2b@sphinn.com',
          password: '2koS8bd'
        },
        {
          name: 'Michelle Featherby',
          email: 'mfeatherby2c@bandcamp.com',
          password: 'z76XCvX'
        },
        {
          name: 'Keely Segebrecht',
          email: 'ksegebrecht2d@etsy.com',
          password: 'NDuS0fuste'
        },
        {
          name: 'Binky Bucher',
          email: 'bbucher2e@ucsd.edu',
          password: '3H8IoQv0F'
        },
        {
          name: 'Steward Allward',
          email: 'sallward2f@scribd.com',
          password: 'fQMgtf4Uw'
        },
        {
          name: 'Timmy Angear',
          email: 'tangear2g@woothemes.com',
          password: 'lmYPhP'
        },
        {
          name: 'Caty Westrip',
          email: 'cwestrip2h@tamu.edu',
          password: 'XsbtoDuslkP'
        },
        {
          name: 'Kean Kubes',
          email: 'kkubes2i@reference.com',
          password: 'k8Ewi7mYBjgd'
        },
        {
          name: 'Gaylene Cleynman',
          email: 'gcleynman2j@netlog.com',
          password: 'JrJdueybek2'
        },
        {
          name: 'Man Da Costa',
          email: 'mda2k@tumblr.com',
          password: 't2OZMoN'
        },
        {
          name: 'Melany Jeannaud',
          email: 'mjeannaud2l@yolasite.com',
          password: 'nGSzo2VMpVF'
        },
        {
          name: 'Lucho Rawkesby',
          email: 'lrawkesby2m@macromedia.com',
          password: 'BSQAKyKV27h'
        },
        {
          name: 'Nelson Southernwood',
          email: 'nsouthernwood2n@elegantthemes.com',
          password: 'genNehbbG'
        },
        {
          name: 'Coletta Armor',
          email: 'carmor2o@berkeley.edu',
          password: 'OeF88S2'
        },
        {
          name: 'Michaella Sisley',
          email: 'msisley2p@blogs.com',
          password: 'St6Orbp6O'
        },
        {
          name: 'Rancell Dunley',
          email: 'rdunley2q@bravesites.com',
          password: 'Dve0iV4P'
        },
        {
          name: 'Sibyl Ringwood',
          email: 'sringwood2r@walmart.com',
          password: 'EYMEnLQg9KOb'
        }
      ])
    })
}
