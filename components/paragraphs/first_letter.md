# First Letter pseudo-element
Styling the first-letter is a nice visual adjustment that adds credibility. 

The logic: 
- use the pseudo element ::first-letter on the paragraph and use float:left to lift it out of the inline flow and let the rest of the text wrap around it. 
- reduce line-height to avoid interference with other lines.
- add size and weight, adjust color
- use margin-top and margin-right to position more precisely.
```CSS
p::first-letter {
    text-transform: uppercase; 
    color: ;

    float: left;
    font-weight: 700;
    line-height: .5;
    font-size: ; /*double*/
    /*adjust position with margin*/
    margin-top: ;
    margin-right: ;
}
```