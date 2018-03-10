------ es6-demo ----

更新 npm
npm install npm@latest -g

------
touch .babelrc

{
    'presets':['es2015'],
    'plugins':[]
}

1>Babel 转码器

 "scripts": {
    "build": "babel src -d lib"
  },


  2>
  npm install babel-cli -g
  npm install --save-dev babel-preset-es2015



  $ npm install -g cnpm --registry=https://registry.npm.taobao.org
  $ cnpm install babel-preset-es2015 --save-dev