import ReactPaginate from "react-paginate";

function Pagination({ Total, handlePageClick }) {
  return (
    <nav className="mb-20">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName="inline-block bg-blue-700 text-white m-2 border border-gray-300 hover:bg-gray-200 rounded-xl px-1 py-2"
        pageLinkClassName="text-2xl px-6 text-gray-100"
        previousClassName="inline-block bg-blue-700 text-white m-2 border border-gray-300 hover:bg-gray-200 rounded-xl px-1 py-2"
        previousLinkClassName="text-2xl px-6 text-gray-100"
        nextClassName="inline-block bg-blue-700 text-white m-2 border border-gray-300 hover:bg-gray-200 rounded-xl px-1 py-2"
        nextLinkClassName="text-2xl px-6 text-gray-100"
        breakLabel="..."
        breakClassName="inline-block bg-blue-700 text-white m-2 border border-gray-300 hover:bg-gray-200 rounded-xl px-1 py-2"
        breakLinkClassName="text-2xl px-6 text-gray-100"
        pageCount={Total / 10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center space-x-1 mt-4"
        activeClassName="bg-orange-500 text-white"
      />
    </nav>
  );
}

export default Pagination;
