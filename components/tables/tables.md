# Tables
See example of a league table at my [Codepen](https://codepen.io/jorishr/pen/vYYvvvY).
```HTML
<h4>Tabellen</h4>
<table style="border: 1">
	<caption>This is a table, a caption is the very first element of a table</caption>
	<thead>
		<!-- Header with multiple rows/columns -->
		<tr>
			<th rowspan="2">Image</th>
			<th colspan="2">About</th>
			<th rowspan="2">Evolves Into</th>
		</tr>
		<tr>
			<th>Name</th>
			<th>Type</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td><img src="http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png" width="50" alt="Bulbasaur" title="Bulbasaur"></td>
			<td>Bulbasaur</td>
			<td>Grass/Poison</td>
			<td><a href="http://pokemon.wikia.com/wiki/Ivysaur">Ivysaur</a></td>
		</tr>
		<tr>
			<td><img src=""></td>
			<td>Name</td>
			<td>Blabla</td>
			<td><a href="http://pokemon.wikia.com/wiki/Ivysaur">Blablah</a></td>
		</tr>
		<tr></tr>
		<tr></tr>
	</tbody>
	<tfoot>
		<tr>
			<td>This is the table footer</td>
			<td>With some summary data, for example</td>
		</tr>
	</tfoot>
</table>
```