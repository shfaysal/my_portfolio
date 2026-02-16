import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  stack: string[];
  metrics: string[];
  role: string;
  year: string;
  gallery: string[];
  html: string;
  fileSlug: string;
};

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  html: string;
};

const contentRoot = path.join(process.cwd(), "content");

const parseList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const readMarkdown = (folder: string) => {
  const directory = path.join(contentRoot, folder);
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(directory, file), "utf8");
    const { data, content } = matter(raw);
    return { data, content, fileSlug: path.basename(file, ".md") };
  });
};

const slugify = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getProjects = (): Project[] => {
  return readMarkdown("projects").map(({ data, content, fileSlug }) => ({
    slug: String(data.slug ?? fileSlug ?? ""),
    title: String(data.title ?? ""),
    summary: String(data.summary ?? ""),
    image: String(data.image ?? ""),
    stack: parseList(data.stack),
    metrics: parseList(data.metrics),
    role: String(data.role ?? ""),
    year: String(data.year ?? ""),
    gallery: parseList(data.gallery),
    html: marked.parse(content, { async: false }),
    fileSlug,
  }));
};

const normalizeSlug = (value: string): string => {
  return decodeURIComponent(value).trim().toLowerCase();
};

export const getProjectBySlug = (slug: string): Project | null => {
  const normalized = normalizeSlug(slug);
  return (
    getProjects().find(
      (project) =>
        normalizeSlug(project.slug) === normalized ||
        normalizeSlug(project.fileSlug) === normalized ||
        slugify(project.title) === normalized
    ) ?? null
  );
};

export const getPosts = (): Post[] => {
  return readMarkdown("posts").map(({ data, content }) => ({
    slug: String(data.slug ?? ""),
    title: String(data.title ?? ""),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    tags: parseList(data.tags),
    html: marked.parse(content, { async: false }),
  }));
};

export const getPostBySlug = (slug: string): Post | null => {
  return getPosts().find((post) => post.slug === slug) ?? null;
};
