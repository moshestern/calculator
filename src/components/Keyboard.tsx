import { keys } from "../configs/keys"
import { Key } from "./Key";
import './Keyboard.scss';
import { useKeysContext } from '../providers/KeysProvider';

export const Keyboard = () => {
    const { updateKeysData } = useKeysContext();
    const onHandleKeyClick = (value: string, keyEvent?: string) => {
        
        updateKeysData(value);

        if (keyEvent === 'calc') {

        } else {

        }
    }

    return (
        <div className="keyboard">
            {keys.map((key, index) => {
                return (
                    <Key key={index} index={index} keyboardKey={key} onKeyClicked={() => onHandleKeyClick(key.value, key.keyEvent)}/>
                )
            })}        
        </div>
    )
}