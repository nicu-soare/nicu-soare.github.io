import { BLOG_PATH } from "@/content.config";

export type SupportedLocale = "ro" | "en";

const supportedLocales = new Set<SupportedLocale>(["ro", "en"]);

function getPathSegments(filePath: string | undefined, basePath: string): string[] {
  return (
    filePath
      ?.replace(basePath, "")
      .split("/")
      .filter(segment => segment !== "")
      .filter(segment => !segment.startsWith("_")) ?? []
  );
}

/**
 * Returns the locale for a content entry based on its file path or an
 * explicit frontmatter locale. Root content defaults to Romanian.
 */
export function getContentLocale(
  filePath: string | undefined,
  explicitLocale: string | undefined,
  basePath: string = BLOG_PATH
): SupportedLocale {
  if (explicitLocale === "ro" || explicitLocale === "en") {
    return explicitLocale;
  }

  const pathSegments = getPathSegments(filePath, basePath);
  const locale = pathSegments[0] as SupportedLocale | undefined;
  return locale && supportedLocales.has(locale) ? locale : "ro";
}

/**
 * True when a content entry belongs to the requested locale.
 */
export function isContentLocale(
  filePath: string | undefined,
  locale: string,
  explicitLocale: string | undefined,
  basePath: string = BLOG_PATH
) {
  return getContentLocale(filePath, explicitLocale, basePath) === locale;
}
