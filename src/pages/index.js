import BestChoice from "@/components/HomePage/BestChoice";
import Landing from "@/components/HomePage/Landing";
import MyBlogs from "@/components/HomePage/MyBlogs";
import OnlinePrecence from "@/components/HomePage/OnlinePrecence";
import Testimonial from "@/components/HomePage/Testimonial";
import WhaICanDo from "@/components/HomePage/WhaICanDo";
import NeedHelp from "@/components/global/NeedHelp";

export default function Home() {
  return (
    <>
      <Landing />
      <OnlinePrecence />
      <WhaICanDo />
      <BestChoice />
      <Testimonial />
      <MyBlogs />
      <NeedHelp />
    </>
  );
}
