(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./nav');

},{"./nav":2}],2:[function(require,module,exports){
"use strict";

var overlay = document.querySelector("#black-overlay"),
    primary_menu_items = document.querySelectorAll("header#site-header nav ul#menu-bar > li");

function lock_scroll() {
    var lock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    document.querySelectorAll("html, body").forEach(function (el) {
        Object.assign(el.style, {
            'overflow-y': lock ? "hidden" : "auto"
        });
    });
}

function show_burger_menu() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var class_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "opened";

    if (show === true) {
        document.querySelector("header#site-header").classList.add(class_name);
        black_overlay();
    } else {
        document.querySelector("header#site-header").classList.remove(class_name);
        black_overlay(false);
    }
}

function black_overlay() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var class_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "visible";

    if (show === true) {
        overlay.classList.add(class_name);
        lock_scroll();
    } else {
        overlay.classList.remove(class_name);
        lock_scroll(false);
    }
}

function reset_opened_nav() {
    primary_menu_items.forEach(function (el) {
        return el.classList.remove("opened");
    });
}

overlay.addEventListener("click", function () {
    reset_opened_nav();
    show_burger_menu(false);
});

function site_navigation() {

    document.addEventListener('click', function (event) {
        var el = event.target;

        if (el.matches('.primary-link') && el.parentElement.querySelector("ul.submenu") === null) {
            reset_opened_nav();
            show_burger_menu(false);
            return false;
        }

        if (el.matches('.primary-link') && el.parentElement.classList.contains("opened")) {
            el.parentElement.classList.remove("opened");
            return false;
        }

        // If the clicked element doesn't have the right selector, bail
        if (!el.matches('.primary-link') && !el.matches('.secondary-link') && !el.matches(".burger-menu")) {
            return false;
        } else {
            // Don't follow the link
            event.preventDefault();
            reset_opened_nav();

            // Check if PRIMARY or SECONDARY and act accordingly
            // PRIMARY: Show overlay and secondary elements
            // SECONDARY: Hides Menu and overlay
            if (el.matches('.primary-link')) {
                var primary_nav_element = el.parentElement;
                if (primary_nav_element.querySelector("ul.submenu") !== null) {
                    primary_nav_element.classList.add("opened");
                    black_overlay();
                }
            }
            if (el.matches('.secondary-link')) {
                var _primary_nav_element = el.parentElement.parentElement.parentElement;
                _primary_nav_element.classList.remove("opened");
                show_burger_menu(false);
                black_overlay(false);
            }

            //CHECK IF IT's BURGER MENU
            if (el.matches(".burger-menu")) {
                var header_wrapper = el.parentElement;
                if (header_wrapper.classList.contains("opened") === true) {
                    show_burger_menu(false);
                } else {
                    show_burger_menu();
                }
            }
        }
    }, false);
}

