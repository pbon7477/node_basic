

let nombre = "Reanira Deyanira Targaryen";


let navBar = `
    <ul>       
        <li><a href="/" >Inicio</a></li>
        <li><a href="/sistemas" >Sistemas</a></li>
        <li><a href="/nosotros" >Nosotros</a></li>
        <li><a href="/contacto" >Contacto</a></li>
    </ul>
`;



const caja_01 = `
<header>
    <h1>Bienvenido al inicio del sistema.</h1>
    <h2>Secciones</h2>
    ${navBar}

    <div>
    <p>Soy la vista importada</p>
 
    </div>

</header>
<script>
    console.log("Estas en el incio");
</script>

`;


const caja_02 = `
<header>
    <h1>Sistemas</h1>
    <h2>Información de sistemas desarrollados</h2>
    ${navBar}
    <ol>
    <li>Nombre: "SIS001 - Sistema de ventas(PHP)".</li>
    <li>Nombre: "SIS002 - Sistema de arriendos(PHP)".</li>
    <li>Nombre: "SIS003 - Sistema de ventas(LARAVEL)".</li>
    <li>Nombre: "SIS004 - Sistema de base -Registro de usuarios(PHP)".</li>
    <li>Nombre: "SIS005 - Sistema de Finanzas personales.(LARAVEL - FILAMENT)".</li>
    <li>Nombre: "SIS006 - Sistema de ventas/Ecommerce(PHP)".</li>

    </ol>

</header>
`;

const caja_03 = `
<header>
    <h1>Nosotros</h1>
    <h2>Información de miembros</h2>
    ${navBar}
    <div>
   <p>${nombre}</p>
   <p>nada aun!</p>

  

 
    </div>

</header>
<script>
//console.log('Estas en la página Nosotros.');

console.log("Nombre","${ nombre }");




</script>
`;


const caja_04 = `
<header>
    <h1>Contacto</h1>
    <h2>Información de contacto</h2>
    ${navBar}
    <div>
    <p>Nombre: "Joffrey"</p>
    <p>Nombre: "Joffrey"</p>
    <p>Apellido: "Baratheon"</p>
    <p>Rut: 46.766.747-5</p>
    <p>Teléfono: 065-457 89 563</p>
    <p>Email: El joffry@sis.com</p>

    
    </div>
    
    </header>
    <script>
    console.log('Estas en la página Contacto'); 

    </script>
`;

const caja_05 = `
<header>
    <h1>Otro Contacto</h1>
    <h2>Información de contacto</h2>
    ${navBar}
    <div>
    <p>Nombre: "Benjamin"</p>    
    <p>Apellido: "Alfaro"</p>
    <p>Rut: 44.525.444-5</p>
    <p>Teléfono: 065-44 44 44 44</p>
    <p>Email: el_benjamin@sis.com</p>

    
    </div>
    
    </header>
    <script>
    console.log('Estas en la página de otro contacto Contacto'); 
 
    </script>
`;

export default  { caja_01, caja_02, caja_03, caja_04};