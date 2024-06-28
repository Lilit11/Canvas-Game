export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

export function grn(start,end) {
    return start + Math.floor(Math.random()*(end - start));
} 
