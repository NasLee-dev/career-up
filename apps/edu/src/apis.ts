import { CourseContentsType, CourseType, UserType } from "./types";

export async function getCourses(token: string): Promise<CourseType[]> {
  const response = await fetch(
    `http://localhost:4000/courses?_sort=id&_order=desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
}

export async function getCourseContents(
  toekn: string,
  id: number
): Promise<CourseContentsType> {
  const response = await fetch(`http://localhost:4000/course-contents/${id}`, {
    headers: {
      Authorization: `Bearer ${toekn}`,
    },
  });
  return await response.json();
}

export async function getUser(token: string): Promise<UserType | null> {
  try {
    const response = await fetch(`http://localhost:4000/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
