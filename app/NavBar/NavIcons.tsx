const NavIcons = ({ icon, children, text }: any) => (


  <div className="navbar-icon hover-state group">
    {children}
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);


export default NavIcons;
