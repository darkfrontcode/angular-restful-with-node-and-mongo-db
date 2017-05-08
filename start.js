`use strict`;


/**
    @description Babel for transpiler foe reinforce extra features
*/
require(`babel-core/register`)({
    presets: [`es2015`,`stage-0`]
});


/**
    @description Environment settings
*/
var environment = process.env.NODE_ENV || `development`;
environment===`production` ? require(`./server/express/production`) : require(`./server/express/development`);
