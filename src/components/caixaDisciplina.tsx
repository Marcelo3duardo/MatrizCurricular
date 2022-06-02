import { useState } from "react";
import React from "react"
import '../styles/caixa.scss'

type CaixaDaDisciplinaProps = {
    nome?: string;
    numero?: number;
    cargaHoraria?: number;
    preRequisitos?: Array<number>;
}

export function CaixaDaDisciplina(props: CaixaDaDisciplinaProps): JSX.Element {
    const { nome, numero, cargaHoraria, preRequisitos } = props;
    const [nColor, setNColor] = useState('cinza');

    function mudarCor() {
        if (nColor == 'cinza') {
            setNColor('amarelo');
        } else if (nColor == 'amarelo') {//pre-requisitos true
            setNColor('verde');
        } else if (nColor == 'verde') {// ele mesmo true
            setNColor('cinza');
        }
    }

    //verde   #82FA80
    //amarelo #FAF178
    //cinza   #B0BEC5

    return (
        <div className="box-disc">
            <p>{numero}</p>

            <h3>{nome}</h3>
            <div>
                <p>{cargaHoraria}</p>
                {preRequisitos?.toString()} 
            </div>
        </div>
    )
}