
export class Grammar
{
    

    constructor(reg : string)
    {
        let allRegs = new Set();
        let splitted = reg.split("\n");
        let nameReg = new RegExp( "([A-Z_]+) -> ", "g" ); 
        var n = 0
        while (n < splitted.length-1)
        {
            let splitMore = splitted[n].split(" ");
            if(allRegs.has(splitMore[0]))
            {
                throw new Error("Two or more of the same Regex"+splitMore[2])
            }
                
            if (splitMore[1] == '->')
            {
                try
                {
                    let testReg = new RegExp(splitMore[2])
                }
                catch
                {
                    throw new Error("Invalid Regex"+splitMore[2])
                }
                allRegs.add(splitMore[0])
            }
            else
            {
                throw new Error("Invalid Regex"+splitMore[2])
            }
            n += 1
        }

    }

} 

