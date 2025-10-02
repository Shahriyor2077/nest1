import React, { FC } from "react";

interface Props {
  data: any[];
}

const UsersView: FC<Props> = ({ data }) => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((user) => (
        <div key={user.id} className="bg-white shadow-md rounded-2xl p-5 ">
          <h2 className="text-lg font-semibold text-gray-800">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-gray-500">@{user.username}</p>

          <div className="mt-3">
            <p className="text-sm text-gray-700">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
          </div>

          <div className="mt-3 text-sm text-gray-700">
            <p className="font-medium">Address:</p>
            <p>
              {user.address.number} {user.address.street}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
          </div>

          <div className="mt-2 text-xs text-gray-500">
            Lat: {user.address.geolocation.lat}, Lng:{" "}
            {user.address.geolocation.long}
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsersView;
