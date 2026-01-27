import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar bg-dark text-white border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brandb "><h3>Navbar</h3></a>
          <form class="d-flex" role="search" >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
