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
          declaration: true,
          references: [
            'client/typings/tsd.d.ts'
          ]
        }
      },
      watch: {
        src: ['client/src/**/*.ts'],
        dest: 'client/out',
        options: {
          watch: true,
          module: 'amd',
          target: 'es5',
          basePath: 'client/src',
          sourceMap: true,
          declaration: true,
          references: [
            'client/typings/tsd.d.ts'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-typescript");

  grunt.registerTask("watch", ["typescript:watch"]);
  grunt.registerTask("default", ["typescript:dist"]);
};