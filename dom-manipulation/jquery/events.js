/* 
	#############
	JQUERY EVENTS
	#####################################
        I.      CLICK AND THIS
        II.      KEYPRESS AND EVENT OBJECT
        III.     ON
        IV.    EVENT BUBBLE
	#####################################

    #########
	I.  CLICK
    #########

    There are numerous EVENTS but the most of the time you can work with the 
    .on() method, the .click() method or .keypress(). All take in a callback
    function that gets executed when the event happens.

    Note that in the example below we add a click event to all anchor tags at
    once. If you want to work with a single element, think about using an ID
    or use :pseudo selectors or .last().

    THIS
    To have the event handler or cb execute ONLY on the element that is clicked
    upon, we would use the keyword this in vanilla js.

    In jquery this is wrapped in a different syntax, the jquery object. $(this)
*/
    $('a').click(function(){
        console.log('hello');
    });

    $('.btns').click(function(){
        $(this).css('color', 'green');
    });

    $('btns').click(function(){
        let text = $(this).text();
        console.log(`You clicked on ${text}!`);
    })
/*
    ##############
	II. KEYPRESS()
    ##############
    
    The keypress() method listens for any type of keypress. To specify, for 
    example, the ENTER or SPACE you need to lookup the js char code and add
    an if statement. 

    EVENT OBJECT

    The event object contains all the info about the event that happened. It is
    always part of the CALLBACK function of the keypress(), 
    click() or on() methods but you can CAPTURE it into a variable, event.

    Important is the .which property of the EVENT OBJECT.
*/
    $('input[text]').keypress(function(event){
        console.log(event);
        if(event.which === 13){
            console.log('You pressed ENTER');
        } 
    })
/*
    ############
	III.    ON()
    ############

    This is the equivalent of .addEventListener() in plain js whereby you can 
    specify the TYPE of EVENT and the callback function.

    FUTURE ELEMENTS
    .click() vs .on('click', cb(){}); The difference is that .click add event 
    handlers to elements already rendered on the page ONLY. .on can also add
    those events to future elements that are user generated or injected into
    to page without refresh (AJAX).

    To add click event to future elements you need to SELECT the 
    PARENT ELEMENT and add an extra ARGUMENT to the CB function.

*/
    $('#submit').on('click', function(){});
    $('.btn').on('dblclick', function(){});
    $('.section').on('scroll', function(){
        $(this).removeClass('preScrollStyles').addClass('postScrollStyles')});
    $('input[text]').on('keypress', function(){});

    //  FUTURE ELEMENTS
    $('parent').on('click', 'child', function(){
        $(this).addClass('dummy');  //  -> adds class to CHILD element
        $(this).parent().addClass('dummy');  //  -> adds class to PARENT
    });
/*
    ###################
	IV.    EVENT BUBBLE
    ###################

    Adding click events to elements that are nested into other elements with
    click events added to them will result in a click event bubble. First, the
    click on the nested element will run its handling code, second the parent
    element click code, and sofort...

    To stop this from happening use the STOP PROPAGATION method on the EVENT 
    OBJECT. Pass in the event object as parameter.

        $('elem').on('click', function(event) {
            event.stopPropagation();
            //...handler code...//
        })
*/