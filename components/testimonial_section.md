# Testimonial sections
The testimonials form an UNORDERED LIST. Wrap each testimonial in a FIGURE element.
- On mobile: image on top, a blockquote below and a figcaption for the name.
- On bigger screens: image left, blockquote right, figcaption below blockquote. 

To add a SYMBOL or icon to the figcaption you can use a ::pseudo-element.
```HTML
<figure>
	<img src="images/user-1.png" alt="picture">
	<blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus fugiat inventore, cupiditate atque expedita unde quidem enim omnis dolore recusandae ea, repellat maiores doloremque amet labore	explicabo tempora libero.
	</blockquote>
	<figcaption>Jane Doe</figcaption>
</figure>
```