import Spinner from "./icons/Spinner"

const FallbackSuspense = () => {
    return (
        <div className="h-screen z-10 w-full flex justify-center items-center bg-inherit">
            <div className="text-center">
                <Spinner className="animate-spin duration-200" />
                <p>loading...</p>
            </div>
        </div>
    )
}

export default FallbackSuspense