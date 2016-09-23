module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        wiredep: {
            task:{
                src: ['index.html','index.php']
            }
        },
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: 'public/index.html'
        }
    });
    // wiredep dependencies
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // usemin dependencies
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-filerev');

    grunt.registerTask('default',['wiredep']);

    grunt.registerTask('usemin', [
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'usemin'
    ]);
};