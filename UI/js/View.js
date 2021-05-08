class View {

    _offers;
    _offerTemplate;
    _username;
    _isLogIn;
    _isVendor;

    constructor(user, isLogIn, isVendor) {
        this._offers = offers;
        this._offerTemplate = document.querySelector('.offer-template');
        this._username = user;
        this._isLogIn = isLogIn;
        this._isVendor = isVendor;
    }

    _buildOffer(ad) {
        let template = document.importNode(this._offerTemplate, true);
        template.querySelector('.offer-label').textContent = ad.label;
        template.querySelector('.description-offer').textContent = ad.description;
        template.querySelector('.percent').textContent = ad.discount;
        template.querySelector('.valid-until').textContent = ad.validUntil.getDate() + '.'
            + ad.validUntil.getMonth() + '.'
            + ad.validUntil.getFullYear();
        template.querySelector('.offer-image').setAttribute('src', ad.photoLink);
        template.querySelector('.vendor-name').textContent = ad.vendor;
        template.querySelector('.vendor-link').setAttribute('href', ad.link);
        template.querySelector('.vendor-link').textContent = ad.link;
        template.querySelector('.hashtags-offer').textContent = '#' + ad.hashTags.join(' #');
        template.querySelector('.review').textContent = ad.reviews.join('\n');
        return template;
    }

    _showUsername() {
        document.querySelector(".username").textContent = this._username;
    }

    _showLogOutButton() {
        if(!this._isLogIn) {
            document.querySelector(".log-out").style.visibility = "hidden";
        }
    }

    _showAddNewOfferButton() {
        if(!this._isLogIn || !this._isVendor) {
            document.querySelector(".add-new-offer-button").style.visibility = "hidden";
        }
    }

    _showFeedbackButton() {
        if(!this._isLogIn) {
            document.querySelectorAll(".write-feedback-button").forEach(button => button.style.visibility = "hidden");
        }
    }

    _showDeleteButton() {
        if(!this._isLogIn || !this._isVendor) {
           document.querySelectorAll(".delete-offer-button").forEach(button => button.style.visibility = "hidden");
        }
    }

    _showEditButton() {
        if(!this._isLogIn || !this._isVendor) {
            document.querySelectorAll(".edit-offer-button").forEach(button => button.style.visibility = "hidden");
        }
    }

    refreshPage() {
        document.querySelectorAll('.offer-template').forEach( offer => offer.remove());
        let moreButton = document.querySelector('.load-more-button');
        this._offers.getPage( ).forEach(offer => {moreButton.before(this._buildOffer(offer));});
        console.log(this._offers);
        this._showFeedbackButton();
        this._showDeleteButton();
        this._showEditButton();
        this._showUsername();
        this._showLogOutButton();
        this._showAddNewOfferButton();
    }

    addAd(ad) {
        if(this._offers.add(ad)) {
            this.refreshPage();
            return true;
        }
        return false;
    }

    removeAd(id) {
        if (this._offers.remove(id)) {
            this.refreshPage();
            return true;
        }
        return false;
    }

    editAd(id, ad) {
        if (this._offers.edit(id, ad)) {
            console.log("edited");
            this.refreshPage();
            return true;
        }
        console.log("not edited");
        return false;
    }
}