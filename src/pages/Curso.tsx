import React from "react";
import { CaixaDaDisciplina } from "../components/caixaDisciplina"
import '../styles/global.scss';
import '../styles/buttons.scss';


export function Curso() {
    return (
        <div>
            <div className="topo">
                <div>Ciências da Computação</div>
                <div className="buttonsLogin">
                    <button>
                        Save
                    </button>
                    <button>
                        Login
                    </button>

                </div>
            </div>
            <div className="body">
                <div className="center">
                    <div className="numberLine">linhas</div>
                    <div className="disciplinas">
                        <CaixaDaDisciplina nome="Arquitetura" numero={7} cargaHoraria={30} preRequisitos={[6,4]} />
                    </div>
                    <div className="numberColumns">add colunas</div>
                </div>

            </div>
        </div>
    )
}