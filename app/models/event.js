
//	MODEL EVENT

var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  crEnameForm: String,
  crEdateForm: Date,
  crEtimeForm: String,
  crEnumberForm: Number,
  crEwayForm: String,
  crEcityForm: String,
  crEpostalcodeForm: String,
  crEcountryForm: String,
  btnCrEmeal: String,
  friendlastname: String,
  friendfirstname: String,
  friendmail: String,
});
var Event = {
    
    model: mongoose.model('Event', eventSchema),
    
    create: function(req, res) {
		Event.model.create({
			crEnameForm: req.body.crEnameForm,
			crEdateForm: req.body.crEdateForm,
			crEtimeForm: req.body.crEtimeForm,
			crEnumberForm: req.body.crEnumberForm,
			crEwayForm: req.body.crEwayForm,
			crEcityForm: req.body.crEcityForm,
			crEpostalcodeForm: req.body.crEpostalcodeForm,
			crEcountryForm: req.body.crEcountryForm,
			btnCrEmeal: req.body.btnCrEmeal,
			friendlastname: req.body.friendlastname,
			friendfirstname: req.body.friendfirstname,
			friendmail: req.body.friendmail,
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Event.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Event.model.findByIdAndUpdate(req.params.id, {
			crEnameForm: req.body.crEnameForm,
			crEdateForm: req.body.crEdateForm,
			crEtimeForm: req.body.crEtimeForm,
			crEnumberForm: req.body.crEnumberForm,
			crEwayForm: req.body.crEwayForm,
			crEcityForm: req.body.crEcityForm,
			crEpostalcodeForm: req.body.crEpostalcodeForm,
			crEcountryForm: req.body.crEcountryForm,
			btnCrEmeal: req.body.btnCrEmeal,
			friendlastname: req.body.friendlastname,
			friendfirstname: req.body.friendfirstname,
			friendmail: req.body.friendmail,
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Event.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Event;
