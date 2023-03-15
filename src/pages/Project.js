const Project = ({name, title}) => {
    return (
      <div>
        <section className="front">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGHwmhCFbrbiSUkl-tz4SeNDIjSYU-Bp0Aw&usqp=CAU"/>
        </section>
        <h1>Hi name is Sucaad {name}</h1>
        <h4> Title: {title}</h4>
        <p> You can find my projects by <a href="https://github.com/Sucaad-kulane">  clicking me</a>.</p>
      </div>
    );
  };
  
  export default Project;
  