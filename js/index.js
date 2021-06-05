
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


