  AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      offset: 0, // offset (in px) from the original trigger point
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
          .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                      event.preventDefault()
                      event.stopPropagation()
                  }

                  form.classList.add('was-validated')
              }, false)
          })
  })()


  function mostrarTab(el) {
      var cardTab = $("#myTab .card-tab");
      cardTab.removeClass("active");
      $(el).addClass("active");

      var tabPane = $("#experiencia .tab-pane");
      tabPane.removeClass("active show");
      var pane = "#" + el.id + "-tab";
      $(pane).addClass("active show")
  }


  var tl = gsap.timeline();

  tl.from(".intro-desc", .5, {
          opacity: 0,
          y: -50
      })
      .from(".intro-desc .titulo-1", .5, {
          y: -20,
          opacity: 0
      })
      .from(".intro-desc p", 1, {
          y: 20,
          opacity: 0
      })
      .from(".intro-img", 1, {
          x: -200,
          opacity: 0
      }, "-=1");
