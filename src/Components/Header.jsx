export default function Header({ brand, navItems, welcomeMsg }) {
  return (
    <header className="site-header">
      <h1>
        {welcomeMsg || (
          <>
            Welcome to the <span className="brand">{brand}</span> Labs Intranet
          </>
        )}
      </h1>
      <nav>
        <ul>
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item.href} onClick={(e) => e.preventDefault()}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
