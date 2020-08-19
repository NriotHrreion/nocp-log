"use strict";

/**
 * Nocp-log
 * 
 * @author NriotHrreion
 * @listens MIT
 */

const moment = require("moment");
const fs = require("fs");

var conf = {
    path: "/",
    INFO: "[INFO|%t] %c",
    WARN: "[WARN|%t] %c",
    ERROR: "[ERROR|%t] %c",
    console: false,
    charset: "utf8"
};

function init() {
    var cnf = arguments[0];
    for(var i in cnf) {
        conf[i] = cnf[i];
    }
}

function log(type, text) {
    
    if(arguments[2]) {
        var cb = arguments[2];
    }

    var date = moment(Date.now()).format("YYYYMMDD");
    var time = moment(Date.now()).format("HH:mm:ss");
    var error = null;
    var content = "";

    try { // Contents
        content = fs.readFileSync(conf.path + date +".log").toString() + conf[type].replace("%t", time).replace("%c", text) +"\n";
    } catch {
        content = conf[type].replace("%t", time).replace("%c", text) +"\n";
    }
    
    fs.writeFile(conf.path + date +".log", content, conf.charset, function(err) {
        error = err;

        if(conf.console) {
            console.log(conf[type].replace("%t", time).replace("%c", text));
        }
    });
    
    cb(error);
}

module.exports = {
    init: init,
    log: log
};
