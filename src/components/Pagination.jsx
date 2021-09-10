import React, { Component } from "react";

class pagination extends Component {
  render() {
    const pages = [];
    let start;
    let end;
    //console.log(pages, "pages");
    const { total, current } = this.props;
    if (total > 5) {
      if (current >= 4) {
        start = current - 3;
        end = current + 1;
      } else {
        start = 0;
        end = 4;
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 0; i < total; i++) {
        pages.push(i);
      }
    }
    return (
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          <li className={current === 0 ? "page-item disabled" : "page-item"}>
            <span
              className="page-link"
              onClick={() => this.props.handle(current, 0)}
            >
              Previous
            </span>
          </li>
          {pages.map((page, index) => {
            return (
              <li
                className={
                  this.props.current === index
                    ? "page-item  page-item active"
                    : "page-item"
                }
                onClick={() => this.props.handle(page)}
              >
                <a className="page-link" href="#">
                  {page + 1}
                </a>
              </li>
            );
          })}
          <li
            className={
              current === total - 1 ? "page-item disabled" : "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={() => this.props.handle(current, 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default pagination;
