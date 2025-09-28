export default function Foot() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {year} CodeCraft Labs. All rights reserved.</p>
    </footer>
  );
}
