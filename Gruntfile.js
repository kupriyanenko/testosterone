module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      dist: {
        src: ['client/src/**/*.ts'],
        dest: 'client/out',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'client/src',
          sourceMap: true,
          declaration: true
        }
      },
      watch: {
        src: ['client/src/**/*.ts'],
        dest: 'client/out',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'client/src',
          sourceMap: true,
          declaration: true,
          watch: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-typescript");

  grunt.registerTask("ts-watch", ["typescript:watch"]);
  grunt.registerTask("default", ["typescript:dist"]);
};