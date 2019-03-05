function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      }
    },
  ];
}

module.exports = [
  {
    entry: './login.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
  },
  {
    entry: './calculator.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-calculator.js',
    },
    module: {
      rules: [{
        test: /calculator.scss$/,
        use: getStyleUse('bundle-calculator.css')
      }]
    },
  },
  {
    entry: './result.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-calculator.js',
    },
    module: {
      rules: [{
        test: /result.scss$/,
        use: getStyleUse('bundle-result.css')
      }]
    },
  },
  {
    entry: "./login.js",
    output: {
        filename: "bundle-login.js"
    },
    module: {
      rules: [{
        test: /login.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./calculator.js",
    output: {
        filename: "bundle-calculator.js"
    },
    module: {
      rules: [{
        test: /calculator.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./result.js",
    output: {
        filename: "bundle-result.js"
    },
    module: {
      rules: [{
        test: /result.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }

];
