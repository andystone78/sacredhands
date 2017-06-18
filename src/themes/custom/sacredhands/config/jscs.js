'use strict';

// Checks JavaScript code style with jscs

module.exports = {
    options: {
        config: '.jscsrc'
    },
    gruntConfig: {
        files: {
            src: [
                'Gruntfile.js',
                'config/*.js'
            ]
        }
    },
    files: {
        src: [
            'js/*.js'
        ]
    }
};