//@desc Get All Contacts
//@route GET /api/contact
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New Contact
//@route POST /api/contact
//@access public
const createContact = (req, res) => {
    console.log("The request body is: ",req.body);
    res.status(200).json({ message: "Create new contact" });
};

//@desc Get Contact by ID
//@route GET /api/contact/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact with id ${req.params.id}` });
};

//@desc Update Contact by ID
//@route PUT /api/contact/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact with id ${req.params.id}` });
};

//@desc Delete Contact by ID
//@route DELETE /api/contact/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
