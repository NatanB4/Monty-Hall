import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import styles from '../../../styles/Jogo.module.css'

import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"

import {useRouter} from 'next/router'

export default function Jogo(){
    const router = useRouter()
    
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente

      const qtdePortasValidas = portas >= 3 && portas <= 20
      const temPresenteValido = temPresente >= 1 && temPresente <= portas

      setValido(qtdePortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
      const portas = +router.query.portas
      const presente = +router.query.temPresente

      setPortas(criarPortas(portas,presente))
    }, [router?.query])


    // +router.query.portas
    // +router.query.temPresente

    function renderizarPortas(){
      return portas.map(porta => {
        return  <Porta key={porta.numero} value={porta}
        onChange={novaPorta => {
          setPortas(atualizarPortas(portas, novaPorta))
        }}/>
      })
    }

    return (
        <div id={styles.jogo}>
          <div className={styles.portas}>
            {valido ? renderizarPortas() :
            <h2>Valores inválidos</h2>}
          </div>
          <div className={styles.botoes}>
            <Link href="/" passHref>
                <button>Reiniciar</button>
            </Link>
          </div>
        </div>
      )
}