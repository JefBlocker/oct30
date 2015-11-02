export default function(data) {
  return `
    <div class="detail">
      <button class="back-button" data-to="database">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="video">${data.video}</div>
      <div class="image">
        <img src="${data.image}">
      </div>
        <p>Title: ${data.title}</p>
        <p>Artist: ${data.artist}</p>
        <p>Released: ${data.year}</p>
        <p>Highest UK Chart Placing: ${data.chart}</p>
        <p>More Information: ${data.info}</p>
    </div>
  `;
}