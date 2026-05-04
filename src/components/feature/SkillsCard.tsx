import ScrollableCardStack from "../ui/scrollableCard/Scrollable-Card";
import { skillitems } from "../../data/SkillItems";



export const SkillsCard = () => {
    return (
        <ScrollableCardStack
            cardHeight={260}
            perspective={1200}
            transitionDuration={200}
            items={skillitems}
            renderItem={(item) => (
                <>
                <div className="rounded-4xl border-2 border-white/20 bg-zinc-950 shadow-lg p-6 w-full  h-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-md font-semibold tracking-tight text-purple-600 leading-none">
                                {item.name_company}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {item.role}
                            </p>
                        </div>
                        <div className="self-start md:self-center">
                            <span className="text-xs text-zinc-400 md:bg-zinc-900  border border-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                                {item.date}
                            </span>
                        </div>

                    </div>
                    <div className=" border w-full border-gray-50/20 my-4"></div>
                    <p className="text-sm max-w-md text-zinc-300 leading-relaxed">
                        {item.description}
                    </p>
                
                </div>
                </>
            )}
        >

        </ScrollableCardStack>
    )
}