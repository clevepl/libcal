
// removing the 
// https://github.com/clevepl/libcal/issues/7

// search for the string in single event page 
let singleEventPageLocationTwo = document.querySelector(".truncation_location");

if (singleEventPageLocationTwo !== null) {
    singleEventPageLocationTwo.textContent = singleEventPageLocationTwo.textContent.replaceAll(
        '- email popular@cpl.org before booking',
        ''
    );
}

// for event-cards, (the default card view: https://cpl.libcal.com/calendar/events) see remove_branch_names_from_spaces.js