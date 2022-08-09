import { CalculatorDisplay } from './CalculatorDisplay';
import { Keyboard } from './Keyboard';
import './Calculator.scss';

export const Calculator = () => {

    return (
        <div className="calculator">
            <CalculatorDisplay />
            <Keyboard />
        </div>
    )
}