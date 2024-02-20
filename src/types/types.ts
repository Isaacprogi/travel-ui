import { StaticImageData } from "next/image";

export interface ActiveUser {
    id:string,
    avatar:StaticImageData
  }

 export interface Way {
    id: string;
    name: string
}