import { useState, useEffect } from "react";
import history from "./../shared/utils/BrowserHistory";
import { useLocation, useNavigate } from "react-router-dom";
import { addToQueryString, omitFromQueryString, queryStringToObject } from "./../shared/utils/UrlHelper";

export const useModalHelper = params => {
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    queryStringToObject(history.location.search)[`modal-${params}`] ? setModalOpen(true) : setModalOpen(false);
  }, [params, history.location.search]);

  const navigate = useNavigate();

  const open = () => {
    console.log("open modal: pathname", pathname);
    const pathOptions = {
      pathname: pathname,
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
      pathname: pathname,
      search: omitFromQueryString(history.location.search, [`modal-${params}`]),
      replace: true,
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
