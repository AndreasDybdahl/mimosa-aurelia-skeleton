/* */ 
(function(Buffer) {
  module.exports = function(seed, len, crypto) {
    var t = new Buffer('');
    var i = 0,
        c;
    while (t.length < len) {
      c = i2ops(i++);
      t = Buffer.concat([t, crypto.createHash('sha1').update(seed).update(c).digest()]);
    }
    return t.slice(0, len);
  };
  function i2ops(c) {
    var out = new Buffer(4);
    out.writeUInt32BE(c, 0);
    return out;
  }
})(require("buffer").Buffer);