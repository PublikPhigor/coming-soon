$('document').ready(function(){
    
    $('#subscribe').on('submit', function(){
        $('#sub-button').attr('disabled', true);
        $.ajax({
            url: '../add_mail.php',
            data: $('#subscribe').serialize(),
            method: 'post',
            success: function(data){
                $('#sub-button').removeAttr('disabled');
                data = JSON.parse(data);
                console.log(data);
                if(data.status == 1){
                    location.assign('./feedback.html');
                }
            },
            error: function(data){
                $('#sub-button').removeAttr('disabled');
                console.log(data);
                alert('Error Processing Form!');
            },
            fail: function(data){
                $('#sub-button').removeAttr('disabled');
                console.log(data);
                alert('Error Processing Form!');
            }
        })
        
        return false;
        
    })
    
})