const Header = () => {
    const getLength = (x) => {
        const length = x.length
        return length 
    }

    const a="Első project"
    const b=a+"s"
    let c="init"
    if(b.length >= 13) {
         c="kisebb"
    }
    const y = getLength(b);
    return (
        <header>
            <h1>{b+a}</h1>
            <div>
                {y}
            </div>
        </header>
    )
}

export default Header