## Tipos
Existen Componentes, Hooks y Helpers

### Componente
Extensión JSX para identificarlos

#### Export vs Export default
Export default permite cambiar el nombre al importar y se importa sin llaves

### useState
Existen dos maneras de implementar el setState. 
1. Llamando a la función setState definida y poner el nuevo valor como parámetro.
2. Llamando a la función setState definida y dentro poner una arrow function con un parámetro. Dentro de la arrow function se define el nuevo valor.

### props
Permiten enviar info de un componente a otro. Son argumentos. Su valor nunca cambia.

### css a un componente
Para aplicar css a un componente se crea un archivo .css en la misma carpeta del componente y con el mismo nombre. Luego se importa en el componente.

### React.Fragment
Etiqueta de react que funciona como un div contenedor y cuando se compila no genera div contenedor. La etiqueta tiene dos maneras de implementarse:
1. <React.Fragment> </React.Fragment>
2. <> </>

### PropTypes
Se agregan al componente para asignar un tipo de dato a cada prop. Para evitar errores de tipado de dato.
