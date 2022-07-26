window.onload = function () {

    lax.init();

    lax.addDriver('scrollY', function () {
      return window.scrollY
    });

    lax.addElements('.scroll-text3', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [-100, 'screenWidth/2', 'screenWidth'],
            ]
        }
    })

    lax.addElements('.box2', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [-100, 'screenWidth/2', 'screenWidth'],
            ]
        }
    })

    lax.addElements('.scroll-text', {
        scrollY: {
            translateY: [[-400, 0, 100], [300, 0, 200]],
            opacity: [[0, "screenHeight/2", "screenHeight-500"], [1, 1, 0.1]]
        }
    });


    lax.addElements('.scroll-div', {
        scrollY: {
            translateY: [[-400, 0, 100], [300, 0, 100]],
            scale: [[300, "screenHeight"], [0.25, 10]],
            opacity: [[0, "screenHeight/2", "screenHeight+400"], [1, 1, 0]],
        }
    });

}



AOS.init();