var bnt = document.querySelector('#bnt');

console.log(bnt);

bnt.addEventListener('click', function () {
   console.log('Clicou');
   
   console.log(this);
   
   this.style.color = 'red';
})

var title = document.querySelector('#title').addEventListener('click', function () {
   console.log('teste');
   this.style.color = 'blue';
   
   
   var subtitle = document.querySelector('.subtitle');
   
   subtitle.style.display = 'none';
   
})


