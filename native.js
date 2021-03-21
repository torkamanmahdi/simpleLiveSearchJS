const dataBase = [
	{
		team: 'Juventus'
	},
	{
		team: 'Lazio'
	},
	{
		team: 'Roam'
	},
	{
		team: 'InterMilan'
	}
]
const filters = {
	searchItem: ''
}
const renderTeams = function( teams, filters ) {
	const filterTeams = dataBase.filter( function(item) {
		return item.team.toLowerCase().includes(filters.searchItem.toLowerCase())
	} )
	document.querySelector('#teams').innerHTML = ''
	filterTeams.forEach( function(item) {
		const teamEl = document.createElement('p')
		teamEl.textContent = item.team
		document.querySelector('#teams').appendChild(teamEl)
	} )
}
renderTeams(teams,filters)
document.querySelector('#search-teams').addEventListener('input', function(e) {
	filters.searchItem = e.target.value
	renderTeams(teams,filters)
})