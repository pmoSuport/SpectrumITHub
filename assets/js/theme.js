


if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}






$(document).ready(function(){

    $("footer").append('<div class=container><div class=row><div class=col-sm-3><a href=./index.html class=footer-logo><img src=./assets/img/logo.png></a><p class=footer-content>People , Partnership and Passion are the heart of our success and drive everything we do .</div><div class=col-sm-3><h5>Menu</h5><ul><li><a href=./about-us.html>About us</a><li><a href=./services.html>Services</a><li><a href=./register.html>Register</a><li><a href=./newsletter.html>Newsletter</a><li><a href=./contact-us.html>contact Us</a></ul></div><div class=col-sm-3><h5>Support</h5><ul><li><a href=#>FAQ</a><li><a href=#>Help desk</a><li><a href=#>Forums</a></ul></div><div class="col-sm-3 contactus"><h5>Contact Us</h5><ul><div><i aria-hidden=true class="fa fa-map-marker"></i><div class=footer-contact-info>3 Newbridge Square, Swindon, England,SN11HN.</div></div><div><i aria-hidden=true class="fa fa-phone"></i><div class=footer-contact-info><a href=tel:+13239134688 class=formingHrefTel>+1 323-913-4688</a>, <a href=tel:+13238884554 class=formingHrefTel>+1 323-888-4554</a></div></div><div><i aria-hidden=true class="fa fa-envelope"></i><div class=footer-contact-info><a href=mailto:callback@spectrumithubindia.com>callback@spectrumithubindia.com</a></div></div></ul><div class=social-icons><ul><li><a href=#><i aria-hidden=true class="fa fa-facebook"></i></a><li><a href=#><i aria-hidden=true class="fa fa-twitter"></i></a><li><a href=#><i aria-hidden=true class="fa fa-linkedin"></i></a><li><a href=#><i aria-hidden=true class="fa fa-instagram"></i></a></ul></div></div></div></div><div class=footer-copyright><p>© 2022 Copyright Text</div>');

    $('input[type="radio"]').click(function(){
    	var demovalue = $(this).val(); 
        $(".hideThis").hide();
        $("#show"+demovalue).show();
        
    });
  });



  

  var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {

 
            showTab(currentTab);
            
});

            function showTab(n) {
              var x = document.getElementsByClassName("tab");
              x[n].style.display = "block";
              
              if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
              } else {
                document.getElementById("prevBtn").style.display = "inline";
              }
              if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = "Submit";
              } else {
                document.getElementById("nextBtn").innerHTML = "Next";
              }
              fixStepIndicator(n)
            }
            function ShowMessage(){
                document.getElementById("text-message1").style.display = "block"; 
                $('.hiddingThis').hide();
            }
            function nextPrev(n) {
              var x = document.getElementsByClassName("tab");
              if (n == 1 && !validateForm()) return false;
              x[currentTab].style.display = "none";
              currentTab = currentTab + n;
              if (currentTab >= x.length) {
                // document.getElementById("regForm").submit();
                // return false;
                //alert("sdf");
                 document.getElementById("nextprevious").style.display = "none";
                document.getElementById("all-steps").style.display = "none";
                document.getElementById("register").style.display = "none";
                 document.getElementById("text-message").style.display = "block";



                
              }
              showTab(currentTab);
            }

            function validateForm() {
              var x, y, i, valid = true;
              x = document.getElementsByClassName("tab");
              y = x[currentTab].getElementsByTagName("input");
              for (i = 0; i < y.length; i++) {
                if (y[i].value == "") {
                  y[i].className += " invalid";
                  valid = false;
                }
              }
              if (valid) {
                document.getElementsByClassName("step")[currentTab].className += " finish";
              }
              return valid;
            }
            function fixStepIndicator(n) {
              var i, x = document.getElementsByClassName("step");
              for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
                
              }
              x[n].className += " active";
             
            }
 
          