
type Props = {
    name: string,
    position: string,
    introduction: string
}

export default function HeaderInformation({name, position, introduction} : Props) {
      return (
         <header className="p-2 w-75">
            <div>
                <h1 className="text-lg font-black mb-1 text-white">{name}</h1>
                 <p className="text-lg font-bold my-1 text-white ">{position}</p>
            </div>
            <p className=" text-white"  >{introduction}</p>
         </header>
      )
}