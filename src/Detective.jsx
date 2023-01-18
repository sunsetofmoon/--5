import { useState } from "react";

function Detective() {

    const [sherlock, setSherlock] = useState('Психопат')

    const handleClick = () => {
        setSherlock('Высокоактивный социопат')
    }


    return (
        <div>
            <h1>Шерлок - {sherlock}</h1>
            <button onClick={handleClick}>Узнать правду</button>
        </div>
    )
}

export default Detective;