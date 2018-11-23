var yaml = require('js-yaml');
var fs = require('fs');

// Get document, or throw exception on error
try {
	var doc = yaml.safeLoad(fs.readFileSync('./.gitlab-ci.yml', 'utf8'));
	console.log(doc);
} catch (e) {
	console.log(e);
}
