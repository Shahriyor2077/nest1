
import React, { useEffect, useState } from "react";
import UsersView from "@/components/UsersView";
import axios from "axios";

const Users = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const data =  await response.json();
  return (
    <div className="container">
      <UsersView data={data} />
    </div>
  );
};

export default Users;
