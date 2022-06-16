
let productos = [
     { id: '1' ,categoria: 'Juegos', name: "Uncharted 4", price: 2500, foto:'https://as01.epimg.net/meristation/imagenes/2015/06/03/noticia/1433346420_798969_1532451998_portada_normal.jpg'},
    { id: '2' ,categoria: 'Juegos', name: "Darksiders 2", price: 27, foto:'https://sm.ign.com/ign_es/screenshot/default/darksidersnoti_ds9s.jpg' },
    { id: '3' ,categoria: 'Juegos', name: "Resident Evil 3", price: 40, foto:'https://cybergamesemanuel.com/wp-content/uploads/2020/04/Resident-evil-3-1.jpg' },
    { id: '4' ,categoria: 'Juegos', name: "Days Gone", price: 55, foto:'https://as01.epimg.net/meristation/imagenes/2018/11/15/noticias/1542271076_761932_1542271193_sumario_normal.jpg' },
    { id: '5' ,categoria: 'Juegos', name: "Ghost", price: 11, foto:'https://as01.epimg.net/meristation/imagenes/2021/06/23/noticias/1624436409_008445_1624436607_sumario_normal.jpg' },
    { id: '6' ,categoria: 'Juegos', name: "Watch Dogs", price: 19, foto:'https://pbs.twimg.com/media/BMdrBF4CIAAdehI.png' },
    { id: '7' ,categoria: 'Juegos', name: "Uncharted 2", price: 2, foto:'https://i.blogs.es/acd8d1/unnamed-4-/450_1000.jpeg' }  

  ];

export const getFetch = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)    
        // reject('no qtengo nada para')    
    })
}  


// consulta detalla de un producto
let producto ={id: '1' ,categoria: 'Juegos', name: "Uncharted 4", price: 2500, foto:'https://as01.epimg.net/meristation/imagenes/2015/06/03/noticia/1433346420_798969_1532451998_portada_normal.jpg' }
  

export const getFetchOne = () =>{    
   
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(producto)   
        },2000)    
        // reject('no qtengo nada para')    
    })
}  
