import React from 'react'


interface LabelProps {
    className?: string;
    title: any;
}

const LabelType = ({ className, title }: LabelProps) => {
  return (
    <div className={`${className} rounded-md p-1 w-20 text-xs text-center`}>
        {title.type.name || title}
    </div>
  )
}

export default LabelType