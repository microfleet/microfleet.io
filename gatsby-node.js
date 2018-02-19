exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['@babel/plugin-syntax-export-default-from']),
});
