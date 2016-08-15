$.getJSON("assets/english.json", function(data){
  var treasures = data.treasures;
  $(document).ready(function(){
    Object.keys(unordered).sort().forEach(function(key) {
      ordered[key] = unordered[key];
    });
    treasures.sort(function(a, b) {
        return a.name - b.name;
    });
    for (var i in treasures)
    {
      opt = $('<option/>', {value: treasures[i].id, text: treasures[i].name});
      $('#select-item').append(opt);
    }
    $('#select-item').change(function(){
      $('#text-item').text( $(this).val() );
      var id = parseInt($(this).val(), 10);
      var x = (id % 64).toString(10);
      var y = (~~(id / 64)).toString(10);
      $('#img-item').css('background', 'url(assets/treasures.png) '+x+' '+y);
    });
  });
});
