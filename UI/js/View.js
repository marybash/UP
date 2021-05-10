class View {

    _offers;
    _offerTemplate;
    _username;
    _isLogIn;
    _isVendor;
    _page;

    constructor(user = '', isLogIn = false, isVendor = false) {
        this._offers = new Model();
        this._offers.restore();
        this._offerTemplate = document.querySelector('.offer-template');
        this._username = user;
        this._isLogIn = isLogIn;
        this._isVendor = isVendor;
    }

    getIsLogIn() {
        return this._isLogIn;
    }

    getUsername() {
        return this._username;
    }

    setIsLogIn(isLogIn) {
        this._isLogIn = isLogIn;
    }

    setUsername(user) {
        this._username = user;
    }

    setIsVendor(isVendor) {
        this._isVendor = isVendor;
    }

    setPage(page) {
        this._page = page;
    }

    getViewPage() {
        return this._page;
    }

    _buildReviews(template, ad) {
        let newReviews = template.querySelector('.feedbacks-offer');
        template.querySelectorAll(".review").forEach(reviewItem => reviewItem.remove());
        ad.reviews.forEach((reviewItem => {
            let review = document.createElement('span');
            review.className = 'review';
            review.textContent = reviewItem.text;
            newReviews.append(review);
        }))
    }

    _buildOffer(ad) {
        let template = document.importNode(this._offerTemplate, true);
        template.setAttribute('offer-id', ad.id);
        template.querySelector('.offer-label').textContent = ad.label;
        template.querySelector('.description-offer').textContent = ad.description;
        template.querySelector('.percent').textContent = ad.discount;
        template.querySelector('.valid-until').textContent = ad.validUntil.getDate() + '.'
            + ad.validUntil.getMonth() + '.'
            + ad.validUntil.getFullYear();
        template.querySelector('.offer-image').setAttribute('src', ad.photoLink);
        template.querySelector('.rating-num').textContent = ad.rating;
        template.querySelector('.vendor-name').textContent = ad.vendor;
        template.querySelector('.vendor-link').setAttribute('href', ad.link);
        template.querySelector('.vendor-link').textContent = ad.link;
        template.querySelector('.hashtags-offer').textContent = '#' + ad.hashTags.join(' #');
        this._buildReviews(template, ad);
        return template;
    }

    _showUsername() {
        if (this._username !== 'Guest') {
            document.querySelector(".username").textContent = this._username;
        } else {
            document.querySelector(".username").textContent = '';
        }
    }

    _showLogOutButton() {
        if(!this._isLogIn) {
            document.querySelector('.log-out').textContent = 'Log in';
        } else {
            document.querySelector('.log-out').textContent = 'Log out';
        }
    }

    _showAddNewOfferButton() {
        if(this._isLogIn && this._isVendor) {
            document.querySelector(".add-new-offer-button").style.visibility = "visible";
        } else {
            document.querySelector(".add-new-offer-button").style.visibility = "hidden";
        }
    }

    _showFeedbackButton() {
        document.querySelectorAll(".write-feedback-button").forEach(button => {
            if (this._isLogIn && button.closest('article').querySelector(".vendor-name").textContent !== this._username) {
                button.style.visibility = "visible";}
            else {button.style.visibility = "hidden"}
        });
    }

    _showDeleteButton() {
        document.querySelectorAll(".delete-offer-button").forEach(button => {
            if (button.closest('article').querySelector(".vendor-name").textContent === this._username) {
                button.style.visibility = "visible";}
            else {button.style.visibility = "hidden"}
        });
    }

    _showEditButton() {
        document.querySelectorAll(".edit-offer-button").forEach(button => {
            if (button.closest('article').querySelector(".vendor-name").textContent === this._username) {
                button.style.visibility = "visible";}
            else {button.style.visibility = "hidden"}
        });
    }

    _showLoadMoreButton(toShow) {
        if (toShow) {
            document.querySelector('.load-more-button').style.visibility = "visible";
        }
        else {
            document.querySelector('.load-more-button').style.visibility = "hidden";
        }
    }

    refreshPage(skip = 0, top = 10, filterConfig = undefined, shown = 0) {
        document.querySelectorAll('.offer-template').forEach( offer => offer.remove());
        let moreButton = document.querySelector('.load-more-button');
        let filteredOffers = this._offers.getPage(skip, top + shown, filterConfig, true);
        this._offers.getPage(skip, top + shown, filterConfig).forEach(offer => {moreButton.before(this._buildOffer(offer));});
        this._showFeedbackButton();
        this._showDeleteButton();
        this._showEditButton();
        this._showUsername();
        this._showLogOutButton();
        this._showAddNewOfferButton();
        if (filteredOffers.length > (top + shown)) {
            this._showLoadMoreButton(true);
        } else {
            this._showLoadMoreButton(false);
        }
    }

    addAd(ad) {
        if(this._offers.add(ad)) {
            return true;
        }
        return false;
    }

    addReview(id, review) {
        if(this._offers.addReview(id, review)) {
            return true;
        }
        return false;
    }

    removeAd(id) {
        if (this._offers.remove(id)) {
            return true;
        }
        return false;
    }

    editAd(id, ad) {
        if (this._offers.edit(id, ad)) {
            return true;
        }
        return false;
    }
}