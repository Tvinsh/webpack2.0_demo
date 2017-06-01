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