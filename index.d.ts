/**
 * Nocp-log
 * 
 * @author NriotHrreion
 * @listens MIT
 */

interface LogConfig {
    path?: string = "./";
    INFO?: string = "[INFO|%t] %c";
    WARN?: string = "[WARN|%t] %c";
    ERROR?: string = "[ERROR|%t] %c";
    console?: boolean = false;
    charset?: string = "utf8";
}

type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;

/**
 * @function init
 * 
 * Init Logger
 * 
 * @param {LogConfig} cnf Logger Config
 * 
 * @example
 * const nocpLog = require("nocp-log");
 * nocpLog.init({
 *   path: __dirname +"/log/", // log Dir WARN: The end of dirname must be "/"
 *   INFO: "[INFO|%t] %c", // Info log template
 *   WARN: "[WARN|%t] %c", // Warning log template
 *   ERROR: "[ERROR|%t] %c", // Error log template
 *   console: false, // Console logger info
 *   charset: "utf8" // Log Charset
 * });
 */
export declare function init(cnf: LogConfig) : void;

/**
 * @function log
 * 
 * Add a Log
 * 
 * @param {String} type Log type
 * @param {String} text Log content
 * @param {NoParamCallback} cb Callback
 * 
 * @example
 * const nocpLog = require("nocp-log");
 * nocpLog.init({....}); // See init()
 * nocpLog.log("INFO", "HelloWorld", (err) => {
 *   // Callback function
 * });
 * nocpLog.log("WARN", "HelloWorld", (err) => {
 *   // Callback function
 * });
 * nocpLog.log("ERROR", "HelloWorld", (err) => {
 *   // Callback function
 * });
 */
export declare function log(type: "INFO", text: string, cb?: NoParamCallback => void) : void;
export declare function log(type: "WARN", text: string, cb?: NoParamCallback => void) : void;
export declare function log(type: "ERROR", text: string, cb?: NoParamCallback => void) : void;

