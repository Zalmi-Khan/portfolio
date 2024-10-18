import { CalendarDays, ArrowUpRight } from "lucide-react";
import { Heading } from "../../common";
import { Blog1,Blog2,Blog3,Blog4 } from "../../../assets/images";

const blogdata = [
  {
    img:Blog1,
    title:"A Beginner's Guide to Running Adventures",
  },
  {
    img:Blog2,
    title:"Mastering the Art of Sustainable Living",
  },
  {
    img:Blog3,
    title:"Embracing Minimalism:A Lifestyle Revolution",
  },
  {
    img:Blog4,
    title:"Savoring the Art of Homemade Sushi...",
  },
]

export const BlogSection = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container">
        <Heading
          subTitle="News & Blogs"
          title="Latest News &"
          colorTitle="Blogs"
          textAlign="center"
        />
        <div className="grid grid-cols-2 gap-6 mt-10">
          {blogdata && blogdata.map((item, index)=>(
          <div key={index} className="p-4 flex items-center gap-6 border border-text/50 bg-light rounded-xl group hover:border-primary duration-300 transition-all">
            <div className="min-w-[200px] h-[180px] rounded-lg overflow-hidden">
              <img src={item.img} className="object-cover size-full group-hover:translate-" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-text flex items-center uppercase gap-2 text-sm font-medium"><CalendarDays size="16" /> November 13, 2024</span>
              <h4 className="text-2xl text-white font-semibold hover:text-primary cursor-pointer">{item.title}</h4>
              <button className="text-primary font-semibold flex items-center gap-2">Read More <ArrowUpRight size="20" /> </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}