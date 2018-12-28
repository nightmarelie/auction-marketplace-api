'use strict'

require('dotenv').config();

const config = require('./config');

// supported stateless processes
const WEB = 'web';
const LOTS_PROCESSOR = 'lots-postprocessor';

switch (config.processType) {
    case WEB:
        require('./web');
        break;
    case LOTS_PROCESSOR:
        require('./worker/lots-postprocessor');
        break;
    default:
        throw new Error(`${config.processType} is an unsupported process type. 
            Use one of: ${[WEB, LOTS_PROCESSOR].join(', ')}!`);
}
