import './index.css'
const content = document.getElementById('content')
content.innerHTML='it works';

// 实现热替换，需要在入口文件加上这句话
if (module.hot) {
  module.hot.accept();
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
