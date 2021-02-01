export const formatGenres = (genres) => {
  let output = [];

  for(let i = 0; i < genres.length; i++) {
    output.push(genres[i].name)
  }

  return output.join(", ");
}
