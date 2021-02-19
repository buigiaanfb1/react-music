import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Faded",
      cover:
        "https://avatar-ex-swe.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_300.jpg",
      artist: "Alan walker",
      audio:
        "https://vnso-zn-23-tf-mp3-320s1-zmp3.zadn.vn/32387a302f77c6299f66/7798287441367881942?authen=exp=1613749216~acl=/32387a302f77c6299f66/*~hmac=843fe5e795c0e49ac50afaa0eca8c5dc&fs=MTYxMzU3NjQxNjmUsIC0MHx3ZWJWNnwxMDAxODI4ODQ5fDE0LjE3OS4yMTEdUngNjE",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Save me",
      cover:
        "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg",
      artist: "DREAMN",
      audio:
        "https://vnso-zn-5-tf-mp3-320s1-zmp3.zadn.vn/87b97661a6254f7b1634/8646980269950432717?authen=exp=1613749205~acl=/87b97661a6254f7b1634/*~hmac=5f9ad60126be7f3669c79bf6d7464250&fs=MTYxMzU3NjQwNTQxNHx3ZWJWNnwxMDM3OTEwNTM3fDE0LjE4Ny4xMjYdUngMTEy",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sing me to sleep",
      cover:
        "https://upload.wikimedia.org/wikipedia/vi/d/d7/Alan_Walker_-_Sing_Me_to_Sleep.png",
      artist: "Alan Walker",
      audio:
        "https://vnso-zn-15-tf-mp3-320s1-zmp3.zadn.vn/569d76aa20edc9b390fc/1724142149151916628?authen=exp=1613809428~acl=/569d76aa20edc9b390fc/*~hmac=2472f7e9f3d26375c22f9e68b0edc1d0&fs=MTYxMzYzNjYyODgwNXx3ZWJWNnwxMDAxODI4ODQ5fDE0LjE3OS4yMTEdUngNjE",
      color: ["#96DDCB", "#45BEC8"],
      id: uuidv4(),
      active: false,
    },
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
    //ADD MORE HERE
  ];
}

export default chillHop;
