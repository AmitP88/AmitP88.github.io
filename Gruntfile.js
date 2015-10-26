module.exports = function(grunt) {
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json')
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'css',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css',
				ext: '.min.css'
				}]
			}
		}

grunt.loadNpmTask('grunt-contrib-cssmin');
grunt.registerTask('default', ['cssmin']);

});

};