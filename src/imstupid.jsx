export default function Stupid() {
    let stupid = {id: "24", name: "7mar"};
    stupid = { ...stupid, name: "king"};
    let supidv2 = [{id: 1, name: "hamza"}, {id: 2, name: "hiro"}];
    supidv2 = supidv2.map((e) => e.id === 1 ? { ...e, name: "7mar"} : e );
    console.log(supidv2)
    return(
        <div>
           hhhhhhhhhhhhhhhhhhhhhhhhh
        </div>
    )
}