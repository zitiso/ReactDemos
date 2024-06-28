export default function Child(props) {

    var message = "I love you! (from your child)"

    return (
       // <div>

            <div>
                <p>This is the message passed to me, the child, from my parent:</p>

                <p style={{ color: "green" }}> {props.message}</p>
            </div>
            // <div>

            //     {props.handleCallback(message)}
            // </div>
       // </div >
    )
}