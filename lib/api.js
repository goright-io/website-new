import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "pages/blog");

export function getPostSlugs() {
  let postSlugs = [];
  fs.readdirSync(postsDirectory).forEach((file) => {
    const currDirectoryPath = path.join(postsDirectory, file);
    if (
      fs.existsSync(currDirectoryPath) &&
      fs.lstatSync(currDirectoryPath).isDirectory()
    ) {
      postSlugs.push(path.basename(currDirectoryPath));
    }
  });
  return postSlugs;
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, slug, "index.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { date, ...data },
    content,
  } = matter(fileContents);
  return { date: date.toString(), slug: realSlug, content, ...data };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post2.date > post1.date ? -1 : 1));

  return posts;
}