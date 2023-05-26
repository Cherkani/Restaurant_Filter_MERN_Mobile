const Restaurant = require("../models/Restaurant");

class RestaurantService {
  constructor(restaurantModel) {
    this.restaurantModel = restaurantModel;
  }

  // Get all Restaurent
  async getAllRestaurents() {
    try {
      const restaurent = await this.restaurantModel.find();
      return restaurent;
    } catch (error) {
      throw new Error(`Unable to fetch restaurent: ${error}`);
    }
  }
  //#Get Restaurent by city ID
  async getRestaurentByCityId(cityId) {
    try {
      const restaurents = await this.restaurantModel.find({ city: cityId });
      return restaurents;
    } catch (error) {
      throw new Error(
        `Unable to fetch restaurent for city ${cityId}: ${error}`
      );
    }
  }

  //#GetRestaurent by zone ID
  async getRestaurentByZoneId(zoneId) {
    try {
      const restaurents = await this.restaurantModel.find({ zone: zoneId });
      return restaurents;
    } catch (error) {
      throw new Error(
        `Unable to fetch restaurent for zone ${zoneId}: ${error}`
      );
    }
  }

  // Get a Restaurent by ID
  async getRestaurentById(id) {
    try {
      const restaurent = await this.restaurantModel.findById(id);
      return restaurent;
    } catch (error) {
      throw new Error(`Unable to fetch restaurent with ID ${id}: ${error}`);
    }
  }
  // Save a new restaurent
  async createRestaurent(restaurent) {
    try {
      const newRestaurent = new Restaurant(restaurent);
      const savedRestaurent = await newRestaurent.save();
      return savedRestaurent;
    } catch (error) {
      throw new Error(`Unable to create restaurent: ${error}`);
    }
  }
  // Update a restaurent
  async updateRestaurent(id, updatedRestaurant) {
    try {
      const existingRestaurant = await this.restaurantModel.findById(id);
      if (!existingRestaurant) {
        throw new Error(`restaurent not found with ID ${id}`);
      }
      existingRestaurant.name = updatedRestaurant.name;
      existingRestaurant.price = updatedRestaurant.price;
      existingRestaurant.cuisine = updatedRestaurant.cuisine;
      existingRestaurant.zone = updatedRestaurant.zone;

      existingRestaurant.city = updatedRestaurant.city;
      const updated = await existingRestaurant.save();
      return updated;
    } catch (error) {
      throw new Error(`Unable to update restaurent with ID ${id}: ${error}`);
    }
  }

  // Delete a zone by ID
  async deleteRestaurent(id) {
    try {
      const deleted = await this.restaurantModel.findByIdAndDelete(id);
      if (!deleted) {
        throw new Error(`Restaurent not found with ID ${id}`);
      }
      return deleted;
    } catch (error) {
      throw new Error(`Unable to delete Restaurent with ID ${id}: ${error}`);
    }
  }
}

module.exports = RestaurantService;
