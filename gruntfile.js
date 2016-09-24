module.exports = function (grunt) {

    grunt.initConfig({
        wiredep: {
            task: {
                src: 'adminlte.html',
                exclude: [/\/jquery\//,/\/jquery-ui\// ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-wiredep')
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('default', ['wiredep']);

}