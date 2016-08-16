jQuery.fn.filterByText = function(textbox, selectSingleMatch) {
  return this.each(function() {
    var select = this;
    var options = [];
    $(select).find('option').each(function() {
      options.push({value: $(this).val(), text: $(this).text()});
    });
    $(select).data('options', options);
    $(textbox).bind('change keyup', function() {
      var options = $(select).empty().scrollTop(0).data('options');
      var search = $.trim($(this).val());
      var regex = new RegExp(search,'gi');
 
      $.each(options, function(i) {
        var option = options[i];
        if(option.text.match(regex) !== null) {
          $(select).append(
             $('<option>').text(option.text).val(option.value)
          );
        }
      });
      if (selectSingleMatch === true && 
          $(select).children().length === 1) {
        $(select).children().get(0).selected = true;
      }
    });
  });
};
$.getJSON("assets/english.json", function(data){
  var treasures = data.treasures;
  $(document).ready(function(){
    treasures.sort(function(a, b) {
    	a = a.name;
    	b = b.name;
        return (a<b?-1:(a>b?1:0));
    });
    for (var i in treasures)
    {
      opt = $('<option/>', {value: treasures[i].id, text: treasures[i].name});
      $('#select-item').append(opt);
    }
    $(function() {
      $('#select-item').filterByText($('#text-filter'), true);
    });  
    $('#img-item').css('height', (16*2).toString(10) +'px');
    $('#img-item').css('width', (16*2).toString(10) +'px');
    $('#select-item').change(function(){
      $('#text-item').text( $(this).val() );
      var id = parseInt($(this).val(), 10);
      var x = (-16*2 * (~~(id / 64))).toString(10)+'px';
      var y = (-16*2 * (id % 64)).toString(10)+'px';
      var s = 'url(assets/treasures_2x.png) '+x+' '+y;
      $('#img-item').css('background', s);
    });
  });
});
