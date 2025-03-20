$('document').ready(function(){
    //funcion para procesar la peticion del formulario
    $('#do_contact_form').on('submit',do_contact_form)
    function do_contact_form(event){
        event.preventDefault()
        alert('hola mundo')

        var data = new FormData($('#do_contact_form').get(0)),
        wrapper_msg = $('.wrapper_msg'),
        wrapper_contact_form = $('.wrapper_contact_form'),
        submit_button = $('.submit_button');

        //peticion ajax
        $.ajax({
            URL: 'procesos/ajax.php',
            type: 'post',
            datatype: 'json',
            processData: 'false',
            contentData: 'false',
            beforeSend: function(){
                submit_button.html('Enviando...');
            }
        }).done(function(res){

        }).always(function(){

        }).fail(function(err){
            wrapper_msg.html('hubo un error al procesar la peticion')
        })
    }
})