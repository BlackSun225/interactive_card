$(document).ready(function(){
  $('input').focus(function(){
    $(this).css('borderColor', 'hsl(249, 99%, 64%) hsl(278, 94%, 30%) hsl(278, 94%, 30%) hsl(249, 99%, 64%)');
  });
  $("#cname").change(function(){
    $("span.l").text($(this).val().toUpperCase());
    if($(this).val().toUpperCase() === "") {
      $("span.l").text('JANE APPLESEED');
    }
  });
  $("#cname").blur(function(){
    if($(this).val() === '' || !$(this).val().match(/[a-zA-Z]{2,} *[a-zA-Z]{2,}/)){
      $(this).next(".alert").text('Wrong format, letters only');
      $(this).next(".alert").css("display", "block");
      $(this).css("border", "1px solid hsl(0, 100%, 66%)");
    }else{
        $(this).next(".alert").css("display", "none");
        $(this).css("border", "1px solid hsl(270, 3%, 87%)");  
    }
  });
  $("#number").change(function(){
    $(".cinf > div").text($(this).val());
    if($(this).val() === '') {
      $(".cinf > div").text("0000 0000 0000 0000");
    }
  });
  $("#number").blur(function(){
    if($(this).val() === "" || !$(this).val().match(/\d{4} *\d{4} *\d{4} *\d{4}/)) {
      $(this).next(".alert").css("display", "block");
      $(this).next(".alert").text("Wrong format, number only");
      $(this).css("border", "1px solid hsl(0, 100%, 66%)");
    }else{
      $(this).next(".alert").css("display", "none");
      $(this).css("border", "1px solid hsl(270, 3%, 87%)"); 
    }
  });
  $("div.l input").blur(function(){
    var month = $("#date").val();
    var year = $("#date").next("input").val();
    if(month === "") {
      month = "00";
    }
    month.length > 1 ? month : month = '0' + month;
    if(year === "") {
        year = "00";
    }
    year.length > 1 ? year : year = '0' + year;
    var date = month + "/" + year;
    $(".cinf .r").text(date);
  });
  $('#date').blur(function(){
    if($(this).val() === '') {
      $(this).css('border', '1px solid hsl(0, 100%, 66%)');
      $('div.l .alert').css('display', 'block');
      $('div.l .alert').text("Can't be blank");
    }else{
      $(this).css('border', '1px solid hsl(270, 3%, 87%)');
      $('div.l .alert').css('display', 'none');
    }
  })
  $('#date').next('input').blur(function(){
    if($('#date').next('input').val() === '') {
      $('#date').next('input').css('border', '1px solid hsl(0, 100%, 66%)');
      $('div.l .alert').css('display', 'block');
      $('div.l .alert').text("Can't be blank");
    }else{
      $(this).css('border', '1px solid hsl(270, 3%, 87%)');
      $('div.l .alert').css('display', 'none');
    }
  });
  $('#cvc').blur(function(){
    if($(this).val() === '') {
      $(this).css('border', '1px solid hsl(0, 100%, 66%)');
      $('#cvc + .alert').css('display', 'block');
      $('#cvc + .alert').text("Can't be blank");
      $('#cardback div:nth-child(2)').text('000');  
    }else{
      $(this).css('border', '1px solid hsl(270, 3%, 87%)');
      $('#cvc + .alert').css('display', 'none');
      $('#cardback div:nth-child(2)').text($('#cvc').val()); 
    }
  });
  $('form button').click(function(event){
    event.preventDefault();
    $('form').css('display', 'none');
    $('#thanks').css('display', 'block');
  });
  $('#thanks button').click(function(){
    $('#thanks').css('display', 'none');
    $('form').css('display', 'block');
  });
});