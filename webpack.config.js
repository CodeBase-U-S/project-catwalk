const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: 'production',
  watch: true,
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-react'],
            ['@babel/preset-env']]
          }
        }
      }
    ]
  }
}



// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   mode: 'production',
//   watch: true,
//   // resolve: {
//   //   extensions: ['.js', '.jsx']
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// }













// module: {
//   loaders: [
//     {
//       test: /\.jsx?/,
//       include: SRC_DIR,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015']
//       }
//     }
//   ]
// }





// const path = require('path');
// module.exports = {
//   entry: path.resolve(__dirname, 'public/src'),
//   output: {
//     path: path.resolve(__dirname, 'public/dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|jpg|jpeg)$/,
//         loader: 'url-loader',
//       },
//     ],
//   },
//   mode: 'development',
//   resolve: {
//     extensions: ['.mjs', '.js', '.jsx'],
//   },
// };
