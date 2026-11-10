function App() {
  const studentName = "Maya";
  const lessonNumber = 3;

  return (
    <>
      <h1 className="lesson-title">Hello, {studentName}</h1>
      <h3>Today is lesson {lessonNumber}</h3>
      <h4>Two plus two is {2 + 2}.</h4>
    </>
  );
}

export default App;
