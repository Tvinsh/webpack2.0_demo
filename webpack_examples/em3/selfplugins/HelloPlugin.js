function HelloPlugin(options) {}

HelloPlugin.prototype.apply = function(compiler) {

  // 设置回调来访问编译对象：
  compiler.plugin("compilation", function(compilation) {

    // 现在设置回调来访问编译中的步骤：
    compilation.plugin("optimize", function() {
      console.log("Assets are being optimized.");
    });
  });
};

module.exports = HelloPlugin;