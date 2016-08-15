$.getJSON("assets/english.json", function(data){
  var treasures = data.treasures;
  $(document).ready(function(){
    for (var i in treasures)
    {
      opt = $('<option/>', {value: treasures[i].id, text: treasures[i].name});
      $('#select-item').append(opt);
    }
  });
});
