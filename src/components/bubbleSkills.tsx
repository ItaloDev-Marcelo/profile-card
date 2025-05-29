

export default function BubbleSkills() {

      const skillList:string[] = ['React', 'Typescript', 'TailwindCss'];

      

      return (
            <ul className="flex flex-row justify-center mt-2.5 ">
                {
                 skillList.map((skill, key) => {
                     return <li className="mx-1 cursor-pointer text-white bg-green-400 hover:bg-green-700 hover:white p-1 px-2 font-medium" key={key}>{skill}</li>
                 }) 
                }
            </ul>
      )
}