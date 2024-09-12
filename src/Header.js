import getLength from "./functions/utils.js"

const Header = () => {
  
    const getAverage = (props) => {
        const avg=props.sum / props.count
        return avg
    }

    const sumArray= (array) =>{
        let sum=0
        for (let i=0; i < array.length; i++) {
            sum= sum + array[i]
        }
        return sum  
    }

    const a='Első project'
    const b=a+"s"
    let c="init"

    if(b.length >= 13) {
         c="kisebb"
    }
    const y = getLength(b);
    const stringArray= ['a', 'b', 'c']
    const numbers= [1, 2, 3, 21, 34, 5, 34.9]
    // const char="{"
    const sum=sumArray(numbers)
    const count=getLength(numbers)
    const dict2={
        sum:sumArray(numbers),
        count:getLength(numbers),
    };
    const getAvg=getAverage(dict2)
    const avg= sum / count
    const string='abavgtra caaa nyuszi'
    const add= stringArray + "d"
    const addString=string + 'd'
    const substring=string.substring(1, 3)
    const replaceAll=string.replaceAll('a', 'x')
    const booleanArray=[true, false, true]
    const x=string.slice(0, 6) + 'b'
    const y2=x.slice(-1)
    const searchTerm='nyuszi'
    const index=string.indexOf(searchTerm)
    const kutya=string.substring(index, index +searchTerm.length)
    const result='kutya'
    const newString=string.replace(searchTerm, result)

    const dict={
        name: 'Balint', 
        age: '100',
        tall: 206,
        ehesVagyok: true,
    }
    const food= dict.ehesVagyok ? 'bigmac' : 'smallmac'

    let food2=''
    if(dict.ehesVagyok) {
        food2='bigmac'
    } else {
        food2='smallmac'
    }
    

    return (
        <header>
            <h1>{b+a}</h1>
            <div>
               {/* {stringArray.length} {stringArray[0]}{stringArray[1]}{stringArray[2]} {char} {'}'} */}
                {avg} {add}
            <div>{dict.name} {food2}</div>
            </div>
        </header>
    )
}

export default Header