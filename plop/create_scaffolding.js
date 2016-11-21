var nodePlop = require('node-plop');
var plop = nodePlop('./plopfile.js');

var mode  = plop.getGenerator('model')

mode.runActions({name:'creatvies1'},function(err, result){
    console.log('err',err);
    console.log('done',result)
})


// On CreateProject(Run button)
// Use json object from client to create the scafffolding
// create post endpoint



