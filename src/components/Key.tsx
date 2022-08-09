type KeyProps = {
    index: number
    keyboardKey: {
        value: string
        keyEvent?: string
    }
    onKeyClicked: () => void
}

export const Key = ({ index, keyboardKey, onKeyClicked }: KeyProps) => {

    const handleKeyClicked = () => {
        onKeyClicked()
    }
    const currentClass = keyboardKey.keyEvent ? keyboardKey.keyEvent : '';
    return (
        <span key={index} className={currentClass} onClick={handleKeyClicked}>{keyboardKey.value}</span>
    )
}
