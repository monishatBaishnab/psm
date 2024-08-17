const PSMCard = ({
    name,
    designation,
    image,
}: {
    name: string;
    designation: string;
    image: string;
}) => {
    return (
        <div className="w-full h-auto p-5 bg-white shadow rounded">
            <div className="w-full h-[256px] bg-white overflow-hidden">
                <img className="w-full h-full object-contain" src={image} alt={name} />
            </div>
            <div className="text-center mt-3">
                <h3 className="text-psm-primary-500 text-2xl">{name}</h3>
                <h5 className="text-base text-slate-600">{designation}</h5>
                <span></span>
            </div>
        </div>
    );
};

export default PSMCard;
