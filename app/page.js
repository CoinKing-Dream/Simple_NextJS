'use client';

import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import { useEffect, useState } from "react";
import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.css';

const numbers = Array.from({length:30}, (v, i) => i + 1);
const link = "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/";

export default function Home() {

  useEffect(() => {
    if (typeof window!== 'undefined') {
      lightbox.init();
    }
    
    const fadeAnime = () => {
      $('.gallery li').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass('flipLeft');
        } else {
          $(this).removeClass('flipLeft');
        }
      });
    };

    // Call the animation function when the component mounts
    fadeAnime();

    // Call the animation function when the window scrolls
    $(window).scroll(fadeAnime);

    // Cleanup function to remove event listeners
    return () => {
      $(window).off('scroll', fadeAnime);
    };
  }, []);

  return (
    <div>
      <lightboxStyles />
      <header className="header">
        <h1>sample</h1>
      </header>
      <div className="wrapper">
        <h2>複数画像を並列に見せる</h2>
        <ul className="gallery" >
        {
          numbers.map((number) => {
            return (
              <li>
                <a href={link + ((number < 10) ? ("0" + number) : number) + ".jpg"}
                  data-lightbox={((number < 17) ? "gallery1" : (number < 25) ? "gallery2" : "gallery3")}
                  data-title="グループ1キャプション">
                  <Image 
                    src={link + ((number < 10) ? ("0" + number) : number) + ".jpg"}
                    width={1000}
                    height={1000}
                    alt="" />                    
                </a>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}
