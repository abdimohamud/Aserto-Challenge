

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_IDS = 'FETCH_IDS';
export const FETCH_IDS_SUCCESS = 'FETCH_IDS_SUCCESS';
export const FETCH_IDS_FAILURE = 'FETCH_IDS_FAILURE';


export const FETCH_NAMES_ID = 'FETCH_NAMES_ID';
export const FETCH_NAMES_ID_SUCCESS = 'FETCH_NAMES_ID_SUCCESS';
export const FETCH_NAMES_ID_FAILURE = 'FETCH_NAMES_ID_FAILURE';


export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

// First 10 users - https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&page.token=

// Next 10 users-
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&page.token=YXV%3C...%3EmIz

// User (By Id)-
// https://onebox.demo.aserto.com/api/v1/dir/users/81066423-effe-4a10-aa35-4aa10ae0510c

// Get User ID -
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id

// Get User ID and display name-
// https://onebox.demo.aserto.com/api/v1/dir/users?page.size=10&fields.mask=id,display_name