exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  },

  manipulateRemoteData : function(url) {
    var personArray = ['Adam', 'Alex', 'Matt', 'Paul', 'Rebecca']
    return personArray;
  }
};
