import Image from "next/image";

type Items = {
  img: string,
  title: string,
}

function MediumCard(props: Items) {
  return(
    <div className="cursor-pointer hover:scale-105 transformt
    transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={props.img} alt="" fill className="rounded-xl"/>
      </div>
      <h3 className="text-2xl mt-3">{props.title}</h3>
    </div>
  )
}

export default MediumCard;