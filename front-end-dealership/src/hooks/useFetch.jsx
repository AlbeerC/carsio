import { useEffect, useState } from "react";

export function useFetch(url, dependence) {
    const [data, setData] = useState();
    const [originalData, setOriginalData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [controller, setController] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setOriginalData(data)
            })
            .catch((error) => {
                if (error.name !== 'AbortError') { setError(error); }
            })
            .finally(() => setLoading(false));

        return () => abortController.abort();
    }, [dependence]);

    const handleCancel = () => {
        if (controller) { controller.abort(); }
    };

    return { data, setData, originalData, error, loading, handleCancel };
}
