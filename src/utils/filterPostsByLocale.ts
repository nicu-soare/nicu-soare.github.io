import type { CollectionEntry } from "astro:content";
import { getContentLocale } from "./getContentLocale";

/**
 * Keep only posts that belong to the requested locale.
 */
export function filterPostsByLocale(
  posts: CollectionEntry<"posts">[],
  locale: string
) {
  return posts.filter(post =>
    getContentLocale(post.filePath, post.data.locale) === locale
  );
}
