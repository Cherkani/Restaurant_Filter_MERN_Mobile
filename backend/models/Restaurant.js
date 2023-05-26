const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  cuisine: { type: String, required: true },
  price: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  city: { type: Schema.Types.ObjectId, ref: "City", required: true },
  zone: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
});

// const restaurantSchema = new Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   title: { type: String, required: true },
//   zone: { type: String, required: true },
//   cities: { type: String, required: true },
//   cuisine: { type: String, required: true },
//   price: { type: Number, required: true },
//   latitude: { type: Number, required: true },
//   longitude: { type: Number, required: true },
//   cityId: { type: Schema.Types.ObjectId, ref: "City", required: true },
//   zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
// });

// name: { type: String, required: true },
//   category: { type: String, required: true },
//   title: { type: String, required: true },
//   zone: { type: String, required: true },
//   cities: { type: String, required: true },
//   cuisine: { type: String, required: true },
//   priceMax: { type: Number, required: true },
//   latitude: { type: Number, required: true },
//   longitude: { type: Number, required: true },
//   cityId: { type: Schema.Types.ObjectId, ref: "City", required: true },
//   zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
