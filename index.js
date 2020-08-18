const express = require('express');
const app = express();
const path= require('path')
const ejercicios = require('./ejercicios');


/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index10.html'));
  });
  
  app.get('/suma/', (req, res) => {
  
  
  const result = ejercicios.suma();
    res.send('El resultado es : ' + result);
  })*/



/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index9.html'));
  });
  
  app.get('/pitagorico/', (req, res) => {
  
  
  const result = ejercicios.pitagorico();
    res.send('El resultado es : ' + result);
  })*/


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index8.html'));
  });
  
  app.get('/producto/', (req, res) => {
  
  
  const result = ejercicios.producto();
    res.send('El resultado es : ' + result);
  })



/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index7.html'));
  });
  
  app.get('/primer/', (req, res) => {
  
  
  const result = ejercicios.primer();
    res.send('El resultado es : ' + result);
  })*/



/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index6.html'));
  });
  
  app.get('/diferencia/', (req, res) => {
  
  
  const result = ejercicios.diferencia();
    res.send('El resultado es : ' + result);
  })*/



/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index5.html'));
  });
  
  app.get('/multiplos/', (req, res) => {
  
  
  const result = ejercicios.multiplos();
    res.send('El resultado es : ' + result);
  })*/


/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index4.html'));
  });
  
  app.get('/palindromo/', (req, res) => {
  
  
  const result = ejercicios.palindromo();
    res.send('El resultado es : ' + result);
  })*/




/*app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index3.html'));
    });
    
    app.get('/factor/', (req, res) => {
    
    
    const result = ejercicios.factor();
      res.send('El resultado es : ' + result);
    })*/




/*app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index2.html'));
    });
    
    app.get('/fibonacci/', (req, res) => {
    
    
    const result = ejercicios.fibonacci();
      res.send('El resultado es : ' + result);
    })/*

//define routes here..
//The first parameter is a path of a route which will start after base URL
/*app.get("/", (req, res) => {
res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/multiplo/', (req, res) => {


const result = ejercicios.multiplo();
  res.send('El resultado es : ' + result);
})*/

//creates the Node.js web server at the specified host an port
const server = app.listen(5000, function () {
  console.log('el servidor esta funcionando ....');
})
