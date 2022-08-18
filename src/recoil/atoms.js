
import {atom} from "recoil";

export const openMenu = atom({
    key:"dialog",
    default:false,
});

export const playSlide = atom({
    key:"autoSlide",
    default:true,
});