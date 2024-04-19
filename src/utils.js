export const getImageUrl = (path) => {
    // Constructing a new URL object with the path appended to the base URL
    return new URL(`/assets/${path}`, import.meta.url).href;
}
