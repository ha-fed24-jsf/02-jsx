import './App.css'

const x = 2
const y = 10

function App() {
	let now = new Date()
	let hour = now.getHours()
	let min = now.getMinutes()
	let sec = now.getSeconds()
	return (
		<main>
			<h1> Hello world </h1>
			<p className="exciting"> Min första riktiga React-app. </p>
			<p> Det kommer snabbt bli mer intressant. </p>
			<p> x + y = {x + y} </p>
			<p> Klockan är {hour}:{min}:{sec}. </p>
		</main>
	)
}

export default App
