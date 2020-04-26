var info=[
	{
		com: "git init",
		con: "Crea un repositorio git",
		key: [],
		list: []
	},
	{
		com: "git status",
		con: "Muestra una lista de los archivos que se encuentran en el stage",
		key: ['stage'],
		list: [	
			{
				ti: 'git status -s -b', 
				su: 'muestra una lista de los archivos pero sin comentarios, en una sola linea, y con -b muestra la rama en la que se encuentran'
			}
		]

	},
	{
		com: "git add [arvhivo en especifico]",
		con: "Agrega los archivos al stage",
		key: ['stage'],
		list: [	
			{
				ti: 'git add "*.txt"', 
				su: 'Agrega todos los txt de TODO el proyecto'
			},
			{
				ti: 'git add *.txt"', 
				su: 'Agrega todos los txt en el directorio actual'
			},
			{
				ti: 'git add --all', 
				su: 'Agrega todos los archivos'
			},
			{
				ti: 'git add < lista de archivos >', 
				su: 'Agrega los archivos que listemos'
			},
			{
				ti: 'git add pdfs/.pdf', 
				su: 'Agrega todos los PDFs dentro de la carpeta PDFs'
			},
			{
				ti: 'git add pdfs/', 
				su: 'Agrega todos los archivos dentro de la carpeta PDFs'
			},
		]

	},
	{
		com: "git reset [arvhivo en especifico]",
		con: "Quita los archivos que se encuentren en el stage",
		key: ['stage'],
		list: []
	},
	{
		com: 'git commit -m "[agregamos el mensaje que queremos enviar]“',
		con: "Todo lo que se encuentra en el stage pasa al repositorio",
		key: ['stage'],
		list: []
	},
	{
		com: 'git log',
		con: "Muestra una lista de todos los commits realizados",
		key: ['stage'],
		list: [
			{
				ti: 'git log --oneline --decorate --all --graph', 
				su: 'Se muestra los commits alineados, decorados, todos y de forma grafica'
			}
		]
	},

]


 function regreso(datos){
 	var contenido = '';
 	datos.map((resp)=>{
 		contenido += `<li><h4>${resp.ti}</h4><p>${resp.su}</p></li>`
 	})
 	return contenido;
 }

info.map((datos,index)=>{
	$(".container").append(
		`<h3>${datos.com}</h3>`
	);
	var contenido=datos.con;
	if(datos.key.length > 0){
		datos.key.map((palabra)=>{
			contenido = contenido.replace(palabra, `<strong>${palabra}</strong>`)
		})
	}
	$(".container").append(
		`<p>${contenido}</p>`
	);
	if(datos.list.length > 0){
		$(".container").append(
			`<ul>${regreso(datos.list)}</ul>`
		);
	}


})

