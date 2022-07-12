import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoImg} alt="Logo DSMeta" />
      <h1 className="header__app-name">DSMeta</h1>
      <p className="header__dev-name">Desenvolvido por @carlosalferes</p>
    </header>
  );
}

export default Header;
