import fs from "fs";
import path from "path"
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "pages/blog");

export function getPostSlugs() {
  let postSlugs = []
  fs.readdirSync(postsDirectory).forEach(file => {
     const currDirectoryPath = path.join(postsDirectory, file);
     console.log(currDirectoryPath)
     console.log(fs.existsSync(currDirectoryPath))
     console.log(fs.lstatSync(currDirectoryPath).isDirectory())
            if (fs.existsSync(currDirectoryPath) && fs.lstatSync(currDirectoryPath).isDirectory()) {
                // postSlugs.push(currDirectoryPath + "/index.mdx");
                postSlugs.push(path.basename(currDirectoryPath))
            }
  });
console.log("ps", postSlugs)
return postSlugs
  //   postSlgs.filter((slug) => slug !== "index.js");
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, slug, "index.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {...data, content, slug: realSlug}

}

export function getAllPosts() {
  const slugs = getPostSlugs();
  console.log("slygs", slugs)
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
