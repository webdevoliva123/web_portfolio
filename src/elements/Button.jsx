import React from 'react'

const Button = ({
    type = 1,
    label = "Button",
    children,
    stylesheet = "",
    ...props
}) => {
    const buttonTheme = [
        {
            background : "bg-adaptive-extrastrong",
            text : "text-adaptive-strong",
            hover : "hover:bg-adaptive-extrastrong-hover"
        },
        {
            background : "bg-adaptive-strong",
            text : "text-adaptive-weak",
            hover : "hover:bg-adaptive-strong-hover"
        },
        {
            background : "bg-adaptive-weak",
            text : "text-adaptive-strong",
            hover : "hover:bg-adaptive-weak-hover"
        }
    ]
  return (
    <div className={`${buttonTheme[type-1].background} ${buttonTheme[type-1].text} ${buttonTheme[type-1].hover} p-4 h-[40px] rounded-md flex justify-center items-center cursor-pointer transition-all duration-[0.5s] text-sm text-adaptive-strong ${stylesheet}`} {...props}>{children || label}</div>
  )
}

export default Button