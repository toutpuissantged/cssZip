txta=document.getElementById('txta')
btn=document.getElementById('btn-1')
perf=document.getElementById('perf')
reload=document.getElementById('reload')
ecrase=document.getElementById('ecrase')
temp2=''
temp3=0
temp5=0
ged =  new Date
function calc (data){
	    taille=['Octes','Kb','Mb','Gb']
	    lec3 = data
	    lon=lec3
	    if (lon<=1000){
	        number=0
	        lon2=lon}
	    else if (1000<lon<1000000)
	        number=1
	    else if (1000000<lon<1000000000)
	        number=2
	    else if (1000000000<lon)
	        number=3
	    unit=taille[number]
	    lon2=Math.round(lon/(10**(3*number)))
        return [unit,lon2]
    }
btn.addEventListener(('click'),()=>{
    let code= txta.value
    temp4=false
 
    tem1= new Date
    tem1=tem1.getSeconds()
    leng=code.length
    reload.style="animation: rota 1s"
    txta.style="animation: txt 1.4s"
    setTimeout(() => { 
        reload.style="animation:none"
        txta.style="animation:none"
    for (let index = 0; index < code.length; index++) {
        temp=code[index]
        if(temp==='\n'||temp==='\r'||temp==='\t'){
            temp3++
        }
        else if( temp===" "){
                if(temp5==0){
                    temp5++
                }
                else if(temp5==1){
                    temp5=0
                    temp3+=2
                }
            }
        else{
            
            if(temp5==1){
                temp5=0
                temp2+=' '+temp
            }
            else{
                temp2+=temp
                
            }
        }
    }
    if (temp3>=1){
        txta.value=''
        tem2= new Date
        tem2=tem2.getSeconds()
        txta.value=temp2
        unit2 =calc(temp3)
        perf.innerText='economie de '+ unit2[1]+ ' '+ unit2[0]+' \n taux de compression est '+ Math.round(100-((temp2.length/leng)*100))+'% \n en moin de '+(tem2-tem1)+' secondes'
    }
    temp2=''
    temp3=0
}, 1000);
    
})
ecrase.addEventListener('click',()=>{
    ecrase.style="animation:rota2 1s"
    txta.style="animation: txt 1s"
    setTimeout(() => {
        txta.value=''
        perf.innerText=" zipper pro par Toutpuissantged"
    }, 200);
    setTimeout(() => {
        ecrase.style="animation:none"
        txta.style="animation:none"
    }, 1000);
})