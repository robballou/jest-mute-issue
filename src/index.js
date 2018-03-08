module.exports = {
  loud: function(a, b) {
    console.log({ a, b });
    const sum = a + b;
    console.log({ sum });
    return sum;
  },
  quiet: function(a, b) {
    return a + b;
  }
}
