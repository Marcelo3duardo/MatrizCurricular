type ButtonProps= {
    text?: string;
}

export function ButtonGeral(props: ButtonProps){
    return(
        <button>
            {props.text}
        </button>
    )
}