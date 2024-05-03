import Image from "next/image";
import Link from "next/link";
// import "./gallery.js";

const numbers = Array.from({ length: 30 }, (v, i) => i + 1);
const link = "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/";

export default function Home() {
  return (
    
    <body>
      <header className="header">
        <h1>sample</h1>
      </header>
      <div className="wrapper">
        <h2>複数画像を並列に見せる</h2>
        <ul className="gallery" >
        {
          numbers.map((number) => (
            <li>
              <Link href={link + number + ".jpg"}>
                <Image 
                  src={link + ((number < 10) ? ("0" + number) : number) + ".jpg"}
                  width={1000}
                  height={1000}
                  data-lightbox={((number < 17) ? "gallery1" : (number < 25) ? "gallery2" : "gallery3")}
                  data-title="グループ1キャプション"
                  alt="">
                    
                </Image>
                
              </Link>
            </li>
          ))
        }
        </ul>
      </div>
    </body>
  );
}
