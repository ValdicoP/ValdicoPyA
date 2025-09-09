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

//<!--Activacion slider y script-->

		$(document).ready(function(){
			// Activando slippry 
			$("#slippry").slippry({
				captions: false,
				pager: false
			})

		});	
		
		/** Detectar el ancho del diamante y poner el mismo en HEIGHT**/
		var dn_width = $('.diamante').width();
		console.log(dn_width);
		$(".diamante").css({
			height: dn_width
		})
		
		/**Agregar clase a la barra de navegacion**/
		var slider = $("#slider").height();
		/**alert("la altura del slider es "+ slider)**/
		$(window).scroll(function(){
			var scroll = $(window).scrollTop(); 
			if(scroll>=$("#nosotros").offset().top-300){
				$('#nav').addClass("nav-overlay");
			}else{
				$('#nav').removeClass("nav-overlay");
			}
		});
		$(window).scroll();	

        // Activacion slider y script

		$(document).ready(function(){

            /**Activando lightbox**/
            lightbox.option({
                'resizeDuration': 200,
                'disableScrolling': true
            });

        /** Detectar el ancho del diamante y poner el mismo en HEIGHT**/
		var dn_width = $('#portafolio').width();
		console.log(dn_width)
		$("#portafolio").css({
			height: dn_width
		})
			


		/**alert("la altura del slider es "+ slider)**/
		$(window).scroll(function(){
			var scroll = $(window).scrollTop(); 
			if(scroll>=$("#nosotros").offset().top-300){
				$('#nav').addClass("nav-overlay");
			}else{
				$('#nav').removeClass("nav-overlay");
			}
		});
		$(window).scroll();
    });



  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeBtn");
  const openSound = document.getElementById("openSound");
  const closeSound = document.getElementById("closeSound");
  const closeNav = document.getElementById("nav");

  const images = document.querySelectorAll(".gallery img");
  let currentIndex = 0;

  function openModal(index) {
    const img = images[index];
    modalImg.src = img.dataset.full;
    modal.style.display = "flex";
    openSound.play();
	closeNav.style.display = "none"

    currentIndex = index;
  }

  function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
    closeSound.play();
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        openModal(currentIndex);
      } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(currentIndex);
      }
    }
  });
