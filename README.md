//Crea la Base de datos que se va a utilizar en el sistema
drop database if exists libreria;
create database libreria;
use libreria;


---------- EDITORIALES -------------------
"NombreEditorial": "Bloomsbury",
"Direccion": "123 Main Street, Cityville",
"CUIT": "7676785439"    //CUIT erroneo

"NombreEditorial": "Penguin Random House",
"Direccion": "456 Oak Avenue, Booktown",
"CUIT": "88901273456"

"NombreEditorial": "Secker & Warburg",
"Direccion": "789 Library Lane, Reading City",
"CUIT": "56782348012"

"NombreEditorial": "T. Egerton",
"Direccion": "101 Paper Street, Novelburg",
"CUIT": "1234567890"

"NombreEditorial": "Francisco de Robles",
"Direccion": "321 Story Avenue, Taleville",
"CUIT": "98765453210"


------------ AUTORES -------------------
"DNI": "6734599", //DNI erroneo
"nombreAutor": "Gabriel",
"apellidoAutor": "García Márquez",
"nacionalidad": "Colombiano"

"DNI": "98765432",
"nombreAutor": "George",
"apellidoAutor": "Orwell",
"nacionalidad": "Británico"

"DNI": "4567891",
"nombreAutor": "Miguel",
"apellidoAutor": "De Cervantes",
"nacionalidad": "Español"

"DNI": "78901234",
"nombreAutor": "J.K.",
"apellidoAutor": "Rowling",
"nacionalidad": "Britanica"

"DNI": "23456789",
"nombreAutor": "Jane",
"apellidoAutor": "Austen",
"nacionalidad": "Estadounidense"



------------------ LIBROS -------------------
    "Titulo":"Cien años de soledad",
    "NombreAutor":"Gabriel",
    "ApellidoAutor":"García Márquez",
    "Editorial":"Penguin Random House",
    "CategoriaLiteraria":"Realismo mágico",
    "Precio":"500",
    "FechaLanzamiento":"1967-05-30",
    "Descripcion":"Una obra maestra que narra la historia de la familia Buendía en Macondo."

    "Titulo": "1984",
    "NombreAutor": "George",
    "ApellidoAutor": "Orwell",
    "Editorial": "Secker & Warburg",
    "CategoriaLiteraria": "Distopía",
    "Precio": "450",
    "FechaLanzamiento": "1949-06-08",
    "Descripcion": "Una obra distópica que explora temas de vigilancia y control totalitario."

    "Titulo": "Don Quijote de la Mancha",
    "NombreAutor": "Miguel",
    "ApellidoAutor": "Cervantes",
    "Editorial": "Francisco de Robles",
    "CategoriaLiteraria": "Novela Picaresca",
    "Precio": "550",
    "FechaLanzamiento": "1605-01-16",
    "Descripcion": "Una de las obras más importantes de la literatura española."

    "Titulo": "Harry Potter y la piedra filosofal",
    "NombreAutor": "J.K.",
    "ApellidoAutor": "Rowling",
    "Editorial": "Bloomsbury",
    "CategoriaLiteraria": "Fantasía",
    "Precio": "600",
    "FechaLanzamiento": "1997-06-26",
    "Descripcion": "El inicio de la famosa saga de libros sobre el joven mago Harry Potter."

    "Titulo": "Orgullo y prejuicio",
    "NombreAutor": "Jane",
    "ApellidoAutor": "Austen",
    "Editorial": "T. Egerton",
    "CategoriaLiteraria": "Novela Romántica",
    "Precio": "480",
    "FechaLanzamiento": "18-08-1813",
    "Descripcion": "Una obra clásica que explora las complejidades de las relaciones sociales en la Inglaterra del siglo XIX."





----- LINK DEL LOCALHOST -------
 http://localhost:3000/libreria
