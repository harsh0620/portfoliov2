import { getSectionData } from "@/app/lib/data";
import SheetComponent from "./SheetComponent";
export default async function SheetSlider() {
const sectionData=await getSectionData();
  return (
   <SheetComponent sectionData={sectionData} />
  );
}
