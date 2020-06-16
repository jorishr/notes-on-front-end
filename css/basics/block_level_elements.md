# Block level elements
## Height
The height of a block element defaults to the height of the block's CONTENT. 

Consider the example below: The #inner div will grow to be tall enough to contain the paragraph and the 
#outer div will grow to be tall enough to contain #inner.
```HTML  
    <div id="outer">
      <div id="inner">
        <p>Where is pancakes house?</p>
      </div>
  </div>
```
The height of a block element thus depends on its content unless you specify a specific height. So there is feedback between the parent and child   where height is concerned. 

Adding height as a percentage of, for example 50%, doesn't necesarily yield a well defined value. To be meaningful the parant of the block level elements needs to have a fixed height set to it. 

## Width 
In the case of width, all block elements are, unless specified otherwise, as  wide as their parent all the way back up to the `<html>` elemnt which 100% of the available screen space. 

Thus the width of a block element is independent of its content. Adding width: 50% yields a well defined number of pixels.