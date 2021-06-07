
tinymce.init({
    selector: '#descripciones-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });



  const ORegistro = [];

  document.querySelector("#nuevas-form").addEventListener('submit', (e) => {
      e.preventDefault();
      let imagen = document.querySelector("#imagen-txt").value;
      let titulo = document.querySelector("#titulo-txt").value;
      let historia = document.querySelector("#historia-txt").value;
      let descripciones = tinymce.get("descripciones-txt").getContent();
      let tecnica = document.querySelector("#tecnica-txt").value;
      let valor = document.querySelector("#valor-txt").value;
      let siValido = true;
  
      document.querySelector("#imagen-txt").classList.remove("is-invalid");
      document.querySelector("#titulo-txt").classList.remove("is-invalid");
      document.querySelector("#historia-txt").classList.remove("is-invalid");
      //document.querySelector("descripciones-txt").classList.remove("is-invalid");
      document.querySelector("#tecnica-txt").classList.remove("is-invalid");
      document.querySelector("#valor-txt").classList.remove("is-invalid");
     
  
      
      if (imagen.trim() == "") {
          document.querySelector("#imagen-txt").classList.add("is-invalid");
          siValido = false;
      }
      if (titulo.trim() == "") {
          document.querySelector("#titulo-txt").classList.add("is-invalid");
          siValido = false;
      }
      if (historia.trim() == "") {
          document.querySelector("#historia-txt").classList.add("is-invalid");
          siValido = false;
     // }
      //if (descripciones.trim() == "") {
        //  document.querySelector("descripcion-txt")q.classList.add("is-invalid");
          //siValido = false;
      }
      if (tecnica.trim() == "") {
          document.querySelector("#tecnica-txt").classList.add("is-invalid");
          siValido = false;
      }
      if (valor.trim() == "") {
          document.querySelector("#valor-txt").classList.add("is-invalid");
          siValido = false;
      }
            
      if (siValido) {
  
          
  
          Swal.fire("Registro Confirmado", "Usuario Registrado", "success");
  
      }
      document.querySelector("#imagen-txt").value = "";
      document.querySelector("#titulo-txt").value = "";
      document.querySelector("#historia-txt").value = "";
      tinymce.get("descripcion-txt").setContent("");
      document.querySelector("#tecnica-txt").value = "";
      document.querySelector("#valor-txt").value = "";
      
  
      console.log(ORegistro);
  });