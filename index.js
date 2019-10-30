$(document).ready(function () {
    $("#text").click(function(){
        var ok = true;

        if (ok === true) {
            var div = document.createElement('div');
            
            div.className = 'new-rect';       

        $('#new-box')[0].appendChild(div);
        }
    });
    

    $( ".box-handle" ).draggable({ 
        containment: ".container", 
        scroll: false, 
        drag: function () { 
            
            var box = $(this);
            var boxPosition = box.position();
            box.find('.arrow').show();
            
            if (boxPosition.left >= 90)
            {
                
                box.closest('.box').find('.box-line').css({
                    'top':'50px', 
                    'left':'110px',
                    'width': boxPosition.left - 60, 
                    'height': boxPosition.top + 50,
                    'border':'none',
                    'border-top':'1px solid #bfbfbf',
                    'border-right':'1px solid #bfbfbf'
                });
                
                box.find('.arrow').css({
                    'top':'-10px',
                    'left':'45px'
                });
            }
            else if (boxPosition.left < 90)
            {
                box.closest('.box').find('.box-line').css({
                    'top':'110px',
                    'left':'50px',
                    'width': boxPosition.left,
                    'height': boxPosition.top - 60,
                    'border':'none',
                    'border-left':'1px solid #bfbfbf',
                    'border-bottom':'1px solid #bfbfbf'
                });
                box.find('.arrow').css({
                    'top':'45px',
                    'left':'-10px'
                });
            }
        }
    });
    
    
});