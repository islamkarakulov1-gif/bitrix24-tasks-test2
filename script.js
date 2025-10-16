function loadDeals() {
  const minSum = parseFloat(document.getElementById('minSum').value) || 0;
  BX24.callMethod('crm.deal.list', {
    select: ['ID', 'TITLE', 'OPPORTUNITY'],
    order: { ID: 'DESC' },
    filter: { '>OPPORTUNITY': minSum }
  }, function(result) {
    if (result.error()) {
      alert("Ошибка: " + result.error());
      return;
    }
    const tbody = document.querySelector('#deals tbody');
    tbody.innerHTML = '';
    result.data().forEach(deal => {
      tbody.innerHTML += `<tr><td>${deal.ID}</td><td>${deal.TITLE}</td><td>${deal.OPPORTUNITY}</td></tr>`;
    });
  });
}
