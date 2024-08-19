const BaseURL = `${process.env.NEXT_PUBLIC_URL}/apis/v1`;

exports.selectData = (pageNo, perPage, searchKey) => {
  store.dispatch(ShowLoader());
  let URL = `${BaseURL}/productlist/${pageNo}/${perPage}/${searchKey}`;

  fetch(URL)
    .then((response) => {
      store.dispatch(HideLoader());
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      store.dispatch(SetALLProduct(data["data"]));
      store.dispatch(SetTotal(data["total"]));
    })
    .catch((err) => {
      store.dispatch(HideLoader());
      console.error("Fetch error:", err);
    });
};
