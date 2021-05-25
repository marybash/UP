let offers = [
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
            {
                username: '12345',
                rating: 4,
                text: 'The best gym in Minsk!',
                dateReview: new Date('2021-02-20T22:32:05')
            },
            {
                username: 'yrbki69',
                rating: 2,
                text: 'dislike',
                dateReview: new Date('2021-01-16T14:21:32')
            }
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
            {
                username: 'kate27',
                rating: 5,
                text: 'Perfect massage!',
                dateReview: new Date('2021-04-05T21:44:31')
            },
            {
                username: 'fjx620',
                rating: 5,
                text: 'Awesome spa-complex.',
                dateReview: new Date('2021-04-09T18:18:56')
            },
            {
                username: 'ldvjkdc679',
                rating: 5,
                text: 'I recommend to book spa for the whole day and enjoy!',
                dateReview: new Date('2021-03-20T10:25:23')
            }
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
            {
                username: 'cblsawbd',
                rating: 4,
                text: 'Delicious sushi, but very slow delivery.',
                dateReview: new Date('2021-03-30T19:56:32')
            },
            {
                username: 'snhqpg27',
                rating: 5,
                text: 'Ordered sushi here for a birthday party, everyone was happy.',
                dateReview: new Date('2021-04-16T19:56:32')
            }
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
            {
                username: 'lion567',
                rating: 4,
                text: 'Not bad.',
                dateReview: new Date('2021-01-16T13:51:27')
            }
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
            {
                username: 'lion567',
                rating: 2,
                text: 'Such an awful place with rude teachers.',
                dateReview: new Date('2021-02-19T20:51:27')
            }
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
            {
                username: 'shiab',
                rating: 4,
                text: 'The best gym in Minsk!',
                dateReview: new Date('2021-02-20T22:32:05')
            },
            {
                username: 'hsxas',
                rating: 2,
                text: 'dislike',
                dateReview: new Date('2021-01-29T14:21:32')
            }
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
            {
                username: 'user555',
                rating: 5,
                text: 'Perfect massage!',
                dateReview: new Date('2021-04-09T21:44:31')
            },
            {
                username: 'hsxas',
                rating: 5,
                text: 'Awesome spa-complex.',
                dateReview: new Date('2021-03-13T18:18:56')
            },
            {
                username: 'lover93',
                rating: 5,
                text: 'I recommend to book spa for the whole day and enjoy!',
                dateReview: new Date('2021-03-20T10:25:23')
            }
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
            {
                username: 'lover93',
                rating: 4,
                text: 'Delicious sushi, but very slow delivery.',
                dateReview: new Date('2021-03-25T19:56:32')
            },
            {
                username: 'lion567',
                rating: 5,
                text: 'Ordered sushi here for a birthday party, everyone was happy.',
                dateReview: new Date('2021-05-20T19:56:32')
            }
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
            {
                username: 'user555',
                rating: 4,
                text: 'Not bad.',
                dateReview: new Date('2021-04-19T13:51:27')
            }
        ]
    },
    {
        id: '10',
        label: 'Chess school for teenagers',
        description: 'Develop your mind with our chess school.',
        createdAt: new Date('2021-02-09T09:21:38'),
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
            {
                username: 'den17',
                rating: 2,
                text: 'Such an awful place with rude teachers.',
                dateReview: new Date('2021-03-31T20:51:27')
            }
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
            {
                username: 'lion567',
                rating: 4,
                text: 'The best gym in Minsk!',
                dateReview: new Date('2021-02-22T22:32:05')
            },
            {
                username: 'den17',
                rating: 2,
                text: 'dislike',
                dateReview: new Date('2021-01-18T14:21:32')
            }
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
            {
                username: 'user555',
                rating: 5,
                text: 'Perfect massage!',
                dateReview: new Date('2021-04-09T21:44:31')
            },
            {
                username: 'hsxas',
                rating: 5,
                text: 'Awesome spa-complex.',
                dateReview: new Date('2021-03-13T18:18:56')
            },
            {
                username: 'lover93',
                rating: 5,
                text: 'I recommend to book spa for the whole day and enjoy!',
                dateReview: new Date('2021-03-20T10:25:23')
            }
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
            {
                username: 'user555',
                rating: 4,
                text: 'Delicious sushi, but very slow delivery.',
                dateReview: new Date('2021-02-25T19:56:32')
            },
            {
                username: 'lion567',
                rating: 5,
                text: 'Ordered sushi here for a birthday party, everyone was happy.',
                dateReview: new Date('2021-04-20T19:56:32')
            }
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
            {
                username: 'lover93',
                rating: 4,
                text: 'Not bad.',
                dateReview: new Date('2021-03-27T13:51:27')
            }
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
            {
                username: 'snhqpg27',
                rating: 2,
                text: 'Such an awful place with rude teachers.',
                dateReview: new Date('2021-03-25T20:51:27')
            }
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
            {
                username: 'snhqpg27',
                rating: 4,
                text: 'The best gym in Minsk!',
                dateReview: new Date('2021-01-22T22:32:05')
            },
            {
                username: 'ldvjkdc679',
                rating: 2,
                text: 'dislike',
                dateReview: new Date('2021-03-18T14:21:32')
            }
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
            {
                username: 'user555',
                rating: 5,
                text: 'Perfect massage!',
                dateReview: new Date('2021-04-09T21:44:31')
            },
            {
                username: 'hsxas',
                rating: 5,
                text: 'Awesome spa-complex.',
                dateReview: new Date('2021-03-21T18:18:56')
            },
            {
                username: 'lover93',
                rating: 5,
                text: 'I recommend to book spa for the whole day and enjoy!',
                dateReview: new Date('2021-03-29T10:25:23')
            }
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
            {
                username: 'user555',
                rating: 4,
                text: 'Delicious sushi, but very slow delivery.',
                dateReview: new Date('2021-03-30T19:56:32')
            },
            {
                username: 'hsxas',
                rating: 4,
                text: 'Ordered sushi here for a birthday party, everyone was happy.',
                dateReview: new Date('2021-04-20T19:56:32')
            }
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
            {
                username: 'hsxas',
                rating: 4,
                text: 'Not bad.',
                dateReview: new Date('2021-02-02T13:51:27')
            }
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
            {
                username: 'lion567',
                rating: 2,
                text: 'Such an awful place with rude teachers.',
                dateReview: new Date('2021-04-23T20:51:27')
            }
        ]
    }
];

