class View {

    _offers;
    _offerTemplate;
    _username;
    _isLogIn;
    _isVendor;
    _page;

    constructor() {
        this._offers = new Model();
        this._offers.restore();
        this._offerTemplate = document.querySelector('.offer-template');
        this.restore();
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

    saveUser() {
        localStorage.setItem("username", this._username);
        localStorage.setItem("isLogIn", this._isLogIn);
        localStorage.setItem("isVendor", this._isVendor);
    }

    restore() {
        this._username = localStorage.getItem("username");
        this._isLogIn = JSON.parse(localStorage.getItem("isLogIn"));
        this._isVendor = JSON.parse(localStorage.getItem("isVendor"));
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

    getLogInPage(){
        return `
            <p class="log-in-message">Authorization form</p>
            <form class='log-in-form'>
                <input type="text" class="login" name ="user" placeholder="Login">
                <input type="text" class="password" name="password" placeholder="Password">
                <button class="sign-in-button">Sign in</button>
            </form>
        `
    }

    loadInfoLogInOut() {
        if (this._isLogIn) {
            this._isLogIn = false;
            this._isVendor = false;
            this._username = 'Guest';
            this.refreshPage();
        } else {
            this.setPage(document.querySelector(".page"));
            document.querySelector(".page").remove();
            let newPage = document.createElement("page");
            newPage.className = "log-in-page";
            newPage.innerHTML = this.getLogInPage();
            document.querySelector('.header').after(newPage);
        }
    }

    removeLogInPage() {
        document.querySelector(".log-in-page").remove();
        document.querySelector('.header').after(this.getViewPage());
    }


    getAddEditOfferPage(message){
        return `
            <label class="add-new-offer-message">${message}</label>
            <form class='add-new-offer-form'>
               <label class="label-class">Service: <input type="text" class="label" name ="label" placeholder="Name of your service"></label>
               <label class="description-class">Short <br> description: <input type="text" class="description" name ="description" placeholder="A short description"></label>
               <label class="discount-class">Discount: <input type="text" class="discount" name ="discount" placeholder="Percentage"></label>
               <label class="date-class">Offer expires: <input type="date" class="date-to" name ="dateTo"></label>
               <label class="website-class">Website: <input type="text" class="link" name ="link" placeholder="Link to your website"></label>
               <label class="photo-class">Photo link: <input type="text" class="photo-link" name ="photoLink" placeholder="Link to the photo"></label>
               <label class="hashtags-class">Hashtags: <input type="text" class="hashtags" name ="hashtags" placeholder="At least one hashtag"></label>
               <button class="save-new-offer-button" type="submit">Save</button>
            </form>
        `
    }

    loadInfoAddEditOffer(message) {
        this.setPage(document.querySelector(".page"));
        document.querySelector(".page").remove();
        let newPage = document.createElement("page");
        newPage.className = "add-new-offer-page";
        newPage.innerHTML = this.getAddEditOfferPage(message);
        document.querySelector('.header').after(newPage);
    }

    removeAddNewOfferPage() {
        document.querySelector(".add-new-offer-page").remove();
        document.querySelector('.header').after(this.getViewPage());
    }

    getWriteFeedbackPage(){
        return `
            <p class="write-feedback-message">Write your feedback</p>
            <form class='write-feedback-form'>
               <label class="feedback-class">Feedback: <input type="text" class="feedback" name ="feedback" placeholder="Your feedback"></label>
               <p class="rating-class">Rating: <input required type="text" class="feedback-rating" name ="feedbackRating" placeholder="Rating"></p>
               <button class="save-new-offer-button" type="submit">Save</button>
            </form>
        `
    }

    loadInfoWriteFeedback() {
        this.setPage(document.querySelector(".page"));
        document.querySelector(".page").remove();
        let newPage = document.createElement("page");
        newPage.className = "write-feedback-page";
        newPage.innerHTML = this.getWriteFeedbackPage();
        document.querySelector('.header').after(newPage);
    }

    removeWriteFeedbackPage() {
        document.querySelector(".write-feedback-page").remove();
        document.querySelector('.header').after(this.getViewPage());
    }
}