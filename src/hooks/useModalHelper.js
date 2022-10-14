import { useState, useEffect } from "react";
import history from "./../shared/utils/BrowserHistory";
import { useNavigate } from "react-router-dom";
import {
    addToQueryString,
    omitFromQueryString,
    queryStringToObject,
} from "./../shared/utils/UrlHelper";

export const useModalHelper = params => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        queryStringToObject(history.location.search)[`modal-${params}`]
            ? setModalOpen(true)
            : setModalOpen(false);
    }, [params]);

    const navigate = useNavigate();

    const open = () => {
        const pathOptions = {
            pathname: history.location.pathname,
            search: addToQueryString(history.location.search, {
                [`modal-${params}`]: true,
            }),
            replace: true,
        };
        navigate(pathOptions);
        setModalOpen(true);
    };

    const close = () => {
        const pathOptions = {
            pathname: history.location.pathname,
            search: omitFromQueryString(history.location.search, [
                `modal-${params}`,
            ]),
        };

        navigate({
            pathname: pathOptions.pathname,
        });
        setModalOpen(false);
    };

    // const isOpen = () =>
    // !!queryStringToObject(history.location.search)[`modal-${params}`];

    const isOpen = () => modalOpen;

    return { open, close, isOpen };
};

// export default useModalHelper;
