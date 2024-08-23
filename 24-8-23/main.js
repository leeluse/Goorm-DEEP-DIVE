document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.btn-1').addEventListener('click', function() {
        document.querySelector('.container').style.transform = 'translate(0vw)';
    });

    document.querySelector('.btn-2').addEventListener('click', function() {
        document.querySelector('.container').style.transform = 'translate(-100vw)';
    });

    document.querySelector('.btn-3').addEventListener('click', function() {
        document.querySelector('.container').style.transform = 'translate(-200vw)';
    });

    document.querySelector('.tal').addEventListener('click', function() {
        document.querySelector('.menu').style.visibility = 'visible';
    });

    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.menu').style.visibility = 'hidden';
    });
});

