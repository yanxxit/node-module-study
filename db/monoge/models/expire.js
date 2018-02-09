var mongoose = require('./mongo_client');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    email: String
});

//save date by-default
//expire in 1 min as in your example
var expireSchema = new Schema({
    createdAt: { type: Date, default: Date.now, expires: '1m' },
    user_pk: { type: Schema.Types.ObjectId, ref: 'user_expire' }
});

var userTable = mongoose.model('user_expire', UserSchema);
var expireTable = mongoose.model('expireMe', expireSchema);

//Save new user
var newUser = new userTable({
    name: 'my_name',
    email: 'my_email'
});

newUser.save(function (err, result) {
    console.log(result, 'saved')
    var newExpire = new expireTable({
        user_pk: result._id
    });
    //use _id of new user and save it to expire table
    newExpire.save(function (err, result) {
        console.log('saved relation')
    })
})

expireTable.findOne()
    .populate('user_pk')
    .exec(function (err, result) {
        if (err) throw err;
        console.log(result)
        if (result == null) {
            console.log('session has expired, renew session')
        } else {
            console.log('session is active')
        }
    });

//output - session is active

expireTable.findOne()
    .populate('user_pk')
    .exec(function (err, result) {
        if (err) throw err;
        console.log(result)
        if (result == null) {
            console.log('session has expired, renew session')
        } else {
            console.log('session is active')
        }
    });

//output - session has expired, renew session