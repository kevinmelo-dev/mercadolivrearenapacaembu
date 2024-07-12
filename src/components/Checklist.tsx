import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { Area } from '@/utils/types';

interface Props {
    area: Area;
}

const Checklist: React.FC<Props> = ({ area }) => {

    const iconStyle = {
        color: '#f9e74e',
        marginRight: '3px' ,
    }

    const itemStyle = {
        fontSize: 'clamp(11px, 0.75vw + 0.75rem, 11px)'
    }

    return (
        <div className="mt-3 w-100 border-2 rounded-2xl border-secondaryYellow p-3">
            <div className="grid grid-cols-2 gap-1">
                {area.checklist && area.checklist.map((item, index) => (
                <div key={index} className="flex">
                    <IoMdCheckmarkCircleOutline style={iconStyle} className={`${!item.completed && 'opacity-0'}`} />
                    <p className="text-secondaryYellow font-pacaembuThin" style={itemStyle}>{item.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Checklist;