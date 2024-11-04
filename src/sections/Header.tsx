export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      <nav className="flex gap-x-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#hero" className="nav-item bg-white text-gray-900 hover:bg-white/75 hover:text-gray-900">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item ">Contact</a>
      </nav>
    </div>
  );
};
