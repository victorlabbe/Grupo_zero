
tinymce.init({
    selector: '#descripcion-txt',
    height: 300,
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

    
  
  document.querySelector("#contacto-form").addEventListener('submit', (e)=>{
    e.preventDefault(); 
    let correo = document.querySelector("#correo-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    console.log("hola kobe",correo,descripcion);
   
  Swal.fire("Envio exitoso!","Su consulta fue enviada!","success");
    
  });
      
      document.querySelector("#limpiar-btn").addEventListener("click", ()=>{
      document.querySelector("#correo-txt").value = "";
      tinymce.get("descripcion-txt").setContent("");
    });


    const contactoForm = [];
    document.querySelector("#contacto-form").addEventListener('submit', (e) => {
        e.preventDefault();
        let correo = document.querySelector("#correo-txt").value;
        let descripcion = tinymce.get("descripcion-txt").getContent();        
        let siValido = true;
    
        document.querySelector("#correo-txt").classList.remove("is-invalid");
        document.querySelector("descripcion-txt").classList.remove("is-invalid");       
    
        
        if (correo.trim() == "") {
            document.querySelector("#correo-txt").classList.add("is-invalid");
            siValido = false;
        }
        if (descripcion.trim() == "") {
            document.querySelector("descripcion-txt").classList.add("is-invalid");
            siValido = false;
        }
        
        
        if (siValido) {
    
            let contacto = {};
            contacto.correo = correo;
            contacto.descripcion = descripcion;
                
            contactoForm.push(contacto);
    
            Swal.fire("Registro Confirmado", "Usuario Registrado", "info");
    
        }
        document.querySelector("#correo-txt").value = "";
        document.querySelector("descripcion-txt").setContent("") ;        
    
            console.log(contactoForm);
    });