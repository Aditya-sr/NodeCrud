const express = require("express");
const router = express.Router();

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../ContactController/contactController");

// Route to get all contacts
router.route("/").get(getContacts);

// Route to create a new contact
router.route("/").post(createContact);

// Route to get a specific contact by ID
router.route("/:id").get(getContact);

// Route to update a specific contact by ID
router.route("/:id").put(updateContact);

// Route to delete a specific contact by ID
router.route("/:id").delete(deleteContact);

module.exports = router;
