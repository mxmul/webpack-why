# webpack-why

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
