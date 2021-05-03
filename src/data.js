import { v4 as uuidv4 } from "uuid";
import saveMe from "./saveMe.mp3";
function chillHop() {
  return [
    {
      name: "Despacito",
      cover: "https://i1.sndcdn.com/artworks-000228539829-7wxbpg-t500x500.jpg",
      artist: "Luis Fonsi, Daddy Yankee, Justin Bieber",
      audio:
        "https://c1-ex-swe.nixcdn.com/Unv_Audio83/DespacitoRemix-LuisFonsiDaddyYankeeJustinBieber-5443166.mp3?st=lrCgcnGOuEJ9adD43JJXtQ&e=1613805210",
      color: ["#9A9A9A", "#242424"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Young And Beautiful",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/770x0/b5016415cb8840189a44eaf0845912f7.jpg",
      artist: "Lana Del Rey",
      audio:
        "https://c1-ex-swe.nixcdn.com/Unv_Audio12/YoungAndBeautiful-LanaDelRey-2508785.mp3?st=Dgj9dF_7k9ehhwyhAyszdw&e=1613805686&t=1613719286283",
      color: ["#9D2C56", "#693E51"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Victory",
      cover: "https://i1.sndcdn.com/artworks-000352681869-jwswel-t500x500.jpg",
      artist: "Two Step From Hell",
      audio:
        "https://c1-ex-swe.nixcdn.com/NhacCuaTui894/Victory-TwoStepsFromHell-3890867.mp3?st=NneSVR5dxnXQMB3qrhI_wQ&e=1613805974&t=1613719574340",
      color: ["#FFE0A3", "#40607F"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
