const ADD_USER_NAME = "rank/ADD_USER_NAME";
const ADD_USER_COMMENT = "rank/ADD_USER_COMMENT";
const ADD_RANK = "rank/ADD_RANK";
const GET_RANK = "rank/GET_RANK";

export const addUserName = (user_name) => {
  return { type: ADD_USER_NAME, user_name };
};

export const addUserComment = (user_comment) => {
  return { type: ADD_USER_COMMENT, user_comment };
};

export const addRank = (rank_info) => {
  return { type: ADD_RANK, rank_info };
};

export const getRank = (rank_list) => {
  return { type: GET_RANK, rank_list };
};

const initialState = {
  user_name: "",
  user_comment: "",
  user_score: "",
  ranking: [{ score: 80, name: "gom", comment: "무야호" }],
};

const rank_reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "rank/ADD_USER_NAME": {
      return { ...state, user_name: action.user_name };
    }
    case "rank/ADD_USER_COMMENT": {
      return { ...state, user_comment: action.user_comment };
    }

    case "rank/ADD_RANK": {
      return { ...state, ranking: [...state.ranking, action.rank_info] };
    }

    case "rank/GET_RANK": {
      return { ...state, ranking: action.rank_list };
    }
    default:
      return state;
  }
};

export default rank_reducer;
