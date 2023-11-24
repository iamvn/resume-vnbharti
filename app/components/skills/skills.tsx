import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

export default function Skills (props: { data: any; }) {
    const {data} = props;
    const renderSkillCard = (val: any, index: any) => {
        return (<div className="w-auto border px-5 py-1 rounded text-sm border-lime-400" key={index}>{val}</div>)
    }

    return (<div className="flex flex-col p-5 w-25 rounded shadow-lg bg-gray-900">
        <p className="text-xl font-medium text-zinc-200 py-2">{data?.title}</p>
        <div className="flex gap-2 flex-wrap w-40 items-around">
        {
            data && data?.skills.map((val: any, index: any)=>{
                return renderSkillCard(val, index);
            })
        }
        </div>
    </div>)
}