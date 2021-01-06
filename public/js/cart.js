$('#purchase-btn').on('click', async function () {

  await fetch('/api/ticket/', {
    method: 'PUT',
    // body: JSON.stringify({in_cart, purchased}), 
    headers: {'Content-Type': 'application/json'}   
  })

})
