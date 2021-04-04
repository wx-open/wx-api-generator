export default {
  cjs: 'babel',
  target: 'node',
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
