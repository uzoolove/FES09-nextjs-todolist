async function About(){
  await new Promise(resolve => setTimeout(resolve, 10000));
  return (
    <div id="main">
      <h2>About</h2>
      <div className="todo">
        <p>Front End School 9기 Todo List 라우팅 적용 실습</p>
      </div>
    </div>
  );
}

export default About;