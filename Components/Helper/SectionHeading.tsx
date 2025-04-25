import React from 'react'

type Props ={
  title: string;
  subTitle:string;
  text: string;
  textColor:string
}


const SectionHeading = ({title, subTitle, text,textColor}: Props) => {
  return (
    <div>
         <div className="text-center">
        <span className="text-sm text-blue-500">{subTitle}</span>
        <h1 className="font-bold text-[32px] md:text-[42px] mt-2">{title}</h1>
        <p className={` ${textColor} text-center text-sm md:text-base mt-4`}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading