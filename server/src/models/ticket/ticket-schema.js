const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
  },
  subject: {
    type: String,
    maxlength: 50,
    required: true,
    default: "",
  },
  openedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    maxlength: 30,
    required: true,
    default: "Pending operator response",
  },
  conversations: [
    {
      sender: {
        type: String,
        maxlength: 50,
        required: true,
        default: "",
      },
      message: {
        type: String,
        maxlength: 1000,
        required: true,
        default: "",
      },
      msgAt: {
        type: Date,
        required: true,
        default: Date.now(),
      },
      type: {
        type: String,
        maxlength: 6,
        required: true,
      },
    },
  ],
});

module.exports = {
  TicketSchema: mongoose.model("Ticket", TicketSchema),
};
