import './App.css'
import Time from './Time.jsx'
import Calculate from './Calculate.jsx'
import FancyButton from './FancyButton.jsx'

function App() {
	return (
		<main>
			<h1> Hello world </h1>
			<p class="exciting"> Min första riktiga React-app. </p>
			<p> Det kommer snabbt bli mer intressant. </p>

			<FancyButton text={'ett'} />
			<FancyButton text={'två'} />
			<Calculate />
			<Time />
		</main>
	)
}

export default App
