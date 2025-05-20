function Seperator() {
    return (
        <div className="border-t border-gray-300 h-px w-full max-w-[360px] my-4 relative z-30 bg-background">
            <span className="absolute top-[-0.6rem] left-1/2 -translate-x-1/2 bg-background px-2 text-gray-500 text-sm z-30 w-[30px] text-center">
                or
            </span>
        </div>
    )
}

export default Seperator