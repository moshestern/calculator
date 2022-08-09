import { useEffect, useState } from 'react';
import { useKeysContext } from '../providers/KeysProvider';
import './CalculatorDisplay.scss';
let mathfromString = require("math-from-string");

export const CalculatorDisplay = () => {
    const { keysArr, updateKeysData } = useKeysContext();
    const [formula, setFormula] = useState('');
    const [isResult, setIsResult] = useState(false);
    const currentKey = keysArr[keysArr.length - 1];
    const lastKey = keysArr[keysArr.length - 3];
    useEffect(() => {
        if (!keysArr.length) return;
        
        if (lastKey === '=' || keysArr.length === 1 || currentKey === 'AC') {
            setIsResult(false);
            setFormula('');
        }

        if (currentKey !== '='&& currentKey !== 'AC' && !isResult) {
            setFormula(prevFormula => `${prevFormula}${currentKey}`);
        } else if (formula === '') {
            setFormula('')
        } else if (!isResult && currentKey !== 'AC'){
            try {
                const result = mathfromString(formula);
                setFormula(result);
                setIsResult(true);
                updateKeysData(result);
            } catch (error) {
                setFormula('error');
                setIsResult(true);
                updateKeysData('error');
            }
        }

    },[keysArr, isResult]);

    return (
        <div className="display-wrapper">
            <div className="display">
                {formula}
            </div>
        </div>
    )
}
