const passport = require("passport");

require('../../config/passport')(passport);

module.exports = passport.authenticate('jwt', { session: false });
