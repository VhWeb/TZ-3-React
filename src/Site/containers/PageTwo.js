import {useState} from 'react';
import Header from "../components/Header/Header";
import {Animator, batch, Fade, MoveIn} from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';
import image from "../assets/img/Rectangle.png";
import BlockContent from "../components/BlockContent/BlockContent"

function PageTwo() {
  const [title, setTitle] = useState(<h2>About us</h2>);
  const [text, setText] = useState(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ut urna, semper tristique elementum scelerisque nullam. Augue ultrices ultrices mattis leo et urna tincidunt.</p>);
  const [img, setImg] = useState(<div className="image"><img src={image} alt="image"></img></div>);
  const isLaptop = useMediaQuery({ query: '(max-width: 720px)' })
  return (
    <>
      <Header />
      <div className="contents">
        <div className="container">
          <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
            <BlockContent cssClass="row" colOne={title} colTwo={text} />
          </Animator>
          <Animator animation={batch(Fade(),  MoveIn(-1000, 0))}>
            <BlockContent cssClass={isLaptop ? "row reverse" : "row"} colOne={text} colTwo={img} />
          </Animator>
        </div>
      </div>
    </>
  );
}

export default PageTwo;