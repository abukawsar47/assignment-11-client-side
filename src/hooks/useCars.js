import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-sea-44652.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return [cars, setCars]
}

export default useCars;