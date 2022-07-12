import Counter from '../components/Counter';

function Home() {
  const counters = [
    { title: 'Counter 1' },
    { title: 'Counter 2' },
    { title: 'Counter 3' },
    { title: 'Counter 4' },
    { title: 'Counter 5' },
  ];

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margib: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      {counters.map((c) => <Counter title={c.title} />)}
    </div>
  );
}
export default Home;
