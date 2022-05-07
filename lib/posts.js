import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPost(file) {
  const rawMarkedDown = fs.readFileSync(join("posts", file + ".md")).toString();
  const { data, content } = matter(rawMarkedDown);
  return { data, content };
}

export function getSortedPostsData() {
  // get file names under /posts
  const fileName = fs.readdirSync(postsDirectory);

  const allPostsData = fileName.map((fileName) => {
    // remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fullContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fullContents);

    // combine the data with the id
    return {
      id,
      ...matterResult.data, // spread the markdown metadata into the return statement (title, date)
    };
  });

  // sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

