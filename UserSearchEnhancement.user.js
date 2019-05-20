// ==UserScript==
// @name         Mod Tools User Search Enhancement
// @author       Carbon
// @version      1.1
// @description  Pressing enter when searching for a user will change the played within filter to whenever and filter for you in TagPro Mod Tools.
// @updateURL    https://github.com/vCarbonnn/UserSearchEnhancement/raw/master/UserSearchEnhancement.user.js
// @include      *://tagpro*.koalabeast.com/moderate/users*
// ==/UserScript==

document.getElementById("filterName").onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
        document.getElementById("filterHours").value = "whenever";
        document.getElementById("filterButton").click();
    }
};
