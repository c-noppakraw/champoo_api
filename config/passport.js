const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const service = require("../routes/auth/login/login.service");

module.exports = passport => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = `secret_key_here`;

    passport.use(
            new JwtStrategy(opts, (jwt_payload, done) => {
          service
            .matchData(jwt_payload.username)
            .then(user => {
              if (user) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            })
            .catch(error => {
              return done(err, false);
            });
        })
      );
};