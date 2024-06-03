import React from 'react'

interface ButtonProps {
    className: string;
    title: string;
    onClick?: () => void;
}

const Buttons = ({className, title, onClick}: ButtonProps) => {
  return (
    <button type={"submit"} onClick={onClick} className={`${className} rounded-xl`}>
        {title}
    </button>
  )
}

export default Buttons