import './assets/css/icone.css';

export default function Icones (props: any) {
    return (<>
        <span 
            className={`icone icone--${props.tipo} ${props.classe}`} 
            style={{width: `${props.tamanho}px`, height: `${props.tamanho}px`}}></span>
    </>);
}