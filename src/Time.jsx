// importera
// komponent-funktion
// exportera

function Time() {
	let now = new Date()
	let hour = now.getHours()
	let min = now.getMinutes()
	let sec = now.getSeconds()

	return (
		<p> Klockan är {hour}:{min}:{sec}. </p>
	)
}

export default Time
