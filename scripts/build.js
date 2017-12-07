var fs = require('fs');

var buildJS = function(){
    console.log('Building index.js');
    var b = require('browserify')();
    b.add('src/js/main.js');
    b.transform('uglifyify', { global: true  })
    var indexjs = fs.createWriteStream('build/index.js');
    b.bundle().pipe(indexjs);
    console.log('Done: Building index.js');
};

var buildCSS = function(){
    console.log('Building index.css');
    var browserify = require('browserify');
    var fs = require('fs');
    browserify()
    .add('index.js')
    .transform(require('browserify-css'), {
        global:true,
        "minify": true,
        onFlush: function(options, done) {
            fs.appendFileSync('build/index.css', options.data);
            // Do not embed CSS into a JavaScript bundle
            done(null);
        }
    })
    .bundle();    
    console.log('Done: Building index.css');
}

console.log("using rimraf just to first we clean out the entire build dir");
require('rimraf')('build', function(){
    console.log("re-make the build folder from scratch");
    require('mkdirp')('build', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("build the index.js");
            buildJS();
            console.log("build the index.css");            
            buildCSS();
        }
    });  
});
