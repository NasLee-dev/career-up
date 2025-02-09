import { PostType, UserType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getPosts(token: string): Promise<PostType[]> {
  const response = await fetch(`${SERVER_URL}/posts?_sort=id&_order=desc`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const posts = await response.json();
  return posts;
}

export async function createPost(
  token: string,
  body: { message: string }
): Promise<void> {
  await fetch(`${SERVER_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export async function removePost(token: string, id: number): Promise<void> {
  await fetch(`${SERVER_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUser(token: string): Promise<UserType> {
  const response = await fetch(`${SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await response.json();
  return user;
}
