import axios from "axios";

export const fetchUsers = (token) => {
  return axios.get(
    `https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&page.token=${
      token ? token : ""
    }`
  );
};

export const fetchNamesId = () => {
  return axios.get(
    "https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id,display_name"
  );
};

export const fetchIds = () => {
  return axios.get(
    "https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id"
  );
};

export const fetchUserById = (id) => {
  return axios.get(
    `https://onebox.demo.aserto.com/api/v1/dir/users/${id}`
  );
};

// First 10 users - https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&page.token=

// Next 10 users-
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&page.token=YXV%3C...%3EmIz

// User (By Id)-
// https://onebox.demo.aserto.com/api/v1/dir/users/81066423-effe-4a10-aa35-4aa10ae0510c

// Get User ID -
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id

// Get User ID and display name-
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id,display_name
