const express = require("express");
const { post } = require("../../app");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .put(contacts.update)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite)
    .post(contacts.create)
    .put(contacts.update)
    .delete(contacts.delete)

router.route(":id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
module.exports = router;