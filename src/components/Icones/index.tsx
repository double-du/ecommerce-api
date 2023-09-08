import './assets/css/icone.scss';

export default function Icones (props: {
        tipo: string, 
        classe: string, 
        tamanho: number}) {
    return (<>
        <span 
            className={`icone icone--${props.tipo} ${props.classe}`} 
            style={{width: `${props.tamanho}px`, height: `${props.tamanho}px`}}></span>
    </>);
}