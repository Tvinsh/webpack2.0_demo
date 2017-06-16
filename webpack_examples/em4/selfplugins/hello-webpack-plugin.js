
/*
    定义一个命名函数，在它的原型上定义一个 apply 方法  其中最重要的是 compiler 和 compilation 对象

    compiler 在启动 webpack 时被实例化， 实例对象里面有打包相关的环境和参数，包括options，plugins，loaders

    compilation 在每次文件变化重新打包时都进行一次实例化，它继承自 compiler ，包括 modules 和 chunks 相关信息
*/


function HelloWebpackPlugin(options) {}

HelloWebpackPlugin.prototype.apply = function(compiler) {

  //  开始编译
  compiler.plugin("compile", function(params) {
    console.log("开始编译。。");
  });

  // 设置回调来访问编译对象：
  compiler.plugin("compilation", function(compilation) {

  	console.log("开始一个新的compilation...");

    // 现在设置回调来访问编译中的步骤：
    compilation.plugin("optimize", function() {
      console.log("compilation开始优化编译相关文件。。");
    });
  });

  compiler.plugin("emit", function(compilation, callback) {
    console.log("compilation准备产出编译好的文件。。。");
    callback();
  });

};

module.exports = HelloWebpackPlugin;