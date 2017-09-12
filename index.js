var interceptor = require('express-interceptor');

module.exports = interceptor(function (req, res) {
    return {
        isInterceptable: function () {
            return /text\/html/.test(res.get('Content-Type'));
        },
        intercept: function (body, send) {
            var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
            send(body.replace(regex, function (match) {
                return Array.prototype.map.call(match, function (chr) {
                    return '&#' + chr.charCodeAt(0) + ';';
                }).join('');
            }));
        }
    }
});