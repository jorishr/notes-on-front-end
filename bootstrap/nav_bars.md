# Standard Bootstrap navbar
De header met brand element. Vervolgens andere divs die de balk volmaken. Noot: Steek alle elementen binnen in de navigatiebalk in een div container voor automatische en eenvoudige padding en uitlijning.

De volgende button code is gekopieerd uit BS default en zorgt voor een hamburgermenu wanneer
het scherm te klein wordt.
```HTML
<nav class="navbar navbar-default">
	<div class="container">
		<div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#hamburgermenu" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand">Goudster</a>
    </div>
<!-- 
  De klasse collapse navbar-collapse verbergt de elementen als het scherm te klein wordt. Het volgende element creërt een nav menutje met een lijst -Je kan een div gebruiken maar aangezien we te maken hebben met li is het beter om die te steken in een ul 
-->
   	<div class="collapse navbar-collapse" id="hamburgermenu">

<!-- De id van de collapse klasse is gelinked aan de data target van het hamburgerbutton element hierboven. Beiden moeten overeenkomen EN de id wordt in de data-target geschreven met een # -->	
	
			<ul class="nav navbar-nav">
				<li><a href="http://www.goudster.be">Goudster</a></li>
				<li><a href="http://www.goudster.be/Geschiedenis">Geschiedenis</a></li>
			</ul>

		<!-- 	nieuwe groep inhoud aan de rechterzijde van de navbar -->

			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Sign Up</a></li>
				<li><a href="#">Login</a></li>
			</ul>
		</div>
	</div>
</nav>
```