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
    $('#select-item').change(function(){
      $('#text-item').text( $(this).val() );
    });
  });
});
