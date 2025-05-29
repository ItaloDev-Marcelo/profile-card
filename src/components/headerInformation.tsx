
type Props = {
    name: string,
    cargo: string,
    introduction: string
}

export default function HeaderInformation({name, cargo, introduction} : Props) {
      return (
         <section className="p-2 w-75">
            <div>
                <h1 className="text-lg font-black mb-1 text-white">{name}</h1>
                 <p className="text-lg font-bold my-1 text-white ">{cargo}</p>
            </div>
            <p className=" text-white"  >{introduction}</p>
         </section>
      )
}