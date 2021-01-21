import './App.css';

function App() {
  return (
      <div className='wrapper'>
          <div className='content'>
              <div className='community'>
                  <h1>Join our community</h1>
                  <h2>30-day, hassle-free money back guarantee</h2>
                  <div>Gain access to our full library of tutorials along with expert code reviews.
                      Perfect for any developers who are serious about honing their skills.</div>
              </div>
              <div className='subscription'>
                  <h2>Monthly Subscription</h2>
                  <div className='priceContainer'>
                      <span className='price'>&#36;29 <sup>per month</sup></span>
                      <div className='priceDescription'>Full access for less than $1 a day</div>
                  </div>
                  <input type='button' value='Sign Up' />
              </div>
              <div className='aboutUs'>
                  <h2>Why Us</h2>
                  <ul>
                      <li>Tutorials by industry experts</li>
                      <li>Peer & expert code review</li>
                      <li>Coding exercises</li>
                      <li>Access to our GitHub repos</li>
                      <li> Community forum</li>
                      <li>Flashcard decks</li>
                      <li>New videos every week</li>
                  </ul>
              </div>
          </div>
      </div>

  );
}

export default App;
