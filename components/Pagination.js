import Link from "next/link";
import {pageCount} from "../constants/lists";
import React from "react";
import ArrowButtons from "./pagination/ArrowButtons";

const Pagination = props => {
    const pagesCount = Math.floor(props.count / pageCount);
    const currentPage = parseInt(props.page);

    const showPages = [1, pagesCount];

    return (
        <nav className="pagination is-right" role="navigation" aria-label="pagination">
            <ArrowButtons currentPage={currentPage} pagesCount={pagesCount}/>
            <ul className="pagination-list">
                <li><Link href={`?page=1`}><a className={`pagination-link ${currentPage === 1 ? 'is-current' : ''}`}
                                              aria-label="Goto page 1">1</a></Link></li>
                {
                    currentPage === 1 &&
                    <React.Fragment>
                        <li><Link href={`?page=${currentPage + 1}`}><a className="pagination-link"
                                                                       aria-label={`Goto page ${currentPage + 1}`}>{currentPage + 1}</a></Link>
                        </li>
                    </React.Fragment>
                }
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                {
                    !showPages.includes(currentPage) &&
                    <React.Fragment>
                        <li><Link href={`?page=${currentPage - 1}`}><a className="pagination-link"
                                                                       aria-label={`Goto page ${currentPage - 1}`}>{currentPage - 1}</a></Link>
                        </li>
                        <li><Link href={`?page=${currentPage}`}><a className="pagination-link is-current"
                                                                   aria-label={`Goto page ${currentPage}`}>{currentPage}</a></Link>
                        </li>
                        <li><Link href={`?page=${currentPage + 1}`}><a className="pagination-link"
                                                                       aria-label={`Goto page ${currentPage + 1}`}>{currentPage + 1}</a></Link>
                        </li>
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                    </React.Fragment>
                }
                {
                    currentPage === pagesCount &&
                    <React.Fragment>
                        <li><Link href={`?page=${currentPage - 1}`}><a className="pagination-link"
                                                                       aria-label={`Goto page ${currentPage - 1}`}>{currentPage - 1}</a></Link>
                        </li>
                    </React.Fragment>
                }
                <li><Link href={`?page=${pagesCount}`}><a
                    className={`pagination-link ${currentPage === pagesCount ? 'is-current' : ''}`}
                    aria-label={`Goto page ${pagesCount}`}>{pagesCount}</a></Link></li>
            </ul>
        </nav>
    )
};

export default Pagination