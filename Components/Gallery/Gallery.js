import React from "react";
import styles from "./Gallery.module.css";
import ModalComp from "./Model/Model";


import GalleryTemplate from "../Template/GalleryTemplate/GalleryTemplate";

const Gallery = () => {
  const images = [];
  //push all images into this array
  for (let i = 1; i < 13; i++) {
    images.push(`img${i}.jpg`);
  }

  return (
    <>
      <h1 className={styles.heading
      }>Our Gallery of 2k22</h1>

      <GalleryTemplate img1={"/img1.jpg"} img2={"/img2.jpg"} img3={"/img3.jpg"} img4={"/img4.jpg"} />
      <GalleryTemplate img1={"/img5.jpg"} img2={"/img6.jpg"} img3={"/img7.jpg"} img4={"/img8.jpg"} />
      <GalleryTemplate img1={"/img9.jpg"} img2={"/img10.jpg"} img3={"/img11.jpg"} img4={"/img12.jpg"} />
      {/* <GalleryTemplate img1={img1} img2={img2} img3={img3} img4={img4} /> */}

    </>
  );
};

export default Gallery;
