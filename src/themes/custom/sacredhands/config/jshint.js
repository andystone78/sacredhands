'use strict';

// Validate files with JSHint

module.exports = {
    options: {
        jshintrc: '.jshintrc'
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
            'js/global.js'
        ]
    }
};