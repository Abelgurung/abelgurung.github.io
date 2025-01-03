function App() {
  return (
    <div className=" gap-4 md:flex md:flex-col grid grid-cols-12 items-center pb-3 ">
      <img
        src="headshot.png"
        className="h-[10rem] md:h-[15rem] col-span-4 brightness-[1.4]"
      />
      <div className="space-y-3 pt-1 col-span-8 secondarytitle">
        <h1>Abel Gurung</h1>
        <a href="https://www.linkedin.com/in/abel-gurung-27a478226/">
          <i class="fab fa-linkedin"></i> Linkedin
        </a>
        <br />
        <a href="https://scholar.google.com/citations?user=56ZyX08AAAAJ&hl=en">
          <i className="fa fa-book"></i> Google Scholar
        </a>
        <br />
        <a href="https://github.com/Abelgurung">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  );
}

export default App;
