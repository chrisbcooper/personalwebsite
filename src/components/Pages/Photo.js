import React, {useState} from 'react';

function Photo() {

  const [showHeader, setShowHeader] = useState(true);
  const [showParagraph, setShowParagraph] = useState(true);

  const disappearHeader = () => {
    if(window.scrollY + 48 > 130) {
      setShowHeader(false)
    } else {
      setShowHeader(true);
    }
    if(window.scrollY + 10 > 130) {
      setShowParagraph(false)
    } else {
      setShowParagraph(true);
    }
  }

  window.addEventListener('scroll', disappearHeader);


  return (
      <div className='header font' >
        <div className='middle-text'>
        <h1
        className={`${showHeader ? 'display' : 'display-none'}`}
        >Hi! I am Christopher Cooper</h1>
        <p className={`${showHeader ? 'display' : 'display-none'}`}>I am an aspiring Software Developer currently studying at USC</p>
        </div>
      </div>
  );
}

export default Photo;
