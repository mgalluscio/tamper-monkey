// ==UserScript==
// @name         Console Order Lookup
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Make my life easier...
// @author       You
// @match        https://deliverydudes.biz/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    const orderSearchField = "Order ID";
    const territory = "";
    const userSearchField = "Last Name";
    const searchField = "Restaurant ID";

    var isTerrToggle = document.getElementById("TerritoryBar");
    var search = document.getElementById("search_value");
    var terrList = document.getElementById("territoryID");
    var restID = document.getElementById("search_field");
    var VendorID = document.getElementById("search_field");
    var lName = document.getElementById("search_field");

    function getIframe(el) {
        var iFrame = document.getElementById(el);
        return iFrame.action.toString();
    }

    function isHidden(el) {
        return (el.offsetParent === null);
    }

    function selectListElement(el, option) {
        for (var i = 0; i <= el.options.length; i++) {
            if (el.options[i].text === option) {
                el.options[i].selected = true;
                return;
            }
        }
    }

  if (search.value === "") {

    if (getIframe("SearchForm") === "https://deliverydudes.biz/order/Browse/") {
        if (isHidden(search)) {
            console.log("Search Bar toggled!");
            unsafeWindow.ToggleSearch();
            selectListElement(restID, orderSearchField);
        } else {
            console.warn("Search bar is already toggled!");
            selectListElement(restID, orderSearchField);
        }
        if (isHidden(isTerrToggle)) {
            console.log("Territory Bar toggled!");
            unsafeWindow.ToggleTerritoryBar();
            selectListElement(terrList, territory);
        } else {
            console.warn("Territory bar is already toggled!");
            selectListElement(terrList, territory);
        }
    }

    if (getIframe("SearchForm") === "https://deliverydudes.biz/user/Browse/") {
        if (isHidden(search)) {
            console.log("Search Bar toggled!");
            unsafeWindow.ToggleSearch();
            selectListElement(lName, userSearchField);
        } else {
            console.warn("Search bar is already toggled!");
            selectListElement(lName, userSearchField);
        }
    }

    if (getIframe("SearchForm") === "https://deliverydudes.biz/restaurant/Browse/") {
        if (isHidden(search)) {
        console.log("Search Bar toggled!");
        unsafeWindow.ToggleSearch();
        selectListElement(VendorID, searchField);
        } else {
            console.warn("Search bar is already toggled!");
            selectListElement(VendorID, searchField);
        }
        if (isHidden(isTerrToggle)) {
            console.log("Territory Bar toggled!");
            unsafeWindow.ToggleTerritoryBar();
            selectListElement(terrList, territory);
        } else {
            console.warn("Territory bar is already toggled!");
            selectListElement(terrList, territory);
        }
    }
  }

})();
