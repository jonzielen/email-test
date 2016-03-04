module.exports = function(grunt) {

  grunt.initConfig({
    emailBuilder:{
      inline: {
        files: { 'index.html' : 'build.html' },
        options: {
          encodeSpecialChars: true
        }
      }
    },
    watch: {
      scripts: {
        files: [
          'build.html',
          'main.css'
        ],
        tasks: ['emailBuilder'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-email-builder');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['emailBuilder']);
};
