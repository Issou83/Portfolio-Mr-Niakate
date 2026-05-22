import { useEffect } from "react";

const siteUrl = "https://nkdevweb.netlify.app";
const defaultImage = `${siteUrl}/assets/img/NewImage.png`;

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
};

const SEO = ({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  jsonLd,
}) => {
  useEffect(() => {
    const canonical = `${siteUrl}${path}`;
    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });
    upsertLink("canonical", canonical);

    if (jsonLd) {
      upsertJsonLd("page-jsonld", jsonLd);
    }
  }, [description, image, jsonLd, path, title, type]);

  return null;
};

export { siteUrl, defaultImage };
export default SEO;
