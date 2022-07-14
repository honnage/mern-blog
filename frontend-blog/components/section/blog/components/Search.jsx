import React from "react";

export default function Search() {
  return (
    <>
      <div>
        <h3 className="sidebar-title">Search</h3>
        <div className="sidebar-item search-form">
          <form action="">
            <input type="text" className="form-control" />
            <button type="submit">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End sidebar search formn*/}
      </div>
    </>
  );
}
