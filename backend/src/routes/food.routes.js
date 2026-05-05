const express = require('express');
const foodController = require("../controllers/food.controller")
const authMiddleware= require("../middlewares/auth.middleware")
const router = express.Router();
const multer = require('multer'); // it is use to make express read the file coming from frontend

const upload = multer({
    storage: multer.memoryStorage(),
})

/*post/api/food/[protected] */
//pexcels for video
// and create a route and enter not in raw enter in file type
router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single("video"), foodController.createFood)

// noww user get the videos
router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItems)

router.post('/like' , authMiddleware.authUserMiddleware, foodController.likeFood)


router.post('/save' , authMiddleware.authUserMiddleware, foodController.saveFood)

router.get('/save',
    authMiddleware.authUserMiddleware,
    foodController.getSaveFood
)

module.exports =  router