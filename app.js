// let input = document.getElementById('input');
$('.num').on('click', function(){
  let num = $(this).val();
  document.calc.result.value += num
})

$('.clear').on('click', function(){
  $('input').val("");

})


function calculate(){
  let ans = eval($('input').val());
  console.log(typeof(ans))
  $('input').val(ans)
}
