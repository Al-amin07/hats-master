export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/&/g, 'and') // optional: make it URL-safe and readable
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, ''); // keep hyphens
};

export const unslugify = (slug: string) => {
  return slug
    .replace(/-+/g, ' ')
    .replace(/\band\b/g, '&') // reverse `and` back to `&` if you used that replacement
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
