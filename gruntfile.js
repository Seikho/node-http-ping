module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			default: {
				src: ["src/**/*.ts", "test/**/*.ts"],
				options: {
					module: "commonjs",
					target: "es5"
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"]);
};
