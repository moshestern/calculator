import { useKeysContext } from '../providers/KeysProvider';
import './History.scss';

export const History = () => {
    const { keysArr, clearKeysData } = useKeysContext();

    const historyList = keysArr.map((key, index) => {
        return (
            <li key={index}>{key}</li>
        )
    });

    const handleClearHistory = () => {
        clearKeysData()
    }

    return (
        <div className="history">
            {historyList.length ? <div className="clear-history" onClick={handleClearHistory}><button>Clear History</button></div> : 'No history yet...'}
            <ol>{historyList}</ol>
        </div>
    )
}