
// remove branch names from space names on the front-end

// stored in admin/look-and-feel/general#s-lc-tab-general

// for the individual event page: 
// https://cpl.libcal.com/event/16636772
// truncation_location is custom class I added at https://cpl.libcal.com/admin/look-and-feel/event#s-lc-tab-event
// Takes 'e.g. 'Glenville - Conference Room B' to 'Conference Room B'


// if there's no " - " in the location's name, just return the text.
let singleEventPageLocation = document.querySelector(".truncation_location");
let betterText = singleEventPageLocation.textContent.split(" - ").slice(1).join(" - ") || singleEventPageLocation.textContent.trim();

singleEventPageLocation.textContent = betterText;
