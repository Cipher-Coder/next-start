import Header from '../components/Header';

export default function About() {
  return (
    <div className='mainDiv'>
      <Header />
      <h1>This is the about page</h1>
      <style jsx>{`
        h1 {
          font-size: 3em;
        }
        .mainDiv {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
