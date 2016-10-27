
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2016, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "no-console": "off",
    "no-empty": "off",
    "no-unused-vars": "off"
  },
  "globals": {
    "$": true,
    "details": true,
    "drawScene": true,
    "background": true,
    "rect": true,
    "fillRect": true,
    "ellipse": true,
    "fillColor": true
  }
};
