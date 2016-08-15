$.getJSON("assets/english.json", function(data){
  var treasures = data.treasures;
  $(document).ready(function(){
    treasures.sort(function(a, b) {
        return a.name - b.name;
    });
    for (var i in treasures)
    {
      opt = $('<option/>', {value: treasures[i].id, text: treasures[i].name});
      $('#select-item').append(opt);
    }
    $('#img-item').css('height', '16px');
    $('#img-item').css('width', '16px');
    $('#select-item').change(function(){
      $('#text-item').text( $(this).val() );
      var id = parseInt($(this).val(), 10);
      var x = (id % 64).toString(10);
      var y = (~~(id / 64)).toString(10);
      var s = 'url(assets/treasures.png) '+x+' '+y;
      $('#img-item').css('background', s);
    });
  });
});
