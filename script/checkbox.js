jQuery(document).ready(function(){

  jQuery(".niceCheck").mousedown(function() {
    changeCheck(jQuery(this));
  });

  function changeCheck(el) {
    var el = el,
    input = el.find("input").eq(0);
    input.attr("checked", false);
    if(!input.attr("checked")) {
      el.css("background-position","0 -16px");
      input.prop("checked", true)
    } else {
      el.css("background-position","0 0");
      input.prop("checked", false)
    }
    return true;
  }

});
