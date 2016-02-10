/**
 this is a To-do service as part of the ng2Boilerplate example using CRUD
 for node.js Express service
 It uses redis for internal caching of incoming calls for 2 days
 before clearing from memory

 @class todo
 @constructor
 @return {Object} instantiated service

 http://ng2.JavasScriptNinja.io"
 **/

/**
 Initialize redis
 @method msInitRedis
 **/
exports.msInitRedis = function () {
    var redis = require("redis");
    redisClient = redis.createClient();
    exports.redisClient = redisClient;
};

/**
 Check if an item exists in the cache.
 @method cacheGet
 @param {String} cacheKey
 @param {Function} callback
 @return {String} entry
 **/
exports.cacheGet = function (cacheKey, callback) {
    _this.redisClient.get(cacheKey, callback);
};

/**
 Set
 @method cacheSet
 @param {String} cacheKey
 @param {String} cacheValue
 @param {Number} expireSeconds
 **/
exports.cacheSet = function (cacheKey, cacheValue, expireSeconds) {
    _this.redisClient.setex(cacheKey, expireSeconds, cacheValue);
};
/**
 Todo service as part of the ng2Boilerplate example using node CRUD services
 @class todo
 @constructor
 @return {Object} instantiated service

 http://ng2.JavasScriptNinja.io"

 **/
module.exports.set = function (app, worker_id) {

    var ms = require("mslibmod");
    var request = require('request');
    var cors = require('cors');
    var expirationSeconds = 186400;

    /** Read **/
    app.get('/todos', cors({origin: '*'}), function (req, res) {
        var ip = req.headers['X-Real-IP'] || req.connection.remoteAddress;
        var unique = `todos_${ip}`;
        ms.log(`todos get all ${ip}`);
        // clear cache for debug
        //ms.cacheSet(unique, '', expirationSeconds);
        ms.cacheGet(unique, function (err, data) {
            if (err) {
                ms.log('Todos get err ' + err);
                res.send([{}]);
                return;
            }
            if (data) {
                //res.send([{task: 'A', id: 1}, {task: 'B', id: 2}]);
                res.send([data]);
            } else {
                res.send([{}]);
                //res.send([{task: 'A', id: 1}, {task: 'B', id: 2}]);
            }
        });
    });

    /** Delete **/
    app.delete('/todos/:id', function (req, res) {
        var id = req.param('id');
        ms.log('delete model ' + id);
        var ip = req.headers['X-Real-IP'] || req.connection.remoteAddress;
        var unique = `todos_${ip}`
        ms.cacheGet(unique, function (err, data) {
            if (err) {
                ms.log('Todos delete get err ' + err);
                res.send([{}]);
                return;
            }
            if (data) {
                var jData = JSON.parse(data);
                for (var index in jData) {
                    if (jData[index]._data.modelId === id) {
                        jData.splice(index, 1);
                    }
                }
                jData = JSON.stringify(jData);
                ms.cacheSet(unique, jData, expirationSeconds);
                res.send([{status: 'deleted'}])
            } else {
                // data prob expired already so just send back reply
                res.send([{status: 'done'}])
            }
        });
    });

    /** Update **/
    app.put('/todos/:id', function (req, res) {
        var id = req.param('id');
        ms.log('update model ' + id);
        if (req.method == 'PUT') {
            var body = '';
            req.on('data', function (data) {
                body += data;
                // Too much POST data, kill the connection, 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6)
                    req.connection.destroy();
            });
            req.on('end', function () {
                var ip = req.headers['X-Real-IP'] || req.connection.remoteAddress;
                var unique = `todos_${ip}`;

                ms.cacheGet(unique, function (err, data) {
                    if (err) {
                        ms.log('Todos update get err ' + err);
                        res.send([{}]);
                        return;
                    }
                    if (data) {
                        var jBody = JSON.parse(body);
                        var task = jBody.task;
                        var jData = JSON.parse(data);
                        for (var index in jData) {
                            if (jData[index]._data.modelId === id)
                                jData[index]._data.task = task;
                        }
                        jData = JSON.stringify(jData);
                        ms.cacheSet(unique, jData, expirationSeconds);
                        res.send([{status: 'updated'}])
                    } else {
                        // data prob expired already so just send back reply
                        res.send([{status: 'done'}])
                    }
                });
            });
        } else {
            ms.log('Todos: Not a post command');
            res.send([{}]);
        }
    });

    /** Create **/
    app.post('/todos', cors({origin: '*'}), function (req, res) {
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function (data) {
                body += data;
                // Too much POST data, kill the connection, 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6)
                    req.connection.destroy();
            });
            req.on('end', function () {
                var ip = req.headers['X-Real-IP'] || req.connection.remoteAddress;
                var unique = `todos_${ip}`
                ms.cacheGet(unique, function (err, data) {
                    if (err) {
                        ms.log('Todos get err ' + err);
                        res.send([{}]);
                        return;
                    }
                    var jBody = JSON.parse(body);
                    var jData = [];
                    if (data) {
                        jData = JSON.parse(data);
                        jData.push(jBody);
                        jData = JSON.stringify(jData);
                        ms.cacheSet(unique, jData, expirationSeconds);
                    } else {
                        jData.push(jBody);
                        jData = JSON.stringify(jData);
                        ms.cacheSet(unique, jData, expirationSeconds);
                    }
                    ms.log(`todos get all ${ip} ${body}`);
                    res.send({status: 'done'});
                });
            });
        } else {
            ms.log('Todos: Not a post command');
            res.send([{}]);
        }
    });
};