module.exports = site_navigation();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLE9BQVI7Ozs7O0FDQUEsSUFBTSxVQUFVLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7QUFBQSxJQUNNLHFCQUFxQixTQUFTLGdCQUFULENBQTBCLHlDQUExQixDQUQzQjs7QUFHQSxTQUFTLFdBQVQsR0FBaUM7QUFBQSxRQUFaLElBQVksdUVBQUwsSUFBSzs7QUFDN0IsYUFBUyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxPQUF4QyxDQUFpRCxjQUFNO0FBQ25ELGVBQU8sTUFBUCxDQUFjLEdBQUcsS0FBakIsRUFBd0I7QUFDcEIsMEJBQWMsT0FBTyxRQUFQLEdBQWtCO0FBRFosU0FBeEI7QUFHSCxLQUpEO0FBS0g7O0FBRUQsU0FBUyxnQkFBVCxHQUE2RDtBQUFBLFFBQW5DLElBQW1DLHVFQUE1QixJQUE0QjtBQUFBLFFBQXRCLFVBQXNCLHVFQUFULFFBQVM7O0FBQ3pELFFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2YsaUJBQVMsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkMsU0FBN0MsQ0FBdUQsR0FBdkQsQ0FBMkQsVUFBM0Q7QUFDQTtBQUNILEtBSEQsTUFHSztBQUNELGlCQUFTLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDLFNBQTdDLENBQXVELE1BQXZELENBQThELFVBQTlEO0FBQ0Esc0JBQWMsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsU0FBUyxhQUFULEdBQTJEO0FBQUEsUUFBcEMsSUFBb0MsdUVBQTdCLElBQTZCO0FBQUEsUUFBdkIsVUFBdUIsdUVBQVYsU0FBVTs7QUFDdkQsUUFBSSxTQUFTLElBQWIsRUFBa0I7QUFDZCxnQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFVBQXRCO0FBQ0E7QUFDSCxLQUhELE1BR0s7QUFDRCxnQkFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCO0FBQ0Esb0JBQVksS0FBWjtBQUNIO0FBQ0o7O0FBRUQsU0FBUyxnQkFBVCxHQUE0QjtBQUN4Qix1QkFBbUIsT0FBbkIsQ0FBNEI7QUFBQSxlQUFNLEdBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBb0IsUUFBcEIsQ0FBTjtBQUFBLEtBQTVCO0FBQ0g7O0FBRUQsUUFBUSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3BDO0FBQ0EscUJBQWlCLEtBQWpCO0FBQ0gsQ0FIRDs7QUFLQSxTQUFTLGVBQVQsR0FBMEI7O0FBRXRCLGFBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ2hELFlBQUksS0FBSyxNQUFNLE1BQWY7O0FBRUEsWUFBSSxHQUFHLE9BQUgsQ0FBVyxlQUFYLEtBQStCLEdBQUcsYUFBSCxDQUFpQixhQUFqQixDQUErQixZQUEvQixNQUFpRCxJQUFwRixFQUEwRjtBQUN0RjtBQUNBLDZCQUFpQixLQUFqQjtBQUNBLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJLEdBQUcsT0FBSCxDQUFXLGVBQVgsS0FBK0IsR0FBRyxhQUFILENBQWlCLFNBQWpCLENBQTJCLFFBQTNCLENBQW9DLFFBQXBDLENBQW5DLEVBQWtGO0FBQzlFLGVBQUcsYUFBSCxDQUFpQixTQUFqQixDQUEyQixNQUEzQixDQUFrQyxRQUFsQztBQUNBLG1CQUFPLEtBQVA7QUFDSDs7QUFFRDtBQUNBLFlBQUksQ0FBQyxHQUFHLE9BQUgsQ0FBVyxlQUFYLENBQUQsSUFBZ0MsQ0FBQyxHQUFHLE9BQUgsQ0FBVyxpQkFBWCxDQUFqQyxJQUFrRSxDQUFDLEdBQUcsT0FBSCxDQUFXLGNBQVgsQ0FBdkUsRUFBbUc7QUFDL0YsbUJBQU8sS0FBUDtBQUNILFNBRkQsTUFFTTtBQUNGO0FBQ0Esa0JBQU0sY0FBTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFJLEdBQUcsT0FBSCxDQUFXLGVBQVgsQ0FBSixFQUFpQztBQUM3QixvQkFBSSxzQkFBc0IsR0FBRyxhQUE3QjtBQUNBLG9CQUFLLG9CQUFvQixhQUFwQixDQUFrQyxZQUFsQyxNQUFvRCxJQUF6RCxFQUE4RDtBQUMxRCx3Q0FBb0IsU0FBcEIsQ0FBOEIsR0FBOUIsQ0FBa0MsUUFBbEM7QUFDQTtBQUNIO0FBRUo7QUFDRCxnQkFBSSxHQUFHLE9BQUgsQ0FBVyxpQkFBWCxDQUFKLEVBQW1DO0FBQy9CLG9CQUFJLHVCQUFzQixHQUFHLGFBQUgsQ0FBaUIsYUFBakIsQ0FBK0IsYUFBekQ7QUFDQSxxQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsQ0FBcUMsUUFBckM7QUFDQSxpQ0FBaUIsS0FBakI7QUFDQSw4QkFBYyxLQUFkO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSSxHQUFHLE9BQUgsQ0FBVyxjQUFYLENBQUosRUFBaUM7QUFDN0Isb0JBQUksaUJBQWlCLEdBQUcsYUFBeEI7QUFDQSxvQkFBSyxlQUFlLFNBQWYsQ0FBeUIsUUFBekIsQ0FBa0MsUUFBbEMsTUFBZ0QsSUFBckQsRUFBMkQ7QUFDdkQscUNBQWlCLEtBQWpCO0FBQ0gsaUJBRkQsTUFFSztBQUNEO0FBQ0g7QUFDSjtBQUVKO0FBRUosS0FwREQsRUFvREcsS0FwREg7QUF1REg7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLGlCQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInJlcXVpcmUoJy4vbmF2Jyk7IiwiY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stb3ZlcmxheVwiKSxcbiAgICAgIHByaW1hcnlfbWVudV9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoZWFkZXIjc2l0ZS1oZWFkZXIgbmF2IHVsI21lbnUtYmFyID4gbGlcIik7XG5cbmZ1bmN0aW9uIGxvY2tfc2Nyb2xsKGxvY2sgPSB0cnVlKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaHRtbCwgYm9keVwiKS5mb3JFYWNoKCBlbCA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIHtcbiAgICAgICAgICAgICdvdmVyZmxvdy15JzogbG9jayA/IFwiaGlkZGVuXCIgOiBcImF1dG9cIixcbiAgICAgICAgfSk7XG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBzaG93X2J1cmdlcl9tZW51KHNob3cgPSB0cnVlLCBjbGFzc19uYW1lID0gXCJvcGVuZWRcIil7XG4gICAgaWYgKHNob3cgPT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciNzaXRlLWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpO1xuICAgICAgICBibGFja19vdmVybGF5KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIjc2l0ZS1oZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShjbGFzc19uYW1lKTtcbiAgICAgICAgYmxhY2tfb3ZlcmxheShmYWxzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBibGFja19vdmVybGF5KHNob3cgPSB0cnVlLCBjbGFzc19uYW1lID0gXCJ2aXNpYmxlXCIpe1xuICAgIGlmIChzaG93ID09PSB0cnVlKXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpXG4gICAgICAgIGxvY2tfc2Nyb2xsKClcbiAgICB9ZWxzZXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzX25hbWUpXG4gICAgICAgIGxvY2tfc2Nyb2xsKGZhbHNlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRfb3BlbmVkX25hdiAoKXtcbiAgICBwcmltYXJ5X21lbnVfaXRlbXMuZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKSk7XG59XG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldF9vcGVuZWRfbmF2KCk7XG4gICAgc2hvd19idXJnZXJfbWVudShmYWxzZSk7XG59ICk7XG5cbmZ1bmN0aW9uIHNpdGVfbmF2aWdhdGlvbigpe1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmKCBlbC5tYXRjaGVzKCcucHJpbWFyeS1saW5rJykgJiYgZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWwuc3VibWVudVwiKSA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmVzZXRfb3BlbmVkX25hdigpO1xuICAgICAgICAgICAgc2hvd19idXJnZXJfbWVudShmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggZWwubWF0Y2hlcygnLnByaW1hcnktbGluaycpICYmIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpICl7XG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgY2xpY2tlZCBlbGVtZW50IGRvZXNuJ3QgaGF2ZSB0aGUgcmlnaHQgc2VsZWN0b3IsIGJhaWxcbiAgICAgICAgaWYgKCFlbC5tYXRjaGVzKCcucHJpbWFyeS1saW5rJykgJiYgIWVsLm1hdGNoZXMoJy5zZWNvbmRhcnktbGluaycpICYmICFlbC5tYXRjaGVzKFwiLmJ1cmdlci1tZW51XCIpICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIC8vIERvbid0IGZvbGxvdyB0aGUgbGlua1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlc2V0X29wZW5lZF9uYXYoKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUFJJTUFSWSBvciBTRUNPTkRBUlkgYW5kIGFjdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgLy8gUFJJTUFSWTogU2hvdyBvdmVybGF5IGFuZCBzZWNvbmRhcnkgZWxlbWVudHNcbiAgICAgICAgICAgIC8vIFNFQ09OREFSWTogSGlkZXMgTWVudSBhbmQgb3ZlcmxheVxuICAgICAgICAgICAgaWYoIGVsLm1hdGNoZXMoJy5wcmltYXJ5LWxpbmsnKSApe1xuICAgICAgICAgICAgICAgIGxldCBwcmltYXJ5X25hdl9lbGVtZW50ID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIHByaW1hcnlfbmF2X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsLnN1Ym1lbnVcIikgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5X25hdl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJsYWNrX292ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBlbC5tYXRjaGVzKCcuc2Vjb25kYXJ5LWxpbmsnKSApe1xuICAgICAgICAgICAgICAgIGxldCBwcmltYXJ5X25hdl9lbGVtZW50ID0gZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcHJpbWFyeV9uYXZfZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgICAgIHNob3dfYnVyZ2VyX21lbnUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJsYWNrX292ZXJsYXkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NIRUNLIElGIElUJ3MgQlVSR0VSIE1FTlVcbiAgICAgICAgICAgIGlmKCBlbC5tYXRjaGVzKFwiLmJ1cmdlci1tZW51XCIpICApe1xuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJfd3JhcHBlciA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCBoZWFkZXJfd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd19idXJnZXJfbWVudShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNob3dfYnVyZ2VyX21lbnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSwgZmFsc2UpO1xuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaXRlX25hdmlnYXRpb24oKTsiXX0=
