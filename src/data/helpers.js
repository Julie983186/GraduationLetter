export function generatePhotos(folder, count) {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");

    return {
      src: `/images/${folder}/${num}.JPG`
    };
  });
}