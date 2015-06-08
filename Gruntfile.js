'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        'svg-react-component': {
            aggressive: {
                options: {
                    clean: true,
                    svgo: true
                },
                files: {
                    'example/dest/': [
                        'example/src/**/*.svg',
                        '!example/src/**/bird13.svg'
                    ]
                }
            },

            // Non optimized svg components
            basic: {
                files: {
                    'example/dest/': [
                        'example/src/bird13.svg'
                    ]
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['svg-react-component']);
};
