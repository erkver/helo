const GET_USER_INFO = "GET_USER_INFO";

export function getUserInfo(id, username, profilePic) {
  return {
    type: GET_USER_INFO,
    payload: {username, id, profilePic}
  }
}

const initialState = {
  username: "",
  id: null,
  profilePic: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_USER_INFO: 
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
        profilePic: action.payload.profilePic
      };
    default: 
      return state
  }
}