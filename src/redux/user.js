const SET_NAME = "user/SET_NAME";

export const setName = (name) => {
  return { type: SET_NAME, name };
};

const initialState = {
  user_name: "gom",
};

const user_reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "user/SET_NAME": {
      console.log(action);
      return { ...state, user_name: action.name };
    }

    default:
      return state;
  }
};

export default user_reducer;
