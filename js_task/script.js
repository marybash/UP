;(function () {
    let adList = [
        {
            id: '1',
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
                'Delicious sushi, but very delivery.',
                'Ordered sushi here for a birthday party, everyone was happy.'
            ]
        },
        {
            id: '4',
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
            description: 'Develop your mind with our chess school.',
            createdAt: new Date('2021-02-09T9:21:38'),
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
                'Delicious sushi, but very delivery.',
                'Ordered sushi here for a birthday party, everyone was happy.'
            ]
        },
        {
            id: '9',
            description: 'Tasty pizza is always a good idea. Especially with 20% discount!',
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
                'Delicious sushi, but very delivery.',
                'Ordered sushi here for a birthday party, everyone was happy.'
            ]
        },
        {
            id: '14',
            description: 'Tasty pizza is always a good idea. Especially with 20% discount!',
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
            description: 'Develop your mind with our chess school.',
            createdAt: new Date('2021-01-16T9:21:38'),
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
                'Delicious sushi, but very delivery.',
                'Ordered sushi here for a birthday party, everyone was happy.'
            ]
        },
        {
            id: '19',
            description: 'Tasty pizza is always a good idea. Especially with 20% discount!',
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
            description: 'Develop your mind with our chess school.',
            createdAt: new Date('2021-03-22T9:21:38'),
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
        },
    ];

    function getAds(skip = 0, top = 10, filterConfig = undefined) {
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error with inputting types!');
            return;
        }
        if (filterConfig) {
            let returningAds = adList;
            for (let param in filterConfig) {
                if (param === 'hashTags') {
                    for (let i = 0; i < filterConfig.hashTags.length; i++) {
                        returningAds = returningAds.filter(adItem => adItem.hashTags.includes(filterConfig.hashTags[i]));
                    }
                }
                else if (param === 'dateFrom'){
                    returningAds = returningAds.filter(adItem => adItem.createdAt >= filterConfig.dateFrom);
                }
                else if (param === 'dateTo'){
                    returningAds = returningAds.filter(adItem => adItem.createdAt < filterConfig.dateTo);
                }
                else if (param === 'vendor'){
                    returningAds = returningAds.filter(adItem => adItem.vendor === filterConfig.vendor);
                }
            }
            returningAds.sort(comparator);
            return returningAds.slice(skip, skip + top);
        }
        else {
            let returningAds = adList.slice(skip, skip + top);
            returningAds.sort(comparator);
            return returningAds;
        }
    }

    function comparator(first, second) {
        if (first.createdAt < second.createdAt) {
            return 1;
        }
        else if (first.createdAt > second.createdAt) {
            return -1;
        }
        else{
            return 0;
        }
    }

    function getAd(id) {
        if (typeof id === 'string') {
            return adList.find(adItem => adItem.id === id);
        }
        else {
            console.log('Incorrect type of id. Use \'string\'');
        }
    }

    function validateAd(adItem, params = ['id', 'description', 'createdAt', 'link', 'vendor', 'hashTags', 'discount', 'validUntil']) {
        return params.every(function (param) {
            switch (param) {
                case 'id':
                    if (!adItem.id || typeof adItem.id !== 'string' || !adItem.id.trim()) {
                        return false;
                    }
                    break;
                case 'description':
                    if (!adItem.description || typeof adItem.description !== 'string' || adItem.description.length >= 200 || !adItem.description.trim()) {
                        return false;
                    }
                    break;
                case 'createdAt':
                    if (!adItem.createdAt || Object.prototype.toString.call(adItem.createdAt) !== '[object Date]') {
                        return false;
                    }
                    break;
                case 'link':
                    if (!adItem.link || typeof adItem.link !== 'string' || !adItem.link.trim()) {
                        return false;
                    }
                    break;
                case 'vendor':
                    if (!adItem.vendor || typeof adItem.vendor !== 'string' || !adItem.vendor.trim()) {
                        return false;
                    }
                    break;
                case 'photoLink':
                    if (adItem.photoLink && typeof adItem.photoLink !== 'string') {
                        return false;
                    }
                    break;
                case 'hashTags':
                    if (adItem.hashTags) {
                        if (adItem.hashTags.every(tag => typeof tag === 'string')) {
                            return true;
                        }
                    }
                    return false;
                case 'discount':
                    if (!adItem.discount || typeof adItem.discount !== 'string' || !adItem.discount.trim()) {
                        return false;
                    }
                    break;
                case 'validUntil':
                    if (!adItem.validUntil || Object.prototype.toString.call(adItem.validUntil) !== '[object Date]') {
                        return false;
                    }
                    break;
                case 'rating':
                    if (adItem.rating && typeof adItem.discount !== 'number' || adItem.discount < 0 || adItem.discount > 5) {
                        return false;
                    }
                    break;
                case 'reviews':
                    if (adItem.reviews) {
                        if (adItem.reviews.every(tag => typeof tag === 'string')) {
                            return true;
                        }
                    }
                    return false;
                default:
                    return false;
            }
            return true;
        });
    }

    function addAd(adItem) {
        if (validateAd(adItem)) {
            adList.push(adItem);
            return true;
        }
        return false;
    }

    function editAd(id, adItem) {
        for (let param in adItem) {
            if (param === 'id' || param === 'vendor' || param === 'createdAt') {
                console.log("You can't change id, vendor and createdAt");
                return false;
            }
        }
        if (!validateAd(adItem, Object.keys(adItem))) {
            return false;
        }
        let editingAd = getAd(id);
        for (let param in adItem) {
            editingAd[param] = adItem[param];
        }
        return true;
    }

    function removeAd(id) {
        if (typeof id === 'string'){
            let index = adList.findIndex(adItem => adItem.id === id);
            if (index !== -1){
                adList.splice(index, 1);
                return true;
            }
        }
        return false;
    }


    //Testing
    console.log("Top 5 ads: ");
    console.log(getAds(0,5));

    console.log("Top 5 ads, skip 3 ads, hashTag: food (auto sort by created date): ");
    console.log(getAds(3,5, {hashTags: ['food']}));

    console.log("Top 2 ads, skip 5 ads, vendor GYM247: ");
    console.log(getAds(5,2, {vendor: 'GYM247'}));

    console.log("Get ads (incorrect input): ");
    console.log(getAds('10',2, {vendor: 'SPA River'}));

    console.log("Get ad with id 2: ");
    console.log(getAd('2'));

    console.log("Get ad with id 50 (doesn't exist): ");
    console.log(getAd('50'));

    console.log("Get ad with wrong input (not a string): ");
    console.log(getAd(2));

    console.log("Validating correct ad: ");
    console.log(validateAd({id: '123', description: 'validation test 1', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        vendor: 'user123', hashTags: ['test'], discount: '20%', validUntil: new Date('2021-03-25T00:00:00')}));

    console.log("Validating correct ad with a photo: ");
    console.log(validateAd({id: '123', description: 'validation test 2', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        vendor: 'user123', photoLink: 'https://img.freepik.com/free-photo/beautiful-spa-composition-on-massage-table-in-wellness-center-copyspace_155003-14873.jpg?size=626&ext=jpg',
        hashTags: ['test'], discount: '20%', validUntil: new Date('2021-03-25T00:00:00')}));

    console.log("Validating ad without id and vendor: ");
    console.log(validateAd({description: 'validation test 3', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        hashTags: ['test'], discount: '20%', validUntil: new Date('2021-03-25T00:00:00'), photoLink: "www.url"}));

    console.log("Validating ad with an empty vendor: ");
    console.log(validateAd({description: 'validation test 4', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        vendor: '', hashTags: ['test'], discount: '20%', validUntil: new Date('2021-03-25T00:00:00'), photoLink: "www.url"}));

    console.log("Add new ad with correct parameters and get it: ");
    addAd({id: '123', description: 'add ad test 1', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        vendor: 'Maria', hashTags: ['test add'], discount: '25%', validUntil: new Date('2021-03-30T00:00:00')})
    console.log(getAd('123'));

    console.log("Edit newly added ad: ");
    editAd('123',{description: "edit test", photoLink: "kittens"});
    console.log(getAd('123'));

    console.log("Try to edit unchangeable parameters: ");
    editAd('123',{id: '111', description: "edit", photoLink: "puppies"});

    console.log("Delete newly edited ad and get it: ");
    removeAd('123');
    console.log(getAd('123'));

    console.log("Add new ad without a vendor and get it: ");
    addAd({id: '123', description: 'add ad test 1', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
        hashTags: ['test add'], discount: '25%', validUntil: new Date('2021-03-30T00:00:00')})
    console.log(getAd('123'));

}());