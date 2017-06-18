'use strict';

// Compiles SCSS to CSS

module.exports = {
    sass: {
        options: {
            outputStyle: 'expanded',
            sourceMap: true
        },
        files: {
            'css/style.css': 'sass/style.scss'
        }
    }
};