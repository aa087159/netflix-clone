import React, { Component } from 'react';
import { ReactComponent as Svg } from '../svg/cross.svg';

export class Collapse extends Component {
	state = {
		title: [
			'Welche Inhalte kann ich auf Netflix ansehen?',
			'Was ist Netflix?',
			'Wie viel kostet Netflix?',
			'Wo kann ich Inhalte ansehen?',
			'Wie kann ich kündigen?',
			'Wie funktioniert der kostenlose Probezeitraum?'
		],
		hidden: [
			'Netflix bietet eine riesige Auswahl an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix Originalen und mehr. Schauen Sie, so viel Sie möchten – so oft und wann immer Sie wollen. Beginnen Sie Ihre 30 Gratistage, um alle Inhalte auf Netflix sehen zu können. Schauen Sie sich eine kleine Auswahl unserer Titel an.',
			'Netflix ist ein Streaming-Dienst, dessen Mitglieder ein vielseitiges Angebot von preisgekrönten Serien, Filmen, Dokumentationen und mehr auf Tausenden mit dem Internet verbundenen Geräten nutzen können. Sie können unbegrenzt und werbefrei jederzeit und überall Inhalte ansehen – für einen geringen monatlichen Pauschalbetrag. Es gibt immer etwas Neues zu entdecken und jede Woche kommen weitere Serien und Filme dazu.',
			'Für einen geringen monatlichen Pauschalbetrag können Sie Netflix auf Ihrem Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät genießen. Abos gehen schon bei 7,99 € pro Monat los. Und es gibt keine zusätzlichen Gebühren oder Verträge.',
			'Sie können unsere Inhalte überall, jederzeit und auf einer unbegrenzten Anzahl von Geräten ansehen. Loggen Sie sich mit Ihrem Netflix-Konto auf der Website unter netflix.com ein, um direkt auf Ihrem Computer Inhalte anzusehen. Sie können sich auch auf einem Gerät mit Internetverbindung einloggen, auf dem die Netflix-App installiert ist, zum Beispiel auf Smart-TVs, Smartphones, Tablets, Streaming-Playern und Spielkonsolen. Darüber hinaus können Sie Ihre Lieblingsserien auch auf Ihr iOS- oder Android-Mobilgerät oder über Ihre Windows-10-App herunterladen. Mit Downloads können Sie Netflix auch ohne Internetverbindung überall genießen. Nehmen Sie Netflix einfach überall hin mit.',
			'Mit Netflix sind Sie flexibel. Bei uns gibt es keine lästige Vertragsbindung oder Verpflichtung. Sie können Ihr Konto ganz leicht mit nur zwei Klicks online kündigen. Es gibt keine Kündigungsgebühren, die Mitgliedschaft kann jederzeit begonnen oder angehalten werden.',
			'Testen Sie uns 30 Tage lang kostenlos. Wenn Ihnen der Netflix-Probezeitraum gefallen hat, müssen Sie nichts weiter tun. Ihre Mitgliedschaft wird automatisch so lange verlängert, wie Sie Mitglied bleiben möchten. Sie können jederzeit kündigen und vor dem Ablauf Ihres kostenlosen Probezeitraums fallen keine Kosten an. Es gibt keinen komplizierten Vertrag, keine Kündigungsgebühren und keine Verpflichtung. Sie können jederzeit rund um die Uhr online kündigen.'
		],
		isHidden: new Array(6).fill(true)
	};

	isHidden = (index) => {
		this.setState((prevState) => {
			let newIsHidden = [...prevState.isHidden];
			newIsHidden[index] = !newIsHidden[index];
			return { isHidden: newIsHidden };
		});
		console.log(this.state.isHidden);
	};

	render() {
		const { title, hidden, isHidden } = this.state;
		return (
			<div>
				{title.map((each, index) => {
					return (
						<div className='collapse-wrapper' key={index}>
							<div
								className='title'
								onClick={() => this.isHidden(index)}
							>
								<h1>{each}</h1>
								<Svg
									style={{
										transform: isHidden[index]
											? 'rotate(45deg)'
											: 'rotate(0deg)'
									}}
								/>
							</div>
							{isHidden[index] ? (
								''
							) : (
								<div className='hidden'>{hidden[index]}</div>
							)}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Collapse;
