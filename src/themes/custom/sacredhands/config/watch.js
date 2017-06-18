'use strict';

// Watches files for changes and runs tasks based on the changed files

module.exports = {
    options: {
        debounceDelay: 250,
        spawn: false
    },
    scss: {
        files: [
            'sass/**/*.scss'
        ],
        tasks: [
            'sasslint',
            'sass'
        ]
    },
    js: {
        files: [
            'js/*.js'
        ],
        tasks: [
           'jscs',
           'uglify'
        ]
    }
};