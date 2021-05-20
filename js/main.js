// Customizable Box PopUp


$('.div-box').click(function() {
    $('#settings').fadeToggle();
  });
  

$('#setfont-size').on('change',function(){
    var val = $(this).val();
    $('.box-title').css("font-size",(val+"px"));
  });
  
  
    
  $('#setborder-radius').on('change',function(){
    var val = $(this).val();
    $('.div-box').css("border-radius",(val+"px"));
  }); 
  
    
  $('#setheight').on('change',function(){
    var val = $(this).val();
    if (val == 1){
      $('.div-box').css("height",("auto"));  
    }else{
      $('.div-box').css("height",(val+"px"));
    }
    
  }); 
    
  $('#setwidth').on('change',function(){
    var val = $(this).val();
    if (val == 1){
      $('.div-box').css("width",("auto"));  
    }else{
      $('.div-box').css("width",(val+"%"));
    }
    
  }); 
  $('#setcolor').on('change',function(){
    var val = $(this).val();
    $('.box-title').css("color",(val));
  }); 
    
  