function collectOffers() {
    if (localStorage.getItem("ads") === null) {
        localStorage.setItem("ads", JSON.stringify(offers));
    }
}

function collectUser() {
    if (localStorage.getItem("username") === null) {
        localStorage.setItem("username", "Guest");
        localStorage.setItem("isLogIn", false);
        localStorage.setItem("isVendor", false);

    }
}

window.onload = () => {
    collectOffers();
    collectUser();
    let view = new View();
    view.refreshPage();

    let filterConfig = {};

    let filters = document.querySelector(".filters");
    filters.addEventListener('change', handleFilter);

    function handleFilter(event) {
        let filter = event.target.parentNode.parentNode;
        filterConfig.dateFrom = filter.elements.dateFromFilter.value;
        filterConfig.dateTo = filter.elements.dateToFilter.value;
        filterConfig.vendor = filter.elements.vendorFilter.value;
        if (filter.elements.hashtagsFilter.value.length !== 0) {
            filterConfig.hashTags = filter.elements.hashtagsFilter.value.split(' ');
        } else {
            filterConfig.hashTags = [];
        }
        filterConfig.hashTags = filter.elements.hashtagsFilter.value.split(' ');
        view.refreshPage(0, 10, filterConfig);
    }

    let loadMoreButton = document.querySelector(".load-more-button");
    loadMoreButton.addEventListener('click', handleLoadMoreButton);

    let shown = 10;

    function handleLoadMoreButton() {
        view.refreshPage(0, +10, filterConfig, shown);
        shown += 10;
    }

    let logInOutButton = document.querySelector(".log-out");
    logInOutButton.addEventListener('click', handleLogInOutButton);

    function handleLogInOutButton() {
        view.loadInfoLogInOut();
        if (document.querySelector(".log-in-page") != null) {
            document.forms[0].addEventListener('submit', handleSignInButton);
        }
        view.saveUser();
    }

    function handleSignInButton(event) {
        event.preventDefault();
        let form = event.target;
        if (form.elements.user.value !== '' && form.elements.password.value !== '') {
            view.setUsername(form.elements.user.value);
            view.setIsLogIn(true);
            view.setIsVendor(true);
            form.removeEventListener('submit', handleSignInButton);
            view.removeLogInPage();
            view.saveUser();
            view.refreshPage();

        }
    }

    let addNewOfferButton = document.querySelector(".add-new-offer-button");
    addNewOfferButton.addEventListener('click', handleAddNewOfferButton);

    function handleAddNewOfferButton() {
        view.loadInfoAddEditOffer('Add your offer');
        document.forms[0].addEventListener('submit', handleSaveNewOfferButton);
    }

    function handleSaveNewOfferButton(event) {
        event.preventDefault();
        let form = event.target;
        let adItem = {};
        let id = Math.floor(Math.random() * 100) + 30;
        adItem.id = id.toString();
        adItem.label = form.elements.label.value;
        adItem.description = form.elements.description.value;
        let time = Date.now();
        adItem.createdAt = new Date(time);
        adItem.link = form.elements.link.value;
        adItem.vendor = view.getUsername();
        adItem.photoLink = form.elements.photoLink.value;
        adItem.hashTags = form.elements.hashtags.value.split(' ');
        adItem.discount = form.elements.discount.value + '%';
        adItem.validUntil = new Date(form.elements.dateTo.value);
        adItem.reviews = [];
        view.addAd(adItem);
        form.removeEventListener('submit', handleSaveNewOfferButton);
        view.removeAddNewOfferPage();
        view.refreshPage();
    }

    let offersList = document.querySelector(".offers-list");
    offersList.addEventListener('click', handleOffersListClick);

    function handleOffersListClick(event) {
        let button = event.target.closest('button');
        if (button.className === 'delete-offer-button') {
            handleDeleteOfferButton(event);
        }
        if (button.className === 'edit-offer-button') {
            handleEditOfferButton(event);
        }
        if (button.className === 'write-feedback-button') {
            handleWriteFeedbackButton(event);
        }
    }

    function handleDeleteOfferButton(event) {
        let id = event.target.closest('article').parentNode.getAttribute('offer-id');
        view.removeAd(id);
        view.refreshPage();
    }

    let offerToEditId;

    function handleEditOfferButton(event) {
        view.loadInfoAddEditOffer('Edit your offer');
        offerToEditId = event.target.closest('article').parentNode.getAttribute('offer-id');
        document.forms[0].addEventListener('submit', handleSaveEditedOfferButton);
    }

    function handleSaveEditedOfferButton(event) {
        event.preventDefault();
        let form = event.target;
        let adItem = {};
        adItem.label = form.elements.label.value;
        adItem.description = form.elements.description.value;
        adItem.link = form.elements.link.value;
        adItem.photoLink = form.elements.photoLink.value;
        if (form.elements.hashtags.value !== '') {
            adItem.hashTags = form.elements.hashtags.value.split(' ');
        }
        if (form.elements.discount.value !== '') {
            adItem.discount = form.elements.discount.value + '%';
        }
        if (form.elements.dateTo.value !== '') {
            adItem.validUntil = new Date(form.elements.dateTo.value);
        }
        view.editAd(offerToEditId, adItem);
        form.removeEventListener('submit', handleSaveEditedOfferButton);
        document.querySelector(".add-new-offer-page").remove();
        document.querySelector('.header').after(view.getViewPage());
        view.refreshPage();
    }

    function handleWriteFeedbackButton(event) {
        view.loadInfoWriteFeedback();
        offerToEditId = event.target.closest('article').parentNode.getAttribute('offer-id');
        document.forms[0].addEventListener('submit', handleSaveFeedbackButton);
    }

    function handleSaveFeedbackButton(event) {
        event.preventDefault();
        let form = event.target;
        let review = {};
        let time = Date.now();
        review.dateReview = new Date(time);
        review.username = view.getUsername();
        review.text = form.elements.feedback.value;
        review.rating = parseInt(form.elements.feedbackRating.value);
        view.addReview(offerToEditId, review);
        form.removeEventListener('submit', handleSaveFeedbackButton);
        view.removeWriteFeedbackPage();
        view.refreshPage();
    }
};