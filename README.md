# Challenge NCR

- Creamos el proyecto con 'npm create vite@latest'
- Instalamos dependencias

- Borro el contenido de App.css y App.jsx
- Creamos la carpeta components y adentro creamos los componentes que vaya a utilizar (Header, Home, Results y Footer)

- Creo el componente Header
- Creo el componente Footer
- Instalamos react-router-dom
- Implementamos react-router-dom en App.jsx, en el home y en el resultado de cada cuenta
- Creamos el componente Home
- Creamos el componente Results

- Hacemos el fetch de la API 'https://api.npoint.io/97d89162575a9d816661' en el componente Home, usando UseEffect y useState
- Guardamos los resultados en un estado
- Aplicamos el metodo slice() para obtener los primeros 5 resultados
- Aplicamos una funcion en el boton 'mas opciones' para obtener los siguientes 4 resultados y que aparezca el boton 'menos opciones'
- Aplicamos una funcion en el boton 'menos opciones' para volver a los primeros 5 resultados y que aparezca el boton 'mas opciones'
- Usamos el metodo map() para mostrar los resultados

- Usamos react-router-dom al momento de hacer clicl en una cuenta, se muestren los resultados de dicha cuenta
- Usamos URLSearchParams para obtener el index de dicha cuenta clickeada, y entonces usamos ese index para hacer un llamado a la API y obtener los resultados de dicha cuenta
- Mostramos los resultados de dicha cuenta

- Intalamos vitest, jsdom, @testing-library/jest-dom y @testing-library/react
- Usamos el metodo render() para renderizar el componente Home
- Usamos el metodo screen.getByText() para obtener el texto de un elemento
- Corroboramos que existe ese texto en el componente Home
