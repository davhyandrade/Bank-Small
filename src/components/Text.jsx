import './css/style.css'

export default (props) => {
    console.log(props.usuario);

    return(
        <>
            <div className="fields">
                <p>Eae {props.usuario}, dboa?</p>
            </div>
        </>
    )
}