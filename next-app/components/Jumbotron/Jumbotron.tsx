/** @format */

import React from "react";

export default function Jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
          <h1 className="display-4">Pet World</h1>
          <p className="lead">
            Find your new best friend today. Adopt a wonderful pet.
          </p>
          <button type="button" className="btn btn-primary">
            Browse
          </button>
        </div>
      </div>
    </div>
  );
}
