import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Present from './Presente'

interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecioanada = porta.selecioanada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternativaSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}
                ></div>
            </div>
        )
    }
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.frame} ${selecioanada}`}>
                {porta.fechada ? renderizarPorta() : 
                porta.temPresente ? <Present/> : false
                }
            </div>

            <div className={styles.chao}></div>
        </div>
    )
}