import {
  FETCH_ALL_STORIES,
  CREATE_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  LIKE_STORY
} from '../types/storiesTypes'

const storyReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STORIES:
      return action.payload;
    case CREATE_STORY:
      return [...state, action.payload];
    case UPDATE_STORY:
    case LIKE_STORY:
      return state.map(story => story._id === action.payload._id ? action.payload : story);
    case DELETE_STORY:
      return state.filter(story => story._id !== action.payload);    
      
    default:
      return state;
  }
};

export default storyReducer;