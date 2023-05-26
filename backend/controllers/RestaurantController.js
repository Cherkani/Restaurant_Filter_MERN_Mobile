const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const RestaurantService = require("../services/RestaurantService");
const restaurantService = new RestaurantService(Restaurant);

///////////////////////

/////////////////////////////

router.get("/", async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurents();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const restaurant = await restaurantService.getRestaurentById(req.params.id);
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/city/:cityId", async (req, res) => {
  try {
    const restaurents = await restaurantService.getRestaurentByCityId(
      req.params.cityId
    );
    res.json(restaurents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.get("/zone/:zoneId", async (req, res) => {
  try {
    const restaurents = await restaurantService.getRestaurentByZoneId(
      req.params.zoneId
    );
    res.json(restaurents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/save", async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurent(req.body);
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const restaurent = await restaurantService.updateRestaurent(
      req.params.id,
      req.body
    );
    res.json(restaurent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await restaurantService.deleteRestaurent(req.params.id);
    res.json({ msg: "restaurent deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
