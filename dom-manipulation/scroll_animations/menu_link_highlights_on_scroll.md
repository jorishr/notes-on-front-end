# Navigation link highlights on scroll
Table of contents
- [Navigation link highlights on scroll](#navigation-link-highlights-on-scroll)
	- [Description](#description)
	- [jQuery](#jquery)
	- [Reference](#reference)
## Description
When scrolling down the page, the header nav menu is fixed to the top. When scroll arrives at a new section, the corresponding menu link in the header nav bar lights up as it becomes `:active`.

You need to keep track of the scroll location and the location from the top of each section.
 
## jQuery
Each page section has and ID ATTRIBUTE and that id is referenced in the HREF attribute of the corresponding NAV LINK.

Define a class `.active` that changes the styling of the anchor tag and/or its parent the `<li>`. Alternatively you could use the bootstrap class active.

Select the array of menu links that have the `.scroll` class. The animation becomes active only when scrolling. Loop over the menu links and calculate the offset from the top for the corresponding page section. We know we are at a section if the `scrollLocation` has a bigger value than the `sectionOffset`.

The `.active` class is added to the anchor tag element itself or to its parent the list-item. It's siblings may have gotten that class at a previous click, thus that has to be removed.
```javascript
const scrollLink = $('.scroll');
$('window').scroll(function(){
	let scrollLocation = $(this).scrollTop();
	scrollLink.each(function(){
		let sectionOffset = $(this.hash).offset().top - 20;
		if(scrollLocation => sectionOffset){
			$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		}
	})	
})
```
`this.hash` reads the href attribute of `this`, and gets the part of the URL beginning with `#`. So if the anchor looks like: `<a href="someURL#foobar">` we get #foobar. You could also use `this.getAttribute('href');` because we know the attribute contains only one id `#page-section`.

The extra value -20 is added to make the change a little earlier so that the highlight is visible even if the user has not scrolled precisely beyond or threshold point but does have the section occupy almost all of the viewport.

## Reference
To see a fully working example check out my Travel website project at [travel-site.jorisr.com](https://travel-site.jorisr.com/) or [Github repo](https://github.com/jorishr/travel-site)