import React, { FC } from "react";

export interface Segment{ label: string; value: string | number;};
interface SegmentedControlProps{
    segments: Segment[];
    selected: string | number;
    onChange: (value: any) => void;
    disabled?: boolean;
}

const SegmentedControl: FC<SegmentedControlProps> = (props) => {
    const width = 100/props.segments.length;
    return (
        <div className="d-flex justify-content-around rounded-3 p-1" style={{opacity: props.disabled? 0.8: 1, backgroundColor: '#ced4da'}}>
            {
                props.segments.map((segment, index) => (
                    <div key={`segment-${index}`} className={`${props.disabled? '':'cursor-pointer'} f-80 p-1 text-center ${props.selected === segment.value? 'bg-white': 'text-muted'} rounded-2`}
                        style={{width: `${width}%`}}
                        onClick={()=>{if (!props.disabled) props.onChange(segment.value)}}
                    >
                        {segment.label}
                    </div>
                ))
            }
        </div>
    )
}

export default SegmentedControl;