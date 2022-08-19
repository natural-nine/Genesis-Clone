
import {atom} from "recoil";

export const openModelMenu = atom({
    key:"model",
    default:false,
});

export const openBrandMenu = atom({
    key:"brand",
    default:false,
});

export const playSlide = atom({
    key:"autoSlide",
    default:true,
});