interface ITutoriales {
    url: string;
}

export default function Tutoriales(props: ITutoriales) {
    return <h1>{props.url}</h1>;
}
