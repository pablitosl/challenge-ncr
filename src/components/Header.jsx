import logoNcr from '/src/assets/ncr-logo.png'

//Importamos el logo y lo ponemos en el componente Header

const Header = () => {
    return (
        <header>
            <img src={logoNcr} alt="Logo" />
        </header>
    )
}

export default Header