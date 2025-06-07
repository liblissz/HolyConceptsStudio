       //NAVIGATION
       function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      
      
      
      //TAB TRANSITION
      function openTab(evt, tabname) {
        var i, x, tablinks;
        x = document.getElementsByClassName("tab_desc");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activetab", "");
        }
        document.getElementById(tabname).style.display = "block";
        evt.currentTarget.className += " activetab";
      }
      
      
      
      //CARD HOVERING EFFECT
      /* Demo purposes only */
      $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
      
      
      
      //LOGO SLIDER
      $(function() {
        var $clientslider = $('#clientlogo');
        var clients = $clientslider.children().length;
        var clientwidth = (clients * 220); 
        $clientslider.css('width', clientwidth);
        var rotating = true;
        var clientspeed = 1800;
        var seeclients = setInterval(rotateClients, clientspeed);
        $(document).on({
          mouseenter: function() {
            rotating = false;
          },
          mouseleave: function() {
            rotating = true;
          }
        }, '#ourclients');
        function rotateClients() {
          if (rotating != false) {
            var $first = $('#clientlogo li:first');
            $first.animate({
              'margin-left': '-220px'
            }, 2000, function() {
              $first.remove().css({
                'margin-left': '0px'
              });
              $('#clientlogo li:last').after($first);
            });
          }
        }
      });
      
      
      
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-55px";
        }
      }
      
      
      
      
      
      
      //CUSTOM SELECT MENU
      var x, i, j, l, ll, selElmnt, a, b, c;
      x = document.getElementsByClassName("custom-select");
      l = x.length;
      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              var y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
          });
      }
      function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      document.addEventListener("click", closeAllSelect);