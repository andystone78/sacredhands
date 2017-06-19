
'use strict';

module.exports = function(grunt) {
    // Load multiple grunt tasks using globbing patterns
    require('load-grunt-tasks')(grunt);

    // Display the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Project settings
    var options = {
        // Package information
        package: grunt.file.readJSON('package.json'),
        // Configurable hostname
        hostname: 'localhost'
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('default', 'runs the serve task', function() {
        /**
         * Defaut task
         * $ grunt
         */
        grunt.task.run([
            'serve'
        ]);
    });

    grunt.registerTask('serve', 'watch', function() {
        /**
         * Defaut task
         * $ grunt serve
         */
        grunt.task.run([
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Build and test all files', function() {
        /**
         * Build all files
         * $ grunt build
         */
        grunt.log.subhead('# => Running build...');

        grunt.task.run([
            'sasslint',
            'sass',
            'jscs',
            'parker',
            'uglify'
        ]);
    });
};