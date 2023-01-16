const path=require('path');
module.exports={
entry:'./source/js/script.js',
devtool:'source-map',
output:{
  filename:'main.bundle.js',
  path: path.resolve(__dirname,'build/js'),
}
};
