var staticPathPrefix = 'static',
    proxyUrl = 'localhost:5000';

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: staticPathPrefix + '/sass/**/*.{scss,sass}',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: staticPathPrefix + '/sass',
                    src: ['*.scss', '*.sass'],
                    dest: staticPathPrefix + '/css',
                    ext: '.css'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        staticPathPrefix + '/css/*.css',
                        staticPathPrefix + '/js/*.js',
                        staticPathPrefix + '/templates/*.html',
                        '**/*.py'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: proxyUrl
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};