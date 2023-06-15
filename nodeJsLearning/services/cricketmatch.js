const getSheetsService = (req) => {
    //database
    const data = [{
        sheet_id: 123,
        sheet_number: 1234,
        class: "A",
        price: "500"
    }, {
        sheet_id: 455,
        sheet_number: 1675,
        class: "B",
        price: "250"
    },
    {
        sheet_id: 550,
        sheet_number: 1345,
        class: "C",
        price: "100"
    }]
    return data
}

const getSheetByIdService = (req) => {
    //database
    return {
        sheet_id: 550,
        sheet_number: 1345,
        class: "C",
        price: "100"
    }
}

const getBookingService = (req) => {
    //database
    return {
        booking_id: "1231414AC",
        usernumber: "817134138451",
        sheet_number: 1345,
        class: "C",
        price: "100"
    }
}

const createBookingService = (req) => {
    //database
    return {
        booking_id: "1231414AC",
        usernumber: "817134138451"
    }
}

module.exports = {
    getSheetsService,
    getSheetByIdService,
    getBookingService,
    createBookingService
}