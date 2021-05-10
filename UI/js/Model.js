class Model {
    _ads = [];

    constructor () {}

    static comparator(first, second) {
        return second.createdAt - first.createdAt;
    }

    save() {
        localStorage.setItem("ads", JSON.stringify(this._ads));
    }

    restore() {
        let ads = localStorage.getItem("ads");
        this._ads = JSON.parse(ads);
        this._ads.forEach(ad => {
            ad.createdAt = new Date(ad.createdAt);
            ad.validUntil = new Date(ad.validUntil);
        })
    }

    getPage (skip = 0, top = 10, filterConfig = undefined, isForFilter = false) {
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error with inputting types!');
            return;
        }
        let returningAds = this._ads;
        if (filterConfig) {
            for (let param in filterConfig) {
                if (param === 'hashTags' && filterConfig.hashTags.length !== 0) {
                    filterConfig.hashTags.forEach(tag => {
                        if (tag.length !== 0) {
                            returningAds = returningAds.filter(ad => ad.hashTags.includes(tag));
                        }});
                } else if (param === 'dateFrom' && filterConfig.dateFrom.length !== 0) {
                    let dateFrom = new Date(filterConfig.dateFrom);
                    returningAds = returningAds.filter(adItem => adItem.createdAt >= dateFrom);
                } else if (param === 'dateTo' && filterConfig.dateTo.length !== 0) {
                    let dateTo = new Date(filterConfig.dateTo);
                    returningAds = returningAds.filter(adItem => adItem.createdAt < dateTo);
                } else if (param === 'vendor' && filterConfig.vendor.length !== 0) {
                    returningAds = returningAds.filter(adItem => adItem.vendor === filterConfig.vendor);
                }
            }
        }
        returningAds.sort(Model.comparator);
        if (isForFilter) {
            return returningAds;
        }
        return returningAds.slice(skip, skip + top);
    }

    get (id) {
        if (typeof id === 'string') {
            return this._ads.find(adItem => adItem.id === id);
        }
        console.log('Incorrect type of id. Use \'string\'');
    }

    validateReview(review) {
        if (review) {
            if (!review.text || review.text.length > 1000 || typeof review.text !== 'string'
                || review.rating < 1 || review.rating > 5) {
                return false;
            }
        }
        return true;
    }

    _calculateRating(id) {
        let sum = 0;
        this.get(id).reviews.forEach(review => sum += review.rating);
        sum /= this.get(id).reviews.length;
        return sum;
    }

    addReview(id, review) {
        let newReview = {
            username: review.username,
            rating: review.rating,
            date: review.dateReview,
            reviewText: review.text
        }
        if (this.validateReview(review)) {
            this.get(id).reviews.push(review);
            this.get(id).rating = this._calculateRating(id);
            this.save();
            return this.get(id);
        }
        return false;
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
                    if (!Array.isArray(adItem.reviews)) {
                        return false;
                    }
                    return true;
                default:
                    return false;
            }
            return true;
        });
    }

    add (adItem) {
        if (Model.validate(adItem)) {
            this._ads.push(adItem);
            this.save();
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
            if (adItem[param]) {
                editingAd[param] = adItem[param];
            }
        }
        if (!Model.validate(editingAd, Object.keys(editingAd))) {
            return false;
        }
        Object.assign(this.get(id), editingAd);
        this.save();
        return true;
    }

    remove (id) {
        if (typeof id === 'string'){
            let index = this._ads.findIndex(adItem => adItem.id === id);
            if (index !== -1) {
                this._ads.splice(index, 1);
                this.save();
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