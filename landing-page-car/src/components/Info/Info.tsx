import React from "react";
import styles from './styles.module.scss'

const Info: React.FC = () => {
    return (
        <>
            <div className={`row ${styles.carousel}`}>
                <ul>
                    <li>🚗 Monza GL 1994 1.8 EFI – Vermelho Goya 🚗</li>
                    <li>📍 Localização: Arujá - SP</li>
                    <li>💰 Valor: R$ 15.900,00</li>
                    <li>📞 Contato: Cleberson Gomes – (11) 93323-9410</li>
                    <li>Descrição:</li>
                    <li>Vendo Monza GL 1994 com motor 1.8 EFI Fase 2 injetado, recém revisado. Estou com o carro há aproximadamente 3 anos e, nesse período, ele passou por uma reforma completa, garantindo excelente aparência e funcionamento.</li>
                    <li>✅ Detalhes do veículo:</li>
                    <li>
                        <ul>
                            <li>Pintura geral refeita na clássica cor Vermelho Goya, original de fábrica em algumas versões do Monza.</li>

                            <li>Internamente bem preservado, com higienização completa. Forros de porta não são originais, mas receberam tratamento para manter ótima aparência, visto a escassez de peças de qualidade no mercado.</li>

                            <li>Som completo: Bluetooth, subwoofer e módulo.</li>

                            <li>Faróis originais, com excelente estado de conservação.</li>

                            <li>Pintura tratada com polimento e vitrificação para maior proteção e brilho.</li>

                            <li>Suspensão com molas esportivas para melhor dirigibilidade.</li>

                            <li>Rodas aro 17 com pneus 195/40 (2 pneus novos, 2 meia vida).</li>

                            <li>Escapamento novo, seguindo o padrão original.</li>

                            <li>Painel digital no estilo original usado nos Monza Classic e Kadett GSI.</li>

                            <li>Parachoques, retrovisores e saídas de ar pintados na cor do veículo, como nas versões GLS.</li>

                            <li>Adicionado sistema de direção hidráulica, tornando a direção mais confortável.</li>
                        </ul>
                    </li>
                    <li>O carro conta com diversas modificações de bom gosto, mantendo o equilíbrio entre originalidade e personalização.</li>
                    <li>Importante:</li>
                    <li>
                        <ul>
                            <li>Não aceito trocas, mas estou aberto a propostas.</li>
                            <li>O veículo está disponível para visitação em Arujá - SP, mediante agendamento. Não levo o carro até o interessado – quem quiser conhecer, basta entrar em contato e agendar a visita.</li>
                        </ul>
                    </li>
                    <li>👉 Valor pedido: R$ 15.900,00 (aceito oferta).</li>
                    <li>📞 Cleberson Gomes – (11) 93323-9410</li>
                </ul>
            </div>
        </>
    )
}

export default Info;