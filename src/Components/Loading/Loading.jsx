import { RiseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-10/12 mx-auto h-[80vh] flex justify-center mt-[15%]">
            <RiseLoader
                color={"#D4AF37"}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    );
};

export default Loading;