module.exports = function (grunt) {

    'use strict';


    var buildNumber;
    var branchName;

    try {
        var teamcityProperties = grunt.file.readJSON(grunt.option('teamcity.properties.all'));

        buildNumber = teamcityProperties['build.number'];
        branchName = teamcityProperties['teamcity.build.branch'].replace('/', '-');
    } catch (e) {
    }

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Define the configuration for all the tasks
    grunt.initConfig({

        aws_s3: {
            options: {
                region: 'eu-west-1',
                bucket: 'apps.dev-artifacts.adis.ws',
                access: 'public-read',
                differential: false
            },
            dev: {
                params: {
                    // Ten Year cache policy (1000 * 60 * 60 * 24 * 365 * 10)
                    CacheControl: 'max-age=630720000, public',
                    Expires: new Date(Date.now() + 315360000000)
                },
                files: [ {
                    expand: true,
                    cwd: 'dist',
                    src: ['**'],
                    dest: 'cms-cards/' + branchName + '/' + buildNumber + '/'
                }]
            },
            devLatest: {
                options: {
                    params: {
                        // 1 day cache policy (1000 * 60 * 60 * 24)
                        CacheControl: 'max-age=86400000, public'
                    }
                },
                files: [ {
                    expand: true,
                    cwd: 'dist',
                    src: ['**'],
                    dest: 'cms-cards/' + branchName + '/latest/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-aws-s3');

    grunt.registerTask('deploy', [
        'aws_s3:dev', 'aws_s3:devLatest'
    ]);
};
