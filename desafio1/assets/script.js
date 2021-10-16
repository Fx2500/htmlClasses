function onSubmit(event) {
  event.preventDefault()

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message').value;
  
  const info = {
    name: name,
    email: email,
    phone: phone,
    message: message
  }

  const url = 'https://jsonplaceholder.typicode.com/comments';
  const strData = JSON.stringify(info)

  fetch( url, {
    method: 'POST',
    body: strData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      alert('Mensagem enviada com sucesso!')
    });    
  }

window.onload = () => {
  const sendForm = document.querySelector("#button")
  sendForm.addEventListener("submit", onSubmit)
}