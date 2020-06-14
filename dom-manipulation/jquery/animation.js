/*
    ################
	JQUERY ANIMATION
    ################

    There are numerous methods and posibilties. See api docs.
    The most important once: fadeIn()/fadeOut() reduce or add opacity and be
    added to selected elements with a time in ms, default is 400ms. The cb 
    function is optional an can be used to chain animations.

    Elements that get a fadeOut() method will not disappear from the dom, they
    only get display:none; upon animation completion. To use .fadeIn() set the 
    display:none in css as default.   

    Most of it can now be done with CSS, though.

    In the example below the clicked div will fade out over 1 full second. Once
    animation is completed we explicitely remove them from the DOM.

    Other animations: slideUp()/slideDown() reduces the height to 0 or from 0 to
    height.
*/  
    $('div').on('click', function(){
        $(this).fadeOut(1000, function(){
            console.log('animation completed');
            $(this).remove();
        });
    });

    $('child').on('click', function(){
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();   // removes the PARENT element!
            console.log('animation completed');
        });
    });