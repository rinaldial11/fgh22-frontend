import React from "react";
import NavBar from "../components/NavBar";

function AdminMovie() {
  return (
    <>
      <NavBar isLog={true} isAdmin={true} page="add-movie" />
    </>
  );
}

export default AdminMovie;
