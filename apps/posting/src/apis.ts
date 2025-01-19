import { PostType, UserType } from "./types";

export async function getPosts(token: string): Promise<PostType[]> {
  const response = await fetch(
    "http://localhost:4000/posts?_sort=id&_order=desc",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const posts = await response.json();
  return posts;
}

export async function createPost(
  token: string,
  body: { message: string }
): Promise<void> {
  await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export async function removePost(token: string, id: number): Promise<void> {
  await fetch(`http://localhost:4000/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUser(token: string): Promise<UserType> {
  const response = await fetch("http://localhost:4000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await response.json();
  return user;
}
