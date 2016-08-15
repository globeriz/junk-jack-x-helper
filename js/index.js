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
