$.getJSON("../assets/english.json", function(data){
  var treasures = data.treasures;
  $(document).ready(function(){
    for (treasure in treasures)
    {
      opt = $('</option>', {value: treasure.id, text: treasure.name});
      $('#select-item').append(opt);
    }
  });
});
