const express = require("express");
const { categoryController } = require("../controllers/categoryController");
const { body } = require("express-validator");
const { validate } = require("../middleware/validation");

const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post(
  "/",
  [body("name").notEmpty().withMessage("Name cannot be empty.")],
  [body("surname").notEmpty().withMessage("Surname cannot be empty.")],
  [
    body("email")
      .notEmpty()
      .withMessage("Email cannot be empty.")
      .isEmail()
      .withMessage("Invalid email format."),
  ],
  [
    body("password")
      .notEmpty()
      .withMessage("Password cannot be empty.")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long."),
  ],
  validate,
  categoryController.add
);
router.post("/login", categoryController.login);
router.delete("/:id", categoryController.delete);

module.exports = router;
