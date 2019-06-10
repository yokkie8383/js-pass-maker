const JsPassMaker = function() {
  this.str =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&=~/*-+';
  this.len = 8;
};

JsPassMaker.prototype.generate = function() {
    let result = '';

    for (let i = 0; i < this.len; i++) {
      result += this.str.charAt(Math.floor(Math.random() * this.str.length));
    }

    return result;
}
module.exports = JsPassMaker;