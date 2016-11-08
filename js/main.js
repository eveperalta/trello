function t(x){return document.getElementById(x);} 
var lista=[]; 
function almacenar(){ 
    lista.push({n:t('nombre').value,a:t('anio').value}); 
    t('nombre').value=t('anio').value=''; 
} 
function mostrar(){ 
    t('e').innerHTML=''; 
for(var i=0,m;m=lista[i];i++) 
    t('e').innerHTML+=lista[i].n+'--'+lista[i].a+'<br />'; 

}