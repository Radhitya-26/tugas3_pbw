const rata = (...index) =>{
    let sum = index.length
    let result = 0
    for(const i of index){
        result +=i
    }
    return result/sum
}
let x = rata (1,2,3,4,5,6,7,8,9,10)
console.log(x)

const Iyah = () =>{
    return 'iya dong'
}

let makanya = Iyah ()
console.log (makanya)

const penambahan = (y,x) => y+x

const pengurangan = (y,x) => y-x

let hasil = penambahan (20,10)
let hasil2 = pengurangan (20,10)
console.log(hasil)
console.log(hasil2)
