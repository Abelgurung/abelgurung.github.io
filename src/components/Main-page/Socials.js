function App() {
  return (
    <div className=" gap-4 md:flex md:flex-col grid grid-cols-12 items-center py-4 md:p-1 ">
      <img src="headshot.png" className="h-full md:h-[15rem] col-span-4 " />
      <div className="space-y-3 pt-1 col-span-8">
        <h1 className="font-bold ">Abel Gurung</h1>
        <a href="https://www.linkedin.com/in/abel-gurung-27a478226/">
          <i class="fab fa-linkedin"></i> Linkedin
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
