import Link from "next/link";
import React from "react";

const ArrowButtons = props => (
    <React.Fragment>
        {props.currentPage === 1 ?
            (
                <span className={`pagination-previous`} style={{
                    cursor: 'not-allowed',
                    opacity: 0.5
                }}>Previous</span>
            )
            :
            (
                <Link href={`?page=${props.currentPage - 1}`}>
                    <a className={`pagination-previous`}>Previous</a>
                </Link>
            )
        }

        {props.currentPage === props.pagesCount ?
            (
                <span className={`pagination-previous`} style={{
                    cursor: 'not-allowed',
                    opacity: 0.5
                }}>Next Page</span>
            )
            :
            (
                <Link href={`?page=${props.currentPage + 1}`}>
                    <a className="pagination-next">Next page</a>
                </Link>
            )
        }
    </React.Fragment>
);

export default ArrowButtons