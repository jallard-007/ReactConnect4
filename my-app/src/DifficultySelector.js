import React, {useState} from "react";

const DifficultySelector = () => {
    const [difficultyOption, setDifficultyOption] = useState("Easy")

    function changeDifficulty(newDifOption){
        setDifficultyOption(newDifOption)
    }

    const DifOption = (props) => {
        let styles = "btn btn-secondary"
        if (props.difficulty === difficultyOption){
            styles += " btnSelected"
        }
        return <button type="button" className={styles} onClick={() => changeDifficulty(props.difficulty)}>{props.difficulty}</button>
    }

    return (
    <div className="btn-group" role="group" aria-label="Basic example">
        <DifOption difficulty="Easy" />
        <DifOption difficulty="Medium"/>
        <DifOption difficulty="Hard"/>
        <DifOption difficulty="Expert"/>
    </div>
    )
}

export default DifficultySelector