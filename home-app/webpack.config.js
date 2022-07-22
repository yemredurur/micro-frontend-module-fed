const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'HomeApp',
      filename: 'remoteEntry.js',
      exposes: {
          './Header': "./src/components/Header.js",
          './Footer': "./src/components/Footer.js",
          './HomeContent': "./src/components/HomeContent.js",
          './MainLayout': "./src/components/MainLayout.js",
          './products': "./src/data/products.js",
          './HomePage': './src/App.js'
      },
      remotes: {
        HomeApp: 'HomeApp@http://localhost:3000/remoteEntry.js',
        CartApp: 'CartApp@http://localhost:3001/remoteEntry.js',
        PdpApp: 'PdpApp@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
