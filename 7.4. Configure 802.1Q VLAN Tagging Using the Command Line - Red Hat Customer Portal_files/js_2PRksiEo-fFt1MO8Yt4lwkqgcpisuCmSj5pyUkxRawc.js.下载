/**
 * @file
 * Code syntax highlighting.
 */

chrometwo_require(['jquery', 'prism'], function ($, Prism) {
  $(function () {
    $('pre[class*="language-"]').each(function (i, ele) {
      Prism.highlightElement(ele);
    });
  });
});
;
/**
 * @file
 * Include underscore.
 *
 * @todo: Rename this file.  Why is it underscore.js shouldn't it be like docs_toc.js.
 */

chrometwo_require(['jquery', 'underscore', 'chrome_lib','bootstrap'], function ($, _, lib) {
  // Define menu classes.
  var breadcrumbsLoaded = false,
    $tocMain = $('#toc-main'),
    $tocMenu = $('.toc-menu'),
    $tocShow = $('.toc-show'),
    $tocToggle = $('.toc-toggle'),
    $docWrapper = $('.doc-wrapper'),
      $docOptions = $('.doc-options'),
      $olMenu = $('ol.menu'),
    offsetBuffer = 15;



  (function ($) {
    // Handles all the scrolling and modifying as the user scrolls.
    $.fn.rhAffix = function (options) {
      var settings = $.extend(true, {
        offset: {
          top: 0,
          bottom: $(document).height()
        }
      }, options);

      $(window).on('scroll', _.throttle(scrollHandler.bind(this), 20));

      function scrollHandler() {
        var top = (typeof settings.offset.top === 'function') ? settings.offset.top() : settings.offset.top,
          bottom = (typeof settings.offset.bottom === 'function') ? settings.offset.bottom() : settings.offset.bottom;

        if (bottom > window.scrollY && window.scrollY > top) {
          this.css({
            'top': ''
          });

          this.addClass('affix')
            .removeClass('affix-top affix-bottom');
        }
        else if (window.scrollY >= bottom) {
          this.css({
            'top': bottom - top
          });

          this.addClass('affix-bottom')
            .removeClass('affix-top affix');
        }
        else {
          this.addClass('affix-top')
            .removeClass('affix affix-bottom');
        }

        // Modify ol links height as one person scrolls.
        $olMenu.first().css('height', parseInt($tocMenu.height() - ($docOptions.height() + $docOptions.css('margin-bottom'))), 10);
      }

      scrollHandler.call(this);

      return this;
    };
  }(jQuery));

  function getTop() {
    return $docWrapper.offset().top - offsetBuffer;
  }

  // Get bottom of the page so TOC knows when to stop.
  function getBottom() {
    return $docWrapper.height() + $docWrapper.offset().top - $tocMenu.height() - parseInt($tocMenu.css('padding-top'), 10) - parseInt($tocMenu.css('padding-bottom'), 10);
  }

  function breadcrumbsReadyHandler() {
    if (breadcrumbsLoaded) {
      return;
    }

    breadcrumbsLoaded = true;

    // Sets the menu height according to the window size.
    if ($tocMenu.outerHeight(true) >= $(window).height() - offsetBuffer * 2) {
      $tocMenu.height($(window).height() - offsetBuffer * 2);
    }

    // On first load set height of the menu list <ol>.
    $olMenu.first().css('height', parseInt($tocMenu.height() - (parseInt($docOptions.css('margin-bottom'), 10) + $docOptions.height())), 10);

    if ($tocMenu.outerHeight(true) < $docWrapper.height()) {
      $tocMenu.rhAffix({
        offset: {
          top: getTop,
          bottom: getBottom
        }
      });

      $tocShow.rhAffix({
        offset: {
          top: getTop,
          bottom: getBottom
        }
      });
    }
  }

  // Logic for the close button.
  $tocMain.on('hidden.bs.collapse', function () {
    $tocToggle.addClass('collapsed');
  });
  $tocMain.on('shown.bs.collapse', function () {
    $tocToggle.removeClass('collapsed');
  });

  // Attaches the logic after this event is triggered.
  lib.whenBreadcrumbsReady(breadcrumbsReadyHandler);

});
;
