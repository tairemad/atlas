$(document).ready(function() {
  var $c = $('.component');
  var $el = $c.find('input[type="text"], textarea, select');
  var $menu = $c.find('select');
  var $input = $c.find('input');

  $el.each(function(index, element){
    updateElementState(element);

    $(element).focus(function() {
      $(element).parent().addClass('focused');
    });

  });

  $el.on('blur', function(e){
    var element = e.currentTarget;
    updateElementState(element);
  });

  function updateElementState(element) {
    var $clean = $(element).val().replace(/^\s+$/,'');
    $(element).val($clean);

    if ($(element).val() !== '') {
      $(element).parent().addClass('focused');

      if ($menu.val() == '1') {
        $(element).parent().removeClass('focused');
      }
    } else {
      $(element).parent().removeClass('focused');
    }

    $input.on('input', function() {
      if ($input.val() !== '') {
        $(this).parent().addClass('input-filled');
      } else {
        $(this).parent().removeClass('input-filled');
      }
    });
  }
});
