let input = document.getElementById('input');

$('.num').on('click', function(){
  let str = []
  let num = $(this).text();
  input.textContent += num
  console.log(num)
  // let input = document.getElementById('input');
  // let input += num
})

$('.clear').on('click', function(){
  document.getElementById('input').innerHTML = "";
  console.log('clear')
})
