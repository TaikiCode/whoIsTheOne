module.exports = {
    plugins: ['stylelint-scss'],
    extends: [
      'stylelint-config-standard',
      'stylelint-prettier/recommended',
    ],
    rules: {
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
    }
};