import BubbleSkills from "../components/bubbleSkills";
import HeaderInformation from "../components/headerInformation";
import ProfilePhoto from '../assets/profilePhoto.jpg';
import 'animate.css';

export default function ProfileCardLayout() {
      return (
         <section className="bg-gradient-to-r from-indigo-500 from-0% to-emerald-500 
         to-170% p-5 w-[325px] relative left-[-1em] h-100 rounded-[16px]   border lg:w-90 
          hover:scale-105  cursor-pointer animate__animated animate__flipInY z-100 margin-fix" >
             <div className="box rounded-t-[16px] ">
                </div>
              <div className="flex flex-col justify-center relative text-center items-center top-20 " >
                 <figure className="z-40 border-4 border-indigo-500  rounded-full overflow-hidden">
                    <img src={ProfilePhoto} alt="Italo Marcelo"  />
                 </figure>
                 <section className="z-40">
                   <HeaderInformation name='Italo Marcelo' cargo='Desenvolvedor Frontend' introduction='Cria interfaces bonitas, rápidas e intuitivas.' />
                </section>
                <BubbleSkills/>
              </div>
         </section>
      )
}