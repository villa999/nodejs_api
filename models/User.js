const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
     firstName: {
          type: String
     },
     lastName: {
          type: String
     },
     email: {
          type: String
     },
     decks: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Deck"
     }] 
})

const User = mongoose.model("User", UserSchema)

module.exports = User