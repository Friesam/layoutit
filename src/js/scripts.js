// Empty JS for you<p id="demo">JavaScript can change HTML content.</p>
//window.alert("Welcome to Robert Williamson's Photography");


    function openNewsletterPopup() {
      setTimeout( function() {
        $('#newsletter').fancybox({wrapCSS: 'newsletter_popup', padding: [40, 40, 40, 40], scrolling: false, maxWidth: 500, minWidth: 250});
        $('#newsletter').trigger('click');
      },
      8*1000);
    }

    $(function() {
      var popup = $.cookie('popup');
      var cookie_enabled = true;

      if (cookie_enabled && popup == 'open') {
          return false;
      } else if (false || $(window).width() > 768 || $(window).width() == 0) {
        openNewsletterPopup();
      }
      if (cookie_enabled) {
        $.cookie('popup', 'open', { expires: 14 });
      }
    });

