class AdList {
    _ads = [];

    constructor (ads) {
        this._ads = ads.concat();
    }

    static comparator(first, second) {
        return second.createdAt - first.createdAt;
    }

    getPage (skip = 0, top = 10, filterConfig = undefined) {
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error with inputting types!');
            return;
        }
        let returningAds = this._ads;
        if (filterConfig) {
            for (let param in filterConfig) {
                if (param === 'hashTags') {
                    filterConfig.hashTags.forEach(tag => {
                        returningAds = returningAds.filter(ad => ad.hashTags.includes(tag));
                    });
                } else if (param === 'dateFrom') {
                    returningAds = returningAds.filter(adItem => adItem.createdAt >= filterConfig.dateFrom);
                } else if (param === 'dateTo') {
                    returningAds = returningAds.filter(adItem => adItem.createdAt < filterConfig.dateTo);
                } else if (param === 'vendor') {
                    returningAds = returningAds.filter(adItem => adItem.vendor === filterConfig.vendor);
                }
            }
        }
        returningAds.sort(AdList.comparator);
        return returningAds.slice(skip, skip + top);
    }

    get (id) {
        if (typeof id === 'string') {
            return this._ads.find(adItem => adItem.id === id);
        }
        console.log('Incorrect type of id. Use \'string\'');
    }

    static validate (adItem, params = ['id', 'label', 'description', 'createdAt', 'link', 'vendor', 'hashTags', 'discount', 'validUntil']) {
        return params.every(function (param) {
            switch (param) {
                case 'id':
                    if (!adItem.id || typeof adItem.id !== 'string' || !adItem.id.trim()) {
                        return false;
                    }
                    break;
                case 'label':
                    if (!adItem.label || typeof adItem.label !== 'string' || !adItem.label.trim()) {
                        return false;
                    }
                    break;
                case 'description':
                    if (!adItem.description || typeof adItem.description !== 'string' || adItem.description.length >= 200 || !adItem.description.trim()) {
                        return false;
                    }
                    break;
                case 'createdAt':
                    if (!adItem.createdAt instanceof Date) {
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
                    if (!adItem.validUntil instanceof Date) {
                        return false;
                    }
                    break;
                case 'rating':
                    if (adItem.rating && typeof adItem.rating !== 'number' || adItem.rating < 0 || adItem.rating > 5) {
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

    add (adItem) {
        if (AdList.validate(adItem)) {
            this._ads.push(adItem);
            return true;
        }
        return false;
    }

    edit (id, adItem) {
        for (let param in adItem) {
            if (param === 'id' || param === 'vendor' || param === 'createdAt') {
                console.log("You can't change id, vendor and createdAt");
                return false;
            }
        }
        let editingAd = this.get(id);
        for (let param in adItem) {
            editingAd[param] = adItem[param];
        }
        if (!AdList.validate(editingAd, Object.keys(editingAd))) {
            return false;
        }
        Object.assign(this.get(id), editingAd);
        return true;
    }

    remove (id) {
        if (typeof id === 'string'){
            let index = this._ads.findIndex(adItem => adItem.id === id);
            if (index !== -1) {
                this._ads.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    addAll (ads) {
        let invalidAds = [];
        ads.forEach(adItem => {
            if (!this.add(adItem)) invalidAds.push(adItem)
        });
        return invalidAds;
    }

    clear () {
        this._ads = [];
    }
}


let ads = new AdList ([
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
            'Delicious sushi, but very delivery.',
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
            'Delicious sushi, but very delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '9',
        label: 'Homemade pizza',
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
            'Delicious sushi, but very delivery.',
            'Ordered sushi here for a birthday party, everyone was happy.'
        ]
    },
    {
        id: '14',
        label: 'Homemade pizza',
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
        label: 'Chess school for teenagers',
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
            'Delicious sushi, but very delivery.',
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
]);

//Testing
//Ads will be automatically sorted by descending date
console.log("Top 5 ads: ");
console.log(ads.getPage(0,5));

console.log("Top 5 ads, skip 3 ads, hashTag: food: ");
console.log(ads.getPage(3,5, {hashTags: ['food']}));

console.log("Top 2 ads, skip 2 ads, vendor GYM247: ");
console.log(ads.getPage(2,2, {vendor: 'GYM247'}));

console.log("Get Page (incorrect input: top is a number, not a string): ");
console.log(ads.getPage('10', 2, {vendor: 'SPA River'}));

console.log("Get ad with id 2: ");
console.log(ads.get('2'));

console.log("Get ad with id 50 (doesn't exist): ");
console.log(ads.get('50'));

console.log("Get ad with wrong id (id is a number, not a string): ");
console.log(ads.get(2));

console.log("Add a new ad with correct parameters and get it: ");
ads.add({id: '123', description: 'add a new ad test 1', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
    vendor: 'Maria', hashTags: ['test add'], discount: '25%', validUntil: new Date('2021-03-30T00:00:00')})
console.log(ads.get(('123')));

console.log("Add a new ad without a vendor and get it: ");
ads.add({id: '124', description: 'add a new ad test 2', createdAt: new Date(), link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task6',
    hashTags: ['test add'], discount: '25%', validUntil: new Date('2021-03-30T00:00:00')})
console.log(ads.get('124'));

console.log("Edit newly added ad and get edited ad: ");
ads.edit('123',{description: "edit test 1", photoLink: "kittens"});
console.log(ads.get('123'));

console.log("Try to edit unchangeable parameters and get edited ad: ");
ads.edit('123',{id: '111', description: "edit test 2", photoLink: "puppies"});
console.log(ads.get('123'));

console.log("Delete newly edited ad and get it: ");
ads.remove('123');
console.log(ads.get('123'));

console.log("Delete already deleted ad and get it: ");
ads.remove('123');
console.log(ads.get('123'));

console.log("Try to add ads array: ");
let invalidAds = ads.addAll([
    {
        id: '125',
        description: 'Valid ad to add to array',
        createdAt: new Date(),
        link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task7',
        vendor: 'Maria',
        hashTags: [
            'valid', 'test1'
        ],
        discount: '5%',
        validUntil: new Date('2021-09-28T00:00:00'),
        rating: 4,
    },
    {
        id: '126',
        description: 'Invalid ad to add to array',
        link: 'https://sites.google.com/site/famcsbsu/labs/up/zadania/task7',
        hashTags: [
            'invalid', 'test2'
        ],
        discount: '5%',
        validUntil: new Date('2021-09-28T00:00:00'),
        rating: 4,
    }
]);
console.log("Invalid ads: ");
console.log(invalidAds);
console.log("Get newly added ad (valid): ");
console.log(ads.get('125'));

console.log("Clear the collection and try to get ads:");
ads.clear();
console.log(ads.getPage());
