var mongoose = require("mongoose");

var Id = require(__dirname + '/id');

var Entry = new mongoose.Schema({
  id: {type: Number},
  user: {type: ObjectId, ref: 'User'},
  up: [{type: ObjectId}],
  down: [{type: ObjectId}],
  text: {type: String, required: true, trim: true}
}, {
  collection: "entries",
  minimize: false,
  versionKey: false,
  timestamps: true
});

Entry.pre('save', function (next) {
  Id.findOneAndUpdate(
    {name: 'entries_inc'},
    {$inc: {value: 1}})
    .then((function (id) {
      this.id = id.value;
      next();
    }).bind(this));
});

mongoose.model("Entry", Entry);