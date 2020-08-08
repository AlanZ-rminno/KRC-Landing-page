var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw5rqBDVTNWnHETAY5iHYWINvMHmURd2MgBwiuRyxe7tIFQII4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
    
  }
  ).success(
    console.log("it is submited")
  );
})
console.log(data);