const overlay = document.querySelector("#black-overlay"),
      primary_menu_items = document.querySelectorAll("header#site-header nav ul#menu-bar > li");

function lock_scroll(lock = true){
    document.querySelectorAll("html, body").forEach( el => {
        Object.assign(el.style, {
            'overflow-y': lock ? "hidden" : "auto",
        });
    } );
}

function show_burger_menu(show = true, class_name = "opened"){
    if (show === true) {
        document.querySelector("header#site-header").classList.add(class_name);
        black_overlay();
    }else{
        document.querySelector("header#site-header").classList.remove(class_name);
        black_overlay(false);
    }
}

function black_overlay(show = true, class_name = "visible"){
    if (show === true){
        overlay.classList.add(class_name)
        lock_scroll()
    }else{
        overlay.classList.remove(class_name)
        lock_scroll(false)
    }
}

function reset_opened_nav (){
    primary_menu_items.forEach( el => el.classList.remove("opened"));
}

overlay.addEventListener("click", () => {
    reset_opened_nav();
    show_burger_menu(false);
} );

function site_navigation(){

    document.addEventListener('click', function (event) {
        let el = event.target;

        if( el.matches('.primary-link') && el.parentElement.querySelector("ul.submenu") === null ){
            reset_opened_nav();
            show_burger_menu(false);
            return false;
        }

        if( el.matches('.primary-link') && el.parentElement.classList.contains("opened") ){
            el.parentElement.classList.remove("opened");
            return false;
        }

        // If the clicked element doesn't have the right selector, bail
        if (!el.matches('.primary-link') && !el.matches('.secondary-link') && !el.matches(".burger-menu") ){
            return false;
        } else{
            // Don't follow the link
            event.preventDefault();
            reset_opened_nav();

            // Check if PRIMARY or SECONDARY and act accordingly
            // PRIMARY: Show overlay and secondary elements
            // SECONDARY: Hides Menu and overlay
            if( el.matches('.primary-link') ){
                let primary_nav_element = el.parentElement;
                if ( primary_nav_element.querySelector("ul.submenu") !== null){
                    primary_nav_element.classList.add("opened");
                    black_overlay();
                }

            }
            if( el.matches('.secondary-link') ){
                let primary_nav_element = el.parentElement.parentElement.parentElement;
                primary_nav_element.classList.remove("opened");
                show_burger_menu(false);
                black_overlay(false);
            }

            //CHECK IF IT's BURGER MENU
            if( el.matches(".burger-menu")  ){
                let header_wrapper = el.parentElement;
                if ( header_wrapper.classList.contains("opened") === true) {
                    show_burger_menu(false);
                }else{
                    show_burger_menu();
                }
            }

        }

    }, false);


}

module.exports = site_navigation();