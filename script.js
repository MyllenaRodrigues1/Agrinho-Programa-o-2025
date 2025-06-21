// Inicializa o mapa centralizado em Paranavaí
const mapa = L.map('map').setView([-23.0816, -52.4603], 13);

// Adiciona o mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Função para marcar o problema no mapa
function marcarProblema() {
  mapa.once('click', function(e) {
    const tipo = document.getElementById('tipo').value;
    const descricao = document.getElementById('descricao').value;

    const marcador = L.marker(e.latlng).addTo(mapa);

    let iconeAnimado = "";

    if (tipo === "queimada") {
      iconeAnimado = `<div class="efeito-fogo">🔥</div>`;
    } else if (tipo === "lixo") {
      iconeAnimado = `<div class="efeito-lixo">🗑️</div>`;
    } else if (tipo === "desmatamento") {
      iconeAnimado = `<div class="efeito-desmatamento">🌳</div>`;
    }

    marcador.bindPopup(`
      <strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</strong><br>
      ${descricao}<br>
      ${iconeAnimado}
    `).openPopup();

    alert('Clique no mapa para marcar o local do problema.');
  });
}