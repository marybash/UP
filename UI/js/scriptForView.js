let offers = new Model([
    {
        id: '1',
        label: 'Monthly subscription to the gym at a bargain price',
        description: 'GYM247 is the first autonomous 24-hour gym in the center of Minsk,\n' +
            '                                which offers everyone training in a format convenient for them at a minimal cost.',
        createdAt: new Date('2021-01-15T19:56:32'),
        link: 'https://www.gym247.by/',
        vendor: 'GYM247',
        photoLink: 'https://www.gym24.by/wp-content/uploads/2019/08/DSC08837-400x284.jpg',
        hashTags: [
            'gym', 'sport', 'health', 'minsk', 'lovesport', 'activelife', 'goodmood'
        ],
        discount: '23%',
        validUntil: new Date('2021-04-01T00:00:00'),
        rating: 3,
        reviews: [
            'The best gym in Minsk!'
        ]
    },
    {
        id: '2',
        label: 'Full day spa pass',
        description: 'Relax and unwind from the daily hustle and bustle in SPA River.',
        createdAt: new Date('2021-03-05T10:17:21'),
        link: 'http://spariver.by/',
        vendor: 'SPA River',
        photoLink: 'http://spariviera.by/assets/images/86.jpg',
        hashTags: [
            'relax', 'sauna', 'massage', 'minsk'
        ],
        discount: '5%',
        validUntil: new Date('2021-04-10T00:00:00'),
        rating: 5,
        reviews: [
            'Perfect massage!',
            'Awesome spa-complex.',
            'I recommend to book spa for the whole day and enjoy!'
        ]
    },
    {
        id: '3',
        label: 'Best set is available with a nice discount',
        description: 'Delicious sushi for the whole family.',
        createdAt: new Date('2021-03-22T15:16:39'),
        link: 'https://sushiinhouse.by/',
        vendor: 'Sushi in House',
        photoLink: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/1590576699_ikebana-set-minsk-sushihouse-kar-1.jpg',
        hashTags: [
            'food', 'sushi', 'minsk'
        ],
        discount: '17%',
        validUntil: new Date('2021-05-22T00:00:00'),
        rating: 4,
        reviews: [
            'Delicious sushi, but very slow delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '4',
        label: 'Homemade pizza',
        description: 'Tasty pizza is always a good idea. Especially with 20% discount!',
        createdAt: new Date('2021-03-20T21:52:44'),
        link: 'https://domino.by/',
        vendor: 'Domino Pizza',
        photoLink: 'https://img.tyt.by/p/05/3/v_statyu_3_dominos221019.jpg',
        hashTags: [
            'food', 'pizza', 'fastfood', 'minsk'
        ],
        discount: '20%',
        validUntil: new Date('2021-05-05T00:00:00'),
        rating: 4,
        reviews: [
            'Not bad.'
        ]
    },
    {
        id: '5',
        label: 'Chess school for teenagers',
        description: 'Develop your mind with our chess school.',
        createdAt: new Date('2021-02-09T09:21:38'),
        link: 'https://best-chess-school.by/',
        vendor: 'Fide',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
        hashTags: [
            'chess', 'mind', 'hobby', 'minsk', 'school'
        ],
        discount: '59%',
        validUntil: new Date('2021-06-16T00:00:00'),
        rating: 2,
        reviews: [
            'Such an awful place with rude teachers.'
        ]
    },
    {
        id: '6',
        label: 'Monthly subscription to the gym at a bargain price',
        description: 'GYM247 is the first autonomous 24-hour gym in the center of Minsk,\n' +
            '                                which offers everyone training in a format convenient for them at a minimal cost.',
        createdAt: new Date('2021-01-17T19:56:32'),
        link: 'https://www.gym247.by/',
        vendor: 'GYM247',
        photoLink: 'https://www.gym24.by/wp-content/uploads/2019/08/DSC08837-400x284.jpg',
        hashTags: [
            'gym', 'sport', 'health', 'minsk', 'lovesport', 'activelife', 'goodmood'
        ],
        discount: '16%',
        validUntil: new Date('2021-04-01T00:00:00'),
        rating: 3,
        reviews: [
            'The best gym in Minsk!'
        ]
    },
    {
        id: '7',
        label: 'Full day spa pass',
        description: 'Relax and unwind from the daily hustle and bustle in SPA River.',
        createdAt: new Date('2021-03-07T10:17:21'),
        link: 'http://spariver.by/',
        vendor: 'SPA River',
        photoLink: 'http://spariviera.by/assets/images/86.jpg',
        hashTags: [
            'relax', 'sauna', 'massage', 'minsk'
        ],
        discount: '3%',
        validUntil: new Date('2021-04-10T00:00:00'),
        rating: 5,
        reviews: [
            'Perfect massage!',
            'Awesome spa-complex.',
            'I recommend to book spa for the whole day and enjoy!'
        ]
    },
    {
        id: '8',
        label: 'Best set is available with a nice discount',
        description: 'Delicious sushi for the whole family.',
        createdAt: new Date('2021-03-10T15:16:39'),
        link: 'https://sushiinhouse.by/',
        vendor: 'Sushi in House',
        photoLink: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/1590576699_ikebana-set-minsk-sushihouse-kar-1.jpg',
        hashTags: [
            'food', 'sushi', 'minsk'
        ],
        discount: '20%',
        validUntil: new Date('2021-05-22T00:00:00'),
        rating: 4,
        reviews: [
            'Delicious sushi, but very slow delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '9',
        label: 'Homemade pizza',
        description: 'Tasty pizza is always a good idea. Especially with 23% discount!',
        createdAt: new Date('2021-03-03T21:52:44'),
        link: 'https://domino.by/',
        vendor: 'Domino Pizza',
        photoLink: 'https://img.tyt.by/p/05/3/v_statyu_3_dominos221019.jpg',
        hashTags: [
            'food', 'pizza', 'fastfood', 'minsk'
        ],
        discount: '23%',
        validUntil: new Date('2021-05-05T00:00:00'),
        rating: 4,
        reviews: [
            'Not bad.'
        ]
    },
    {
        id: '10',
        label: 'Chess school for teenagers',
        description: 'Develop your mind with our chess school.',
        createdAt: new Date('2021-02-09T9:21:38'),
        link: 'https://best-chess-school.by/',
        vendor: 'Fide',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
        hashTags: [
            'chess', 'mind', 'hobby', 'minsk', 'school'
        ],
        discount: '35%',
        validUntil: new Date('2021-06-16T00:00:00'),
        rating: 2,
        reviews: [
            'Such an awful place with rude teachers.'
        ]
    },{
        id: '11',
        label: 'Monthly subscription to the gym at a bargain price',
        description: 'GYM247 is the first autonomous 24-hour gym in the center of Minsk,\n' +
            '                                which offers everyone training in a format convenient for them at a minimal cost.',
        createdAt: new Date('2020-12-30T19:56:32'),
        link: 'https://www.gym247.by/',
        vendor: 'GYM247',
        photoLink: 'https://www.gym24.by/wp-content/uploads/2019/08/DSC08837-400x284.jpg',
        hashTags: [
            'gym', 'sport', 'health', 'minsk', 'lovesport', 'activelife', 'goodmood'
        ],
        discount: '21%',
        validUntil: new Date('2021-03-25T00:00:00'),
        rating: 3,
        reviews: [
            'The best gym in Minsk!'
        ]
    },
    {
        id: '12',
        label: 'Full day spa pass',
        description: 'Relax and unwind from the daily hustle and bustle in SPA River.',
        createdAt: new Date('2021-03-18T10:17:21'),
        link: 'http://spariver.by/',
        vendor: 'SPA River',
        photoLink: 'http://spariviera.by/assets/images/86.jpg',
        hashTags: [
            'relax', 'sauna', 'massage', 'minsk'
        ],
        discount: '7%',
        validUntil: new Date('2021-04-10T00:00:00'),
        rating: 5,
        reviews: [
            'Perfect massage!',
            'Awesome spa-complex.',
            'I recommend to book spa for the whole day and enjoy!'
        ]
    },
    {
        id: '13',
        label: 'Best set is available with a nice discount',
        description: 'Delicious sushi for the whole family.',
        createdAt: new Date('2021-02-19T15:16:39'),
        link: 'https://sushiinhouse.by/',
        vendor: 'Sushi in House',
        photoLink: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/1590576699_ikebana-set-minsk-sushihouse-kar-1.jpg',
        hashTags: [
            'food', 'sushi', 'minsk'
        ],
        discount: '27%',
        validUntil: new Date('2021-05-22T00:00:00'),
        rating: 4,
        reviews: [
            'Delicious sushi, but very slow delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '14',
        label: 'Homemade pizza',
        description: 'Tasty pizza is always a good idea. Especially with 24% discount!',
        createdAt: new Date('2021-03-01T21:52:44'),
        link: 'https://domino.by/',
        vendor: 'Domino Pizza',
        photoLink: 'https://img.tyt.by/p/05/3/v_statyu_3_dominos221019.jpg',
        hashTags: [
            'food', 'pizza', 'fastfood', 'minsk'
        ],
        discount: '24%',
        validUntil: new Date('2021-05-05T00:00:00'),
        rating: 4,
        reviews: [
            'Not bad.'
        ]
    },
    {
        id: '15',
        label: 'Chess school for teenagers',
        description: 'Develop your mind with our chess school.',
        createdAt: new Date('2021-01-16T09:21:38'),
        link: 'https://best-chess-school.by/',
        vendor: 'Fide',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
        hashTags: [
            'chess', 'mind', 'hobby', 'minsk', 'school'
        ],
        discount: '65%',
        validUntil: new Date('2021-06-16T00:00:00'),
        rating: 2,
        reviews: [
            'Such an awful place with rude teachers.'
        ]
    },{
        id: '16',
        label: 'Monthly subscription to the gym at a bargain price',
        description: 'GYM247 is the first autonomous 24-hour gym in the center of Minsk,\n' +
            '                                which offers everyone training in a format convenient for them at a minimal cost.',
        createdAt: new Date('2021-01-07T19:56:32'),
        link: 'https://www.gym247.by/',
        vendor: 'GYM247',
        photoLink: 'https://www.gym24.by/wp-content/uploads/2019/08/DSC08837-400x284.jpg',
        hashTags: [
            'gym', 'sport', 'health', 'minsk', 'lovesport', 'activelife', 'goodmood'
        ],
        discount: '10%',
        validUntil: new Date('2021-04-05T00:00:00'),
        rating: 3,
        reviews: [
            'The best gym in Minsk!'
        ]
    },
    {
        id: '17',
        label: 'Full day spa pass',
        description: 'Relax and unwind from the daily hustle and bustle in SPA River.',
        createdAt: new Date('2021-03-20T10:17:21'),
        link: 'http://spariver.by/',
        vendor: 'SPA River',
        photoLink: 'http://spariviera.by/assets/images/86.jpg',
        hashTags: [
            'relax', 'sauna', 'massage', 'minsk'
        ],
        discount: '5%',
        validUntil: new Date('2021-04-10T00:00:00'),
        rating: 5,
        reviews: [
            'Perfect massage!',
            'Awesome spa-complex.',
            'I recommend to book spa for the whole day and enjoy!'
        ]
    },
    {
        id: '18',
        label: 'The best set is available with a nice discount',
        description: 'Delicious sushi for the whole family.',
        createdAt: new Date('2021-03-19T15:16:39'),
        link: 'https://sushiinhouse.by/',
        vendor: 'Sushi in House',
        photoLink: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/1590576699_ikebana-set-minsk-sushihouse-kar-1.jpg',
        hashTags: [
            'food', 'sushi', 'minsk'
        ],
        discount: '10%',
        validUntil: new Date('2021-05-13T00:00:00'),
        rating: 4,
        reviews: [
            'Delicious sushi, but very slow delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '19',
        label: 'Homemade pizza',
        description: 'Tasty pizza is always a good idea. Especially with 34% discount!',
        createdAt: new Date('2021-01-27T21:52:44'),
        link: 'https://domino.by/',
        vendor: 'Domino Pizza',
        photoLink: 'https://img.tyt.by/p/05/3/v_statyu_3_dominos221019.jpg',
        hashTags: [
            'food', 'pizza', 'fastfood', 'minsk'
        ],
        discount: '34%',
        validUntil: new Date('2021-05-17T00:00:00'),
        rating: 4,
        reviews: [
            'Not bad.'
        ]
    },
    {
        id: '20',
        label: 'Chess school for teenagers',
        description: 'Develop your mind with our chess school.',
        createdAt: new Date('2021-03-22T09:21:38'),
        link: 'https://best-chess-school.by/',
        vendor: 'Fide',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
        hashTags: [
            'chess', 'mind', 'hobby', 'minsk', 'school'
        ],
        discount: '42%',
        validUntil: new Date('2021-06-20T00:00:00'),
        rating: 2,
        reviews: [
            'Such an awful place with rude teachers.'
        ]
    }
]);

let view;

window.onload = () => {
    let username = 'maria.bashmakova';
    view = username.length == 0 ? new View('Guest', false, false) : new View(username, true, true);
    view.refreshPage();
    view.addAd({
        id: '34',
        label: 'TEST',
        description: 'Description test',
        createdAt: new Date('2021-04-12T19:56:32'),
        link: 'https://www.testapp.by/',
        vendor: 'maria',
        photoLink: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flizasenglish.ru%2Fwp-content%2Fuploads%2F2016%2F09%2FTests.png&imgrefurl=https%3A%2F%2Flizasenglish.ru%2Fgrammatika%2Fonlajn-test-present-perfect.html&tbnid=C3TcRjAvS0OtXM&vet=12ahUKEwiZuc22n_nvAhUBgc4BHfmHCOkQMygAegUIARCyAQ..i&docid=eacNGCp9uT7m_M&w=520&h=253&q=test&ved=2ahUKEwiZuc22n_nvAhUBgc4BHfmHCOkQMygAegUIARCyAQ',
        hashTags: [
            'test', 'hashtag2'
        ],
        discount: '50%',
        validUntil: new Date('2021-04-20T00:00:00'),
        rating: 5,
        reviews: [
            'review1'
        ]
    });
    view.removeAd('17');
    view.editAd('3',
        {
            label: 'NEW LABEL',
            description: 'New description',
            link: 'https://sushiinhouse.by/',
            photoLink: 'empty',
            /*hashTags: [
                'food', 'sushi', 'minsk'
            ],*/
            //discount: '17%',
            validUntil: new Date('2021-05-22T00:00:00'),
            rating: 4,
            reviews: [
                'Delicious sushi, but very slow delivery.',
                'Ordered sushi here for a birthday party, everyone was happy.'
            ]
        })
};