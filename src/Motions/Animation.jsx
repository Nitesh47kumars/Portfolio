export const animation = (direction,delay) => {
    return {
        hidden:{
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            opacity: 0,
            scale: direction === "scale" ? 0.75 : 1,
        },
        show:{
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            transition:{
                duration: 1,
                delay: delay,
                ease: [0.25,0.25,0.25,0.9]
            }
        }
    }
}