const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    const ipAddress = req.socket.remoteAddress;
    const httpVersion = req.httpVersion;
    const userAgent = req.headers['user-agent'];
    const referrer = req.headers['referrer'];
    const contentLength = req.headers['content-length'];
    const contentType = req.headers['content-type'];
    console.log(`${method} ${url} ${httpVersion} ${time} ${ipAddress} ${userAgent} ${referrer} ${contentLength} ${contentType}`);
    next();
};

module.exports = logger;