## Info
`express-email-obfuscate` is Express middleware that intercepts
HTML sent to the client and replaces email addresses with HTML
entities to help prevent spam. By intercepting content sent, it
works with any view engine. You don't have to make any changes
to your views, just plug in the middleware and it handles
everything.
## Installation
    $ npm install express-email-obfuscate
## Usage
```javascript
var express = require('express');
var router = express.Router();

router.use(require('express-email-obfuscate'));
// Any HTML sent after this will be automatically
// searched for email addresses, which will
// be replaced with HTML entities.
```

```javascript
var express = require('express');
var obfuscator = require('express-email-obfuscate')

var app = express();

app.get('/', obfuscator, function (req, res, next) {
  res.send(`<a href='mailto:person@example.com'>person@example.com</a>`);
  // Sent: <a href='mailto:&#112;&#101;&#114;&#115;&#111;&#110;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;'>&#112;&#101;&#114;&#115;&#111;&#110;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;</a>
});
```