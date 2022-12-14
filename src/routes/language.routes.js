import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller.js";

const router = Router();

router.get("/", languageController.getLanguages);
router.post("/", languageController.addLanguage);
router.get("/:id", languageController.getLanguage);
router.put("/:id", languageController.updateLanguage);
router.delete("/:id", languageController.deleteLanguage);

export default router;
