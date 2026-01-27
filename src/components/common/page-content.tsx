"use client";

import { siteConfig } from "@/config/site.config";
import DOMPurify from "isomorphic-dompurify";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

function PageContent() {
  const pathname = usePathname();

  const pagesContent = siteConfig.pagesContent;
  type PageKey = keyof typeof pagesContent;

  const pageContent = pagesContent[pathname as PageKey];

  if (!pageContent) {
    return <div>{siteConfig.notFound}</div>;
  }

  const cleanHTML = DOMPurify.sanitize(pageContent.content);

  return <div>{parse(cleanHTML)}</div>;
}

export default PageContent;