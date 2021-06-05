
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


document.querySelector("#nuevas-form").addEventListener('submit', (e)=>{
    e.preventDefault();
    let archivo = document.querySelector("#formfile").getElement();
    let titulo = document.querySelector("#titulo-txt").value;
    let historia = document.querySelector("#historia-txt").value;
    let descripciones = tinymce.get("descripciones-txt").getContent();
    let tecnica = document.querySelector("#tecnica-txt").value;
    let valor = document.querySelector("#valor-txt").value;
    console.log("nueva imagen",archivo,titulo,historia,descripciones,tecnica,valor)
    });