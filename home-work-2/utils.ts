import { data } from "./data";

export function getAutoSuggestUsers(loginSubstring: string, limit = 10) {
  const users = data.filter(user => user.login.startsWith(loginSubstring));
  const limitedUsers = users.slice(0, limit);
  const sortedUser = limitedUsers.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  return sortedUser;
}