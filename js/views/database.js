function processData(data) {
  return data.map(function(item){
    return `
      <li class="detail-list-item" data-detail-id="${item.objectId}">
        <span>${item.image}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="database-list">
      <h1>Iconic New Wave Hits of the 80s</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;
}