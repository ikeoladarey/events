onload = function () {
    'use strict';
    // onload function start ####################################################
    var search = document.getElementById("search");
    var mobileSearch = document.getElementById("mobile-search");

    document.addEventListener("click", function (e) {
        // document.addEventListener content starts ####################################################

        //variables for DOM elements
        var dateDiv = document.getElementById('date');
        var basketImage = document.getElementById("basket");
        var searchIcon = document.getElementById("search-icon");
        var msInput = document.getElementById("ms-input");
        var searchInput = document.getElementById("serach-input");
        var dateDp = document.getElementById('date-dp');
        var basketDp = document.getElementById('basket-dp');
        var dateArrow = document.getElementById("date-arrow");
        var dateCssValue = window.getComputedStyle(dateDp, null).getPropertyValue("display");


        //date block
        if (e.target === dateDiv || e.target === dateArrow) {
            if (dateCssValue === "none") {
                dateDp.style.display = "block";
                dateArrow.style.color = "#fff";
                dateDp.style.webkitAnimation = "drop .5s";
                dateDp.style.animation = "drop .5s";
            } else {
                dateDp.style.webkitAnimation = "closedrop .5s";
                dateDp.style.animation = "closedrop .5s";
                setTimeout(function () {
                    dateArrow.style.color = "#000";
                    dateDp.style.display = "none";
                }, 500);
            }
        } else {
            dateDp.style.webkitAnimation = "closedrop .5s";
            dateDp.style.animation = "closedrop .5s";
            setTimeout(function () {
                dateDp.style.display = "none";
                dateArrow.style.color = "#000";
            }, 500);
        }


        //basket block
        if (e.target === basketImage) {
            basketDp.style.display = "block";
            basketDp.style.webkitAnimation = "movein .5s";
            basketDp.style.animation = "movein .5s";
        } else {
            basketDp.style.display = "none";
        }

        //header seach block
        if (e.target === searchIcon || e.target === msInput || e.target === searchInput) {
            msInput.style.display = "block";
            msInput.style.webkitAnimation = "movein .5s";
            msInput.style.animation = "movein .5s";
        } else {
            msInput.style.display = "none";
        }

    }, false);
    //document.addEventListener content ends here

    //modal block
    document.getElementById("product-div").addEventListener("click", function (e) {
        var coverDiv = document.getElementById("cover-div");
        var productDiv = document.getElementById("product-div");


        if (e.target === productDiv) {
            productDiv.style.webkitAnimation = "moveout .9s";
            productDiv.style.animation = "moveout .9s";

            setTimeout(function () {
                productDiv.style.display = "none";
                coverDiv.style.display = "none";
            }, 300);
        }
    }, false);

    //mobile responsiveness block that controls header
    if (window.innerWidth <= 770 || document.documentElement.clientWidth <= 770 || document.body.clientWidth <= 770) {
        search.style.display = "none";
        mobileSearch.style.display = "block";
    } else if (window.innerWidth >= 779 || document.documentElement.clientWidth >= 779 || document.body.clientWidth >= 779) {
        mobileSearch.style.display = "none";
        search.style.display = "block";

    }

    //header search drop down block
    document.getElementById("seach-input").addEventListener("keydown", function () {
        var searchValue = document.getElementById("seach-input").value;
        var searcResult = document.getElementById("search-result");
        var srLeft = document.getElementsByClassName("sr-left");
        for (var i = 0; i < srLeft.length; i++) {
            if (searchValue.length > 2 || srLeft[i].innerHTML !== "") {
                searcResult.style.display = "block";
            } else {
                searcResult.style.display = "block";
            }
        }
    }, false);

    document.getElementById("seach-input").addEventListener("blur", function (e) {
        var searcResult = document.getElementById("search-result");
        setTimeout(function () {
            searcResult.style.display = "none";
        }, 200);
    }, false);
};
// onload function block end here


//function to the close modal
function closeModal() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("product-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}

// mobile responsiveness on resize of the screen
onresize = function () {
    'use strict';
    var search = document.getElementById("search");
    var mobileSearch = document.getElementById("mobile-search");

    if (window.innerWidth <= 770 || document.documentElement.clientWidth <= 770 || document.body.clientWidth <= 770) {
        search.style.display = "none";
        mobileSearch.style.display = "block";
    } else if (window.innerWidth >= 779 || document.documentElement.clientWidth >= 779 || document.body.clientWidth >= 779) {
        mobileSearch.style.display = "none";
        search.style.display = "block";

    }
};


//modal tap block
function productTest(e) {
    var checkShop = document.getElementById("checkout-shop");
    var checkComment = document.getElementById("checkout-comment");
    var pcShop = document.getElementById("pc-shop");
    var pcComment = document.getElementById("pc-comment");
    var cart = document.getElementById("cart");
    var heart = document.getElementById("com");

    if (e.target === checkShop || e.target === cart) {
        pcShop.style.display = "block";
        pcComment.style.display = "none";
        checkShop.style.display = "none";
        checkComment.style.display = "inline-block";
    }

    if (e.target === checkComment || e.target === heart) {
        pcShop.style.display = "none";
        pcComment.style.display = "block";
        checkShop.style.display = "inline-block";
        checkComment.style.display = "none";
    }
}


// document.addEventListener("click", function(e) {
//     console.log(e.target);
// });

