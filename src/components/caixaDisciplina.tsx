import { useState } from "react";

type CaixaDaDisciplinaProps = {
    nome?: string;
    numero?: number;
    cargaHoraria?: number;
    preRequisitos?: Array<number>;
}

export function CaixaDaDisciplina(props: CaixaDaDisciplinaProps) {
    const [nColor, setNColor] = useState('cinza');

    function mudarCor() {
        if (nColor == 'cinza'){
            setNColor('amarelo');
        }else if (nColor == 'amarelo'){//pre-requisitos true
            setNColor('verde');
        }else if (nColor == 'verde'){// ele mesmo true
            setNColor('cinza');
        }
    }

    //verde   #82FA80
    //amarelo #FAF178
    //cinza   #B0BEC5

    return (
        <div>
            <p>{props.numero}</p>
            <p>{props.nome}</p>
            <p>{props.cargaHoraria}</p>
            <p>{props.preRequisitos}</p>
        </div>
    )
}