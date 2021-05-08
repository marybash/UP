class Model {
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
        returningAds.sort(Model.comparator);
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
        if (Model.validate(adItem)) {
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
        if (!Model.validate(editingAd, Object.keys(editingAd))) {
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