module.exports = {
  mode: 'jit',
  content: [
    './views/layouts/*.handlebars',
    './views/partials/*.handlebars',
    './views/*.handlebars',
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0 0 50px #0ef'
      }
    },
  },
}