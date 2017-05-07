$('.num').on('click', function(){
  let num = $(this).val();
  let value = $('input').val();
  let input = value += num;
  $('input').val(input);
})

// Clear the input box
$('.clear').on('click', function(){
  $('input').val("");
})

// Calculate the input
function calculate(){
  let ans = eval($('input').val());
  $('input').val(ans)
}
// 
// Backspace the last entry
function backspace(){
  let inputVal = $('input').val();
  let deleted = inputVal.substr(0, inputVal.length-1)
  $('input').val(deleted)

}
