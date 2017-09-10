document.addEventListener("DOMContentLoaded", function() {
    registerModalWindow(".modal-feedback", ".company-info__contacts-btn");
    registerModalWindow(".modal-map", ".company-info__contacts-map a");

    function registerModalWindow(windowSelector, openButtonSelector) {
        if (!windowSelector) {
            console.log("No modal window selector found!");
            return;
        }
        if (!openButtonSelector) {
            console.log("No modal window open button selector found!");
            return;
        }
        /*
         Modal Window
         */
        var modalWindow = document.querySelector(windowSelector);
        var buttonModalWindowClose = modalWindow.querySelector(".modal-window__close");
        var buttonModalWindowOpen = document.querySelector(openButtonSelector);

        if (buttonModalWindowOpen) {
            buttonModalWindowOpen.addEventListener("click", function(e) {
                e.preventDefault();
                modalWindow.classList.add("modal-window_show");

                var firstInput = modalWindow.querySelector("input");
                if (firstInput) {
                    firstInput.focus();
                }
            });
        }
        if (buttonModalWindowClose) {
            buttonModalWindowClose.addEventListener("click", function(e) {
                e.preventDefault();
                modalWindow.classList.remove("modal-window_show");
            });
        }
    }

    /*
     Yandex Maps Widget
     */
    if (!ymaps) {
        console.log("Cannot initialize Yandex.Map!");
        return;
    }
    ymaps.ready(function() {
        var myMap = new ymaps.Map("yandex-map", {
            center: [59.940128, 30.328494],
            controls: ["zoomControl"],
            zoom: 16
        });
        myMap.geoObjects.add(new ymaps.Placemark([59.93855426, 30.32247950], {
            balloonContentHeader: "<strong>Device</strong>",
            balloonContentBody: "191186, г. Москва,<br>ул. Строителей, 15",
            balloonContentFooter: "тел. +7 (812) 275-75-75"
        }, {
            iconLayout: "default#image",
            iconImageSize: [218, 142],
            iconImageHref: "http://s018.radikal.ru/i509/1708/88/c87ed633f6c5.png",
            iconImageOffset: [-15, -155]
        }));
        myMap.behaviors.disable("scrollZoom");
    });
});