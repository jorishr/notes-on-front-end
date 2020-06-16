# Multiline text underline
This is not possible with a pseudo element. What you can do is use a background-image: linear-gradient(transparent 50%, <color> 10%) and background-repeat: no-repeat; background-size: 100% 100%;

Especially the background-size is what fills the gradient out along the multiple lines. You can animate it to go from 0 to 100, for example.