$(function() {
  $('a.support-idea').click(function() {
    var win = window.open('https://github.com/rstoenescu/quasar-framework/issues', '_blank');

    if (win) {
      win.focus();
    }
  });
});
