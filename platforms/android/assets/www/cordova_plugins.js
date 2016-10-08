cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.spout.phonegap.plugins.baidulocation/www/baidulocation.js",
        "id": "com.spout.phonegap.plugins.baidulocation.BiaduLocation",
        "pluginId": "com.spout.phonegap.plugins.baidulocation",
        "clobbers": [
            "window.baiduLocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.spout.phonegap.plugins.baidulocation": "0.1.0"
}
// BOTTOM OF METADATA
});