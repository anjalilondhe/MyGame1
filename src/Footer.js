import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterExample() {
  return (
    <div className="text-center bg-dark">
      <Card.Footer className="text-muted">
        <a href='https://www.linkedin.com/in/anjali-londhe-7395b9246/'><i className="fa-brands fa-linkedin-in mx-3 my-4 icon"></i></a>
        <a href='https://github.com/anjalilondhe'><i className="fa-brands fa-github mx-3 icon"></i></a>
        <a><i className="fa-brands fa-facebook mx-3 icon"></i></a>
        <a href='https://twitter.com/londheanjali1'><i className="fa-brands fa-twitter mx-3 icon"></i></a>
        <p style={{ color: 'white', fontSize: 'small' }} classNameName='my-2'>ANJALI LONDHE @2024</p>
      </Card.Footer>
    </div>
  );
}

export default FooterExample;