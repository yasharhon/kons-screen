"use strict"

function init() {

    var state = {
        event: false,
        time: moment().format("HH:mm"),
        date: moment().format("dddd D MMMM YYYY"),
        image: {
            url: "https://source.unsplash.com/random",
            text: ""
        },
        sl: {
            rides: [
                { type: "metro", number: 14, name: "Mörby Centrum", time: "12:34" },
                { type: "train", number: 29, name: "Näsby park", time: "13:30" },
                { type: "bus", number: 61, name: "Hornsborg?", time: "19:29" },
                { type: "metro", number: 14, name: "Mörby Centrum", time: "12:34" },
                { type: "train", number: 29, name: "Näsby park", time: "13:30" },
                { type: "bus", number: 61, name: "Hornsborg?", time: "19:29" },
                { type: "metro", number: 14, name: "Mörby Centrum", time: "12:34" },
                { type: "train", number: 29, name: "Näsby park", time: "13:30" },
                { type: "bus", number: 61, name: "Hornsborg?", time: "19:29" }
            ]
        },
        calendar: {
            events: [
                {date: "Tisdag 30 feb", time: "13:37", name: "Torsdagspub"},
                {date: "Måndag 30 feb", time: "13:37", name: "Fysikalen"},
                {date: "Onsdag 30 feb", time: "13:37", name: "Torsdagspub"},
                {date: "Lördag 30 feb", time: "13:37", name: "Fysikalen"},
                {date: "Fredag 30 feb", time: "13:37", name: "Ett väldigt långt namn på event"},
                {date: "Torsdag 30 feb", time: "13:37", name: "Torsdagspub"},
                {date: "Söndag 30 feb", time: "13:37", name: "Fysikalen"},
                {date: "Tisdag 30 feb", time: "13:37", name: "Torsdagspub"}
            ]
        }
    }
    renderState(state)
}

function renderState(state) {
    // init components
    var source = document.getElementById("app-template").innerHTML
    var template = Handlebars.compile(source)
    var html = template(state)
    document.getElementById("app").innerHTML = html

}

document.addEventListener('DOMContentLoaded', init, false)

setInterval(init, 10000)


// Localize dates with moment. (Om någon vill översätta resten av franskan så är de välkommna, har bara gjort det  som krävs nu)
moment.locale('se', {
    months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    monthsParseExact : true,
    weekdays : 'måndag_tisdag_onsdag_torsdag_fredag_lördag_söndag'.split('_'),
    weekdaysShort : 'mån_tis_ons_tor_fre_lör_sön'.split('_'),
    weekdaysMin : 'må_ti_on_to_fr_lö_sö'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Idag] LT',
        nextDay : '[Imorgon] LT',
        nextWeek : 'På dddd [klockan] LT',
        lastDay : '[Igår] LT',
        lastWeek : '[Förra veckan] dddd [klockan] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : 'för %s sedan',
        s : 'en sekund',
        ss : 'sekunder',
        m : 'en minut',
        mm : '%d minuter',
        h : 'en timme',
        hh : '%d timmar',
        d : 'en dag',
        dd : '%d dagar',
        M : 'un månad',
        MM : '%d månader',
        y : 'ett år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
