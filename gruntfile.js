module.exports = function (grunt) {

    grunt.initConfig({
        bower_concat: {
            build: {
                dest: {
                    'js': 'assets/js/vendor.js',
                    'css': 'assets/css/vendor.css'
                },
                mainFiles: {
                    'bootstrap': [
                        'dist/css/bootstrap.css',
                        'dist/js/bootstrap.js'
                    ]
                },
                exclude: ['jquery'],
                bowerOptions: {
                    relative: false
                }
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    ext: '.min.js',
                    src: 'assets/**/*.js'
                }]
            }
        },
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    src: 'assets/**/*.css',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            copy_fonts: {
                files: [
                    // include files in every folder named fonts
                    {expand: true, flatten: true, src: ['**/fonts/*'], dest: 'assets/fonts', filter: 'isFile'},
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('default', ['bower_concat', 'uglify', 'cssmin']);

    grunt.registerTask('copy_fonts', ['copy']);
};