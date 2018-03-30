const moment = require('moment')
const locale = require('moment/locale/sv')
moment.locale('sv')

// Module containing functions which compile the calendar data fetched.

var getDate = (event) => {
    let date
    if (event.start.dateTime){
        date = event.start.dateTime
        return moment(date).format('dddd D MMMM HH:mm')
    }
    else if (event.start.date){
        date =  event.start.date
        return moment(date).format('dddd D MMMM')
    }
    else 
        return 0
}

var remapperFactory = function (dateGetter){
    return event => {
        return {
            date: dateGetter(event),
            location: event.location,
            name: event.summary 
        }
    }
}

var remapEvent = remapperFactory(getDate)

var compileCalendarFactory = function (remapper){
    return calendar => {
        let events = calendar.map(remapper)
        return {calendar: {events}}
    }
};

var compileCalendar = compileCalendarFactory(remapEvent)

module.exports = {
    compileCalendar,
    compileCalendarFactory,

    getDate,
    remapEvent,
    remapperFactory
}