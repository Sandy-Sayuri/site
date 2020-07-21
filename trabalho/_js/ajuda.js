<script>
var btnabrirpopup=document.getElementById('btn-abrir-popup'),
        overlay=document.getElementById('overlay'),
		popup=document.getElementById('popup'),
		btncerrarpopup=document.getElementById('btn-cerrar-popup');
		
btnabrirpopup.addEventListener('click',function(){
	overlay.classlist.add('active');
});

btncerrarpopup.addEventListener('click',function(){
	overlay.classlist.remove('active');
});
</script>