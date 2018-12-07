import { findCurrentConversation } from "./conversation_selectors";

export const findCurrentUser = (state) => {
  const currentUserId = state.session.currentUser.id;
  return state.entities.users[currentUserId];
};

export const objOfUsersNames = (state) => {
  const { users } = state.entities;
  const objOfNamesByUserId = {};
  Object.keys(users).forEach(userId => objOfNamesByUserId[userId] = users[userId].name);
  return objOfNamesByUserId
};

export const findUser = (state, id) => (
  state.entities.users[id]
);

export const findConversationUsers = (state, ownProps) => {
  const currentConvo = findCurrentConversation(state, ownProps);
  if (!currentConvo) return [];
  return currentConvo.usersId.map(id => findUser(state, id));
}