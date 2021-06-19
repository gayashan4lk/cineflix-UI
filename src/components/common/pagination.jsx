import React from "react";
import PropTypes from "prop-types"
import _ from "lodash"; // lodash is based on _ (underscore.js)

const Pagination = (props) => {
    // Object destructuring
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    // console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) {
        return null;
    }

    const pages = _.range(1, pagesCount+1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}


            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;