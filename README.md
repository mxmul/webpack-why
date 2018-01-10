# webpack-why
[![npm](https://img.shields.io/npm/v/webpack-why.svg)](https://yarn.pm/webpack-why) [![Build Status](https://travis-ci.org/mxmul/webpack-why.svg?branch=master)](https://travis-ci.org/mxmul/webpack-why)

"Why is this module in my bundle??"

## Installation
Install the package globally:

```
yarn global add webpack-why
```

## Usage
```
$ webpack --json > stats.json
$ webpack-why stats.json ./src/module-b.js
Hash: deadbeef
bundle.js
└─ ./src/module-b.js
   └─ ./src/module-a.js
         └─ ./src/app.js
```
