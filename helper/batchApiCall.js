exports.batchAPICall = async (callback, perPage, query) => {
  let allData = [];
  let pageNumber = 1;

  // Fetch the first page to get the total count

  const initialResponse = await callback(pageNumber, perPage, query);

  allData = allData.concat(initialResponse.data);

  //count the total number
  const totalItems = initialResponse.total;
  const totalPages = Math.ceil(totalItems / perPage);

  // Function to fetch a range of pages
  const fetchPageRange = async (start, end) => {
    const promises = [];
    for (let i = start; i <= end; i++) {
      promises.push(callback(i, perPage, query));
    }
    const results = await Promise.all(promises);
    results.forEach((result) => {
      allData = allData.concat(result.data);
    });
  };

  // Limit concurrency by processing pages in batches
  const batchSize = 1; // Adjust based on server capacity and performance
  for (let i = 2; i <= totalPages; i += batchSize) {
    const end = Math.min(i + batchSize - 1, totalPages);
    await fetchPageRange(i, end);
  }

  return allData;
};
