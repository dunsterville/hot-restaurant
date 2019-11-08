
document.getElementById('submit').addEventListener('click', e=>{
e.preventDefault()


let table ={
name: document.getElementById('name').value,
email:  document.getElementById('email').value,
phone:  document.getElementById('phone').value,
id:  document.getElementById('unique').value
}

axios.post('/tables', table)
.then(response=>{
  console.log(response)
})
.catch(e=>console.log(e))

  document.getElementById('name').value = ' '
  document.getElementById('email').value = ' '
  document.getElementById('phone').value = ' '
  document.getElementById('unique').value = ' '

})

