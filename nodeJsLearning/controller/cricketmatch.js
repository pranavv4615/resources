const { getSheetsService, getSheetByIdService, getBookingService, createBookingService } = require("../services/cricketmatch")

const getSheets = async (req, res) => {
    try {
        const result = await getSheetsService(req)

        res.status(200)
            .send({ status: true, message: "Request Processed Successfully", response: result })
    } catch (error) {
        res.status(500).send({ status: true, message: "Internal Server Error" })
    }
}

const getSheetById = async (req, res) => {
    try {
        const result = await getSheetByIdService(req)

        res.status(200)
            .send({ status: true, message: "Request Processed Successfully", response: result })
    } catch (error) {
        res.status(500).send({ status: true, message: "Internal Server Error" })
    }
}

const getBooking = async (req, res) => {
    try {
        const result = await getBookingService(req)

        res.status(200)
            .send({ status: true, message: "Request Processed Successfully", response: result })
    } catch (error) {
        res.status(500).send({ status: true, message: "Internal Server Error" })
    }
}

const createBooking = async (req, res) => {
    try {
        const result = await createBookingService(req)

        res.status(200)
            .send({ status: true, message: "Request Processed Successfully", response: result })
    } catch (error) {

    }
}

module.exports = {
    getSheets,
    getSheetById,
    getBooking,
    createBooking,
}