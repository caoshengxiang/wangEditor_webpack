// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint', //解析器，这里我们使用babel-eslint
  parserOptions: {
    sourceType: 'module' //类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    browser: true, // 预定义的全局变量，这里是浏览器环境
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard', // 扩展，可以通过字符串或者一个数组来扩展规则
  // required to lint *.vue files
  plugins: [
    'html' // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
  // add your custom rules here
  'rules': { //这里写自定义规则
    // allow paren-less arrow functions
    'arrow-parens': 0, //箭头函数用小括号括起来
    "arrow-spacing": 0, //=>的前/后括号
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "comma-dangle": 0, //是否允许对象中出现结尾逗号
    "comma-spacing": 0,//逗号前后的空格
    "no-alert": 1, //不允许使用alert，confirm，prompt语句
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-extra-semi": 2,//禁止多余的冒号
    "no-func-assign": 2,//禁止重复的函数声明
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "no-underscore-dangle": 1,//标识符不能以_开头或结尾
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "block-scoped-var": 1,//块语句中使用var
    "no-console": 1,//禁止使用console
    "semi": 0, //强制语句分号结尾
    "semi-spacing": 0, //分后前后空格
    "fun-call-spacing": 1, //函数调用时，函数名与()之间不能有空格
  }
}
