import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {

	const [currentNumber, setCurrentNumber] = useState('0');

	const handleConcatenateValue = (value) => {
		setCurrentNumber(currentNumber == 0 ? value : currentNumber + value);
	};

	const handleCalculate = () => {
		try {
			const result = eval(currentNumber);
			setCurrentNumber(result.toString());
		} catch (error) {
			setCurrentNumber('Erro');
		}
	};


	return (
		<Container>
			<Content>
				<Input value={currentNumber} />
				<Row>
					<Button label="x" onClick={() => handleConcatenateValue('*')}/>
					<Button label="/" onClick={() => handleConcatenateValue('/')} />
					<Button label="c" onClick={() => setCurrentNumber('0')} /> {/* Limpar valor */}
					<Button label="." onClick={() => handleConcatenateValue('.')} />
				</Row>
				<Row>
					<Button label="7" onClick={() => handleConcatenateValue('7')} />
					<Button label="8" onClick={() => handleConcatenateValue('8')} />
					<Button label="9" onClick={() => handleConcatenateValue('9')} />
					<Button label="-" onClick={() => handleConcatenateValue('-')} />
				</Row>
				<Row>
					<Button label="4" onClick={() => handleConcatenateValue('4')} />
					<Button label="5" onClick={() => handleConcatenateValue('5')} />
					<Button label="6" onClick={() => handleConcatenateValue('6')} />
					<Button label="+" onClick={() => handleConcatenateValue('+')} />
				</Row>
				<Row>
					<Button label="1" onClick={() => handleConcatenateValue('1')} />
					<Button label="2" onClick={() => handleConcatenateValue('2')} />
					<Button label="3" onClick={() => handleConcatenateValue('3')} />
					<Button label="=" onClick={handleCalculate} />
				</Row>
			</Content>
		</Container>
	);
}

export default App;
