import Child from './Child'

export default function Parent() {
    function CallBack(childData) {

        return (
            <div>
                <p>This is the parent speaking</p>
                <p> I just heard from my child:</p>
                <p style={{color: "yellow"}}> {childData}</p>
            </div>
        )

    }

    return (
        // <div>
        //     <h1> I am the parent of this Child</h1>
        //     <br />
        //     <Child handleCallback={CallBack} message={'Message from Parent'} />

        // </div>
        // <div>
        //     <h1> Child to Parent</h1>
        //     <br />
        //     <Child handleCallback={CallBack} />

        // </div>
        <div>
            <h1> Parent to Child</h1>
            <br/>
            <Child message={'Message from Parent'} />

        </div>
    )
}