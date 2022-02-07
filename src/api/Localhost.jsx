import axios from 'axios';

const base_url = axios.create({
  baseURL: 'http://localhost:8080/db',
});

const PostsAPI = axios.create({
  baseURL: 'http://localhost:8080/posts',
});

const UsersAPI = axios.create({
  baseURL: 'http://localhost:8080/users',
});

export default base_url;
export { base_url, PostsAPI, UsersAPI };
