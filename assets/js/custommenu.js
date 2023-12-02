$(document).ready(function(){
  function menuactive($a){
    $($a).hover(
      function () {
          $($a).removeClass('active');
          $(this).addClass('active');
      }
    );

  }

});