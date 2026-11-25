
// remove branch names from space names on the front-end

// stored in admin/look-and-feel/general#s-lc-tab-general

// for the individual event page: 
// https://cpl.libcal.com/event/16636772
// truncation_location is custom class I added at https://cpl.libcal.com/admin/look-and-feel/event#s-lc-tab-event
// Takes 'e.g. 'Glenville - Conference Room B' to 'Conference Room B'


// if there's no " - " in the location's name, just return the text.
let singleEventPageLocation = document.querySelector(".truncation_location");

if (singleEventPageLocation !== null) {

    let betterText = singleEventPageLocation.textContent.split(" - ").slice(1).join(" - ") || singleEventPageLocation.textContent.trim();

    singleEventPageLocation.textContent = betterText;
}


// within each s-lc-eventcard-heading-text-group, find the 2nd child (it'll have s-lc-eventcard-heading-text s-lc-hide-long-text 
// and return the text that is before the first comma 
// input <div class="s-lc-eventcard-heading-text s-lc-hide-long-text">Main Library (Downtown), Main 04 - 4th Floor - ForLit Gallery/Classroom</div>
// output <div class="s-lc-eventcard-heading-text s-lc-hide-long-text">Main Library (Downtown)</div>
let ourTextGroups = document.querySelectorAll(".s-lc-eventcard-heading-text-group");

ourTextGroups.forEach((aTextGrp) => {
    for (const child of aTextGrp.children) {
        if (child === aTextGrp.children[1]) {
            child.textContent = child.textContent.split(",")[0];
        }
    }
});